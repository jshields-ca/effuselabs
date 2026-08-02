/**
 * Effuse Labs design tokens — the single source of truth.
 *
 * Every colour, gradient, radius, shadow and font in the site is declared here
 * and nowhere else. `tailwind.config.ts` imports this file rather than
 * restating values.
 *
 * WHY THIS FILE EXISTS
 * Colour values had drifted across three places — `tailwind.config.ts`,
 * `app/globals.css`, and per-component class strings — and the three disagreed.
 * Roughly sixty utility classes referenced tokens that were never defined
 * anywhere: `text-light-grey`, `bg-brand-gold`, `border-medium-grey`,
 * `brand-teal-light`. Tailwind emits nothing for an unknown token and reports
 * no error, so these failed silently. The skip-to-content link rendered with no
 * background and no text colour; `Card` borders did not render at all;
 * `SectionContainer background="light"` produced a white section.
 * `docs/BRAND_COLOR_SYSTEM.md` documented four more tokens that had never been
 * added. There was no single place a colour fix could land, which is why colour
 * fixes kept being redone.
 *
 * RULES
 * - No raw hex in `.tsx`. Import from here, or use a Tailwind class.
 * - Adding a colour means adding it here first.
 * - `npm run check:tokens` fails the build on a raw hex outside this directory
 *   or a colour utility whose token does not exist.
 */

/**
 * BRAND HIERARCHY
 *
 * The logo already encodes it: a slate-to-teal shell peeling back to reveal a
 * golden core. So the firm owns the shell and the products own their own
 * accents.
 *
 *   Effuse Labs   slate → teal, with gold as the spark of insight
 *   Lumina        gold → coral
 *
 * This matters because the corporate `AccentBar` currently defaults to Lumina's
 * gradient — the parent brand renders in its product's colours, which stops
 * working the moment a second product exists. The components are re-pointed in
 * the visual identity pass; this file establishes the vocabulary first.
 */

/** Effuse Labs. The firm's own identity — do not alter without a brand decision. */
export const brand = {
  /** The shell. Primary dark surface and the base of the corporate gradient. */
  slate: '#2E3440',
  /** The shell's luminous edge. Primary accent: links, focus rings, dividers. */
  teal: '#22C5C3',
  /** The core. The spark of insight — used sparingly, never as a large fill. */
  gold: '#FFD25A',
} as const

/**
 * Product palettes. Each product owns its accent; all of them sit inside the
 * Effuse Labs slate/teal frame.
 */
export const product = {
  lumina: {
    gold: '#FFD25A',
    coral: '#FF7A5A',
    /** Deep teal for Lumina containers and sidebars. */
    deepTeal: '#0B2B33',
  },
} as const

/**
 * Neutral ramp.
 *
 * `offBlack` is #1D2D35, per the brand style guide, which is marked Finalized.
 * `tailwind.config.ts` previously carried #1D1D21 — a transcription slip that
 * made body text very slightly warmer and greyer than the brand intends.
 */
export const neutral = {
  offBlack: '#1D2D35',
  mediumGrey: '#808285',
  /** Borders and dividers. Documented in the brand guide but never defined. */
  lightNeutral: '#E4E6E7',
  lightGrey: '#F1F3F5',
  white: '#FFFFFF',
} as const

/**
 * Semantic status colours. All four were documented in
 * `docs/BRAND_COLOR_SYSTEM.md` as Tailwind classes that did not exist.
 */
export const status = {
  success: '#22C58B',
  warning: '#FFB800',
  error: '#E5484D',
} as const

/**
 * Gradients.
 *
 * These previously lived in `theme.extend.colors` as `linear-gradient(...)`
 * strings, which Tailwind emitted as `background-color: linear-gradient(...)` —
 * not valid CSS, so they never rendered. They belong in `backgroundImage`.
 */
