"use client"

import { motion } from 'framer-motion'
import { featureCards } from '@/lib/data'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: index * 0.15, duration: 0.7, ease: [0.19, 1, 0.22, 1] }
  })
}

export function ShowcaseSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-aurora opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-aurora">Intelligent Capabilities</p>
            <h2 className="mt-2 font-display text-4xl text-white md:text-5xl">Neural orchestration at scale</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-300">
            Activate a constellation of VerceAgents that align to your operating model. From cognition to execution,
            Vercedo adapts in real-time.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] } 
              }}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-white/25 hover:shadow-2xl hover:shadow-cobalt/20"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cobalt/30 via-aurora/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-display text-2xl text-white group-hover:text-gradient transition-all">{feature.title}</h3>
                  <motion.span 
                    className="rounded-full border border-white/15 bg-white/10 p-2 text-white/70 transition group-hover:border-white/30 group-hover:text-white"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiArrowTopRightOnSquare className="h-4 w-4" />
                  </motion.span>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors">{feature.description}</p>
                <ul className="space-y-3 text-sm text-slate-200">
                  {feature.items.map((item, idx) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + idx * 0.05, duration: 0.5 }}
                    >
                      <motion.span 
                        className="h-2 w-2 rounded-full bg-aurora"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      {item}
                    </motion.li>
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
