#!/usr/bin/env ts-node

import * as fs from 'fs'
import * as path from 'path'
import * as cheerio from 'cheerio'
import { JSDOM } from 'jsdom'
import { GoogleGenerativeAI } from 'generative-ai'

interface KnowledgeChunk {
  id: string
  url: string
  title: string
  content: string
  tokens: number
  embedding?: number[]
}

interface BuildOptions {
  baseUrl: string
  maxDepth: number
  chunkSize: number
  chunkOverlap: number
  useEmbeddings: boolean
}

const DEFAULT_OPTIONS: BuildOptions = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://vercedo.ai' : 'http://localhost:3000',
  maxDepth: 3,
  chunkSize: 1000,
  chunkOverlap: 200,
  useEmbeddings: true
}

class KnowledgeBuilder {
  private visitedUrls = new Set<string>()
  private chunks: KnowledgeChunk[] = []
  private geminiAI: GoogleGenerativeAI | null = null

  constructor(private options: BuildOptions = DEFAULT_OPTIONS) {
    if (options.useEmbeddings && process.env.GEMINI_API_KEY) {
      this.geminiAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    }
  }

  async build(): Promise<void> {
    console.log('🔍 Starting knowledge base build...')
    
    try {
      await this.crawlPage(this.options.baseUrl, 0)
      console.log(`✅ Crawled ${this.visitedUrls.size} pages`)
      
      // If no chunks were generated, create fallback content
      if (this.chunks.length === 0) {
        console.log('⚠️  No content found, creating fallback knowledge base...')
        this.createFallbackContent()
      }
      
      if (this.options.useEmbeddings && this.geminiAI) {
        console.log('🧠 Generating embeddings...')
        await this.generateEmbeddings()
        console.log('✅ Embeddings generated')
      }
      
      // Save knowledge base
      const outputPath = path.join(process.cwd(), 'data', 'knowledge.json')
      fs.writeFileSync(outputPath, JSON.stringify(this.chunks, null, 2))
      
      console.log(`💾 Knowledge base saved to ${outputPath}`)
      console.log(`📊 Generated ${this.chunks.length} chunks`)
      
    } catch (error) {
      console.error('❌ Error building knowledge base:', error)
      // Create fallback content even on error
      console.log('⚠️  Creating fallback knowledge base due to error...')
      this.createFallbackContent()
      
      const outputPath = path.join(process.cwd(), 'data', 'knowledge.json')
      fs.writeFileSync(outputPath, JSON.stringify(this.chunks, null, 2))
      
      console.log(`💾 Fallback knowledge base saved to ${outputPath}`)
      console.log(`📊 Generated ${this.chunks.length} chunks`)
    }
  }

  private async crawlPage(url: string, depth: number): Promise<void> {
    if (depth > this.options.maxDepth || this.visitedUrls.has(url)) {
      return
    }

    this.visitedUrls.add(url)
    console.log(`📄 Crawling: ${url} (depth: ${depth})`)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        console.warn(`⚠️  Failed to fetch ${url}: ${response.status}`)
        return
      }

      const html = await response.text()
      const $ = cheerio.load(html)

      // Extract title
      const title = $('title').text().trim() || $('h1').first().text().trim()

      // Remove navigation, footer, scripts, and other non-content elements
      $('nav, header, footer, script, style, aside, .sidebar, .menu').remove()

      // Extract main content
      let content = ''
      
      // Try to find main content areas
      const mainContent = $('main, .main, .content, article, .post-content')
      if (mainContent.length > 0) {
        content = mainContent.first().text()
      } else {
        // Fallback to body content
        content = $('body').text()
      }

      // Clean up content
      content = content
        .replace(/\s+/g, ' ')
        .replace(/\n+/g, ' ')
        .trim()

      if (content.length > 100) { // Only process pages with substantial content
        // Create chunks
        const chunks = this.chunkContent(content, url, title)
        this.chunks.push(...chunks)
      }

