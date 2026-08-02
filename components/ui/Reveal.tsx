import { cn } from '@/lib/utils'
import React from 'react'

/**
 * Beyond this, staggering stops reading as rhythm and starts reading as items
 * failing to arrive.
 */
const MAX_ORDER = 5

interface RevealProps {
  children: React.ReactNode
  className?: string
  /**
   * Stagger step. Each increment shifts this item's reveal slightly later in
   * the scroll range. Clamped internally, so a raw list index can be passed
   * straight in without the caller having to cap it.
   */
  order?: number
  as?: React.ElementType
}

/**
 * Scroll-triggered reveal, with no JavaScript.
 *
 * This replaces `LightweightAnimatedContainer`, which was a client component
 * using `useState` + `IntersectionObserver` and rendered its children at
 * `opacity-0` until the observer fired. Two problems with that:
 *
 * 1. Content was hidden by default and only revealed by script. If the
 *    JavaScript failed, was blocked, or simply had not run yet, the page was
 *    blank below the hero. For a firm whose pitch is accessible technology,
 *    "invisible unless JS runs" is the wrong default.
 * 2. It forced every section that used it to ship as a client component.
 *
 * The CSS `animation-timeline: view()` does the same job natively. It is
 * wrapped in `@supports`, so a browser without it simply shows the content —
 * the fallback is *visible*, not hidden. And the whole thing sits inside
 * `prefers-reduced-motion: no-preference`, so a reader who has asked for less
 * motion gets a static page rather than a page that animates anyway.
 *
 * Being a server component, this ships no JavaScript at all.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  order = 0,
  as: Component = 'div',
}) => (
  <Component
    className={cn('reveal', className)}
    style={
      order
        ? ({
            '--reveal-order': Math.max(0, Math.min(order, MAX_ORDER)),
          } as React.CSSProperties)
        : undefined
    }
  >
    {children}
  </Component>
)

export default Reveal
