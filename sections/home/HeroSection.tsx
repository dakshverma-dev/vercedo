"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi2'

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.8, ease: [0.19, 1, 0.22, 1] }
  })
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-midnight">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian/90" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex flex-col items-center">
            <motion.h1
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-6 font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl"
            >
              Never Miss Another{' '}
              <span className="text-gradient">Customer Call</span>
            </motion.h1>
            <motion.p
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-4 max-w-2xl text-xl leading-relaxed text-slate-300"
            >
              Multilingual AI receptionist supporting Hindi, English, and other languages. Answer calls, book appointments, capture leads—24/7.
            </motion.p>
            <motion.p
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-8 text-lg text-slate-400"
            >
              Join 50+ businesses saving ₹15,000/month while handling 300% more calls.
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-cobalt via-aurora/40 to-cobalt px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-glow"
              >
                Get Started Now
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                See How It Works
              </button>
            </motion.div>
            <motion.div
              custom={4}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300"
            >
              <div className="flex items-center gap-2">
                <HiCheckCircle className="h-5 w-5 text-aurora" />
                <span>Setup in 2 days</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="h-5 w-5 text-aurora" />
                <span>No technical skills needed</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="h-5 w-5 text-aurora" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
