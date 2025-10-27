"use client"

import { motion } from 'framer-motion'
import { missionStatements } from '@/lib/data'

export function MissionSection() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-aurora">Core Beliefs</p>
          <h2 className="mt-2 font-display text-4xl text-white md:text-5xl">
            Our commitment to <span className="text-gradient">intelligence</span>
          </h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {missionStatements.map((statement, index) => (
            <motion.div
              key={statement.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                  {statement.title}
                </div>
                <p className="text-base leading-relaxed text-slate-300">{statement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
