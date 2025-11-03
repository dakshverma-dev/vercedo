"use client"

import { motion } from 'framer-motion'
import { HiWrench, HiCheckCircle, HiRocketLaunch } from 'react-icons/hi2'

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.19, 1, 0.22, 1] 
    } 
  }
}

const steps = [
  {
    icon: HiWrench,
    step: 'Step 1',
    title: 'We Customize',
    timeline: '2 days',
    description: 'Share services, pricing, availability, and FAQs. We train the AI to match your brand.',
    checklist: [
      'Services and pricing',
      'Schedule',
      'Common customer questions',
      'Tone and greetings'
    ]
  },
  {
    icon: HiCheckCircle,
    step: 'Step 2',
    title: 'Connect & Test',
    timeline: 'Same day',
    description: 'We link the AI to your number or provide a new one. You test, adjust, and approve.',
    checklist: [
      'Phone setup',
      'Calendar integration',
      'CRM sync',
      'Test 10+ scenarios'
    ]
  },
  {
    icon: HiRocketLaunch,
    step: 'Step 3',
    title: 'Go Live',
    timeline: 'Forever',
    description: 'AI starts handling calls. Monitor via dashboard, update anytime, and grow.',
    checklist: [
      '24/7 monitoring',
      'Monthly reports',
      'Free adjustments',
      'WhatsApp support'
    ]
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-obsidian py-24">
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
            Your AI Receptionist in <span className="text-gradient">3 Simple Steps</span>
          </h2>
        </motion.div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:border-white/20 md:p-12"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-aurora/10 via-cobalt/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                initial={false}
              />
              <div className="relative grid gap-8 md:grid-cols-[auto_1fr]">
                <div className="flex flex-col items-center md:items-start">
                  <div className="mb-4 inline-flex rounded-2xl bg-aurora/10 p-4">
                    <step.icon className="h-10 w-10 text-aurora" />
                  </div>
                  <div className="rounded-full bg-cobalt/20 px-4 py-2">
                    <span className="text-sm font-semibold text-aurora">{step.step}</span>
                  </div>
                </div>
                <div>
                  <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-400">
                      <HiCheckCircle className="h-5 w-5 text-aurora" />
                      Timeline: {step.timeline}
                    </span>
                  </div>
                  <p className="mb-6 text-lg leading-relaxed text-slate-300">{step.description}</p>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      {index === 0 ? 'What we need from you:' : index === 1 ? 'What happens:' : 'Ongoing support:'}
                    </p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {step.checklist.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <HiCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-aurora" />
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
