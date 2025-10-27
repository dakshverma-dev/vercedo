"use client"

import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com/vercedo', label: 'Twitter' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/vercedo', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/vercedo', label: 'GitHub' },
  { icon: FaDiscord, href: 'https://discord.gg/vercedo', label: 'Discord' }
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/about#careers' },
  { label: 'Press', href: '/about#press' }
]

const productLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Integrations', href: '/features#integrations' }
]

const supportLinks = [
  { label: 'Documentation', href: '/docs' },
  { label: 'Contact', href: '/contact' },
  { label: 'Status', href: '/status' }
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-midnight">
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-full border border-white/30 bg-gradient-to-br from-white/20 via-cobalt/40 to-transparent shadow-glow" />
              <span className="font-display text-2xl tracking-wide text-white">Vercedo</span>
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-slate-400">
              Orchestrating autonomous intelligence for the next-generation enterprise.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Vercedo Intelligence Systems. All orbits reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/security" className="hover:text-white">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
