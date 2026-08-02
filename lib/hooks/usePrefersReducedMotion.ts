'use client'

import { useEffect, useState } from 'react'

// SSR-safe media query hook for prefers-reduced-motion
const usePrefersReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) {
      setReduced(false)
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setReduced(mediaQuery.matches)
    handleChange()

    mediaQuery.addEventListener?.('change', handleChange)
    return () => mediaQuery.removeEventListener?.('change', handleChange)
  }, [])

  return reduced
}

export default usePrefersReducedMotion
