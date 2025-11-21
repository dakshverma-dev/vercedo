"use client"

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { HiCheck, HiArrowRight, HiChevronDown, HiChevronUp } from 'react-icons/hi2'
import { cn } from '@/lib/utils'
import { AnimatedCTAButton } from '@/components/ui/AnimatedCTAButton'

type PlanFeature = {
  title: string
  description?: string
}

type PlanCTA = {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

type Plan = {
  name: string
  subtitle: string
  badge?: string
  monthly: {
    headline: string
    promo?: string
  }
  annual: {
    headline: string
    note?: string
  }
  setup: {
    original?: string
    current: string
    note?: string
  }
  highlight?: string
  features: PlanFeature[]
  perfectFor: string[]
  ctas: PlanCTA[]
}

type ComparisonRow = {
  feature: string
  values: [string, string, string, string]
}

type AddOn = {
  title: string
  price: string
  points: string[]
}

type PaymentSection = {
  title: string
  items: string[]
}

type FAQ = {
  question: string
  answer: string[]
  list?: string[]
  listType?: 'unordered' | 'ordered'
}

const plans: Plan[] = [
  {
    name: 'Starter Plan',
    subtitle: 'Perfect for Solo Entrepreneurs & Small Shops',
    monthly: {
      headline: '₹3,500/month',
      promo: '₹3,000/month for first 3 months'
    },
    annual: {
      headline: '₹35,700/year',
      note: '₹2,975/month — Save ₹6,300!'
    },
    setup: {
      original: '₹8,000',
      current: '₹4,000',
      note: 'Limited time'
    },
    features: [
      {
        title: '150 calls per month',
        description: 'Additional calls: ₹20 per call'
      },
      {
        title: '24/7 AI Receptionist',
        description: 'Never miss a call again. Instant response, zero wait time.'
      },
      {
        title: 'Single Language Support',
        description: 'Choose Hindi OR English. Natural conversational AI.'
      },
      {
        title: 'Appointment Booking',
        description: 'Automatic calendar sync. Google Calendar integration.'
      },
      {
        title: 'SMS Confirmations',
        description: 'Auto-send booking confirmations. Branded messages with your business name.'
      },
      {
        title: 'Lead Capture',
        description: 'Collect name, phone, requirements. Export to Google Sheets.'
      },
      {
        title: 'Basic Analytics',
        description: 'Total calls, appointments booked. Busiest hours, missed opportunities.'
      },
      {
        title: 'Email Support',
        description: 'Response within 24 hours. Setup assistance included.'
      }
    ],
    perfectFor: [
      'Home-based businesses',
      'Freelance consultants',
      'Solo practitioners',
      'Startups testing the waters'
    ],
    ctas: [
      { label: 'Get Started', href: '/contact', variant: 'primary' },
      { label: 'Talk to Sales', href: '/contact', variant: 'secondary' }
    ]
  },
  {
    name: 'Growth Plan',
    subtitle: 'Most Popular — Best for Growing Businesses',
    badge: 'Most Popular',
    monthly: {
      headline: '₹8,000/month',
      promo: '₹6,500/month for first 3 months'
    },
    annual: {
      headline: '₹81,600/year',
      note: '₹6,800/month — Save ₹14,400!'
    },
    setup: {
      original: '₹12,000',
      current: '₹6,000',
      note: 'Limited time'
    },
    highlight: 'Most businesses choose this plan.',
    features: [
      {
        title: '500 calls per month',
        description: 'Additional calls: ₹15 per call. 3X more capacity than Starter.'
      },
      {
        title: 'Bilingual Support (Hindi + English)',
        description: 'Automatic language detection. Seamless Hinglish conversations. Switch languages mid-call.'
      },
      {
        title: 'Advanced Appointment Booking',
        description: 'Multiple services support. Buffer time management. Automatic reminders (coming soon).'
      },
      {
        title: 'WhatsApp Notifications',
        description: 'Instant alerts on new bookings. Lead notifications to your phone. Never miss an opportunity.'
      },
      {
        title: 'Lead Qualification',
        description: 'AI asks qualifying questions. Prioritizes hot leads. Captures detailed requirements.'
      },
      {
        title: 'CRM Integration',
        description: 'Google Sheets auto-sync. Export data anytime. Custom fields support.'
      },
      {
        title: 'Call Recordings',
        description: 'Access all call recordings. Download & review anytime. Quality monitoring made easy.'
      },
      {
        title: 'Advanced Analytics Dashboard',
        description: 'Conversion rates tracking. Peak hours analysis. Service demand insights. Weekly performance reports.'
      },
      {
        title: 'Priority Support',
        description: 'Response within 4 hours. Phone & WhatsApp support. Dedicated onboarding specialist.'
      },
      {
        title: 'Custom Greetings & Prompts',
        description: 'Personalized AI personality. Your brand voice. Industry-specific responses.'
      }
    ],
    perfectFor: [
      'Local businesses (clinics, salons, gyms)',
      'Service providers',
      'Retail shops',
      'Growing startups'
    ],
    ctas: [
      { label: 'Get Started', href: '/contact', variant: 'primary' },
      { label: 'Book a Demo Call', href: '/contact', variant: 'secondary' }
    ]
  },
  {
    name: 'Scale Plan',
    subtitle: 'For Multi-Location & High-Volume Businesses',
    monthly: {
      headline: '₹18,000/month'
    },
    annual: {
      headline: '₹1,83,600/year',
      note: '₹15,300/month — Save ₹32,400!'
    },
    setup: {
      original: '₹25,000',
      current: '₹12,500',
      note: 'Limited time'
    },
    features: [
      {
        title: '1,200 calls per month',
        description: 'Additional calls: ₹12 per call. Handle 40+ calls daily with ease.'
      },
      {
        title: 'Multi-Location Support',
        description: 'Separate AI agents per location. Centralized dashboard. Location-based routing.'
      },
      {
        title: 'Advanced CRM Integration',
        description: 'Zoho, Salesforce, HubSpot. Real-time data sync. Two-way integration.'
      },
      {
        title: 'Custom Workflows',
        description: 'Complex booking rules. Department-based routing. Custom automation triggers.'
      },
      {
        title: 'Team Collaboration Tools',
        description: 'Multiple user accounts. Role-based access. Team performance tracking.'
      },
      {
        title: 'Voice Analytics & Insights',
        description: 'Sentiment analysis. Customer satisfaction tracking. AI-powered recommendations. Competitive intelligence.'
      },
      {
        title: 'API Access',
        description: 'Integrate with your systems. Custom development support. Webhook notifications.'
      },
      {
        title: 'Dedicated Account Manager',
        description: 'Monthly strategy calls. Performance optimization. Priority feature requests.'
      },
      {
        title: '99.5% Uptime SLA',
        description: 'Guaranteed reliability. Proactive monitoring. Incident reports.'
      },
      {
        title: 'Priority Support (2-hour response)',
        description: 'Dedicated WhatsApp channel. Emergency hotline. Technical support included.'
      },
      {
        title: 'Quarterly Business Review',
        description: 'ROI analysis. Growth recommendations. Strategic planning session.'
      }
    ],
    perfectFor: [
      'Multi-location businesses',
      'Service chains',
      'Growing enterprises',
      'High call-volume operations'
    ],
    ctas: [
      { label: 'Book a Demo Call', href: '/contact', variant: 'primary' },
      { label: 'Talk to Sales', href: '/contact', variant: 'secondary' }
    ]
  },
  {
    name: 'Enterprise Plan',
    subtitle: 'Custom Solutions for Large Operations',
    monthly: {
      headline: 'Starting at ₹35,000/month',
      promo: 'Custom pricing based on your needs'
    },
    annual: {
      headline: 'Custom annual pricing',
      note: 'Tailored contracts available on request.'
    },
    setup: {
      current: 'Custom (typically ₹50,000-1,00,000)'
    },
    features: [
      {
        title: 'Unlimited Calls',
        description: 'No per-call charges. Scale without limits. Volume discounts available.'
      },
      {
        title: 'Multiple AI Agents',
        description: 'Different agents for departments. Sales, support, billing bots. Custom voice & personality per agent.'
      },
      {
        title: 'White-Label Solution',
        description: 'Your branding everywhere. Custom domain & interface. Reseller opportunities.'
      },
      {
        title: 'Custom Voice Cloning',
        description: 'Clone your voice or brand ambassador. Ultra-realistic conversations. Premium voice options.'
      },
      {
        title: 'Multi-Language Support',
        description: 'Regional languages like Tamil, Telugu, Marathi, Bengali. International languages available. Unlimited language pairs.'
      },
      {
        title: 'Outbound Calling Campaigns',
        description: 'Appointment reminders. Follow-up calls. Survey campaigns. Re-engagement calls.'
      },
      {
        title: 'Advanced Integrations',
        description: 'ERP systems. Custom databases. Legacy system integration. API development.'
      },
      {
        title: 'Custom AI Training',
        description: 'Train on your specific data. Industry expertise programming. Continuous learning & improvement.'
      },
      {
        title: 'Dedicated Infrastructure',
        description: 'Isolated servers for security. Custom SLA agreements. Priority resource allocation.'
      },
      {
        title: '24/7 Phone Support',
        description: 'Direct line to technical team. Emergency response team. On-site support available.'
      },
      {
        title: 'Compliance & Security',
        description: 'SOC 2 compliant. HIPAA ready for healthcare. Data encryption. Custom security protocols.'
      },
      {
        title: 'White-Glove Onboarding',
        description: 'Dedicated implementation team. Custom training sessions. Change management support.'
      }
    ],
    perfectFor: [
      'Large enterprises',
      'Franchises & chains',
      'Healthcare networks',
      'BPO & call centers',
      'Businesses requiring custom solutions'
    ],
    ctas: [
      { label: 'Contact Sales', href: '/contact', variant: 'primary' },
      { label: 'Request Proposal', href: '/contact', variant: 'secondary' }
    ]
  }
]

const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Monthly Price',
    values: ['₹3,500', '₹8,000', '₹18,000', '₹35,000+']
  },
  {
    feature: 'Calls Included',
    values: ['150', '500', '1,200', 'Unlimited']
  },
  {
    feature: 'Languages',
    values: ['1', '2 (Hindi + English)', '2+', 'Unlimited']
  },
  {
    feature: 'AI Receptionist',
    values: ['Included', 'Included', 'Included', 'Included']
  },
  {
    feature: 'Appointment Booking',
    values: ['Included', 'Included', 'Included', 'Included']
  },
  {
    feature: 'SMS Confirmations',
    values: ['Included', 'Included', 'Included', 'Included']
  },
  {
    feature: 'Calendar Sync',
    values: ['Included', 'Included', 'Included', 'Included']
  },
  {
    feature: 'Lead Capture',
    values: ['Included', 'Included', 'Included', 'Included']
  },
  {
    feature: 'WhatsApp Alerts',
    values: ['Not included', 'Included', 'Included', 'Included']
  },
  {
    feature: 'Call Recordings',
    values: ['Not included', 'Included', 'Included', 'Included']
  },
  {
    feature: 'CRM Integration',
    values: ['Basic', 'Advanced', 'Premium', 'Custom']
  },
  {
    feature: 'Multi-Location',
    values: ['Not included', 'Not included', 'Included', 'Included']
  },
  {
    feature: 'Custom Workflows',
    values: ['Not included', 'Not included', 'Included', 'Included']
  },
  {
    feature: 'API Access',
    values: ['Not included', 'Not included', 'Included', 'Included']
  },
  {
    feature: 'Analytics',
    values: ['Basic', 'Advanced', 'Premium', 'Custom']
  },
  {
    feature: 'Support',
    values: ['Email', 'Priority', 'Dedicated', '24/7 Phone']
  },
  {
    feature: 'Account Manager',
    values: ['Not included', 'Not included', 'Included', 'Included']
  },
  {
    feature: 'White-Label',
    values: ['Not included', 'Not included', 'Not included', 'Included']
  },
  {
    feature: 'Outbound Calls',
    values: ['Not included', 'Available as add-on', 'Available as add-on', 'Included']
  },
  {
    feature: 'Setup Time',
    values: ['2-3 days', '3-5 days', '1 week', 'Custom']
  }
]

