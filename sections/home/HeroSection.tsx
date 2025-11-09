"use client"

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { AnimatedCTAButton } from '@/components/ui/AnimatedCTAButton'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
  }
}

const trustBadges = [
  { icon: '✓', text: 'Setup in 2 days' },
  { icon: '✓', text: 'No credit card needed' },
  { icon: '✓', text: 'Cancel anytime' },
  { icon: '✓', text: '99.9% uptime' }
]

export function HeroSection() {
  const handleBookDemo = () => {
    if (typeof window === 'undefined') return

    const cal = (window as any).Cal
    if (cal) {
      cal('ui', {
        styles: { branding: { brandColor: '#0066FF' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
      return
    }

    window.open('https://cal.com/vercedo/30min', '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0e27]">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] opacity-80" aria-hidden="true" />
        
        {/* Holographic gradient mesh */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" aria-hidden="true" style={{ animation: 'float 20s ease-in-out infinite' }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" aria-hidden="true" style={{ animation: 'float 25s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-screen filter blur-3xl" aria-hidden="true" style={{ animation: 'float 30s ease-in-out infinite' }} />
        
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" seed="2"/%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }} aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 lg:py-24">
        {/* Centered Content */}
        <motion.div
          className="text-center space-y-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 backdrop-blur-md w-fit">
              <span className="text-lg">🇮🇳</span>
              <span className="text-xs font-semibold text-cyan-300 tracking-wide">India's most Reliable AI Receptionist</span>
            </div>
          </motion.div>

          {/* Headline - Split into 3 lines with gradient */}
          <motion.div variants={item} className="space-y-3">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Never Miss Another
              </h1>
              <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent leading-tight">
                Customer Call
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ever Again
              </h1>
            </div>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg text-[#A0AEC0] max-w-2xl mx-auto leading-relaxed"
          >
            24/7 AI receptionist in Hindi & English. Books appointments, captures leads, and handles customer queries—automatically.
          </motion.p>

          {/* Social Proof */}
          <motion.div variants={item} className="text-sm text-[#A0AEC0]/80 space-y-2">
            <p className="font-medium text-[#A0AEC0]">
              Trusted by 50+ businesses • Handling 10,000+ calls monthly • ₹15,000 saved per business
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <AnimatedCTAButton
              onClick={handleBookDemo}
              variant="primary"
              type="button"
              className="gap-3 px-8 py-5 text-base font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>Try Live Demo</span>
            </AnimatedCTAButton>

            <AnimatedCTAButton
              href="/contact"
              variant="secondary"
              className="px-8 py-5 text-base font-semibold"
            >
              Book a Meeting
            </AnimatedCTAButton>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={item} className="grid grid-cols-2 gap-3 pt-4 max-w-md mx-auto">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-[#A0AEC0]">
                <span className="text-[#00C853] text-lg font-bold">{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-[#A0AEC0]/60 font-medium">Scroll to explore</span>
        <svg className="w-5 h-5 text-[#A0AEC0]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(20px, -20px); }
        }
      `}</style>
    </section>
  )
}