      // Find and crawl same-origin links
      if (depth < this.options.maxDepth) {
        const links = $('a[href]')
        const promises: Promise<void>[] = []

        links.each((_, element) => {
          const href = $(element).attr('href')
          if (href) {
            const fullUrl = this.resolveUrl(href, url)
            if (fullUrl && this.isSameOrigin(fullUrl, this.options.baseUrl)) {
              promises.push(this.crawlPage(fullUrl, depth + 1))
            }
          }
        })

        await Promise.all(promises)
      }

    } catch (error) {
      console.warn(`⚠️  Error crawling ${url}:`, error)
    }
  }

  private chunkContent(content: string, url: string, title: string): KnowledgeChunk[] {
    const chunks: KnowledgeChunk[] = []
    const words = content.split(/\s+/)
    
    for (let i = 0; i < words.length; i += this.options.chunkSize - this.options.chunkOverlap) {
      const chunkWords = words.slice(i, i + this.options.chunkSize)
      const chunkContent = chunkWords.join(' ')
      
      chunks.push({
        id: `${url}_${i}`,
        url,
        title,
        content: chunkContent,
        tokens: this.estimateTokens(chunkContent)
      })
    }
    
    return chunks
  }

  private async generateEmbeddings(): Promise<void> {
    if (!this.geminiAI) {
      console.warn('⚠️  Gemini AI not initialized, skipping embeddings')
      return
    }

    const model = this.geminiAI.getGenerativeModel({ model: 'text-embedding-004' })

    for (let i = 0; i < this.chunks.length; i++) {
      const chunk = this.chunks[i]
      
      try {
        console.log(`🔢 Generating embedding ${i + 1}/${this.chunks.length}`)
        const result = await model.embedContent(chunk.content)
        chunk.embedding = result.embedding.values
        
        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100))
        
      } catch (error) {
        console.warn(`⚠️  Failed to generate embedding for chunk ${chunk.id}:`, error)
      }
    }
  }

  private estimateTokens(text: string): number {
    // Rough estimation: ~4 characters per token
    return Math.ceil(text.length / 4)
  }

  private resolveUrl(href: string, baseUrl: string): string | null {
    try {
      const absoluteUrl = new URL(href, baseUrl)
      // Remove query parameters and fragments
      absoluteUrl.search = ''
      absoluteUrl.hash = ''
      return absoluteUrl.toString()
    } catch {
      return null
    }
  }

  private isSameOrigin(url: string, baseUrl: string): boolean {
    try {
      const urlObj = new URL(url)
      const baseUrlObj = new URL(baseUrl)
      return urlObj.origin === baseUrlObj.origin
    } catch {
      return false
    }
  }

  private createFallbackContent(): void {
    const fallbackData = [
      {
        url: 'https://vercedo.ai',
        title: 'Vercedo - AI Receptionist',
        content: 'Vercedo provides multilingual AI receptionist services for businesses. Our AI can handle calls in multiple languages including Hindi, English, and more. We offer 24/7 availability, automatic appointment booking, lead capture, and customer support automation. Starting at ₹6,000 per month, our AI receptionist can answer calls, book appointments, capture leads, and provide customer support around the clock. Setup takes just 2 days and requires no technical skills. Businesses using Vercedo see 3x more calls answered and save an average of ₹15,000 per month. Our AI receptionist integrates seamlessly with your existing phone system and can be customized to match your business needs.',
        tokens: 120
      },
      {
        url: 'https://vercedo.ai/pricing',
        title: 'Pricing Plans',
        content: 'Vercedo offers flexible pricing plans starting at ₹6,000 per month for basic AI receptionist services. Our plans include different tiers based on call volume, features, and support needs. All plans include multilingual support, appointment booking, lead capture, and 24/7 availability. We offer a free demo to show you how our AI receptionist can benefit your business. Contact our sales team for custom enterprise pricing. No technical skills required for setup, and you can cancel anytime.',
        tokens: 95
      },
      {
        url: 'https://vercedo.ai/features',
        title: 'Features',
        content: 'Vercedo AI receptionist features include multilingual support (Hindi, English, and more), 24/7 call answering, automatic appointment booking, lead capture and qualification, customer support automation, CRM integration, call transcription, analytics and reporting, customizable scripts, and seamless phone system integration. Our AI can handle customer inquiries, schedule appointments, take messages, qualify leads, and provide basic information about your business. The system learns from interactions to improve over time.',
        tokens: 110
      },
      {
        url: 'https://vercedo.ai/industries',
        title: 'Industries Served',
        content: 'Vercedo serves various industries including healthcare, legal services, real estate, financial services, consulting, education, retail, and hospitality. Our AI receptionist is particularly valuable for businesses that receive high call volumes, need multilingual support, operate outside regular business hours, or want to improve customer service while reducing costs. Healthcare providers use it for appointment scheduling, lawyers for client intake, real estate agents for property inquiries, and financial advisors for consultation booking.',
        tokens: 105
      },
      {
        url: 'https://vercedo.ai/contact',
        title: 'Contact Us',
        content: 'Contact Vercedo to schedule a demo, get pricing information, or learn more about our AI receptionist services. You can book a 30-minute demo consultation through our website, email us at founders@vercedo.ai, or call our sales team. We offer personalized demos to show you exactly how our AI receptionist will work for your business. Our team can help you choose the right plan and ensure smooth implementation. Get started today and see how Vercedo can transform your customer service.',
        tokens: 100
      }
    ]

    this.chunks = fallbackData.map((item, index) => ({
      id: `fallback_${index}`,
      url: item.url,
      title: item.title,
      content: item.content,
      tokens: item.tokens
    }))
  }
}

// CLI execution
async function main() {
  const args = process.argv.slice(2)
  const useEmbeddings = !args.includes('--no-embeddings')
  
  const builder = new KnowledgeBuilder({
    ...DEFAULT_OPTIONS,
    useEmbeddings
  })
  
  await builder.build()
}

if (require.main === module) {
  main().catch(console.error)
}

export { KnowledgeBuilder, type KnowledgeChunk, type BuildOptions }