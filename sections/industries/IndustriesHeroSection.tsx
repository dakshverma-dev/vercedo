"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi2'

const industries = [
  {
    icon: 'D',
    title: 'Dental Clinics',
    description:
      'Book, reschedule, and answer patient queries 24/7. Cut no-shows with auto reminders and prioritize emergencies.',
    href: '/industries/dental'
  },
  {
    icon: 'B',
    title: 'Beauty Salons & Spas',
    description:
      'Reserve stylists, manage peak hours, and instantly share pricing—all in Hindi, English, or other languages.',
    href: '/industries/beauty'
  },
  {
    icon: 'R',
    title: 'Real Estate Agencies',
    description:
      'Qualify leads, schedule viewings, and capture buyer needs while you show properties.',
    href: '/industries/real-estate'
  },
  {
    icon: 'C',
    title: 'Coaching Institutes',
    description:
      'Field admission queries, share batch times and fees, schedule counseling sessions automatically.',
    href: '/industries/coaching'
  },
  {
    icon: 'M',
    title: 'Medical Clinics',
    description:
      'Book patients, handle prescription refills, provide clinic hours 24/7—zero missed calls.',
    href: '/industries/medical'
  },
  {
    icon: 'A',
    title: 'Car Service Centres',
    description:
      'Schedule service slots, quote repairs, send completion alerts via voice and SMS.',
    href: '/industries/automotive'
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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
        className="relative mx-auto max-w-7xl px-6"
      >
        <motion.div variants={itemVariant} className="mb-16 text-center">
          <h1 className="mb-6 font-display text-5xl font-bold text-white md:text-6xl">
            Built for Indian Businesses <span className="text-gradient">Across Industries</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300">
            Vercedo adapts to your industry, customers, and workflows. See how the AI receptionist handles calls like your best employee—never misses one.
          </p>
        </motion.div>

        <motion.div variants={itemVariant} className="mb-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-aurora/10 text-lg font-semibold text-aurora">
                {industry.icon}
              </div>
              <div className="relative flex flex-1 flex-col">
                <h2 className="mb-3 text-2xl font-bold text-white">{industry.title}</h2>
                <p className="mb-6 text-slate-300">{industry.description}</p>
                <Link
                  href={industry.href}
                  className="mt-auto inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Learn More
                  <HiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariant} className="mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-lg text-slate-300">
              Don&apos;t see your industry listed? Vercedo works for logistics, travel, healthcare, retail, and more. Talk to us—we&apos;ll tailor the AI to your workflows.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-aurora px-8 py-3 text-sm font-semibold text-white transition hover:bg-aurora/90"
              >
                Try Live Demo Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Industry Playbook
                <HiCheckCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
