"use client"

import { usePathname } from 'next/navigation'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ReactNode } from 'react'
import { SEOProvider } from '@/components/providers/SEOProvider'

export function AnimationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <SEOProvider>
      <LayoutGroup>
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="min-h-screen"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </SEOProvider>
  )
}
