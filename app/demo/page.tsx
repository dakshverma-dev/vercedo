import type { Metadata } from 'next'
import { DemoHeroSection } from '@/sections/demo/DemoHeroSection'
import { CTASection } from '@/sections/shared/CTASection'

export const metadata: Metadata = {
  title: 'Live Demo – Try Our AI Receptionist',
  description:
    'Call our AI receptionist right now. Test it in Hindi, English, or Hinglish. Experience how naturally it handles real conversations and books appointments.',
  openGraph: {
    title: 'Try Vercedo Live Demo',
    description:
      'Call our AI receptionist and experience how naturally it handles conversations, books appointments, and answers questions in Hindi & English.'
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
