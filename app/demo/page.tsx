import type { Metadata } from 'next'
import Link from 'next/link'
import { HiArrowLeft, HiArrowRight, HiOutlineSparkles } from 'react-icons/hi2'

import { SplineScene, VERCEDO_SPLINE_SCENE_URL } from '@/components/interactive/SplineScene'
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
    <div className="bg-obsidian">
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <SplineScene sceneUrl={VERCEDO_SPLINE_SCENE_URL} mode="full" className="absolute inset-0 -z-30" />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-obsidian/75 via-obsidian/80 to-obsidian" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="flex items-center justify-between px-6 pt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              <HiArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <button
              data-cal-link="vercedo/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="inline-flex items-center gap-2 rounded-full bg-aurora px-5 py-2.5 text-sm font-semibold text-obsidian transition hover:bg-aurora/90"
            >
              Book a Live Walkthrough
              <HiArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center px-6 pb-20 text-center">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-aurora/80">
              <HiOutlineSparkles className="h-4 w-4 text-aurora" />
              3D Demo
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Explore Vercedo&apos;s <span className="text-gradient">Immersive Receptionist</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Glide your cursor to feel the depth and motion powering our AI receptionist experience. On smaller screens or when motion is
              reduced, you&apos;ll see a calm gradient preview instead.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                data-cal-link="vercedo/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Schedule Personalized Demo
                <HiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DemoHeroSection />
      <CTASection />
    </div>
  )
}
