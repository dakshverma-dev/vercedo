"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiCurrencyRupee } from 'react-icons/hi2'

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1]
    }
  }
}

const plans = [
  {
    name: 'Small Business',
    price: '₹6,000/month',
    highlight: 'Single-location businesses',
    setup: '₹6,000 one-time (50% off)',
    features: [
      '200-300 calls/month',
      '24/7 AI receptionist',
      'Multilingual support',
      'Appointment booking',
      'Calendar sync',
      'SMS confirmations',
      'Basic analytics'
    ],
    cta: 'Start Free Trial',
    href: '/contact'
  },
  {
    name: 'Medium Business',
    price: '₹15,000/month',
    highlight: 'Most Popular',
    setup: '₹12,500 one-time (50% off)',
    features: [
      'All Small Business features',
      '500-800 calls/month',
      'CRM integration',
      'Multi-location',
      'Custom workflows',
      'Priority support',
      'Call recordings',
      'Account manager'
    ],
    cta: 'Schedule Demo',
    href: '/demo',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '₹30,000+/month',
    highlight: 'Large operations',
    setup: 'Custom pricing',
    features: [
      'All Medium features',
      'Unlimited calls',
      'Multiple AI agents',
      'API access',
      'White-label',
      'Outbound calls',
      'Custom integrations',
      '24/7 phone support'
    ],
    cta: 'Contact Sales',
    href: '/contact'
  }
]

export function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-midnight py-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariant}
        className="relative mx-auto max-w-7xl px-6"
      >
        <motion.div variants={itemVariant} className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            No hidden fees. No surprises. Pay only for what you need.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] }
              }}
              className={`glass relative overflow-hidden rounded-3xl p-8 transition-all hover:border-white/20 ${
                plan.popular ? 'border border-aurora/40 bg-white/10 shadow-xl shadow-aurora/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute right-8 top-8 rounded-full bg-aurora/90 px-4 py-1 text-xs font-semibold uppercase text-white">
                  Most Popular
                </div>
              )}
              <div className="relative space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{plan.name}</p>
                  <p className="mt-2 text-3xl font-bold text-white">{plan.price}</p>
                  <p className="mt-2 text-sm font-medium text-aurora">{plan.highlight}</p>
                  <p className="mt-4 text-sm text-slate-400">Setup fee: {plan.setup}</p>
                </div>
                <ul className="space-y-3 text-slate-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <HiCurrencyRupee className="mt-1 h-4 w-4 text-aurora" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                    plan.popular
                      ? 'bg-aurora text-white hover:bg-aurora/90'
                      : 'border border-white/15 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                  <HiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
