import { HeroSection } from '@/sections/home/HeroSection'
import { HighlightsSection } from '@/sections/home/HighlightsSection'
import { ShowcaseSection } from '@/sections/home/ShowcaseSection'
import { CTASection } from '@/sections/shared/CTASection'
import { LoadingScreen } from '@/components/ui/LoadingScreen'

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <HeroSection />
      <HighlightsSection />
      <ShowcaseSection />
      <CTASection />
    </>
  )
}
