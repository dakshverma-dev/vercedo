"use client"

import { usePathname } from 'next/navigation'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
import { ReactNode } from 'react'
import { SEOProvider } from '@/components/providers/SEOProvider'

export function AnimationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <SEOProvider>
      <LayoutGroup>
        <AnimatePresence mode="wait" initial={true}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="min-h-screen"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </SEOProvider>
  )
}
