"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineSparkles, HiPaperAirplane } from 'react-icons/hi2'
import { cn } from '@/lib/utils'

const suggestions = [
  'Design an automation for onboarding',
  'Show me orchestration analytics',
  'How does Vercedo integrate with Salesforce?'
]

export function VerceBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<string[]>(["VerceBot online. How can I accelerate your operations today?"])

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((prev) => [...prev, `You: ${input.trim()}`, 'VerceBot: I am synthesizing a bespoke automation plan. Expect a proposal in seconds.'])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            className="glass w-80 overflow-hidden rounded-3xl border border-white/10 shadow-card backdrop-blur-xl"
          >
            <div className="relative bg-gradient-to-br from-white/10 via-cobalt/30 to-obsidian p-4">
              <div className="absolute right-4 top-4 text-xs uppercase tracking-[0.3em] text-white/50">
                Online
              </div>
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10"
                >
                  <HiOutlineSparkles className="h-6 w-6 text-aurora" />
                </motion.div>
                <div>
                  <p className="font-semibold text-white">VerceBot</p>
                  <p className="text-xs text-slate-300">Autonomous concierge</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 p-4">
              <div className="max-h-40 space-y-2 overflow-y-auto pr-1 text-sm text-slate-200 scrollbar-hide">
                {messages.map((message, index) => (
                  <p key={index} className="rounded-2xl bg-white/5 px-3 py-2">
                    {message}
                  </p>
                ))}
              </div>
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
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask VerceBot anything..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full bg-cobalt/70 text-white transition',
                    input.trim() ? 'hover:shadow-glow' : 'opacity-40 cursor-not-allowed'
                  )}
                  aria-label="Send message"
                >
                  <HiPaperAirplane className="h-4 w-4 -rotate-12" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-cobalt/50 via-silver/40 to-transparent text-white shadow-lg"
        aria-label="Toggle VerceBot"
      >
        <HiOutlineSparkles className="h-6 w-6" />
      </motion.button>
    </div>
  )
}
