"use client"

import dynamic from 'next/dynamic'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

export const VERCEDO_SPLINE_SCENE_URL = 'https://prod.spline.design/wqWlAWMp4DgzHIFj/scene.splinecode'

type SplineSceneProps = {
  sceneUrl: string
  mode?: 'background' | 'full'
  className?: string
  disableMotion?: boolean
}

type PointerPosition = {
  x: number
  y: number
}

const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false
})

export function SplineScene({ sceneUrl, mode = 'background', className, disableMotion = false }: SplineSceneProps) {
  const [mounted, setMounted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobileViewport, setIsMobileViewport] = useState(false)

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number>()
  const pointerRef = useRef<PointerPosition>({ x: 0, y: 0 })

  const perspective = mode === 'full' ? 1400 : 1200

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileQuery = window.matchMedia('(max-width: 768px)')

    const handleReduceMotion = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    const handleMobile = (event: MediaQueryListEvent) => {
      setIsMobileViewport(event.matches)
    }

    setPrefersReducedMotion(reduceMotionQuery.matches)
    setIsMobileViewport(mobileQuery.matches)

    const addListener = (query: MediaQueryList, handler: (event: MediaQueryListEvent) => void) => {
      if (typeof query.addEventListener === 'function') {
        query.addEventListener('change', handler)
      } else if (typeof query.addListener === 'function') {
        query.addListener(handler)
      }
    }

    const removeListener = (query: MediaQueryList, handler: (event: MediaQueryListEvent) => void) => {
      if (typeof query.removeEventListener === 'function') {
        query.removeEventListener('change', handler)
      } else if (typeof query.removeListener === 'function') {
        query.removeListener(handler)
      }
    }

    addListener(reduceMotionQuery, handleReduceMotion)
    addListener(mobileQuery, handleMobile)

    return () => {
      removeListener(reduceMotionQuery, handleReduceMotion)
      removeListener(mobileQuery, handleMobile)
    }
  }, [mounted])

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const translateLimit = mode === 'full' ? 26 : 12
  const rotateLimit = mode === 'full' ? 4.5 : 2.4

  const applyTransform = useCallback(() => {
    if (!wrapperRef.current) return

    const { x, y } = pointerRef.current
    const translateX = x * translateLimit
    const translateY = y * -translateLimit
    const rotateX = y * -rotateLimit
    const rotateY = x * rotateLimit

    wrapperRef.current.style.transform = `perspective(${perspective}px) translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }, [perspective, rotateLimit, translateLimit])

  const scheduleTransform = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = window.requestAnimationFrame(() => {
      applyTransform()
    })
  }, [applyTransform])

  const shouldFallback = disableMotion || prefersReducedMotion || isMobileViewport
  const renderSpline = mounted && !shouldFallback

  useEffect(() => {
    if (!renderSpline) {
      setIsLoaded(false)
    }
  }, [renderSpline])

  useEffect(() => {
    if (!renderSpline) return

    pointerRef.current = { x: 0, y: 0 }
    scheduleTransform()

    const handlePointerMove = (event: PointerEvent) => {
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1
      const normalizedY = (event.clientY / window.innerHeight) * 2 - 1

      pointerRef.current = {
        x: normalizedX,
        y: normalizedY
      }

      scheduleTransform()
    }

    const handlePointerLeave = () => {
      pointerRef.current = { x: 0, y: 0 }
      scheduleTransform()
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [renderSpline, scheduleTransform])

  const loaderClassName = cn(
    'absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out',
    isLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'
  )

  const fallbackContent = useMemo(() => {
    if (mode === 'full') {
      return (
        <div className="relative z-10 flex h-full w-full items-center justify-center px-6 py-12">
          <div className="glass max-w-md rounded-3xl px-8 py-6 text-center text-sm text-platinum/80">
            Interactive 3D demo is available on larger screens or when motion is enabled.
          </div>
        </div>
      )
    }

    return null
  }, [mode])

  return (
    <div className={cn('relative h-full w-full overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-cobalt/20 to-obsidian/80" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/30 to-obsidian/80" aria-hidden="true" />

      {renderSpline ? (
        <>
          <div
            ref={wrapperRef}
            className={cn(
              'relative h-full w-full will-change-transform transition-transform duration-[1200ms] ease-out',
              mode === 'background' ? 'pointer-events-none' : 'pointer-events-auto'
            )}
            style={{ transform: `perspective(${perspective}px) translate3d(0, 0, 0)` }}
          >
            <Spline scene={sceneUrl} className="h-full w-full pointer-events-none" onLoad={() => setIsLoaded(true)} />
          </div>
          <div className={loaderClassName}>
            <div className="glass rounded-3xl px-6 py-3 text-sm text-platinum/80">
              Loading immersive scene...
            </div>
          </div>
        </>
      ) : (
        fallbackContent
      )}
    </div>
  )
}