const addOns: AddOn[] = [
  {
    title: 'WhatsApp Bot Integration',
    price: '₹2,500/month',
    points: [
      'AI responds to WhatsApp messages',
      'Automates common queries',
      'Integrates with voice agent',
      '24/7 text support'
    ]
  },
  {
    title: 'Additional Language',
    price: '₹1,000/month per language',
    points: [
      'Add regional languages',
      'Tamil, Telugu, Marathi, Bengali',
      'International languages available'
    ]
  },
  {
    title: 'Outbound Calling',
    price: '₹1 per call (minimum ₹2,000/month)',
    points: [
      'Appointment reminders',
      'Follow-up campaigns',
      'Customer surveys',
      'Re-engagement calls'
    ]
  },
  {
    title: 'Premium Voice Options',
    price: '₹1,500/month',
    points: [
      'Celebrity-like voices',
      'Custom voice cloning',
      'Multiple voice options',
      'Ultra-realistic conversations'
    ]
  },
  {
    title: 'Extended Call Recording Storage',
    price: '₹1,000/month',
    points: [
      '1 year storage (vs 30 days)',
      'Unlimited downloads',
      'Searchable transcripts',
      'Compliance archive'
    ]
  },
  {
    title: 'Custom Integration Development',
    price: '₹15,000 one-time + ₹2,000/month',
    points: [
      'Connect to any system',
      'Custom API development',
      'Legacy system integration',
      'Ongoing maintenance'
    ]
  }
]

