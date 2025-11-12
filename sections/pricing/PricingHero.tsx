"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedCTAButton } from '@/components/ui/AnimatedCTAButton'

export function PricingHero() {
  const handleBookDemo = () => {
    if (typeof window === 'undefined') return

    const cal = (window as any).Cal
    if (cal) {
      cal('ui', {
        styles: { branding: { brandColor: '#1F6FEB' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
      return
    }

    window.open('https://cal.com/vercedo/30min', '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cobalt/30 via-transparent to-transparent opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <h1 className="mb-6 font-display text-5xl font-bold text-white md:text-7xl">
          Simple, Transparent <span className="text-gradient">Pricing</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 mb-4">
          No Hidden Fees. No Long Contracts. Cancel Anytime.
        </p>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400">
          Choose the plan that fits your business. Upgrade or downgrade anytime.
          All plans include 24/7 Hindi & English AI receptionist.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <AnimatedCTAButton
            onClick={handleBookDemo}
            variant="primary"
            type="button"
          >
            Book a Demo
          </AnimatedCTAButton>
          <AnimatedCTAButton
            href="/contact"
            variant="secondary"
          >
            Contact Sales
          </AnimatedCTAButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
