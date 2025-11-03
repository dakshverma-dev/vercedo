import type { Metadata } from 'next'
import { FeatureMatrixSection } from '@/sections/features/FeatureMatrixSection'
import { FeatureHero } from '@/sections/features/FeatureHero'
import { CTASection } from '@/sections/shared/CTASection'

export const metadata: Metadata = {
  title: 'Vercedo Features',
  description:
    'Discover how Vercedo turns every customer call into revenue with AI voice, automation, and analytics built for Indian businesses.',
  openGraph: {
    title: 'Vercedo Features',
    description:
      'Discover how Vercedo turns every customer call into revenue with AI voice, automation, and analytics built for Indian businesses.'
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
