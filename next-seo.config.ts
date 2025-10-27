import { DefaultSeoProps } from 'next-seo'

export const defaultSEOConfig: DefaultSeoProps = {
  titleTemplate: '%s | Vercedo AI Automation Platform',
  defaultTitle: 'Vercedo – Automate the Impossible',
  description:
    'Vercedo is the premium AI automation platform crafting intelligent workflows, orchestration, and insights for visionary enterprises.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vercedo.ai',
    siteName: 'Vercedo',
    images: [
      {
        url: 'https://vercedo.ai/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Vercedo – Automate the Impossible'
      }
    ]
  },
  twitter: {
    handle: '@vercedo',
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#020617'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }
  ]
}
