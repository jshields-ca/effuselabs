import { brand, surface } from '@/lib/design/tokens'
import { cn } from '@/lib/utils'
import React from 'react'

interface PourProps {
  /**
   * How far open the shell is, 0–1. The page runs these in ascending order so
   * the arc opens as a visitor descends — nearly closed near the top, fully
   * open by the closing call to action.
   */
  openness?: number
  /** Flip the arc so consecutive pours do not read as a repeating stamp. */
  flip?: boolean
  className?: string
}

/**
 * The Pour — this site's signature element.
 *
 * The firm is named for _effundere_, "to pour out", and its mark is a
 * slate-to-teal shell peeling back to reveal a golden core. This is that idea
 * made structural: between sections the shell parts and light spills from one
 * into the next.
 *
 * It is a divider, and it encodes what a divider is actually for — one thing
 * giving way to the next. That distinction matters. The previous pass used a
 * plain gradient rule between sections, which meant nothing and read as
 * decoration; the review called it "meh", correctly.
 *
 * `openness` widens the gap and brightens the spill. Running it from roughly
 * 0.25 at the top of the page to 1.0 at the bottom makes the page itself
 * perform the hatching, which is the point — a visitor should not be able to
 * name why the bottom of the page feels more open than the top.
 *
 * CONSTRUCTION
 *
 * Two SVG arcs and a blurred radial spill. No WebGL, no canvas, no animation
 * frame loop — it costs one composited layer and works with JavaScript
 * disabled. The stroke uses `pathLength="1"` so dash values are expressed as
 * fractions and the geometry stays legible rather than being tuned by
 * magic numbers.
 *
 * Ambient drift is the only motion, and it is `motion-safe:` gated. Under
 * reduced motion the arcs are static and fully formed — a composition, not an
 * animation that stopped.
 *
 * Decorative: hidden from assistive technology.
 */
export const Pour: React.FC<PourProps> = ({
  openness = 0.5,
  flip = false,
  className,
}) => {
  const open = Math.max(0, Math.min(1, openness))

  // The gap the light comes through, as a fraction of the arc's length.
  const gap = 0.08 + open * 0.34
  const drawn = (1 - gap) / 2

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none relative isolate h-32 w-full overflow-hidden sm:h-44',
        flip && 'scale-y-[-1]',
        className
      )}
    >
      {/*
        The spill, in two parts. A tight gold bloom sitting on the opening, and
        a wider teal wash beneath it. Separating them is what makes it read as
        a light *source* rather than a coloured smudge: the hot centre is small
        and the falloff is large.
      */}
      <div
        className="motion-safe:animate-drift-slower absolute left-1/2 top-1/2 h-[260%] w-[85%] -translate-x-1/2 -translate-y-1/2 blur-3xl"
        style={{
          background: `radial-gradient(ellipse 60% 50% at center, rgb(34 197 195 / ${
            0.16 + open * 0.2
          }) 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[90%] w-[38%] -translate-x-1/2 -translate-y-1/2 blur-2xl"
        style={{
          background: `radial-gradient(ellipse 70% 55% at center, rgb(255 210 90 / ${
            0.22 + open * 0.3
          }) 0%, rgb(180 83 31 / ${0.1 + open * 0.12}) 45%, transparent 72%)`,
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          {/*
            The core edge glows rather than merely being drawn. Without this it
            reads as a stray line; with it, it reads as the thing emitting the
            light in the spill above.
          */}
          <filter id="pour-glow" x="-20%" y="-200%" width="140%" height="500%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="pour-shell" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={brand.slate} stopOpacity="0" />
            <stop offset="28%" stopColor={surface.border} stopOpacity="1" />
            <stop offset="50%" stopColor={brand.teal} stopOpacity="1" />
            <stop offset="72%" stopColor={surface.border} stopOpacity="1" />
            <stop offset="100%" stopColor={brand.slate} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pour-core" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={brand.gold} stopOpacity="0" />
            <stop offset="50%" stopColor={brand.gold} stopOpacity="0.9" />
            <stop offset="100%" stopColor={brand.gold} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/*
          The shell. A single arc split by a dash gap at its centre — the gap
          is the opening, so widening it opens the shell rather than drawing a
          second shape.
        */}
        <path
          d="M0 88 Q 600 8 1200 88"
          fill="none"
          stroke="url(#pour-shell)"
          strokeWidth="2.5"
          pathLength={1}
          strokeDasharray={`${drawn} ${gap} ${drawn}`}
          strokeLinecap="round"
        />

        {/*
          The core edge, sitting just below the opening and visible only across
          the gap. This is the golden line a visitor reads as the light source.
        */}
        <path
          d="M0 100 Q 600 20 1200 100"
          fill="none"
          stroke="url(#pour-core)"
          strokeWidth="3"
          pathLength={1}
          strokeDasharray={`0 ${drawn} ${gap} ${drawn}`}
          strokeLinecap="round"
          opacity={0.55 + open * 0.45}
          filter="url(#pour-glow)"
        />
      </svg>
    </div>
  )
}

export default Pour
