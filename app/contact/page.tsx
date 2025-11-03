import type { Metadata } from 'next'
import { ContactHero } from '@/sections/contact/ContactHero'
import { ContactFormSection } from '@/sections/contact/ContactFormSection'

export const metadata: Metadata = {
  title: 'Contact Us – Get Started with AI Receptionist',
  description:
    'Get in touch with Vercedo for a free consultation. Call, email, or WhatsApp us to learn how our AI receptionist can transform your business.'
}

export default function ContactPage() {
  return (
    <div className="space-y-24 bg-obsidian pb-20 pt-28">
      <ContactHero />
      <ContactFormSection />
    </div>
  )
}
