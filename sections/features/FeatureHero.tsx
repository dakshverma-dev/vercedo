"use client"

import { motion } from 'framer-motion'

export function FeatureHero() {
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
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-slate-300">AI Capabilities</span>
        </motion.div>
        <h1 className="mb-4 sm:mb-6 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
          AI Voice, Automation <br />
          and <span className="text-gradient">Revenue Growth</span>
        </h1>
        <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 px-4 sm:px-0">
          Transform every customer conversation into revenue with AI that speaks Hindi and English,
          automates bookings, and delivers real results for Indian businesses.
        </p>
      </motion.div>
    </section>
  )
}
