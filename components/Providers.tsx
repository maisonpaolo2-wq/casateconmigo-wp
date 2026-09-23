'use client'

import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'

/** Raíz cliente: respeta prefers-reduced-motion y arranca siempre arriba. */
export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
