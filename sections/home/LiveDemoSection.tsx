"use client"

import { motion } from 'framer-motion'
import { HiPhoneArrowDownLeft, HiClipboard, HiOutlineSparkles } from 'react-icons/hi2'

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
    description: 'Ask for a slot tomorrow and watch the AI check availability, suggest times, and confirm instantly.'
  },
  {
    title: 'Switch Languages Mid-Call',
    description: 'Request the AI to continue in Hindi, English, or another language to see how it adapts without missing a beat.'
  },
  {
    title: 'Price Inquiry',
    description: 'Confirm service pricing and add-ons to hear concise, accurate information every time.'
  },
  {
    title: 'High-Priority Request',
    description: 'Explain an urgent need and see how the AI escalates or transfers in seconds.'
  },
  {
    title: 'Interruptions',
    description: 'Talk over the AI or change your mind mid-sentence. Notice the natural recovery and follow-up questions.'
  }
]

const conversations = [
  {
    title: 'Conversation 1: Appointment Booking',
    transcript: `Customer: "Hi, I need a cleaning appointment for tomorrow."
AI: "Happy to help. Cleanings take 30 minutes. I can do 11:00 AM or 3:00 PM. What works for you?"
Customer: "3:00 PM."
AI: "Done. I\'ve booked 3:00 PM and sent a confirmation SMS."`
  },
  {
    title: 'Conversation 2: Service Inquiry',
    transcript: `Customer: "Can you brief me in Hindi and then switch to English?"
AI: "Sure. I\'ll explain the treatment options in Hindi first, then recap in English so you have both."
Customer: "Great, thank you."
AI: "The procedure begins with..."`
  }
]

const stats = [
  { label: 'Calls handled this month', value: '2,347' },
  { label: 'Appointments booked', value: '891' },
  { label: 'Customer satisfaction', value: '98.5%' },
  { label: 'Average wait time', value: '<30 sec' }
]

export function LiveDemoSection() {
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
            Try the <span className="text-gradient">Live Demo</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Call our AI and see how it handles conversations, books appointments, and answers questions.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div variants={itemVariant} className="glass relative overflow-hidden rounded-3xl p-10">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-aurora/10 via-cobalt/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"
              initial={false}
            />
            <div className="relative space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Demo Phone Number</p>
                  <p className="text-3xl font-bold text-white">+91-XXXXX-XXXXX</p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-white transition hover:bg-aurora/90">
                  <HiClipboard className="h-5 w-5" />
                  Copy Number
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-aurora">Try Asking</p>
                  <ul className="mt-3 space-y-3 text-slate-300">
                    <li>"Can you book a slot for tomorrow?"</li>
                    <li>"Please switch to Hindi and confirm prices."</li>
                    <li>"Are you open this weekend?"</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-aurora">Stats Display</p>
                  <div className="mt-3 grid gap-3 text-slate-200">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex items-baseline justify-between">
                        <span className="text-sm text-slate-400">{stat.label}</span>
                        <span className="text-xl font-semibold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Sample Conversations</p>
                <div className="mt-4 space-y-4">
                  {conversations.map((conversation, index) => (
                    <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <h3 className="mb-3 text-lg font-semibold text-white">{conversation.title}</h3>
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-300">
                        {conversation.transcript}
                      </pre>
                    </div>
                  ))}
                </div>
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
                <div className="inline-flex items-center gap-2 rounded-full bg-aurora/10 px-4 py-2 text-sm font-semibold text-aurora">
                  <HiPhoneArrowDownLeft className="h-5 w-5" />
                  Try These Scenarios
                </div>
                <ul className="space-y-4 text-slate-300">
                  {scenarios.map((scenario, index) => (
                    <li key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-semibold text-white">{scenario.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{scenario.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="glass relative overflow-hidden rounded-3xl p-8">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-aurora/10 via-cobalt/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"
                initial={false}
              />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-cobalt/20 px-4 py-2 text-sm font-semibold text-aurora">
                  <HiOutlineSparkles className="h-5 w-5" />
                  What Happens During the Call
                </div>
                <ol className="space-y-3 text-slate-300">
                  {[
                    'Greeting (0-3 seconds): AI detects your language and greets warmly',
                    'Intent Recognition (3-10 seconds): Understands what you need',
                    'Information Gathering (10-60 seconds): Asks relevant questions',
                    'Action Completion (60-120 seconds): Books, informs, or transfers',
                    'Confirmation (120-150 seconds): Summarizes action taken',
                    'Professional Close: Thanks you and mentions SMS confirmation'
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-aurora">0{index + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-sm text-slate-400">Average call duration: 2-3 minutes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
