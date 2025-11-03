"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const industries = [
  {
    icon: '🦷',
    title: 'Dental Clinics',
    description: 'Handle appointment bookings, reschedules, and patient inquiries 24/7. Reduce no-shows with automated reminders.',
    href: '/industries/dental'
  },
  {
    icon: '💅',
    title: 'Beauty Salons & Spas',
    description: 'Book appointments for specific stylists, manage peak hours, and answer service pricing questions instantly.',
    href: '/industries/beauty'
  },
  {
    icon: '🏡',
    title: 'Real Estate Agents',
    description: 'Qualify leads, schedule property viewings, and capture buyer requirements even when you\'re showing other properties.',
    href: '/industries/real-estate'
  },
  {
    icon: '📚',
    title: 'Coaching Institutes',
    description: 'Handle admission inquiries, batch timings, fee structure questions, and schedule counseling sessions automatically.',
    href: '/industries/coaching'
  },
  {
    icon: '🩺',
    title: 'Medical Clinics',
    description: 'Book patient appointments, handle prescription refill requests, and provide clinic timing information 24/7.',
    href: '/industries/medical'
  },
  {
    icon: '🚗',
    title: 'Car Service Centers',
    description: 'Schedule service appointments, provide quotations, and send service completion updates automatically.',
    href: '/industries/automotive'
  }
]

export function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-obsidian" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariant}
        className="relative mx-auto max-w-7xl px-6"
      >
        <motion.div variants={itemVariant} className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
            Built for Indian Businesses <span className="text-gradient">Across Industries</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Customized solutions for your specific industry challenges
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] }
              }}
              className="glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:border-white/20 hover:shadow-lg hover:shadow-aurora/10"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-aurora/10 via-cobalt/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                initial={false}
              />
              <div className="relative">
                <div className="mb-4 text-5xl">{industry.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-white">{industry.title}</h3>
                <p className="mb-4 leading-relaxed text-slate-300">{industry.description}</p>
                <Link
                  href={industry.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-aurora transition hover:gap-3"
                >
                  Learn More
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
