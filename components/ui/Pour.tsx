import { brand, surface } from '@/lib/design/tokens'
import { cn } from '@/lib/utils'
import React from 'react'

interface PourProps {
  /**
   * How far the light has spread, 0–1. The page runs these in ascending
   * order so the divider reads as more "arrived" the further a visitor has
   * travelled — nearly a pinprick near the top, a wide, bright ripple by
   * the closing call to action.
   */
  openness?: number
  /**
   * Mirror vertically, so the bead sits below the seam and points down —
   * keeps two consecutive instances from reading as a repeating stamp.
   */
  flip?: boolean
  className?: string
}

/**
 * The Pour — this site's signature element. "The Bead."
 *
 * The firm is named for _effundere_, "to pour out". This divider stages that
 * as a single event: one drop of light, gathered at the seam between two
 * sections, touching a hairline surface and sending a ripple out along the
 * full width.
 *
 * REDESIGN, NOT THE ORIGINAL
 *
 * The first version of this component staged "pouring" as a parting
 * curtain — two tapered ribbons peeling apart around a soft wash filling the
 * gap between them, echoing the logo's shell-peels-back-to-reveal-a-core
 * shape directly. That version shipped, and then took five rounds to
 * actually work: a hard visible seam from clipping the ribbons' glow, a wash
 * that silently failed to render on Firefox, a wash that rendered but far
 * too small and dim to reach the ribbons, and finally the real root cause —
 * `feGaussianBlur`, and every SVG filter primitive, composites in linearRGB
 * by spec default while gradients and fills default to sRGB, and browsers
 * have a documented history of disagreeing about it. Once confirmed working
 * identically on Chromium, Firefox and Safari, Jeremy asked for a design
 * committee to see whether a different visual treatment could do the same
 * job without carrying that history. Two exploratory concepts were built
 * and rendered for comparison; he picked this one. The old ribbon-and-wash
 * `Pour` is gone — its own doc comment and the "Post-MVP feedback round" in
 * `docs/ROADMAP.md` are where that history now lives, not here.
 *
 * NO FILTER PRIMITIVES
 *
 * The lesson from that history is structural, not cosmetic: this component
 * uses zero SVG filters. The ripple rings are plain stroked ellipses with
 * per-ring opacity doing the falloff; the bead's glow is a radial gradient,
 * already soft by construction. A gradient is not subject to the
 * `color-interpolation-filters` default the way a filter primitive is — so
 * there is no engine-dependent color space for it to disagree about. If this
 * ever needs to look softer, the answer is another gradient stop, not a
 * blur filter.
 *
 * ONE BOLD THING, EVERYTHING ELSE QUIET
 *
 * `docs/DESIGN_PLAN.md`'s standing principle for this element. This is a
 * deliberately leaner drawing than the original — one hairline, four
 * concentric rings, one bead, one small glow — line work rather than filled
 * atmosphere, closer to the hairline borders the rest of the site already
 * uses for elevation than to a glow effect. The bead's own fill is a
 * straight vertical teal-to-gold gradient — shell, then core, the same order
 * `EffuseMark`'s two-tone split already uses — and gold never becomes a
 * large fill: the bead and its glow are both small relative to the
 * full-width canvas.
 *
 * Ambient motion is a small vertical drift on the bead only — one source of
 * motion, per the design plan's "one ambient motion is atmosphere, two is a
 * screensaver" — reusing the `animate-drift-slower` keyframe this file and
 * `LuminousField` already share, gated on `motion-safe:`. Under reduced
 * motion the bead sits at rest against the hairline: a finished composition,
 * not a drop frozen mid-fall.
 *
 * Decorative: hidden from assistive technology.
 */
export const Pour: React.FC<PourProps> = ({
  openness = 0.5,
  flip = false,
  className,
}) => {
  const open = Math.max(0, Math.min(1, openness))

  const cx = 600
  const seamY = 60

  // The bead grows slightly as the page opens up — more has poured by the
  // time a visitor reaches the bottom.
  const dropH = 34 + open * 16
  const dropW = 9 + open * 5
  const topY = seamY - dropH
  const drop = `M ${cx} ${topY} C ${cx + dropW} ${topY + dropH * 0.45}, ${cx + dropW} ${seamY - dropW * 0.3}, ${cx} ${seamY} C ${cx - dropW} ${seamY - dropW * 0.3}, ${cx - dropW} ${topY + dropH * 0.45}, ${cx} ${topY} Z`

  // Four concentric rings carrying the ripple outward. Flattened (small `ry`)
  // so they read as a horizontal band of light across a short divider rather
  // than circles. Reach and brightness both grow with `openness`; the
  // hairline itself does not — the seam is always there, the light widens.
  const ringBase = 50 + open * 170
  const rings = [1, 1.9, 2.9, 4.1].map((mult, i) => ({
    rx: ringBase * mult,
    ry: (3 + i * 1.6) * (0.6 + open * 0.6),
    opacity: [0.5, 0.32, 0.18, 0.08][i] * (0.35 + open * 0.75),
  }))

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none relative isolate h-32 w-full sm:h-44',
        flip && 'scale-y-[-1]',
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          {/*
            The hairline. Fades to nothing at both edges rather than ending
            in a hard stop, but constant regardless of `openness`: the
            structural seam between sections is always there, only the light
            on it changes.
          */}
          <linearGradient
            id="pour-hairline"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="1200"
            y1="0"
            y2="0"
          >
            <stop offset="0%" stopColor={brand.slate} stopOpacity="0" />
            <stop offset="50%" stopColor={surface.border} stopOpacity="0.9" />
            <stop offset="100%" stopColor={brand.slate} stopOpacity="0" />
          </linearGradient>
          {/*
            The bead: teal shell above, gold core below — the same order
            EffuseMark's two-tone split uses, drawn as a drop instead of a
            traced silhouette.
          */}
          <linearGradient
            id="pour-bead"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1={topY}
            y2={seamY}
          >
            <stop offset="0%" stopColor={brand.teal} />
            <stop offset="100%" stopColor={brand.gold} />
          </linearGradient>
          {/*
            A small radial glow beneath the bead where it meets the seam —
            the spark the ripple is carrying outward. Gradient-soft by
            construction; no filter needed for a shape this size.
          */}
          <radialGradient id="pour-glow">
            <stop
              offset="0%"
              stopColor={brand.gold}
              stopOpacity={0.55 + open * 0.35}
            />
            <stop offset="70%" stopColor={brand.gold} stopOpacity="0.08" />
            <stop offset="100%" stopColor={brand.gold} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* The seam. Always present, independent of openness. */}
        <line
          x1="0"
          y1={seamY}
          x2="1200"
          y2={seamY}
          stroke="url(#pour-hairline)"
          strokeWidth="1.5"
        />

        {/* The ripple: four stroked rings, no fill, fading outward. */}
        {rings.map((ring, i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={seamY}
            rx={ring.rx}
            ry={ring.ry}
            fill="none"
            stroke={brand.teal}
            strokeOpacity={ring.opacity}
            strokeWidth="1.25"
          />
        ))}

        {/* The bead and its glow — the one thing that moves. */}
        <g className="motion-safe:animate-drift-slower">
          <ellipse
            cx={cx}
            cy={seamY}
            rx={28 + open * 14}
            ry={16 + open * 8}
            fill="url(#pour-glow)"
          />
          <path d={drop} fill="url(#pour-bead)" />
        </g>
      </svg>
    </div>
  )
}

export default Pour
