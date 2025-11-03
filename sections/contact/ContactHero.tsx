"use client"

import { motion } from 'framer-motion'
import { HiPhone, HiEnvelope, HiChatBubbleLeftRight, HiCalendar } from 'react-icons/hi2'

const contactMethods = [
  {
    icon: HiPhone,
    title: 'Call Us',
    description: 'Founder Direct Line',
    value: '+91-XXXXX-XXXXX',
    subtext: 'Available: Mon-Sat, 10 AM - 7 PM'
  },
  {
    icon: HiEnvelope,
    title: 'Email Us',
    description: 'Get a response within 2 hours',
    value: 'daksh@vercedo.com',
    subtext: 'For general inquiries & support'
  },
  {
    icon: HiChatBubbleLeftRight,
    title: 'WhatsApp',
    description: 'Quick questions? Message us',
    value: 'WhatsApp Chat',
    subtext: 'Response within 30 minutes'
  },
  {
    icon: HiCalendar,
    title: 'Schedule Call',
    description: 'Book 15-min call with founder',
    value: 'Book Meeting',
    subtext: 'Choose time that works for you'
  }
]

export function ContactHero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-tr from-cobalt/30 via-transparent to-aurora/10 opacity-50" />
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-5xl px-6 text-center"
      >
        <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-white md:text-6xl">
          Let's Talk About <span className="text-gradient">Growing Your Business</span>
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-300">
          Questions? Want a custom demo? Need enterprise pricing? We're here to help.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20"
            >
              <method.icon className="mb-4 h-10 w-10 text-aurora" />
              <h3 className="mb-2 font-display text-lg text-white">{method.title}</h3>
              <p className="mb-3 text-sm text-slate-300">{method.description}</p>
              <p className="font-semibold text-aurora">{method.value}</p>
              <p className="mt-2 text-xs text-slate-400">{method.subtext}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
