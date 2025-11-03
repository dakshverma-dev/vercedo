import type { Metadata } from 'next'
import { IndustriesHeroSection } from '@/sections/industries/IndustriesHeroSection'
import { CTASection } from '@/sections/shared/CTASection'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'AI receptionist solutions customized for dental clinics, beauty salons, real estate agents, coaching institutes, medical clinics, and more across India.',
  openGraph: {
    title: 'Industries Served by Vercedo AI Receptionist',
    description:
      'Customized AI receptionist solutions for Indian businesses across industries. 24/7 Hindi & English support for your specific industry needs.'
  }
}

export default function IndustriesPage() {
  return (
    <div className="bg-obsidian pt-28 pb-20">
      <IndustriesHeroSection />
      <CTASection />
    </div>
  )
}