export const gradients = {
  /** The corporate gradient: the shell. */
  effuse: `linear-gradient(90deg, ${brand.slate} 0%, ${brand.teal} 100%)`,
  /** Lumina's radiant gradient. */
  lumina: `linear-gradient(90deg, ${product.lumina.gold} 0%, ${product.lumina.coral} 100%)`,
} as const

/**
 * Typography.
 *
 * Inter carries everything. Poppins is the logotype only — it is a graphic
 * asset, not a UI face. IBM Plex Mono was previously loaded on every page for a
 * single `Code` component that no route renders; it is not declared here.
 */
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    /** Logotype only. */
    display: ['Poppins', 'Inter', 'sans-serif'],
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const

export const radii = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
} as const

/** Shadows are tinted with slate rather than pure black, so they sit in-brand. */
export const shadows = {
  sm: '0 1px 2px 0 rgb(46 52 64 / 0.05)',
  md: '0 4px 6px -1px rgb(46 52 64 / 0.10), 0 2px 4px -2px rgb(46 52 64 / 0.10)',
  lg: '0 10px 15px -3px rgb(46 52 64 / 0.10), 0 4px 6px -4px rgb(46 52 64 / 0.10)',
  xl: '0 20px 25px -5px rgb(46 52 64 / 0.10), 0 8px 10px -6px rgb(46 52 64 / 0.10)',
  /** Brand glows. Used on hover for interactive surfaces. */
  tealGlow: `0 0 24px -4px ${brand.teal}66`,
  goldGlow: `0 0 24px -4px ${brand.gold}66`,
} as const

/**
 * Foreground/background pairs that must meet WCAG AA — 4.5:1 for body text,
 * 3:1 for large text. `npm run check:tokens` asserts every entry, so a
 * regression fails CI rather than becoming a future accessibility audit.
 *
 * This list matters more than usual here: the site is moving to a dark-first
 * surface, and "accessible" is a claim the business makes about itself.
 */
export const contrastPairs: ReadonlyArray<{
  name: string
  foreground: string
  background: string
  /** Large text (>=18.66px bold or >=24px) only needs 3:1. */
  largeText?: boolean
}> = [
  {
    name: 'body on white',
    foreground: neutral.offBlack,
    background: neutral.white,
  },
  {
    name: 'body on light grey',
    foreground: neutral.offBlack,
    background: neutral.lightGrey,
  },
  {
    name: 'white on slate',
    foreground: neutral.white,
    background: brand.slate,
  },
  {
    name: 'light grey on slate',
    foreground: neutral.lightGrey,
    background: brand.slate,
  },
  {
    name: 'teal on slate',
    foreground: brand.teal,
    background: brand.slate,
    largeText: true,
  },
  { name: 'gold on slate', foreground: brand.gold, background: brand.slate },
  { name: 'slate on gold', foreground: brand.slate, background: brand.gold },
  { name: 'slate on teal', foreground: brand.slate, background: brand.teal },
  {
    name: 'off-black on light neutral',
    foreground: neutral.offBlack,
    background: neutral.lightNeutral,
  },
]

/**
 * Combinations that look tempting and fail WCAG AA. Recorded here so the
 * constraint is discoverable at the source of truth rather than rediscovered
 * during an accessibility audit.
 *
 * - White on teal (#22C5C3) is about 1.9:1. Teal is a surface for DARK text —
 *   slate on teal reaches roughly 6:1. Never place white text on teal.
 * - White on gold (#FFD25A) is worse still. Gold is the spark: use it as a
 *   small accent, or as a background for slate text only.
 * - `mediumGrey` (#808285) on white is about 3.5:1 — acceptable for large text
 *   only, never for body copy. It was previously the default colour of the
 *   `Text` component.
 */
export const prohibitedPairs = [
  { name: 'white on teal', foreground: neutral.white, background: brand.teal },
  { name: 'white on gold', foreground: neutral.white, background: brand.gold },
  {
    name: 'medium grey on white',
    foreground: neutral.mediumGrey,
    background: neutral.white,
  },
] as const
