'use client'

import { useEffect, useRef } from 'react'

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

/**
 * Traps Tab focus inside a container while it is active, and restores focus to
 * whatever was focused before on deactivation.
 *
 * Without this, tabbing through an open mobile menu walks straight out of it
 * and into the page behind — which is still there, still scrollable by
 * keyboard, and visually covered by a backdrop. A keyboard or screen reader
 * user ends up interacting with content they cannot see.
 *
 * Escape and body-scroll locking are handled in `useNavigation`.
 */
export function useFocusTrap<T extends HTMLElement>(active: boolean) {
  const containerRef = useRef<T | null>(null)

  useEffect(() => {
    if (!active) return

    const container = containerRef.current
    if (!container) return

    const previouslyFocused = document.activeElement as HTMLElement | null

    // Move focus into the container so the next Tab starts from inside it.
    const focusables = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        el => el.offsetParent !== null
      )

    focusables()[0]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      const elements = focusables()
      if (elements.length === 0) return

      const first = elements[0]
      const last = elements[elements.length - 1]
      const activeEl = document.activeElement

      if (event.shiftKey && activeEl === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && activeEl === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [active])

  return containerRef
}

export default useFocusTrap
