"use client"

import { motion } from 'framer-motion'
import { HiPhoneMissedCall, HiCurrencyRupee, HiFaceFrown, HiMoon } from 'react-icons/hi2'

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

const problems = [
  {
    icon: HiPhoneMissedCall,
    title: 'Missing 30-40% of Calls',
    description: 'During lunch hours, busy periods, and after closing time, valuable customers can\'t reach you. Each missed call is potential revenue walking away.',
    color: 'text-red-400'
  },
  {
    icon: HiCurrencyRupee,
    title: '₹50,000-2,00,000 Lost Monthly',
    description: 'Industry data shows businesses lose 30-40% of incoming calls. That\'s not just missed calls—it\'s missed appointments, lost sales, and frustrated customers choosing competitors.',
    color: 'text-yellow-400'
  },
  {
    icon: HiFaceFrown,
    title: 'Overworked Staff',
    description: 'Your team is stretched thin handling calls while trying to serve in-person customers. Important details get missed, appointments get double-booked, and service quality suffers.',
    color: 'text-orange-400'
  },
  {
    icon: HiMoon,
    title: 'After-Hours Inquiries',
    description: '60% of people prefer calling outside business hours. Without 24/7 availability, you\'re invisible to evening and weekend customers—your competitors aren\'t.',
    color: 'text-blue-400'
  }
]

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-24">
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
            The Hidden Cost of <span className="text-gradient">Missed Calls</span>
          </h2>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] } 
              }}
              className="glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:border-white/20 hover:shadow-lg hover:shadow-cobalt/10"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cobalt/10 via-aurora/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                initial={false}
              />
              <div className="relative">
                <problem.icon className={`mb-4 h-12 w-12 ${problem.color}`} />
                <h3 className="mb-3 text-2xl font-bold text-white">{problem.title}</h3>
                <p className="leading-relaxed text-slate-300">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
