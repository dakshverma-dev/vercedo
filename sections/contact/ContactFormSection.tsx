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
    phone: '',
    businessType: '',
    callVolume: '',
    message: ''
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
      setFormData({ name: '', email: '', phone: '', businessType: '', callVolume: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrors({ general: 'Submission failed. Please try again in a moment.' })
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
              <p className="font-semibold">Message sent! We'll respond within 2 hours.</p>
              <p className="mt-1 text-slate-300">Watch your email & WhatsApp for a reply.</p>
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
                Name
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
                placeholder="Priya Sharma"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={cn(
                  'w-full rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-aurora/40 focus:outline-none',
                  errors.phone ? 'border-red-400/40' : 'border-white/10'
                )}
                placeholder="9876543210"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                Email
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
                placeholder="you@business.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="businessType" className="mb-2 block text-sm font-medium text-slate-300">
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className={cn(
                  'w-full rounded-2xl border bg-white/5 px-4 py-3 text-white focus:border-aurora/40 focus:outline-none [&>option]:bg-midnight [&>option]:text-white',
                  errors.businessType ? 'border-red-400/40' : 'border-white/10'
                )}
              >
                <option value="">Select your business type</option>
                <option value="Dental">Dental Clinic</option>
                <option value="Salon">Beauty Salon / Spa</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Medical">Medical Clinic</option>
                <option value="Coaching">Coaching Institute</option>
                <option value="Automotive">Car Service Centre</option>
                <option value="Other">Other</option>
              </select>
              {errors.businessType && <p className="mt-1 text-xs text-red-400">{errors.businessType}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="callVolume" className="mb-2 block text-sm font-medium text-slate-300">
              Current Monthly Call Volume
            </label>
            <select
              id="callVolume"
              name="callVolume"
              value={formData.callVolume}
              onChange={handleChange}
              className={cn(
                'w-full rounded-2xl border bg-white/5 px-4 py-3 text-white focus:border-aurora/40 focus:outline-none [&>option]:bg-midnight [&>option]:text-white',
                errors.callVolume ? 'border-red-400/40' : 'border-white/10'
              )}
            >
              <option value="">Select range</option>
              <option value="<100">Under 100 calls</option>
              <option value="100-300">100 - 300 calls</option>
              <option value="300-500">300 - 500 calls</option>
              <option value=">500">500+ calls</option>
            </select>
            {errors.callVolume && <p className="mt-1 text-xs text-red-400">{errors.callVolume}</p>}
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
              Tell us about your needs
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
              placeholder="What challenges are you facing with missed calls or customer handling?"
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="group flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-cobalt via-platinum to-cobalt px-8 py-4 text-base font-semibold text-white shadow-glow transition hover:scale-105 disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending your message...' : 'Get Free Consultation'}
            <HiPaperAirplane className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
