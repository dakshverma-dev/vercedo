"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1]
    }
  }
}

const featureBlocks = [
  {
    title: 'AI Voice Engine',
    subtitle: 'Conversations that feel human',
    description:
      'Your AI receptionist speaks Hindi, English, and Hinglish, understands tone, and remembers context so callers always feel heard.',
    highlights: [
      'Natural bilingual conversation',
      'Context-aware memory (remembers customers and preferences)',
      '95%+ intent recognition accuracy',
      'Personalized responses and smart follow-ups'
    ],
    footnote: 'Best for clinics, salons, gyms, coaching centers, and service businesses.'
  },
  {
    title: 'Automation That Works',
    subtitle: 'From call to booking, everything is automated',
    description:
      'Every call, lead, and booking flows through one automated journey so your team can focus on service instead of manual updates.',
    highlights: [
      'Real-time calendar sync with Google and Outlook',
      'Smart appointment booking and reminders',
      'Lead capture with hot, warm, and cold scoring',
      'WhatsApp, SMS, and Email confirmations'
    ],
    footnote: 'Time saved: 12+ hours each month with 30-40% higher conversions.'
  },
  {
    title: 'Control & Analytics',
    subtitle: 'Know what is working instantly',
    description:
      'Track every conversation, booking, and rupee earned with dashboards that keep owners and managers in sync.',
    highlights: [
      'Live dashboard for calls, bookings, and revenue',
      'Full call recordings with searchable transcripts',
      'Sentiment and trend analysis you can act on',
      'Secure data storage in India with AES-256 encryption'
    ],
    footnote: 'Result: 17x average ROI with zero missed opportunities.'
  },
  {
    title: 'Experience Layer',
    subtitle: 'Built for Indian businesses',
    description:
      'A simple, mobile-friendly dashboard that your team can use without training, complete with your brand voice and quick commands.',
    highlights: [
      'Intuitive dashboard that works on any device',
      'Voice and branding customization',
      'Quick WhatsApp or SMS commands ("How many bookings today?")',
      'Team roles for Owner, Manager, and Staff'
    ],
    footnote: 'Integrations ready for Google Sheets, WhatsApp, CRMs, and APIs.'
  }
]

const comparisonRows = [
  { advantage: 'Hindi + Hinglish', vercedo: 'Available', others: 'Not available' },
  { advantage: 'Setup time', vercedo: '2-3 days', others: '2-3 weeks' },
  { advantage: 'Pricing', vercedo: '₹3,500-35,000', others: '$200-500' },
  { advantage: 'Indian support', vercedo: 'Available', others: 'Not available' },
  { advantage: 'ROI', vercedo: '11x-25x', others: 'No guarantee' }
]

const goLiveSteps = ['Sign up', 'Onboard', 'Customize', 'Launch']

const smartAddOns = [
  {
    title: 'Missed Call Callback',
    description: 'AI calls back every missed call in under two minutes so no lead is lost.'
  },
  {
    title: 'Predictive Booking',
    description: 'Suggests slots before customers ask, keeping your calendar full.'
  },
  {
    title: 'Smart Routing',
    description: 'Routes VIP, urgent, or payment calls to the right person instantly.'
  },
  {
    title: 'Voice Cloning (Enterprise)',
    description: 'Let the AI speak in your own voice for a familiar customer experience.'
  }
]

const resultStats = [
  { label: 'Calls handled in month one', value: '250+' },
  { label: 'Bookings captured', value: '50+' },
  { label: 'Revenue generated', value: '₹1.5L+' },
  { label: 'Average ROI', value: '15x+' },
  { label: 'Customer satisfaction', value: '4.8/5' }
]

export function FeatureMatrixSection() {
  const handleBookDemo = () => {
    if (typeof window === 'undefined') return

    const cal = (window as any).Cal
    if (cal) {
      cal('ui', {
        styles: { branding: { brandColor: '#1F6FEB' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
      return
    }

    window.open('https://cal.com/vercedo/30min', '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-aurora opacity-20" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariant}
        className="relative mx-auto max-w-6xl space-y-16 px-6"
      >
        <motion.div variants={itemVariant} className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-aurora">Vercedo Features</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
            Transform every conversation into revenue
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Vercedo blends human-sounding AI with dependable automation so your business never misses a lead,
            booking, or follow-up.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featureBlocks.map((block) => (
            <motion.div
              key={block.title}
              variants={itemVariant}
              className="glass flex h-full flex-col rounded-4xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:shadow-lg hover:shadow-aurora/10"
            >
              <div>
                <h3 className="font-display text-2xl text-white">{block.title}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-aurora">{block.subtitle}</p>
                <p className="mt-4 text-base leading-relaxed text-slate-300">{block.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {block.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-aurora" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-sm font-medium text-slate-200">{block.footnote}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariant} className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="font-display text-2xl text-white">Why choose Vercedo</h3>
            <p className="mt-3 text-sm text-slate-300">
              Built for the realities of Indian businesses with fast setup, transparent pricing, and a team that
              supports you locally.
            </p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
              <table className="w-full text-left text-sm text-slate-200">
                <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-slate-400">
                  <tr>
                    <th className="px-4 py-3">Advantage</th>
                    <th className="px-4 py-3">Vercedo</th>
                    <th className="px-4 py-3">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={row.advantage} className={index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}>
                      <td className="px-4 py-3 text-sm text-white">{row.advantage}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-aurora">{row.vercedo}</td>
                      <td className="px-4 py-3 text-sm text-slate-300">{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h4 className="font-display text-xl text-white">Go live in 3 days</h4>
              <p className="mt-3 text-sm text-slate-300">Simple steps to launch your AI receptionist.</p>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                {goLiveSteps.map((step, index) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aurora/10 text-sm font-semibold text-aurora">
                      {index + 1}
                    </span>
                    <span className="text-sm text-slate-200">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h4 className="font-display text-xl text-white">Smart add-ons</h4>
              <div className="mt-4 space-y-4 text-sm text-slate-200">
                {smartAddOns.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-8 rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="font-display text-2xl text-white">Results that speak for themselves</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {resultStats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-3xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <p className="font-display text-2xl text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-slate-200">
            Vercedo combines AI voice, automation, and revenue growth into one platform built for India.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleBookDemo}
              data-cal-link="vercedo/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="inline-flex items-center justify-center rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-obsidian transition hover:bg-aurora/90"
            >
              Book a live walkthrough
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30"
            >
              Talk to our team
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
