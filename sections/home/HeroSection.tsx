"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import { AIRobotCanvas } from '@/components/three/AIRobotCanvas'

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
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <motion.div
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-aurora" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-slate-300">
                VerceOS 2.0 Now Live
              </span>
            </motion.div>
            <motion.h1
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-6 font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl"
            >
              Automate the{' '}
              <span className="text-gradient">Impossible</span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300"
            >
              Vercedo orchestrates autonomous AI agents that transform enterprise complexity into
              fluid, intelligent workflows—powered by next-gen artificial intelligence.
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-cobalt via-aurora/40 to-cobalt px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-glow"
              >
                Get Early Access
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Explore the Platform
              </Link>
            </motion.div>
            <motion.div
              custom={4}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex items-center gap-8 text-sm"
            >
              <div>
                <p className="font-semibold text-white">97%</p>
                <p className="text-slate-400">Operations Automated</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-semibold text-white">3x</p>
                <p className="text-slate-400">Faster Time to Value</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="flex items-center justify-center"
          >
            <AIRobotCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
