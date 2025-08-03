'use client'

import { NextStudio } from 'next-sanity/studio'
import { sanityConfig } from '@/sanity/config'

export default function BlogmakerPage() {
  return (
    <div style={{ height: '100vh' }}>
      <NextStudio config={sanityConfig} />
    </div>
  )
}