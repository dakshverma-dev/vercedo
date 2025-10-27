"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 1200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-midnight"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <motion.div
            className="relative h-36 w-36 rounded-full border border-white/10 bg-white/5"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 6 }}
          >
            <motion.div
              className="absolute inset-6 rounded-full border border-cobalt/60"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 7 }}
            />
            <motion.div
              className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-aurora"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            />
            <div className="absolute inset-10 flex items-center justify-center">
              <span className="font-display text-sm uppercase tracking-[0.5em] text-white/80">
                Vercedo
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
