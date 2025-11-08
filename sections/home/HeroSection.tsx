"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiCheckCircle, HiOutlineSparkles } from 'react-icons/hi2'

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.8, ease: [0.19, 1, 0.22, 1] }
  })
}

const heroBenefits = ['Setup in 2 days', 'No technical skills needed', 'Cancel anytime']

const heroStats = [
  { value: '50+', label: 'Businesses trust Vercedo' },
  { value: '3x', label: 'More calls answered' },
  { value: '₹15K', label: 'Average monthly savings' }
]

export function HeroSection() {
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
    <section className="relative overflow-hidden bg-gradient-midnight">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/80 to-obsidian" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-25" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-10" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-32 pb-24 lg:flex-row lg:items-center">
        <div className="w-full space-y-6 lg:w-7/12">
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-aurora/30 bg-aurora/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-aurora"
          >
            <HiOutlineSparkles className="h-4 w-4" />
            India-first AI receptionist
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl"
          >
            Never Miss Another <span className="text-gradient">Customer Call</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-xl leading-relaxed text-slate-300"
          >
            Multilingual AI receptionist supporting Hindi, English, and other regional languages. Answer calls, book appointments, and capture leads—24/7.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-slate-400"
          >
            Join 50+ businesses saving ₹15,000 every month while handling 300% more calls.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-cobalt via-silver/40 to-cobalt px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:scale-105"
            >
              Get Started Now
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={handleBookDemo}
              data-cal-link="vercedo/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Book a Live Demo
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              See How It Works
            </button>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-6 text-sm text-slate-300"
          >
            {heroBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <HiCheckCircle className="h-5 w-5 text-aurora" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          custom={6}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-5/12"
        >
          <div className="glass relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-cobalt/15 via-aurora/10 to-transparent opacity-70" aria-hidden="true" />
            <div className="relative space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-aurora/80">Real results</p>
              <h3 className="font-display text-2xl text-white">
                Designed to sound human and deliver measurable growth
              </h3>
              <div className="grid gap-6 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="font-display text-2xl text-white">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                Vercedo greets callers instantly, qualifies every lead, and books appointments while your team focuses on delivering great service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
