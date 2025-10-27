"use client"

import { motion } from 'framer-motion'

export function BlogHero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30" />
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-white md:text-7xl">
          Automation <span className="text-gradient">Intelligence</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
          Explore insights on AI philosophy, intelligent workflows, and the future of enterprise operations from the
          minds building Vercedo.
        </p>
      </motion.div>
    </section>
  )
}
