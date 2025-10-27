"use client"

import { motion } from 'framer-motion'

export function FeatureHero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30" />
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 140 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-slate-300">AI Capabilities</span>
        </motion.div>
        <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-white md:text-7xl">
          Orchestrate complexity <br />
          with <span className="text-gradient">autonomous precision</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
          Vercedo weaves together intelligent agents, self-tuning workflows, and intuitive analytics—delivering
          automation that anticipates, adapts, and scales with your ambitions.
        </p>
      </motion.div>
    </section>
  )
}
