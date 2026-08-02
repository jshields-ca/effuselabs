'use client'

import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

function subscribe(onChange: () => void): () => void {
  if (typeof window === 'undefined' || !('matchMedia' in window)) {
    return () => {}
  }
  const mediaQuery = window.matchMedia(QUERY)
  mediaQuery.addEventListener('change', onChange)
  return () => mediaQuery.removeEventListener('change', onChange)
}

function getSnapshot(): boolean {
  if (typeof window === 'undefined' || !('matchMedia' in window)) return false
  return window.matchMedia(QUERY).matches
}

// The server has no media queries; assume motion is allowed and let the client
// correct it on hydration.
function getServerSnapshot(): boolean {
  return false
}

/**
 * SSR-safe `prefers-reduced-motion` hook.
 *
 * Built on `useSyncExternalStore` rather than useState + useEffect. The old
 * implementation called `setReduced` synchronously inside the effect body,
 * which triggers a second render pass on every mount — React 19's
 * `react-hooks/set-state-in-effect` rule flags it, and it is the documented
 * wrong way to read an external store. This subscribes to the media query
 * directly instead, so the correct value is available on first client render.
 */
const usePrefersReducedMotion = (): boolean =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

export default usePrefersReducedMotion
