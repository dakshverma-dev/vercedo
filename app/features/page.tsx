import type { Metadata } from 'next'
import { FeatureMatrixSection } from '@/sections/features/FeatureMatrixSection'
import { FeatureHero } from '@/sections/features/FeatureHero'
import { CTASection } from '@/sections/shared/CTASection'

export const metadata: Metadata = {
  title: 'Capabilities & Intelligence',
  description:
    'Explore Vercedo’s cognition engine, neural orchestrator, and insight prism—crafted to automate the impossible with next-gen AI.',
  openGraph: {
    title: 'Vercedo Capabilities',
    description:
      'Explore Vercedo’s cognition engine, neural orchestrator, and insight prism—crafted to automate the impossible with next-gen AI.'
  }
}

export default function FeaturesPage() {
  return (
    <div className="space-y-24 bg-obsidian pb-20 pt-28">
      <FeatureHero />
      <FeatureMatrixSection />
      <CTASection />
    </div>
  )
}
