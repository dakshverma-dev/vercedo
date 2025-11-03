"use client"

import { usePathname } from 'next/navigation'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ReactNode, useEffect } from 'react'
import { SEOProvider } from '@/components/providers/SEOProvider'

export function AnimationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <SEOProvider>
      <LayoutGroup>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.5, 
                ease: [0.19, 1, 0.22, 1],
                when: "beforeChildren",
                staggerChildren: 0.1
              } 
            }}
            exit={{ 
              opacity: 0, 
              y: -10,
              transition: { 
                duration: 0.3, 
                ease: [0.19, 1, 0.22, 1] 
              }
            }}
            className="flex min-h-screen flex-1 flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </SEOProvider>
  )
}
