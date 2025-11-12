"use client"

import { motion } from 'framer-motion'
import { AnimatedCTAButton } from '@/components/ui/AnimatedCTAButton'

export function HeroSection() {
  const handleBookDemo = () => {
    if (typeof window === 'undefined') return

    const cal = (window as any).Cal
    if (cal) {
      cal('ui', {
        styles: { branding: { brandColor: '#0066FF' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
      return
    }

    window.open('https://cal.com/vercedo/30min', '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30" />
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 140 }}
          className="mx-auto mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm"
        >
          <span className="text-base sm:text-lg">🇮🇳</span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-slate-300">India's AI Receptionist</span>
        </motion.div>
        <h1 className="mb-4 sm:mb-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
          Never Miss Another <br />
          <span className="text-gradient">Customer Call</span> <br />
          Ever Again
        </h1>
        <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 mb-6 sm:mb-8 px-4 sm:px-0">
          24/7 AI receptionist in Hindi & English. Books appointments, captures leads, and handles customer queries—automatically.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0"
        >
          <AnimatedCTAButton
            onClick={handleBookDemo}
            variant="primary"
            type="button"
            className="px-8 py-4 text-base font-semibold w-full sm:w-auto"
          >
            Try Live Demo
          </AnimatedCTAButton>
          <AnimatedCTAButton
            href="/contact"
            variant="secondary"
            className="px-8 py-4 text-base font-semibold w-full sm:w-auto"
          >
            Book a Meeting
          </AnimatedCTAButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
