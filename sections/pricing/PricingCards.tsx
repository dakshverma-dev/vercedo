"use client"

import { motion } from 'framer-motion'
import { pricingPlans } from '@/lib/data'
import { HiCheck } from 'react-icons/hi2'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function PricingCards() {
  return (
    <section className="relative py-12">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={cn(
                'group relative overflow-hidden rounded-4xl border p-8 backdrop-blur-xl transition hover:scale-[1.02]',
                plan.isPopular
                  ? 'border-aurora/40 bg-gradient-to-br from-cobalt/30 via-aurora/10 to-transparent shadow-glow'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              )}
            >
              {plan.isPopular && (
                <div className="absolute right-6 top-6 rounded-full border border-aurora/40 bg-aurora/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-aurora backdrop-blur-sm">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-display text-3xl text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{plan.tagline}</p>
              </div>
              <div className="mb-8">
                {plan.price === 'Custom' ? (
                  <p className="font-display text-5xl text-white">{plan.price}</p>
                ) : (
                  <p className="font-display text-5xl text-white">
                    ${plan.price}
                    <span className="text-base font-normal text-slate-400"> / {plan.billing}</span>
                  </p>
                )}
              </div>
              <ul className="mb-8 space-y-4 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <HiCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-aurora" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  'block w-full rounded-full border py-4 text-center text-sm font-semibold transition',
                  plan.isPopular
                    ? 'border-aurora/40 bg-gradient-to-r from-cobalt via-aurora/40 to-cobalt text-white shadow-glow hover:scale-105'
                    : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                )}
              >
                {plan.price === 'Custom' ? 'Schedule Consultation' : 'Get Started'}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
