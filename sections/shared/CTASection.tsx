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
              <motion.div
                className="h-4 w-4 rounded-full bg-aurora"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
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
          Ready to Never Miss <span className="text-gradient">Another Call?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mb-10 text-lg leading-relaxed text-slate-300"
        >
          Join 50+ businesses that chose growth over missed opportunities
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-cobalt via-silver/40 to-cobalt px-10 py-5 text-lg font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-glow"
          >
            Get Started Now
            <HiArrowRight className="transition-transform group-hover:translate-x-2" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Schedule Demo Call
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
        >
          <span>✓ No credit card required for demo</span>
          <span>✓ Setup in 2 days</span>
          <span>✓ Transparent pricing with no hidden fees</span>
          <span>✓ Cancel anytime</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
