"use client"

import { motion } from 'framer-motion'

export function PricingHero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cobalt/30 via-transparent to-transparent opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <h1 className="mb-6 font-display text-5xl font-bold text-white md:text-7xl">
          Invest in <span className="text-gradient">autonomous brilliance</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
          From visionary startups to global enterprises, Vercedo aligns to your pace of innovation. Choose a path and our
          architects craft tailored automations within days.
        </p>
      </motion.div>
    </section>
  )
}
