"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/data'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navVariants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] } }
}

export function NavBar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24)
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-colors duration-500',
        isScrolled ? 'bg-obsidian/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full border border-white/30 bg-gradient-to-br from-white/20 via-cobalt/40 to-transparent shadow-glow" />
          <span className="font-display text-xl tracking-wide text-white">Vercedo</span>
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'relative font-medium transition-colors text-sm uppercase tracking-[0.2em]',
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navHighlight"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-aurora via-cobalt to-transparent"
                  />
                )}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white"
          >
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-cobalt/60 via-aurora/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            Engage
          </Link>
        </div>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="h-5 w-5 text-white" /> : <HiMenu className="h-5 w-5 text-white" />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="md:hidden"
        >
          <div className="mx-4 mb-6 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'flex items-center justify-between text-base font-medium text-slate-200',
                    'group rounded-2xl border border-transparent px-4 py-3 hover:border-white/10 hover:bg-white/5',
                    isActive && 'bg-gradient-to-r from-cobalt/30 to-transparent text-white'
                  )}
                >
                  {link.label}
                  <span className="text-xs uppercase tracking-[0.25em] text-slate-400 transition-colors group-hover:text-white">
                    Explore
                  </span>
                </Link>
              )
            })}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
