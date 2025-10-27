import type { Metadata } from 'next'
import { BlogHero } from '@/sections/blog/BlogHero'
import { BlogGrid } from '@/sections/blog/BlogGrid'

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Discover automation strategies, AI philosophy, and operational intelligence from the Vercedo team.'
}

export default function BlogPage() {
  return (
    <div className="space-y-24 bg-obsidian pb-20 pt-28">
      <BlogHero />
      <BlogGrid />
    </div>
  )
}
