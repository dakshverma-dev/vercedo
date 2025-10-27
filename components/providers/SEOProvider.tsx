"use client"

import { DefaultSeo } from 'next-seo'
import { defaultSEOConfig } from '@/next-seo.config'
import { ReactNode } from 'react'

export function SEOProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      {children}
    </>
  )
}
