import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from 'generative-ai'
import * as fs from 'fs'
import * as path from 'path'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface KnowledgeChunk {
  id: string
  url: string
  title: string
  content: string
  tokens: number
  embedding?: number[]
}

interface VercebotRequest {
  messages: Message[]
  topK?: number
  useEmbeddings?: boolean
}

interface VercebotResponse {
  choices: Array<{
    message: {
      role: 'assistant'
      content: string
    }
    sources?: KnowledgeChunk[]
  }>
}

// Load knowledge base
let knowledgeBase: KnowledgeChunk[] = []
let knowledgeBaseLoaded = false

function loadKnowledgeBase(): void {
  if (knowledgeBaseLoaded) return
  
  try {
    const knowledgePath = path.join(process.cwd(), 'data', 'knowledge.json')
    if (fs.existsSync(knowledgePath)) {
      const knowledgeData = fs.readFileSync(knowledgePath, 'utf-8')
      knowledgeBase = JSON.parse(knowledgeData)
      knowledgeBaseLoaded = true
      console.log(`✅ Loaded ${knowledgeBase.length} knowledge chunks`)
    } else {
      console.warn('⚠️  Knowledge base not found. Run "npm run build:knowledge" first.')
    }
  } catch (error) {
    console.error('❌ Error loading knowledge base:', error)
  }
}

function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0
  
  let dotProduct = 0
  let normA = 0
  let normB = 0
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }
  
  normA = Math.sqrt(normA)
  normB = Math.sqrt(normB)
  
  if (normA === 0 || normB === 0) return 0
  
  return dotProduct / (normA * normB)
}

function tfidfSearch(query: string, topK: number = 6): KnowledgeChunk[] {
  const queryTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 2)
  
  const scoredChunks = knowledgeBase.map(chunk => {
    const content = chunk.content.toLowerCase()
    const title = chunk.title.toLowerCase()
    const combined = `${title} ${content}`
    
    let score = 0
    queryTerms.forEach(term => {
      const termFrequency = (combined.match(new RegExp(term, 'g')) || []).length
      score += termFrequency * (term.length > 4 ? 1.5 : 1) // Boost longer terms
    })
    
    return { chunk, score }
  })
  
  return scoredChunks
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(item => item.chunk)
}

async function embeddingSearch(query: string, topK: number = 6): Promise<KnowledgeChunk[]> {
  if (!process.env.GEMINI_API_KEY) {
    console.warn('⚠️  GEMINI_API_KEY not found, falling back to TF-IDF')
    return tfidfSearch(query, topK)
  }
  
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: 'text-embedding-004' })
    
    const result = await model.embedContent(query)
    const queryEmbedding = result.embedding.values
    
    const chunksWithEmbeddings = knowledgeBase.filter(chunk => chunk.embedding)
    
    const scoredChunks = chunksWithEmbeddings.map(chunk => {
      const similarity = cosineSimilarity(queryEmbedding, chunk.embedding!)
      return { chunk, score: similarity }
    })
    
    return scoredChunks
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map(item => item.chunk)
      
  } catch (error) {
    console.warn('⚠️  Embedding search failed, falling back to TF-IDF:', error)
    return tfidfSearch(query, topK)
  }
}

function buildSystemPrompt(contextChunks: KnowledgeChunk[]): string {
  const context = contextChunks
    .map(chunk => `Source: ${chunk.url}\nTitle: ${chunk.title}\nContent: ${chunk.content}`)
    .join('\n\n---\n\n')
  
  return `You are VerceBot, a helpful AI assistant for Vercedo AI. You provide accurate, concise answers about Vercedo's AI receptionist services based on the provided context.

Guidelines:
- Answer questions using only the provided context
- Be helpful, professional, and concise
- Cite sources using [Source X] notation where X is the source number
- If the context doesn't contain relevant information, say so politely
- For pricing or demo requests, mention users can book a demo through the website
- Keep responses under 200 words when possible

Context:
${context}

Please respond to the user's query based on this context.`
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Load knowledge base if not already loaded
    loadKnowledgeBase()
    
    if (knowledgeBase.length === 0) {
      return NextResponse.json(
        { error: 'Knowledge base not available. Please run "npm run build:knowledge" first.' },
        { status: 503 }
      )
    }
    
    const body: VercebotRequest = await request.json()
    const { messages, topK = 6, useEmbeddings = true } = body
    
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      )
    }
    
    // Get the latest user message
    const userMessage = messages.filter(m => m.role === 'user').pop()
    if (!userMessage) {
      return NextResponse.json(
        { error: 'No user message found' },
        { status: 400 }
      )
    }
    
    // Search for relevant context
    let contextChunks: KnowledgeChunk[]
    if (useEmbeddings) {
      contextChunks = await embeddingSearch(userMessage.content, topK)
    } else {
      contextChunks = tfidfSearch(userMessage.content, topK)
    }
    
    // Build system prompt with context
    const systemPrompt = buildSystemPrompt(contextChunks)
    
    // Initialize Gemini
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY not configured' },
        { status: 500 }
      )
    }
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash', // Use flash for faster responses
      systemInstruction: systemPrompt
    })
    
    // Build conversation history
    const conversation = messages
      .slice(-10) // Keep last 10 messages to manage context length
      .map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }))
    
    // Generate response with streaming
    const result = await model.generateContentStream(conversation)
    
    // Create a readable stream for the response
    const encoder = new TextEncoder()
    
    const stream = new ReadableStream({
      async start(controller) {
        try {
          let fullResponse = ''
          
          for await (const chunk of result.stream) {
            const text = chunk.text()
            fullResponse += text
            
            // Send chunk to client
            const data = JSON.stringify({
              choices: [{
                message: {
                  role: 'assistant' as const,
                  content: fullResponse
                }
              }]
            })
            
            controller.enqueue(encoder.encode(`data: ${data}\n\n`))
          }
          
          // Send final chunk with sources
          const finalData = JSON.stringify({
            choices: [{
              message: {
                role: 'assistant' as const,
                content: fullResponse
              }
            }],
            sources: contextChunks.map((chunk, index) => ({
              ...chunk,
              id: undefined // Remove id from response
            }))
          })
          
          controller.enqueue(encoder.encode(`data: ${finalData}\n\n`))
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
          
        } catch (error) {
          console.error('Streaming error:', error)
          controller.error(error)
        }
      }
    })
    
    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
    
  } catch (error) {
    console.error('Vercebot API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: 'Vercebot API is running',
    knowledgeChunks: knowledgeBase.length,
    embeddingsEnabled: !!process.env.GEMINI_API_KEY
  })
}