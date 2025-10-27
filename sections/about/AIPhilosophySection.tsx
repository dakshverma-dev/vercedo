"use client"

import { motion } from 'framer-motion'
import { aiPillars } from '@/lib/data'

export function AIPhilosophySection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-aurora opacity-20" />
      <div className="relative mx-auto max-w-5xl space-y-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl text-white md:text-5xl">Intelligent by design</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Vercedo blends ethical frameworks, resilient systems, and augmented teams to create AI that feels alive yet
            trustworthy. Discover the guardrails in our DNA.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {aiPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-4xl border border-white/10 bg-white/5 p-8 text-sm text-slate-300 backdrop-blur-xl"
            >
              <h3 className="mb-4 font-display text-xl text-white">{pillar.title}</h3>
              <p className="leading-relaxed">{pillar.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
