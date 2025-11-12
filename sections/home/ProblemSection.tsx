"use client"

import { motion } from 'framer-motion'
import { HiPhoneXMark, HiCurrencyRupee, HiFaceFrown, HiMoon } from 'react-icons/hi2'

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
    icon: HiPhoneXMark,
    title: 'Missed Calls Hurt Growth',
    description: 'Lunch breaks, peak rush, and closing time leave customers hanging and revenue walks away.',
    color: 'text-red-400'
  },
  {
    icon: HiCurrencyRupee,
    title: 'Revenue Slips Fast',
    description: 'Every unanswered call means lost appointments, smaller ticket sizes, and weaker loyalty.',
    color: 'text-yellow-400'
  },
  {
    icon: HiFaceFrown,
    title: 'Teams Burn Out',
    description: 'Staff juggle walk-ins and ringing phones, make errors, and deliver uneven service.',
    color: 'text-orange-400'
  },
  {
    icon: HiMoon,
    title: 'No Coverage After Hours',
    description: 'Customers call in the evenings and weekends. If you are silent, competitors pick them up.',
    color: 'text-blue-400'
  }
]

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-obsidian" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariant}
        className="relative mx-auto max-w-7xl px-4 sm:px-6"
      >
        <motion.div variants={itemVariant} className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="mb-3 sm:mb-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            The Hidden Cost of <span className="text-gradient">Missed Calls</span>
          </h2>
        </motion.div>
        
        <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] } 
              }}
              className="glass group relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all hover:border-white/20 hover:shadow-lg hover:shadow-cobalt/10"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cobalt/10 via-aurora/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                initial={false}
              />
              <div className="relative">
                <problem.icon className={`mb-3 sm:mb-4 h-10 w-10 sm:h-12 sm:w-12 ${problem.color}`} />
                <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold text-white">{problem.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
