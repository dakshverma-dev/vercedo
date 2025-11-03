import { HeroSection } from '@/sections/home/HeroSection'
import { HighlightsSection } from '@/sections/home/HighlightsSection'
import { ShowcaseSection } from '@/sections/home/ShowcaseSection'
import { CTASection } from '@/sections/shared/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <ShowcaseSection />
      <CTASection />
    </>
  )
}
