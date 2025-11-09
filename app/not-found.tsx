import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'
import { AnimatedCTAButton } from '@/components/ui/AnimatedCTAButton'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-obsidian px-6">
      <div className="text-center">
        <h1 className="mb-4 font-display text-8xl font-bold text-white">404</h1>
        <p className="mb-2 text-2xl text-slate-300">Orbit not found</p>
        <p className="mb-8 text-slate-400">
          This page seems to have drifted into deep space.
        </p>
        <AnimatedCTAButton
          href="/"
          variant="primary"
        >
          <HiArrowLeft />
          Return to Mission Control
        </AnimatedCTAButton>
      </div>
    </div>
  )
}
