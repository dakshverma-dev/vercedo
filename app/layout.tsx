import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from '@/components/ui/NavBar'
import { Footer } from '@/components/ui/Footer'
import { VerceBot } from '@/components/ui/VerceBot'
import { AnimationProvider } from '@/components/providers/AnimationProvider'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  metadataBase: new URL('https://vercedo.ai'),
  title: {
    default: 'Vercedo – Automate the Impossible',
    template: '%s | Vercedo AI Automation Platform'
  },
  description:
    'Vercedo is the premium AI automation platform crafting intelligent workflows, orchestration, and insights for visionary enterprises.',
  keywords: [
    'AI automation',
    'workflow orchestration',
    'artificial intelligence',
    'enterprise automation',
    'intelligent agents',
    'business process automation'
  ],
  authors: [{ name: 'Vercedo' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vercedo.ai',
    siteName: 'Vercedo',
    title: 'Vercedo – Automate the Impossible',
    description:
      'Premium AI automation platform crafting intelligent workflows for visionary enterprises.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Vercedo – Automate the Impossible'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vercedo – Automate the Impossible',
    description:
      'Premium AI automation platform crafting intelligent workflows for visionary enterprises.',
    creator: '@vercedo',
    images: ['/og-image.svg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

// Force dynamic rendering for app routes to avoid prerender-time errors
export const dynamic = 'force-dynamic'

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <AnimationProvider>
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <VerceBot />
        </AnimationProvider>
      </body>
    </html>
  )
}
