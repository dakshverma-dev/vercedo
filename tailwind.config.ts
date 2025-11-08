import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#020617',
        cobalt: '#1f6feb',
        platinum: '#e2e8f0',
        silver: '#c0c0c0',
        mercury: '#f8fafc',
        aurora: '#7dd3fc',
        obsidian: '#090a10'
      },
      backgroundImage: {
        'grid-glow': "radial-gradient(circle at center, rgba(125, 211, 252, 0.25) 0, rgba(2, 6, 23, 0.1) 45%, rgba(2, 6, 23, 0.6) 100%)",
        'gradient-aurora': 'linear-gradient(135deg, rgba(31, 111, 235, 0.35), rgba(125, 211, 252, 0.2))',
        'gradient-midnight': 'linear-gradient(160deg, #020617 0%, #111827 45%, #0f172a 100%)'
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
        display: ['var(--font-archivo)', ...fontFamily.sans]
      },
      boxShadow: {
        glow: '0 0 45px rgba(31, 111, 235, 0.55)',
        card: '0 12px 60px rgba(15, 23, 42, 0.45)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}

export default config
