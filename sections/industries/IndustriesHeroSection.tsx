"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiArrowTrendingUp } from 'react-icons/hi2'

const industries = [
  {
    icon: 'H',
    title: 'Healthcare & Clinics',
    subtitle: 'Missed calls = missed patients.',
    points: [
      'Auto-book appointments',
      'Follow-up with patients',
      'Send WhatsApp reminders'
    ],
    stat: '+40% patient retention',
    href: '/industries/healthcare'
  },
  {
    icon: 'S',
    title: 'Salons & Gyms',
    subtitle: 'Turn every enquiry into a loyal client.',
    points: [
      'Slot booking via call',
      'Membership reminders',
      'AI reschedules automatically'
    ],
    stat: '+30% recurring bookings',
    href: '/industries/salons'
  },
  {
    icon: 'R',
    title: 'Real Estate & Home Services',
    subtitle: 'Stop losing leads after hours.',
    points: [
      'Lead capture + qualification',
      'AI callback for missed calls',
      'Instant CRM entry'
    ],
    stat: '5x faster conversions',
    href: '/industries/real-estate'
  },
  {
    icon: 'C',
    title: 'Coaching & Education',
    subtitle: 'Focus on teaching, not calls.',
    points: [
      'Demo scheduling',
      'Course inquiry handling',
      'Payment reminders'
    ],
    stat: '+45% admissions',
    href: '/industries/coaching'
  },
  {
    icon: 'B',
    title: 'Retail & Small Businesses',
    subtitle: 'Convert voice enquiries into orders.',
    points: [
      'WhatsApp order confirmations',
      'AI upselling suggestions',
      'Stock-based responses'
    ],
    stat: '+25% more repeat buyers',
    href: '/industries/retail'
  }
]

const stats = [
  { label: 'Industries served', value: '6+' },
  { label: 'Businesses onboarded', value: '50+' },
  { label: 'Calls handled monthly', value: '5,000+' }
]

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

export function IndustriesHeroSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
        className="relative mx-auto max-w-7xl px-6 space-y-24"
      >
        <motion.div variants={itemVariant} className="text-center">
          <h1 className="mb-6 font-display text-5xl font-bold text-white md:text-6xl">
            Built for Indian Businesses <span className="text-gradient">Across Industries</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300">
            Vercedo adapts to your industry, customers, and workflows. See how the AI receptionist handles calls like your best employee—never misses one.
          </p>
        </motion.div>

        <motion.div variants={itemVariant} className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={itemVariant}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] } }}
              className="glass group relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all hover:border-white/20 hover:shadow-xl hover:shadow-aurora/15"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-aurora/10 via-cobalt/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                initial={false}
              />
              <div className="relative mb-4 flex items-start gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-aurora/20 to-cobalt/20 text-xl font-bold text-aurora">
                  {industry.icon}
                </div>
                <h2 className="text-2xl font-bold leading-tight text-white">{industry.title}</h2>
              </div>
              <div className="relative flex flex-1 flex-col">
                <p className="mb-4 text-base font-medium leading-snug text-slate-200">{industry.subtitle}</p>
                <ul className="mb-4 space-y-2.5">
                  {industry.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-aurora" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-6 mt-auto flex items-center justify-center gap-2 rounded-lg border border-aurora/20 bg-aurora/5 px-4 py-2.5">
                  <HiArrowTrendingUp className="h-5 w-5 text-aurora" />
                  <p className="text-base font-semibold text-aurora">{industry.stat}</p>
                </div>
                <Link
                  href={industry.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Learn More
                  <HiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariant}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-lg text-slate-300">
              Don&apos;t see your industry listed? Vercedo works for logistics, travel, healthcare, retail, and more. Talk to us—we&apos;ll tailor the AI to your workflows.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-aurora px-8 py-3 text-sm font-semibold text-white transition hover:bg-aurora/90"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Industry Playbook
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
