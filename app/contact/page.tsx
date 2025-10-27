import type { Metadata } from 'next'
import { ContactHero } from '@/sections/contact/ContactHero'
import { ContactFormSection } from '@/sections/contact/ContactFormSection'

export const metadata: Metadata = {
  title: 'Contact Vercedo',
  description:
    'Connect with Vercedo’s AI automation architects for tailored strategies, enterprise partnerships, and product explorations.'
}

export default function ContactPage() {
  return (
    <div className="space-y-24 bg-obsidian pb-20 pt-28">
      <ContactHero />
      <ContactFormSection />
    </div>
  )
}
