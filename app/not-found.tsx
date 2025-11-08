import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-obsidian px-6">
      <div className="text-center">
        <h1 className="mb-4 font-display text-8xl font-bold text-white">404</h1>
        <p className="mb-2 text-2xl text-slate-300">Orbit not found</p>
        <p className="mb-8 text-slate-400">
          This page seems to have drifted into deep space.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-cobalt via-silver/40 to-cobalt px-8 py-4 text-base font-semibold text-white shadow-glow transition hover:scale-105"
        >
          <HiArrowLeft />
          Return to Mission Control
        </Link>
      </div>
    </div>
  )
}
