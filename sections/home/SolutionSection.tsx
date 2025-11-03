"use client"

import { motion } from 'framer-motion'
import { 
  HiLanguage, 
  HiClock, 
  HiCalendar, 
  HiChartBar, 
  HiArrowPath, 
  HiCurrencyRupee 
} from 'react-icons/hi2'

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

const features = [
  {
    icon: HiLanguage,
    title: 'Multilingual Support',
    description: 'Speaks Hindi, English, and other languages. Adapts instantly to customer preference like a real receptionist.'
  },
  {
    icon: HiClock,
    title: '24/7 Availability',
    description: 'Never miss calls—lunch, weekends, holidays. Handles multiple calls simultaneously, every hour.'
  },
  {
    icon: HiCalendar,
    title: 'Auto Appointment Booking',
    description: 'Checks calendar, books instantly, sends SMS confirmation. No back-and-forth or double bookings.'
  },
  {
    icon: HiChartBar,
    title: 'Lead Capture',
    description: 'Auto-syncs caller details to your CRM or Google Sheets. Never lose a lead.'
  },
  {
    icon: HiArrowPath,
    title: 'Smart Routing',
    description: 'Handles routine inquiries, escalates complex issues, transfers urgent calls. Knows when humans are needed.'
  },
  {
    icon: HiCurrencyRupee,
    title: '90% Cost Savings',
    description: '₹6,000/month vs ₹15,000+ for receptionist. No training, sick days, or negotiations.'
  }
]

export function SolutionSection() {
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
            Meet Your <span className="text-gradient">AI Receptionist</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            More than just an answering service. A complete customer communication solution that works like your best employee—but never takes a break.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
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
                <div className="mb-4 inline-flex rounded-2xl bg-aurora/10 p-3">
                  <feature.icon className="h-8 w-8 text-aurora" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                <p className="leading-relaxed text-slate-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
