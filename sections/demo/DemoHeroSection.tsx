"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiPhone, HiClipboard, HiCheckCircle, HiOutlineSparkles } from 'react-icons/hi2'

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

const scenarios = [
  {
    title: 'Book an Appointment',
    description: 'Ask for tomorrow, hear the AI check availability, offer slots, collect details, and confirm instantly.'
  },
  {
    title: 'Switch Languages Mid-Call',
    description: 'Request a change to Hindi, English, or another language and notice the smooth transition.'
  },
  {
    title: 'Confirm Pricing',
    description: 'Ask about service prices and receive concise, accurate details with upsell suggestions.'
  },
  {
    title: 'Handle Urgent Needs',
    description: 'Explain an emergency and watch the AI escalate or transfer within seconds.'
  },
  {
    title: 'Interruptions',
    description: 'Change direction mid-sentence. The AI recovers naturally and asks the right follow-ups.'
  }
]

const callSteps = [
  { step: '1', title: 'Greeting', time: '0-3 seconds', description: 'AI detects your language and greets like a trained receptionist.' },
  { step: '2', title: 'Intent Recognition', time: '3-10 seconds', description: 'Understands if you need booking, information, or a transfer.' },
  { step: '3', title: 'Information Gathering', time: '10-60 seconds', description: 'Asks focused questions to collect accurate details.' },
  { step: '4', title: 'Action Completion', time: '60-120 seconds', description: 'Books appointments, answers queries, or routes calls.' },
  { step: '5', title: 'Confirmation', time: '120-150 seconds', description: 'Summarizes the outcome and confirms next steps.' },
  { step: '6', title: 'Professional Close', time: 'Final', description: 'Thanks the caller and mentions SMS/email confirmation.' }
]

export function DemoHeroSection() {
  const [copied, setCopied] = useState(false)
  const demoNumber = '+91-XXXXX-XXXXX'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(demoNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative overflow-hidden py-16">
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
            Experience <span className="text-gradient">Vercedo Live</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300">
            Call our AI receptionist. Test multilingual support—Hindi, English, or mixed. See how naturally it handles real conversations.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <motion.div variants={itemVariant} className="glass relative overflow-hidden rounded-3xl p-10">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-aurora/10 via-cobalt/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"
              initial={false}
            />
            <div className="relative space-y-8">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-aurora/10 px-4 py-2 text-sm font-semibold text-aurora">
                  <HiPhone className="h-5 w-5" />
                  Demo Phone Number
                </div>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-white md:text-6xl">{demoNumber}</p>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-2 rounded-full bg-aurora px-8 py-4 text-base font-semibold text-white transition hover:bg-aurora/90"
                >
                  {copied ? <HiCheckCircle className="h-5 w-5" /> : <HiClipboard className="h-5 w-5" />}
                  {copied ? 'Copied!' : 'Copy Number'}
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-aurora">Try Asking</p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-aurora">•</span>
                    <span>"Can you book a slot for tomorrow at 3 PM?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-aurora">•</span>
                    <span>"Switch to Hindi and confirm the price."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-aurora">•</span>
                    <span>"Are you open this weekend?"</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariant} className="space-y-6">
            <div className="glass relative overflow-hidden rounded-3xl p-8">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cobalt/10 via-aurora/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"
                initial={false}
              />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-cobalt/20 px-4 py-2 text-sm font-semibold text-aurora">
                  <HiOutlineSparkles className="h-5 w-5" />
                  Try These Scenarios
                </div>
                <ul className="space-y-4">
                  {scenarios.map((scenario, index) => (
                    <li key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="mb-2 font-semibold text-white">{scenario.title}</p>
                      <p className="text-sm leading-relaxed text-slate-400">{scenario.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariant} className="mb-16">
          <div className="glass relative overflow-hidden rounded-3xl p-10">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-aurora/10 via-cobalt/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"
              initial={false}
            />
            <div className="relative">
              <h2 className="mb-8 text-center font-display text-3xl font-bold text-white">
                What Happens <span className="text-gradient">During the Call</span>
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {callSteps.map((step, index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aurora/10 text-lg font-bold text-aurora">
                        {step.step}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{step.title}</p>
                        <p className="text-xs text-slate-400">{step.time}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-slate-400">Average call duration: 2-3 minutes</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariant}>
          <div className="glass relative overflow-hidden rounded-3xl p-10">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cobalt/10 via-aurora/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"
              initial={false}
            />
            <div className="relative">
              <h2 className="mb-8 text-center font-display text-3xl font-bold text-white">
                Sample <span className="text-gradient">Conversations</span>
              </h2>
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Conversation 1: Appointment Booking</h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="mb-1 text-xs font-semibold text-aurora">Customer:</p>
                      <p>"Hi, I need a cleaning appointment for tomorrow."</p>
                    </div>
                    <div className="rounded-lg bg-cobalt/10 p-3">
                      <p className="mb-1 text-xs font-semibold text-aurora">AI:</p>
                      <p>"Happy to help. Cleanings take 30 minutes. I can do 11 AM or 3 PM. Which works for you?"</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="mb-1 text-xs font-semibold text-aurora">Customer:</p>
                      <p>"3 PM sounds good."</p>
                    </div>
                    <div className="rounded-lg bg-cobalt/10 p-3">
                      <p className="mb-1 text-xs font-semibold text-aurora">AI:</p>
                      <p>"Done. You're booked at 3 PM. I just sent a confirmation SMS."</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Conversation 2: Language Switch</h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="mb-1 text-xs font-semibold text-aurora">Customer:</p>
                      <p>"Can you explain the procedure in Hindi first, then switch back to English?"</p>
                    </div>
                    <div className="rounded-lg bg-cobalt/10 p-3">
                      <p className="mb-1 text-xs font-semibold text-aurora">AI:</p>
                      <p>"Sure. I'll start in Hindi, then recap in English. [continues seamlessly]"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariant} className="mt-16 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-white">
            Want to See It Customized for <span className="text-gradient">YOUR Business?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Schedule a 15-minute call with Daksh (Founder). He'll demonstrate how Vercedo works specifically for your industry and answer all your questions.
          </p>
          <button
            data-cal-link="vercedo/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
            className="inline-flex items-center gap-2 rounded-full bg-aurora px-8 py-4 text-base font-semibold text-white transition hover:bg-aurora/90"
          >
            <HiPhone className="h-5 w-5" />
            Schedule Demo with Founder
          </button>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <span>✓ Personalized demo for your industry</span>
            <span>✓ ROI calculation for your business</span>
            <span>✓ Technical questions answered</span>
            <span>✓ Custom pricing if needed</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
