"use client"

import { motion } from 'framer-motion'
import { contactChannels } from '@/lib/data'

export function ContactHero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-tr from-cobalt/30 via-transparent to-aurora/10 opacity-50" />
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-white md:text-7xl">
          Summon an <span className="text-gradient">automation strategist</span>
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-300">
          Our architects are standing by to design your intelligent workflow. Share your vision, and we'll synthesize a
          solution before your next coffee break.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {contactChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="mb-2 font-display text-lg text-white">{channel.title}</h3>
              <p className="mb-3 text-sm text-slate-300">{channel.description}</p>
              <p className="font-semibold text-aurora">{channel.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
