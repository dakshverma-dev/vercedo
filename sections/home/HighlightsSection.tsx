"use client"

import { motion } from 'framer-motion'
import { heroHighlights } from '@/lib/data'
import { HiCheckCircle } from 'react-icons/hi2'

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.19, 1, 0.22, 1] 
    } 
  }
}

export function HighlightsSection() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariant}
        className="relative mx-auto max-w-6xl px-6"
      >
        <motion.h2
          variants={itemVariant}
          className="mb-12 text-center font-display text-4xl font-bold text-white md:text-5xl"
        >
          Why Leaders Choose <span className="text-gradient">Vercedo</span>
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {heroHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] } 
              }}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:border-white/20 hover:shadow-lg hover:shadow-cobalt/10"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cobalt/10 via-aurora/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                initial={false}
              />
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                >
                  <HiCheckCircle className="mb-4 h-10 w-10 text-aurora" />
                </motion.div>
                <p className="text-base leading-relaxed text-slate-300">{highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
