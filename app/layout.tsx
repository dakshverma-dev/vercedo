import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from '@/components/ui/NavBar'
import { Footer } from '@/components/ui/Footer'
import { VerceBot } from '@/components/ui/VerceBot'
import { AnimationProvider } from '@/components/providers/AnimationProvider'
import { ReactNode } from 'react'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://vercedo.ai'),
  title: {
    default: 'Vercedo – AI Receptionist for Indian Businesses',
    template: '%s | Vercedo AI Receptionist'
  },
  description:
    'AI receptionists that speak Hindi & English fluently. Answer every call, book appointments automatically, and capture every lead—24/7. Starting ₹6,000/month.',
  keywords: [
    'AI receptionist',
    'Hindi AI',
    'Indian business',
    'appointment booking',
    'call answering',
    'AI assistant India',
    'virtual receptionist',
    'business automation India'
  ],
  authors: [{ name: 'Vercedo' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vercedo.ai',
    siteName: 'Vercedo',
    title: 'Vercedo – AI Receptionist for Indian Businesses',
    description:
      'AI receptionists that speak Hindi & English fluently. Never miss another customer call—24/7 availability, automatic appointment booking.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Vercedo – Never Miss Another Customer Call'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vercedo – AI Receptionist for Indian Businesses',
    description:
      'AI receptionists that speak Hindi & English fluently. Never miss another customer call—24/7 availability.',
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
        <Script
          id="cal-embed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) { 
                let p = function (a, ar) { a.q.push(ar); }; 
                let d = C.document; 
                C.Cal = C.Cal || function () { 
                  let cal = C.Cal; 
                  let ar = arguments; 
                  if (!cal.loaded) { 
                    cal.ns = {}; 
                    cal.q = cal.q || []; 
                    d.head.appendChild(d.createElement("script")).src = A; 
                    cal.loaded = true; 
                  } 
                  if (ar[0] === L) { 
                    const api = function () { p(api, arguments); }; 
                    const namespace = ar[1]; 
                    api.q = api.q || []; 
                    if(typeof namespace === "string"){
                      cal.ns[namespace] = cal.ns[namespace] || api;
                      p(cal.ns[namespace], ar);
                      p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar); 
                    return;
                  } 
                  p(cal, ar); 
                }; 
              })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", "30min", {origin:"https://app.cal.com"});
              Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
            `
          }}
        />
        <NavBar />
        <AnimationProvider>
          <main className="flex-grow">{children}</main>
        </AnimationProvider>
        <Footer />
        <VerceBot />
      </body>
    </html>
  )
}
