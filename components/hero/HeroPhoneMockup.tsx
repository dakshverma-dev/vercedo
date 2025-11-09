"use client"

import { motion } from 'framer-motion'
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react'

const waveVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.6, 0.3, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

const waveVariants2 = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.8, 0.4, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 0.2
    }
  }
}

const waveVariants3 = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 0.4
    }
  }
}

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

const cardAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1]
    }
  }
}

export function HeroPhoneMockup() {
  return (
    <motion.div
      className="relative"
      variants={floatingAnimation}
      animate="animate"
    >
      {/* Phone Frame */}
      <div className="relative mx-auto max-w-sm">
        {/* Outer glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-[2.5rem] filter blur-2xl opacity-60" aria-hidden="true" />
        
        {/* Phone container */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden"
          style={{
            aspectRatio: '9 / 16',
            boxShadow: 'inset 0 2px 8px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.8)'
          }}>
          
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 bg-black rounded-b-3xl px-6 py-2 w-40">
            <div className="text-xs text-slate-400 text-center">9:41</div>
          </div>

          {/* Screen content */}
          <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-[#0a0e27] to-slate-950 pt-10 px-4 pb-6 flex flex-col justify-between overflow-hidden">
            
            {/* Top section - Incoming call */}
            <div className="space-y-6 pt-2">
              {/* Status bar */}
              <div className="flex justify-between items-center text-xs text-slate-400 px-2">
                <span>Signal</span>
                <span>Vercedo AI</span>
                <span>Battery</span>
              </div>

              {/* Caller info */}
              <motion.div
                className="text-center space-y-4"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {/* Avatar */}
                <div className="flex justify-center">
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Caller name */}
                <div>
                  <p className="text-white font-semibold text-sm">Customer Calling...</p>
                  <p className="text-slate-400 text-xs">+91 9876543210</p>
                </div>

                {/* Call duration */}
                <p className="text-[#00D9FF] text-xs font-mono">00:45 active</p>
              </motion.div>
            </div>

            {/* Middle section - AI Waveform Animation */}
            <motion.div className="flex flex-col items-center justify-center gap-4 py-6">
              <p className="text-xs text-slate-400 font-medium">AI Processing</p>
              
              <div className="flex items-end justify-center gap-1.5 h-12">
                <motion.div
                  className="w-1 bg-gradient-to-t from-[#0066FF] to-[#00D9FF] rounded-full"
                  style={{ height: '16px' }}
                  variants={waveVariants}
                  animate="animate"
                />
                <motion.div
                  className="w-1 bg-gradient-to-t from-[#0066FF] to-[#00D9FF] rounded-full"
                  style={{ height: '24px' }}
                  variants={waveVariants2}
                  animate="animate"
                />
                <motion.div
                  className="w-1 bg-gradient-to-t from-[#0066FF] to-[#00D9FF] rounded-full"
                  style={{ height: '20px' }}
                  variants={waveVariants3}
                  animate="animate"
                />
                <motion.div
                  className="w-1 bg-gradient-to-t from-[#0066FF] to-[#00D9FF] rounded-full"
                  style={{ height: '24px' }}
                  variants={waveVariants}
                  animate="animate"
                />
                <motion.div
                  className="w-1 bg-gradient-to-t from-[#0066FF] to-[#00D9FF] rounded-full"
                  style={{ height: '16px' }}
                  variants={waveVariants2}
                  animate="animate"
                />
              </div>
            </motion.div>

            {/* Bottom section - Transcript */}
            <div className="space-y-3 bg-slate-950/40 backdrop-blur-sm rounded-xl p-3 border border-slate-800/30">
              <p className="text-xs text-slate-500 font-medium">Live Transcript</p>
              
              <motion.div
                className="space-y-2 text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-slate-500 text-xs flex-shrink-0 mt-0.5">🎤</span>
                  <p className="text-slate-300">मुझे एक अपॉइंटमेंट बुक करना है</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 text-xs flex-shrink-0 mt-0.5">🤖</span>
                  <p className="text-slate-300">
                    <span className="text-cyan-300">Sure! I can help you book an appointment...</span>
                  </p>
                </div>
              </motion.div>

              {/* Appointment confirmation */}
              <motion.div
                className="mt-3 p-2 bg-gradient-to-r from-[#00C853]/10 to-cyan-500/10 border border-[#00C853]/30 rounded-lg flex items-center gap-2"
                variants={cardAnimation}
                initial="initial"
                animate="animate"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00C853] flex-shrink-0" />
                <span className="text-xs text-slate-300">
                  <span className="text-[#00C853] font-semibold">Confirmed:</span> Tue 2:30 PM
                </span>
              </motion.div>
            </div>

            {/* Call buttons */}
            <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-slate-800/30">
              <motion.button
                className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center hover:bg-red-500/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">📞</span>
              </motion.button>
              <motion.button
                className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 text-blue-400" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
