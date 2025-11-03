export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Demo', href: '/demo' },
  { label: 'Contact', href: '/contact' }
]

export const heroHighlights = [
  'Autonomous AI agents orchestrated for your teams',
  'Enterprise-grade security & observability out of the box',
  'Weeks worth of operations automated in hours'
]

export const featureCards = [
  {
    title: 'AI Voice Engine',
    description: 'Answer every call in Hindi or English with a receptionist that sounds human and remembers every detail.',
    items: [
      'Understands tone and intent in real time',
      'Remembers customers and preferences',
      'Automatically handles follow-ups and escalations'
    ]
  },
  {
    title: 'Booking Automation',
    description: 'Move callers from questions to confirmed bookings without manual effort from your team.',
    items: [
      'Syncs with Google and Outlook calendars',
      'Sends WhatsApp, SMS, and email reminders',
      'Captures and qualifies every lead automatically'
    ]
  },
  {
    title: 'Insights & Control',
    description: 'Track every conversation, booking, and rupee earned with simple dashboards and alerts.',
    items: [
      'Live view of calls, bookings, and revenue',
      'Searchable call recordings and transcripts',
      'Sentiment trends and ROI tracking'
    ]
  }
]

export const featureMatrix = [
  {
    category: 'Automation Intelligence',
    features: [
      'Multi-agent collaboration guided by VerceOS',
      'Dynamic playbooks generated from enterprise knowledge',
      'Context-aware robotic process automation with AI review'
    ]
  },
  {
    category: 'Operational Control',
    features: [
      'Fine-grained observability with cause-and-effect mapping',
      'Adaptive governance with SOC2-ready audit trails',
      'Secure data fabric with zero-trust enforcement'
    ]
  },
  {
    category: 'Experience Layer',
    features: [
      'Holographic mission control workspace',
      'Natural-language copilots for every role',
      'Immersive collaboration canvas with scenario mode'
    ]
  }
]

export const missionStatements = [
  {
    title: 'Vision',
    description:
      'Architect a future where intelligent systems anticipate business needs, amplifying teams with autonomous precision.'
  },
  {
    title: 'Mission',
    description:
      'Deliver frictionless AI automation that fuses strategy, execution, and insight into a single adaptive command center.'
  },
  {
    title: 'Philosophy',
    description:
      'We believe intelligence should feel effortless—fluid, transparent, and deeply aligned with human intuition.'
  }
]

export const aiPillars = [
  {
    title: 'Ethical Alignment',
    copy: 'Transparent decision pathways, bias checks, and human overrides built into every agent stack.'
  },
  {
    title: 'Resilient Architecture',
    copy: 'Self-healing infrastructure with predictive failover, global compliance, and encrypted data lakes.'
  },
  {
    title: 'Augmented Teams',
    copy: 'Designing AI that acts as a trusted co-strategist—accelerating outcomes without sacrificing control.'
  }
]

export const pricingPlans = [
  {
    name: 'Aurora',
    price: '1,499',
    billing: 'per month',
    tagline: 'Launch automations with a personal VerceBot strategist.',
    features: [
      'Up to 10 AI agents with shared cognition',
      'Workflow composer with policy guardrails',
      'White-glove onboarding & automation sprints',
      'Email + chat support in 6 time zones'
    ]
  },
  {
    name: 'Nebula',
    price: '3,999',
    billing: 'per month',
    tagline: 'Scale operations with adaptive AI orchestration.',
    isPopular: true,
    features: [
      'Unlimited agent mesh with memory vault',
      'Autonomous escalation routing',
      'Dedicated AI success architect',
      'Real-time observability with anomaly alerts'
    ]
  },
  {
    name: 'Singularity',
    price: 'Custom',
    billing: 'enterprise',
    tagline: 'Co-create the future of autonomous enterprise operations.',
    features: [
      'Bespoke AI lab & co-innovation pods',
      'On-premise secure deployment options',
      '24/7 command center with on-call engineers',
      'Executive strategy workshops & training'
    ]
  }
]

export const contactChannels = [
  {
    title: 'Talk to VerceBot',
    description: 'Summon an automation strategist in under 30 seconds.',
    value: 'Live AI concierge'
  },
  {
    title: 'Enterprise Hotline',
    description: 'Priority route for mission-critical automation programs.',
    value: '+1 (800) 555-VERC'
  },
  {
    title: 'Global Labs',
    description: 'Experience Vercedo in San Francisco, Singapore, and Zurich.',
    value: 'Book an immersion tour'
  }
]
