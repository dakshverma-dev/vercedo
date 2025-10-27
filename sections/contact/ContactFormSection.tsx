"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPaperAirplane } from 'react-icons/hi2'
import { contactSchema, type ContactFormData } from '@/lib/validators'
import { cn } from '@/lib/utils'

export function ContactFormSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setStatus('loading')
    setErrors({})

    const parsed = contactSchema.safeParse(formData)
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {}
      parsed.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message
        }
      })
      setErrors(fieldErrors)
      setStatus('error')
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data)
      })

      if (!response.ok) throw new Error('Submission failed')

      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '', budget: '' })
    } catch (error) {
      setStatus('error')
      setErrors({ general: 'Submission failed. VerceBot will ping you if this persists.' })
    }
  }

  return (
    <section className="relative py-12">
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="glass space-y-6 rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12"
        >
          {status === 'success' && (
            <div className="rounded-3xl border border-aurora/40 bg-aurora/10 px-6 py-4 text-sm text-white">
              <p className="font-semibold">Message received! ✨</p>
              <p className="mt-1 text-slate-300">A Vercedo architect will respond within 24 hours.</p>
            </div>
          )}
          {errors.general && (
            <div className="rounded-3xl border border-red-400/40 bg-red-400/10 px-6 py-4 text-sm text-white">
              {errors.general}
            </div>
          )}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={cn(
                  'w-full rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-aurora/40 focus:outline-none',
                  errors.name ? 'border-red-400/40' : 'border-white/10'
                )}
                placeholder="Ada Lovelace"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={cn(
                  'w-full rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-aurora/40 focus:outline-none',
                  errors.email ? 'border-red-400/40' : 'border-white/10'
                )}
                placeholder="ada@automations.ai"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
              Company / Initiative
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={cn(
                'w-full rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-aurora/40 focus:outline-none',
                errors.company ? 'border-red-400/40' : 'border-white/10'
              )}
              placeholder="Automations Dynamics"
            />
            {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company}</p>}
          </div>
          <div>
            <label htmlFor="budget" className="mb-2 block text-sm font-medium text-slate-300">
              Estimated Budget (optional)
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-aurora/40 focus:outline-none"
            >
              <option value="">Select a range</option>
              <option value="<10k">Under $10k</option>
              <option value="10k-50k">$10k – $50k</option>
              <option value="50k-100k">$50k – $100k</option>
              <option value=">100k">Over $100k</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
              Your Vision
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={cn(
                'w-full rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-aurora/40 focus:outline-none',
                errors.message ? 'border-red-400/40' : 'border-white/10'
              )}
              placeholder="Tell us what you'd like to automate, integrate, or accelerate..."
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="group flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-cobalt via-aurora/40 to-cobalt px-8 py-4 text-base font-semibold text-white shadow-glow transition hover:scale-105 disabled:opacity-50"
          >
            {status === 'loading' ? 'Transmitting...' : 'Send to VerceBot'}
            <HiPaperAirplane className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