const includedItems = [
  'No Setup Complexity — We handle everything',
  'Free Trial — 7 days, no credit card required',
  'No Long Contracts — Cancel anytime',
  'Free Updates — New features added regularly',
  'Training Included — 1-hour onboarding session',
  '99% Uptime Guarantee — Reliable service',
  'Data Security — Your data is encrypted & safe',
  'India-Based Support — We understand local businesses'
]

const paymentSections: PaymentSection[] = [
  {
    title: 'We Accept',
    items: [
      'Credit/Debit Cards (Visa, Mastercard, RuPay)',
      'UPI (Google Pay, PhonePe, Paytm)',
      'Net Banking (All major banks)',
      'Bank Transfer/NEFT/RTGS'
    ]
  },
  {
    title: 'Billing Cycle',
    items: [
      'Monthly (pay as you go)',
      'Quarterly (5% discount)',
      'Annually (15% discount + 1 month free)'
    ]
  },
  {
    title: 'Invoice & GST',
    items: [
      'GST invoices provided',
      'Input tax credit eligible',
      'Secure payment gateway'
    ]
  }
]

const faqs: FAQ[] = [
  {
    question: 'What happens if I exceed my call limit?',
    answer: ['No worries! We will notify you at 80% usage. Additional calls are charged at:'],
    list: ['Starter: ₹20 per call', 'Growth: ₹15 per call', 'Scale: ₹12 per call', 'Enterprise: Included'],
    listType: 'unordered'
  },
  {
    question: 'Can I change my plan later?',
    answer: ['Yes! Upgrade or downgrade anytime. Changes take effect from the next billing cycle. Pro-rated refunds are available for annual plans.']
  },
  {
    question: 'Is there a contract?',
    answer: ['No long-term contracts. All plans are month-to-month. Cancel anytime with 30 days notice. No penalties.']
  },
  {
    question: "What's included in the setup fee?",
    answer: ['AI customization for your business, phone number configuration, calendar and CRM integration, team training session, testing, and go-live support. Setup typically takes 3-5 days.']
  },
  {
    question: 'Do you offer refunds?',
    answer: ['Yes! 14-day money-back guarantee if you are not satisfied. We will refund your setup fee and first month (minus any usage).']
  },
  {
    question: 'Can I try before I buy?',
    answer: ['Absolutely! Enjoy a 7-day free trial with no credit card required. Test all features risk-free.']
  },
  {
    question: 'What if the AI makes a mistake?',
    answer: ['Our AI has 95%+ accuracy, but we continuously improve based on call recordings. You can review and correct any errors. We also offer human backup options.']
  },
  {
    question: 'Is my data secure?',
    answer: ['Yes! We use bank-level encryption, secure servers, and comply with data protection laws. We never share your data with third parties.']
  },
  {
    question: 'What languages are supported?',
    answer: ['Currently we support Hindi (all dialects), English (Indian accent), and Hinglish (mixed). Coming soon: Tamil, Telugu, Marathi, Bengali, Punjabi.']
  },
  {
    question: 'Can the AI handle complex queries?',
    answer: ['Yes! The AI is trained on thousands of conversations. For very complex scenarios, it can seamlessly transfer to a human or schedule a callback.']
  },
  {
    question: 'Do I need technical knowledge?',
    answer: ['Not at all! We handle all the technical setup. You just need to answer questions about your business, provide your calendar link, and test the AI for 1 hour.']
  },
  {
    question: "What's your uptime guarantee?",
    answer: ['We guarantee 99.5% uptime. Scale and Enterprise plans receive 99.9%. In the rare case of downtime, we credit your account proportionally.']
  },
  {
    question: 'Can I use my existing phone number?',
    answer: ['Yes! You can forward calls from your existing number to our AI, get a new number from us, or set up smart routing (business hours = human, after hours = AI).']
  },
  {
    question: 'How quickly can I get started?',
    answer: ['Sign up in 5 minutes, onboarding call in 30 minutes, setup and testing in 2-3 days, go live within 1 week. Need it sooner? We can expedite for an additional fee.']
  }
]

