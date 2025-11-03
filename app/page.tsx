import { HeroSection } from '@/sections/home/HeroSection'
import { ProblemSection } from '@/sections/home/ProblemSection'
import { SolutionSection } from '@/sections/home/SolutionSection'
import { HowItWorksSection } from '@/sections/home/HowItWorksSection'
import { PricingSection } from '@/sections/home/PricingSection'
import { TestimonialsSection } from '@/sections/home/TestimonialsSection'
import { FAQSection } from '@/sections/home/FAQSection'
import { CTASection } from '@/sections/shared/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
