"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

export function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-midnight py-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="mb-6 font-display text-4xl font-bold text-white md:text-5xl"
        >
          Simple, Transparent <span className="text-gradient">Pricing</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mb-10 text-lg leading-relaxed text-slate-300"
        >
          No hidden fees. No long contracts. Cancel anytime. Choose the plan that fits your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
        >
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-cobalt via-silver/40 to-cobalt px-10 py-5 text-lg font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-glow"
          >
            View Pricing Plans
            <HiArrowRight className="transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
