import type { Metadata } from 'next'
import { PricingHero } from '@/sections/pricing/PricingHero'
import { PricingCards } from '@/sections/pricing/PricingCards'
import { CTASection } from '@/sections/shared/CTASection'

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description:
    'Discover transparent, scalable AI automation pricing for startups and enterprises. Aurora, Nebula, and Singularity plans designed for every stage of intelligent growth.',
  openGraph: {
    title: 'Vercedo Pricing Plans',
    description:
      'Discover transparent, scalable AI automation pricing for startups and enterprises. Aurora, Nebula, and Singularity plans designed for every stage of intelligent growth.'
  }
}

export default function PricingPage() {
  return (
    <div className="space-y-24 bg-obsidian pb-20 pt-28">
      <PricingHero />
      <PricingCards />
      <CTASection />
    </div>
  )
}
