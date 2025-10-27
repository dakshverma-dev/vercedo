export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' }
]

export const heroHighlights = [
  'Autonomous AI agents orchestrated for your teams',
  'Enterprise-grade security & observability out of the box',
  'Weeks worth of operations automated in hours'
]

export const featureCards = [
  {
    title: 'Cognition Engine',
    description: 'Adaptive intelligence that learns from every workflow signal and tunes automations in real-time.',
    items: ['Agent mesh with shared memory', 'Predictive process rerouting', 'Human-in-the-loop assist']
  },
  {
    title: 'Neural Orchestrator',
    description: 'Visual pipeline builder with AI suggestions, compliance guardrails, and one-click deployment.',
    items: ['Drag-and-drop workflow composer', 'AI policy enforcement layer', 'Instant simulation sandbox']
  },
  {
    title: 'Insight Prism',
    description: 'Glassmorphism analytics suite with holographic dashboards and natural-language querying.',
    items: ['Conversational BI interface', 'Autonomous anomaly detection', '360º KPI projections']
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
