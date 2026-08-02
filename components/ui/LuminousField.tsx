import { cn } from '@/lib/utils'
import React from 'react'

interface LuminousFieldProps {
  /** `hero` is the full effect; `section` is a quieter version for body sections. */
  intensity?: 'hero' | 'section'
  className?: string
}

/**
 * The luminous field — the site's core visual device.
 *
 * The brand name is effundere, "to pour out", and the logo is a slate-to-teal
 * shell peeling back to reveal a golden core. This renders that idea as a
 * background: overlapping radial gradients that behave like light sources
 * bleeding through a dark surface, rather than a flat gradient painted on it.
 *
 * Built entirely from CSS radial gradients and an inline SVG noise filter. No
 * WebGL, no canvas, no animation frame loop — it costs one composited layer and
 * works with JavaScript disabled. That is deliberate: the site has to be
 * striking *and* be an example of accessible, unbloated engineering, and a
 * shader would have quietly traded the second for the first.
 *
 * Motion is a slow drift, and it is suppressed entirely under
 * prefers-reduced-motion (see globals.css). The static composition is designed
 * to stand on its own, not to look like an animation that stopped.
 *
 * Decorative: hidden from assistive technology.
 */
export const LuminousField: React.FC<LuminousFieldProps> = ({
  intensity = 'hero',
  className,
}) => {
  const isHero = intensity === 'hero'

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
    >
      {/* Teal pour — the shell. Enters from the upper left. */}
      <div
        className={cn(
          'absolute rounded-full blur-3xl',
          isHero
            ? 'motion-safe:animate-drift-slow -left-[15%] -top-[25%] h-[70vh] w-[70vw]'
            : '-left-[10%] -top-[40%] h-[45vh] w-[55vw]'
        )}
        style={{
          background: `radial-gradient(circle at center, ${
            isHero ? 'rgb(34 197 195 / 0.30)' : 'rgb(34 197 195 / 0.14)'
          } 0%, transparent 70%)`,
        }}
      />

      {/* Gold core — the spark. Smaller and tighter, so it reads as the source
          rather than as a second wash. */}
      <div
        className={cn(
          'absolute rounded-full blur-3xl',
          isHero
            ? 'motion-safe:animate-drift-reverse right-[5%] top-[15%] h-[45vh] w-[45vw]'
            : 'right-0 top-[10%] h-[30vh] w-[35vw]'
        )}
        style={{
          background: `radial-gradient(circle at center, ${
            isHero ? 'rgb(255 210 90 / 0.22)' : 'rgb(255 210 90 / 0.10)'
          } 0%, transparent 65%)`,
        }}
      />

      {/* Deep teal counterweight low on the canvas, so the composition does not
          float toward the top of the viewport. */}
      {isHero && (
        <div
          className="motion-safe:animate-drift-slower absolute -bottom-[20%] left-[25%] h-[50vh] w-[60vw] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle at center, rgb(34 197 195 / 0.16) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Grain. Without this the gradients read as CSS; with it they read as
          atmosphere. Kept very low — above ~0.05 it stops looking like film and
          starts looking like a dirty screen. */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}

export default LuminousField
