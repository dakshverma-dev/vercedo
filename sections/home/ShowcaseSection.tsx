"use client"

import { motion } from 'framer-motion'
import { featureCards } from '@/lib/data'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.8, ease: [0.19, 1, 0.22, 1] }
  })
}

export function ShowcaseSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-aurora opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-aurora">Intelligent Capabilities</p>
            <h2 className="mt-2 font-display text-4xl text-white md:text-5xl">Neural orchestration at scale</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-300">
            Activate a constellation of VerceAgents that align to your operating model. From cognition to execution,
            Vercedo adapts in real-time.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:border-white/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cobalt/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-display text-2xl text-white">{feature.title}</h3>
                  <span className="rounded-full border border-white/15 bg-white/10 p-2 text-white/70 transition group-hover:border-white/30 group-hover:text-white">
                    <HiArrowTopRightOnSquare className="h-4 w-4" />
                  </span>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">{feature.description}</p>
                <ul className="space-y-3 text-sm text-slate-200">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-aurora" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
