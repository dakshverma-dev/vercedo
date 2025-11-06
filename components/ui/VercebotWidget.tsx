"use client"

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiOutlineSparkles, 
  HiPaperAirplane, 
  HiXMark,
  HiDocumentText,
  HiExternalLink
} from 'react-icons/hi2'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
  sources?: Array<{
    url: string
    title: string
    content: string
    tokens: number
  }>
  timestamp: number
}

interface VercebotStorage {
  messages: Message[]
  isOpen: boolean
}

const suggestions = [
  'What services does Vercedo offer?',
  'How much does it cost?',
  'Can you handle multiple languages?',
  'How do I get started?'
]

const STORAGE_KEY = 'vercebot-chat'

export function VercebotWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [sources, setSources] = useState<Message['sources']>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  // Load chat history from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const data: VercebotStorage = JSON.parse(stored)
        setMessages(data.messages || [])
        setOpen(data.isOpen || false)
      } else {
        // Add welcome message for new users
        setMessages([{
          role: 'assistant',
          content: "Hi! I'm VerceBot, your AI assistant for Vercedo. I can help you learn about our AI receptionist services, pricing, and features. What would you like to know?",
          timestamp: Date.now()
        }])
      }
    } catch (error) {
      console.warn('Failed to load chat history:', error)
    }
  }, [])

  // Save chat history to localStorage
  useEffect(() => {
    try {
      const data: VercebotStorage = {
        messages: messages.slice(-20), // Keep last 20 messages
        isOpen: open
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch (error) {
      console.warn('Failed to save chat history:', error)
    }
  }, [messages, open])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Show widget after delay
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  const handleBookDemo = () => {
    if (typeof window === 'undefined') return

    const cal = (window as any).Cal
    if (cal) {
      cal('ui', {
        styles: { branding: { brandColor: '#1F6FEB' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
      return
    }

    window.open('https://cal.com/vercedo/30min', '_blank', 'noopener,noreferrer')
  }

  const detectDemoRequest = (content: string): boolean => {
    const demoKeywords = [
      'demo', 'demostration', 'trial', 'try', 'book', 'meeting',
      'schedule', 'appointment', 'call', 'talk', 'contact', 'pricing'
    ]
    return demoKeywords.some(keyword => 
      content.toLowerCase().includes(keyword)
    )
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: Date.now()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setSources([])

    // Check for demo request and offer Cal.com booking
    if (detectDemoRequest(userMessage.content)) {
      const demoResponse: Message = {
        role: 'assistant',
        content: "I'd be happy to help you schedule a demo! You can book a 30-minute consultation with our team to see Vercedo in action and discuss your specific needs. Would you like me to open the booking calendar for you?",
        timestamp: Date.now()
      }
      setMessages(prev => [...prev, demoResponse])
      setIsLoading(false)
      return
    }

    try {
      // Cancel any existing request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      abortControllerRef.current = new AbortController()

      const response = await fetch('/api/vercebot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          topK: 6,
          useEmbeddings: true
        }),
        signal: abortControllerRef.current.signal
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      
      if (!reader) {
        throw new Error('No response body')
      }

      let assistantContent = ''
      let finalSources: Message['sources'] = []

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6))
              
              if (data === '[DONE]') {
                continue
              }

              if (data.choices?.[0]?.message?.content) {
                assistantContent = data.choices[0].message.content
                
                // Update the last assistant message
                setMessages(prev => {
                  const newMessages = [...prev]
                  const lastMessage = newMessages[newMessages.length - 1]
                  
                  if (lastMessage?.role === 'assistant') {
                    newMessages[newMessages.length - 1] = {
                      ...lastMessage,
                      content: assistantContent,
                      timestamp: Date.now()
                    }
                  } else {
                    newMessages.push({
                      role: 'assistant',
                      content: assistantContent,
                      timestamp: Date.now()
                    })
                  }
                  
                  return newMessages
                })
              }

              if (data.sources) {
                finalSources = data.sources
                setSources(finalSources)
              }
            } catch (parseError) {
              // Ignore parsing errors for streaming chunks
            }
          }
        }
      }

      // Update final message with sources
      if (assistantContent) {
        setMessages(prev => {
          const newMessages = [...prev]
          const lastMessage = newMessages[newMessages.length - 1]
          
          if (lastMessage?.role === 'assistant') {
            newMessages[newMessages.length - 1] = {
              ...lastMessage,
              content: assistantContent,
              sources: finalSources,
              timestamp: Date.now()
            }
          }
          
          return newMessages
        })
      }

    } catch (error) {
      console.error('Chat error:', error)
      
      const errorMessage: Message = {
        role: 'assistant',
        content: "Sorry, I encountered an error. Please try again or contact our team directly for assistance.",
        timestamp: Date.now()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      abortControllerRef.current = null
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const clearChat = () => {
    setMessages([{
      role: 'assistant',
      content: "Chat cleared. How can I help you with Vercedo's AI receptionist services?",
      timestamp: Date.now()
    }])
    setSources([])
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            className="glass w-96 max-h-[600px] overflow-hidden rounded-2xl border border-white/10 shadow-card backdrop-blur-xl"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-white/10 via-cobalt/30 to-obsidian p-4">
              <div className="absolute right-4 top-4 flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="rounded-full p-1 text-white/60 transition hover:text-white hover:bg-white/10"
                  title="Clear chat"
                >
                  <HiXMark className="h-4 w-4" />
                </button>
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Online
                </div>
              </div>
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10"
                >
                  <HiOutlineSparkles className="h-5 w-5 text-aurora" />
                </motion.div>
                <div>
                  <p className="font-semibold text-white">VerceBot</p>
                  <p className="text-xs text-slate-300">AI Assistant</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex h-96 flex-col">
              <div className="flex-1 space-y-3 overflow-y-auto p-4 scrollbar-hide">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "max-w-[85%] rounded-2xl px-3 py-2",
                      message.role === 'user' 
                        ? "ml-auto bg-cobalt/20 text-white" 
                        : "bg-white/5 text-slate-200"
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    
                    {/* Sources */}
                    {message.sources && message.sources.length > 0 && (
                      <div className="mt-2 space-y-1">
                        <p className="text-xs text-slate-400 flex items-center gap-1">
                          <HiDocumentText className="h-3 w-3" />
                          Sources:
                        </p>
                        {message.sources.slice(0, 3).map((source, idx) => (
                          <a
                            key={idx}
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-xs text-cobalt hover:text-aurora flex items-center gap-1 truncate"
                          >
                            <HiExternalLink className="h-3 w-3 flex-shrink-0" />
                            {source.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 text-slate-200 max-w-[85%] rounded-2xl px-3 py-2"
                  >
                    <div className="flex items-center gap-1">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 bg-cobalt rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="h-2 w-2 bg-cobalt rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="h-2 w-2 bg-cobalt rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                      <span className="text-xs text-slate-400">Thinking...</span>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions */}
              {messages.length <= 2 && (
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setInput(suggestion)}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 transition hover:border-white/25 hover:text-white"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Demo booking prompt */}
              {messages.some(msg => 
                msg.role === 'assistant' && 
                msg.content.toLowerCase().includes('book a 30-minute consultation')
              ) && (
                <div className="px-4 pb-2">
                  <button
                    onClick={handleBookDemo}
                    className="w-full rounded-lg bg-cobalt/20 border border-cobalt/30 px-3 py-2 text-xs text-cobalt hover:bg-cobalt/30 transition"
                  >
                    📅 Book a Demo Call
                  </button>
                </div>
              )}

              {/* Input */}
              <div className="border-t border-white/10 p-4">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Vercedo..."
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className={cn(
                      'flex h-7 w-7 items-center justify-center rounded-full bg-cobalt/70 text-white transition',
                      input.trim() && !isLoading ? 'hover:shadow-glow' : 'opacity-40 cursor-not-allowed'
                    )}
                    aria-label="Send message"
                  >
                    <HiPaperAirplane className="h-3 w-3 -rotate-12" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-cobalt/50 via-aurora/40 to-transparent text-white shadow-lg"
        aria-label="Toggle VerceBot"
      >
        <HiOutlineSparkles className="h-6 w-6" />
      </motion.button>
    </div>
  )
}