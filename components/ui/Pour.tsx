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
 * This used to be two uniform-width strokes with a dash gap in the middle —
 * geometrically correct, but Jeremy's read on it (after living with it) was
 * exact: "these just look like glowing lines... I don't get the sense of
 * flow, or liquid, or effuse." A stroke of constant width doesn't behave like
 * a fluid; nothing about it narrows, gathers or pours. So the shell and core
 * are now each two *filled* ribbons — tapering to a near-invisible point at
 * the outer edges and widening into a curved mouth at the opening, the way a
 * stream gathers as it approaches where it spills. A design-committee pass
 * (proposal + independent critique) considered a single continuous ribbon
 * spanning the whole divider and a droplet/dash-travel animation on top of
 * it; both were cut — the former loses the "shell parting to reveal light"
 * idea this component exists to encode, and the latter is a second animated
 * layer earning its keep only if the shape fix alone isn't enough. Filled
 * shapes also sidestep the bug this component just shipped a fix for:
 * `vector-effect="non-scaling-stroke"` combined with `preserveAspectRatio=
 * "none"`'s non-uniform scaling was the suspected cause of jagged rendering
 * on a real mobile browser this environment couldn't reproduce. A fill has no
 * stroke width to scale unevenly in the first place, so the whole class of
 * bug no longer applies here.
 *
 * Ambient drift on the glow is the only motion, and it is `motion-safe:`
 * gated. Under reduced motion the ribbons are static and fully formed — a
 * composition, not an animation that stopped.
 *
 * Decorative: hidden from assistive technology.
 */
export const Pour: React.FC<PourProps> = ({
  openness = 0.5,
  flip = false,
  className,
}) => {
  const open = Math.max(0, Math.min(1, openness))

  // Half the width of the opening, in viewBox units. Widening this is what
  // "opens" the shell — same idea as the old dash gap, expressed as geometry
  // instead of a stroke-dasharray fraction.
  const gapHalf = 60 + open * 180
  const leftEnd = 600 - gapHalf
  const rightStart = 600 + gapHalf

  // Shell ribbon: a near-invisible tail (top and bottom edges 1 unit apart)
  // for most of its length, gathering sharply in the final stretch before
  // the opening into a wide mouth — the way a stream stays thin until it
  // nears the spout, then swells right before it pours. Control points sit
  // close to the mouth end on purpose, so the flare happens late and reads
  // as a gather rather than a gradual, even widening.
  const shellLeft = `M0 90 C ${leftEnd * 0.55} 89, ${leftEnd * 0.88} 62, ${leftEnd} 4 L ${leftEnd} 55 C ${leftEnd * 0.88} 78, ${leftEnd * 0.55} 91, 0 91 Z`
  const shellRight = `M1200 90 C ${1200 - (1200 - rightStart) * 0.55} 89, ${1200 - (1200 - rightStart) * 0.88} 62, ${rightStart} 4 L ${rightStart} 55 C ${1200 - (1200 - rightStart) * 0.88} 78, ${1200 - (1200 - rightStart) * 0.55} 91, 1200 91 Z`

  // Core ribbon: the same gathering shape, smaller throughout, sitting a
  // little lower so it reads as the light running along the inside of the
  // shell rather than a second copy of it.
  const coreLeft = `M0 101 C ${leftEnd * 0.6} 100, ${leftEnd * 0.9} 78, ${leftEnd} 26 L ${leftEnd} 42 C ${leftEnd * 0.9} 90, ${leftEnd * 0.6} 102, 0 102 Z`
  const coreRight = `M1200 101 C ${1200 - (1200 - rightStart) * 0.6} 100, ${1200 - (1200 - rightStart) * 0.9} 78, ${rightStart} 26 L ${rightStart} 42 C ${1200 - (1200 - rightStart) * 0.9} 90, ${1200 - (1200 - rightStart) * 0.6} 102, 1200 102 Z`

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
          {/*
            userSpaceOnUse, spanning the full 0-1200 viewBox, rather than each
            ribbon's own bounding box. That way the left and right ribbons
            sample opposite ends of one continuous ramp instead of each
            re-running the same gradient independently — they read as one
            shell pulled apart, not two unrelated shapes that happen to match.
          */}
          <linearGradient
            id="pour-shell"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="1200"
            y1="0"
            y2="0"
          >
            <stop offset="0%" stopColor={brand.slate} stopOpacity="0" />
            <stop offset="28%" stopColor={surface.border} stopOpacity="1" />
            <stop offset="50%" stopColor={brand.teal} stopOpacity="1" />
            <stop offset="72%" stopColor={surface.border} stopOpacity="1" />
            <stop offset="100%" stopColor={brand.slate} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="pour-core"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="1200"
            y1="0"
            y2="0"
          >
            <stop offset="0%" stopColor={brand.gold} stopOpacity="0" />
            <stop offset="50%" stopColor={brand.gold} stopOpacity="0.9" />
            <stop offset="100%" stopColor={brand.gold} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/*
          The shell. Two tapered ribbons rather than one dashed line — the
          opening between them is the gap itself, so widening it opens the
          shell rather than drawing a second shape.
        */}
        <path d={shellLeft} fill="url(#pour-shell)" />
        <path d={shellRight} fill="url(#pour-shell)" />

        {/*
          The core edge, sitting just inside the shell and visible only near
          the opening. This is the golden ribbon a visitor reads as the light
          source pouring through.
        */}
        <path
          d={coreLeft}
          fill="url(#pour-core)"
          opacity={0.55 + open * 0.45}
          filter="url(#pour-glow)"
        />
        <path
          d={coreRight}
          fill="url(#pour-core)"
          opacity={0.55 + open * 0.45}
          filter="url(#pour-glow)"
        />
      </svg>
    </div>
  )
}

export default Pour
