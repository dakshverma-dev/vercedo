"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2'

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1]
    }
  }
}

const faqs = [
  {
    question: 'Can it understand Hindi and regional accents?',
    answer:
      'Yes. The AI is trained on Indian accents plus Hindi, English, and regional mixes. It handles code-switching with 95% accuracy.'
  },
  {
    question: "What if the AI gets stuck?",
    answer:
      'It knows when to bring in a human. The caller hears a quick handoff and the call routes to your team instantly.'
  },
  {
    question: 'How long does setup take?',
    answer:
      'Typically 2-3 days. Day 1 we customize, Day 2 you test, Day 3 we go live. Most clients launch within 48 hours.'
  },
  {
    question: 'Can I update information myself?',
    answer:
      'Absolutely. Use the dashboard to change availability, pricing, services, or FAQs. Updates go live within minutes.'
  },
  {
    question: 'What if I already have a receptionist?',
    answer:
      'Keep both. Let the AI handle after-hours, overflow, and routine bookings while your receptionist focuses on high-touch tasks.'
  },
  {
    question: 'Do I need technical knowledge?',
    answer:
      'No. We handle implementation. You just share business details and review the setup.'
  },
  {
    question: 'What about call recordings?',
    answer:
      'Calls stay encrypted for 90 days (1 year on premium plans). Access every recording from your dashboard.'
  },
  {
    question: 'Can it book for multiple team members?',
    answer:
      'Yes. It checks each person’s calendar and schedules appointments for doctors, stylists, consultants, or bays.'
  },
  {
    question: 'Is there a contract?',
    answer:
      'No lock-ins. Cancel with 15 days notice. Clients stay because the ROI is immediate.'
  },
  {
    question: 'How many calls can it handle at once?',
    answer:
      'Unlimited. The AI answers every caller simultaneously so nobody hits a busy tone.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-obsidian py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-obsidian" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariant}
        className="relative mx-auto max-w-4xl px-6"
      >
        <motion.div variants={itemVariant} className="mb-12 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariant}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="glass flex w-full items-center justify-between rounded-2xl px-6 py-5 text-left transition hover:border-white/20"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <HiChevronDown
                  className={`h-5 w-5 text-aurora transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-5"
                >
                  <p className="text-base leading-relaxed text-slate-300">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