export function PricingCards() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

  return (
    <section className="relative pb-12">
      <div className="relative mx-auto max-w-7xl space-y-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Billing Options</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-white">Choose how you want to pay</h2>
          <p className="mt-3 text-base text-slate-400">
            Monthly plans show standard pricing. Switch to annual to discover extra savings.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-lg">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'rounded-full px-6 py-3 text-sm font-semibold transition',
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-cobalt/40 via-aurora/30 to-cobalt/40 text-white shadow-glow'
                  : 'text-slate-300 hover:text-white'
              )}
            >
              Pay Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'rounded-full px-6 py-3 text-sm font-semibold transition',
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-cobalt/40 via-aurora/30 to-cobalt/40 text-white shadow-glow'
                  : 'text-slate-300 hover:text-white'
              )}
            >
              Pay Annually (Save 15%)
            </button>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
           {plans.map((plan, index) => (
             <motion.div
               key={plan.name}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: index * 0.1 }}
               className={cn(
                 'group relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl',
                 plan.badge ? 'border-aurora/30 shadow-glow' : ''
               )}
            >
             {plan.badge && (
               <div className="absolute right-6 top-6 rounded-full border border-aurora/20 bg-aurora/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-aurora/70">
                 {plan.badge}
               </div>
             )}
             <div className="mb-6">
                <h3 className="font-display text-2xl text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-aurora">{plan.subtitle}</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-semibold text-white">
                  {billingCycle === 'monthly' ? plan.monthly.headline : plan.annual.headline}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {billingCycle === 'monthly' ? 'Monthly billing' : 'Annual billing'}
                </p>
              </div>

              <button
                type="button"
                aria-expanded={expandedPlan === plan.name}
                onClick={() => setExpandedPlan(expandedPlan === plan.name ? null : plan.name)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {expandedPlan === plan.name ? (
                  <>
                    Hide Plan Details <HiChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    View Plan Details <HiChevronDown className="h-4 w-4" />
                  </>
                )}
              </button>

              <AnimatePresence initial={false}>
                {expandedPlan === plan.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-6 border-t border-white/10 pt-6">
                      <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">Includes</p>
                        <ul className="space-y-2.5 text-sm text-slate-300">
                          {plan.features.slice(0, 4).map((feature) => (
                            <li key={feature.title} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-aurora" />
                              <span>{feature.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 text-sm">
                        {billingCycle === 'monthly' && plan.monthly.promo && (
                          <p className="font-medium text-aurora">{plan.monthly.promo}</p>
                        )}
                        {billingCycle === 'annual' && plan.annual.note && (
                          <p className="font-medium text-aurora">{plan.annual.note}</p>
                        )}
                        <p className="text-slate-300">
                          <span className="text-slate-400">Setup: </span>
                          {plan.setup.original && (
                            <span className="mr-2 line-through text-slate-500">{plan.setup.original}</span>
                          )}
                          <span className="font-semibold text-white">{plan.setup.current}</span>
                          {plan.setup.note && <span className="ml-2 text-aurora/80">({plan.setup.note})</span>}
                        </p>
                      </div>

                      <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">Perfect for</p>
                        <ul className="space-y-2 text-sm text-slate-300">
                          {plan.perfectFor.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-aurora" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {plan.highlight && (
                        <div className="rounded-lg border border-aurora/20 bg-aurora/5 px-4 py-3 text-center">
                          <p className="text-sm font-semibold text-aurora">{plan.highlight}</p>
                        </div>
                      )}

                      <div className="flex flex-col gap-3">
                        {plan.ctas.map((cta) => (
                          <AnimatedCTAButton
                            key={cta.label}
                            href={cta.href}
                            variant={cta.variant}
                            className="px-6 py-3 text-sm"
                          >
                            {cta.label}
                          </AnimatedCTAButton>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-3xl text-white">Comparison Table</h2>
            <p className="mt-2 text-sm text-slate-400">
              See how each plan stacks up before you decide.
            </p>
          </div>
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10 text-left">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Feature</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white">Starter</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white">Growth</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white">Scale</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="text-sm">
                      <td className="px-6 py-4 font-medium text-white">{row.feature}</td>
                      {row.values.map((value, index) => (
                        <td
                          key={`${row.feature}-${index}`}
                          className={cn(
                            'px-6 py-4 text-slate-300',
                            value.toLowerCase().includes('not included') ? 'text-slate-500' : '',
                            value.toLowerCase().includes('included') ? 'text-white' : ''
                          )}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-3xl text-white">Popular Add-Ons</h2>
            <p className="mt-2 text-sm text-slate-400">Enhance any plan with these optional upgrades.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {addOns.map((addOn) => (
              <div
                key={addOn.title}
                className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-white/20"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{addOn.title}</h3>
                  <span className="text-sm font-medium text-aurora">{addOn.price}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  {addOn.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-aurora" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h2 className="font-display text-3xl text-white">What’s Included in All Plans</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {includedItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-aurora/30 bg-aurora/10 text-aurora">
                  <HiCheck className="h-3.5 w-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-3xl text-white">Payment Options</h2>
            <p className="mt-2 text-sm text-slate-400">Flexible billing designed around Indian businesses.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {paymentSections.map((section) => (
              <div key={section.title} className="rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-aurora" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <h2 className="font-display text-3xl text-white">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-slate-400">Everything you need to know before getting started.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => {
              const ListTag = faq.listType === 'ordered' ? 'ol' : 'ul'
              return (
                <div
                  key={faq.question}
                  className="rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {faq.answer.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-sm text-slate-300">
                      {paragraph}
                    </p>
                  ))}
                  {faq.list && (
                    <ListTag className="mt-3 space-y-1 pl-6 text-sm text-slate-300 list-disc">
                      {faq.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ListTag>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>


      </div>
    </section>
  )
}
