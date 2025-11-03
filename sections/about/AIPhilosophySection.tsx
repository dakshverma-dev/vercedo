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
          viewport={{ once: true, margin: "-100px" }}
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
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
              className="group relative rounded-4xl border border-white/10 bg-white/5 p-8 text-sm text-slate-300 backdrop-blur-xl hover:border-aurora/30 hover:shadow-lg hover:shadow-aurora/10 transition-all cursor-pointer"
            >
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-4xl bg-gradient-to-br from-aurora/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                initial={false}
              />
              <div className="relative">
                <h3 className="mb-4 font-display text-xl text-white group-hover:text-gradient transition-colors">{pillar.title}</h3>
                <p className="leading-relaxed">{pillar.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
