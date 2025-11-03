import type { Metadata } from 'next'
import { DemoHeroSection } from '@/sections/demo/DemoHeroSection'
import { CTASection } from '@/sections/shared/CTASection'

export const metadata: Metadata = {
  title: 'Live Demo – Try Our AI Receptionist',
  description:
    'Call our AI receptionist. Test multilingual support—Hindi, English, and more. Experience natural conversations and instant bookings.',
  openGraph: {
    title: 'Try Vercedo Live Demo',
    description:
      'Call our AI receptionist and see how it handles conversations, books appointments, and answers questions across languages.'
  }
}

export default function DemoPage() {
  return (
    <div className="bg-obsidian pt-28 pb-20">
      <DemoHeroSection />
      <CTASection />
    </div>
  )
}
