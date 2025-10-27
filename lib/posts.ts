export type BlogPost = {
  title: string
  excerpt: string
  publishedAt: string
  category: string
  slug: string
}

export const featuredPosts: BlogPost[] = [
  {
    title: 'Designing Ethical Autonomy in the Enterprise',
    excerpt: 'How Vercedo aligns AI agents with governance, compliance, and human oversight for mission-critical outcomes.',
    publishedAt: '2024-08-19',
    category: 'AI Philosophy',
    slug: 'ethical-autonomy-enterprise'
  },
  {
    title: 'From Playbooks to Agents: Automating the Impossible',
    excerpt: 'A blueprint for transforming cross-functional playbooks into self-optimizing VerceAgents.',
    publishedAt: '2024-09-02',
    category: 'Automation',
    slug: 'playbooks-to-agents'
  },
  {
    title: 'Building a Neural Orchestrator for Global Teams',
    excerpt: 'The architecture powering Vercedo’s real-time orchestration layer across continents and regulations.',
    publishedAt: '2024-10-10',
    category: 'Engineering',
    slug: 'neural-orchestrator-global-teams'
  }
]
