import type { Metadata } from 'next'
import { AboutHero } from '@/sections/about/AboutHero'
import { MissionSection } from '@/sections/about/MissionSection'
import { AIPhilosophySection } from '@/sections/about/AIPhilosophySection'
import { CTASection } from '@/sections/shared/CTASection'

export const metadata: Metadata = {
  title: 'About Vercedo',
  description:
    'Discover the vision, mission, and philosophy guiding Vercedo's journey to architect intelligent systems that amplify teams with autonomous precision.',
  openGraph: {
    title: 'About Vercedo',
    description:
      'Discover the vision, mission, and philosophy guiding Vercedo's journey to architect intelligent systems that amplify teams with autonomous precision.'
  }
}

export default function AboutPage() {
  return (
    <div className="space-y-24 bg-obsidian pb-20 pt-28">
      <AboutHero />
      <MissionSection />
      <AIPhilosophySection />
      <CTASection />
    </div>
  )
}
