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
    question: 'Can it really understand Hindi and regional accents?',
    answer:
      'Absolutely! Our AI is specifically trained on Indian accents, Hindi, English, and Hinglish. It understands regional variations and code-switching naturally. Over 95% of our calls are handled successfully in the customer\'s preferred language.'
  },
  {
    question: "What happens if the AI doesn't understand something?",
    answer:
      'The AI is trained to recognize when it needs human help. It will politely say "Let me connect you to my colleague" and transfer the call to you immediately. You can also set specific keywords that trigger instant transfers.'
  },
  {
    question: 'How long does setup actually take?',
    answer:
      '2-3 days from payment to go-live. Day 1: We customize your AI. Day 2: You test and approve. Day 3: We go live. Most clients are operational within 48 hours.'
  },
  {
    question: 'Can I update the information myself?',
    answer:
      'Yes! We provide a simple dashboard where you can update your availability, pricing, services, and FAQs anytime. Changes go live within 5 minutes. For major customizations, our team helps you.'
  },
  {
    question: 'What if I already have a receptionist?',
    answer:
      'Perfect! Your AI can handle after-hours calls, overflow during busy times, or take over routine bookings while your receptionist handles complex customer service. Many clients use both.'
  },
  {
    question: 'Do I need any technical knowledge?',
    answer:
      'None at all. We handle all the technical setup. You just need to tell us about your business. If you can use WhatsApp, you can use Vercedo.'
  },
  {
    question: 'What happens to call recordings?',
    answer:
      'All calls are recorded and stored securely for 90 days (premium plans get 1 year). You can listen to any call from your dashboard. We comply with Indian data protection regulations.'
  },
  {
    question: 'Can it handle appointments for multiple staff members?',
    answer:
      'Yes! The AI can book appointments for specific doctors, stylists, consultants, or service bays. It checks individual calendars and manages each person\'s schedule separately.'
  },
  {
    question: 'Is there a contract? Can I cancel anytime?',
    answer:
      'No long-term contracts. You can cancel anytime with 15 days notice. Most clients stay because they see immediate ROI, but we don\'t believe in locking anyone in.'
  },
  {
    question: 'How many calls can it handle simultaneously?',
    answer:
      'Unlimited! Unlike human receptionists, your AI can handle 10, 50, or 100 calls at the same time. No more busy signals or customers waiting on hold.'
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
