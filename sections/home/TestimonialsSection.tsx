"use client"

import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi2'

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

const testimonials = [
  {
    quote: 'Within the first week, we booked 23 more appointments than usual. The AI handles Hindi-speaking patients better than our previous receptionist. Best ₹6,000 we spend every month.',
    author: 'Dr. Rajesh Sharma',
    position: 'Smile Dental Clinic, Delhi'
  },
  {
    quote: 'हमारे पास दिन में 50-60 calls आती थीं जिनमें से 20 miss हो जाती थीं। अब हर call answer हो रही है। Game changer है!',
    author: 'Priya Kapoor',
    position: 'Glamour Beauty Salon, Gurgaon'
  },
  {
    quote: 'I was skeptical about AI handling my real estate leads. But this AI qualifies leads better than my junior agents. It asks the right questions and schedules site visits perfectly.',
    author: 'Amit Malhotra',
    position: 'Malhotra Properties, Noida'
  }
]

export function TestimonialsSection() {
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
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
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
              <div className="relative space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="h-5 w-5 text-aurora" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-slate-300">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
