"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-cobalt/20 via-transparent to-aurora/10" />
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mx-auto mb-8 h-20 w-20 rounded-full border border-white/10 bg-white/5"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="h-full w-full rounded-full border border-white/10"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="flex h-full items-center justify-center rounded-full bg-gradient-to-br from-cobalt/30 via-aurora/20 to-transparent"
            >
              <motion.span 
                className="text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                ✨
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="mb-6 font-display text-4xl font-bold text-white md:text-6xl"
        >
          Ready to orchestrate <span className="text-gradient">brilliance?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mb-10 text-lg leading-relaxed text-slate-300"
        >
          Join the next-generation enterprises transforming complexity into seamless intelligence. Your
          dedicated automation architect awaits.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-cobalt via-aurora/40 to-cobalt px-10 py-5 text-lg font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-glow"
          >
            Get Early Access
            <HiArrowRight className="transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
