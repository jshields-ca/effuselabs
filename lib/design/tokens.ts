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
 * Slate ramp — the dark canvas.
 *
 * The site is dark-first: light reads as light only against dark, and the whole
 * visual direction is light poured onto a surface. Brand slate sits at 700, in
 * the middle, so there is room for genuinely deep surfaces beneath it and
 * raised surfaces above it. `deep` is the page canvas; `raised` is a card
 * sitting on it; `overlay` is a control sitting on that.
 */
export const surface = {
  /** Page canvas. The darkest surface — everything else sits on this. */
  deep: '#12151B',
  /** Default section background on the dark canvas. */
  base: '#191D25',
  /** Cards and panels raised off the canvas. */
  raised: '#232833',
  /** Brand slate. Controls and borders that need to read as brand. */
  brand: '#2E3440',
  /** Hairline borders on dark surfaces. */
  border: '#3C4453',
} as const

/**
 * Warm tones.
 *
 * `parchment` is the body-text colour on dark. It replaces a cool grey
 * (#F1F3F5): cool grey on a cool canvas beside a warm serif is what makes a
 * dark theme read as clinical, and a few degrees of warmth changes the
 * temperature of the whole page for nothing.
 *
 * `ember` gives gold somewhere to fall off to, so light has depth rather than
 * sitting flat on the surface.
 *
 * `ember` is NOT a text colour. Measured against the canvas it reaches 3.65:1
 * — large text only — so it is reserved for shadow, glow falloff and edge
 * light beneath gold. `check:tokens` holds it to that by never declaring it as
 * a body pair.
 */
export const warm = {
  parchment: '#EDE8DF',
  ember: '#B4531F',
} as const

/**
 * Emission — colour used as *light* rather than as fill.
 *
 * The brand name is effundere, "to pour out", and the logo is a shell peeling
 * back to reveal a core. So gradients and glows are treated as emitted light:
 * low-alpha colour over the dark canvas, never a flat block. These values are
 * deliberately transparent; they are meant to be layered.
 */
export const emission = {
  teal: 'rgb(34 197 195 / 0.28)',
  tealSoft: 'rgb(34 197 195 / 0.12)',
  gold: 'rgb(255 210 90 / 0.22)',
  goldSoft: 'rgb(255 210 90 / 0.10)',
  /** The faint wash that keeps a dark section from reading as flat black. */
  ambient: 'rgb(34 197 195 / 0.05)',
} as const

/**
 * Grain opacity.
 *
 * A fine noise overlay over gradients so they read as atmosphere rather than as
 * a CSS gradient. Kept very low — above about 0.05 it stops looking like film
 * and starts looking like a dirty screen.
 */
export const grain = {
  subtle: 0.015,
  default: 0.03,
  strong: 0.045,
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
 * Bricolage Grotesque for display, Public Sans for everything read at length.
 * Both are loaded through `next/font` in app/layout.tsx and referenced here by
 * their CSS variables, so there is one place a face can change.
 *
 * Inter and Poppins are both gone. Inter was carrying display *and* body, and
 * it is the default typeface of nearly every generated site — using it for
 * both roles is most of why the previous pass read as templated. Poppins was
 * the logotype only, and the wordmark now sets in the display face with the
 * rest of the display type. IBM Plex Mono went earlier, with the `Code`
 * component that was its only consumer.
 *
 * The display face was Fraunces for one stage — a warm serif, on the
 * argument that warmth mattered given the founder's story and the
 * accessibility mission. In practice it read as editorial rather than a
 * software company. Warmth now comes from the parchment/ember color tokens
 * instead of the display face, freeing the face itself to read as technical.
 * See docs/DESIGN_PLAN.md.
 */
export const typography = {
  fontFamily: {
    /** Body and utility. Everything a person reads at length. */
    sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
    /** Display only, at large sizes. Never body copy. */
    display: ['var(--font-display)', 'system-ui', 'sans-serif'],
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const

/**
 * Type scale.
 *
 * There was no scale: `app/page.tsx` alone made eighteen separate size
 * decisions, each one chosen at its call site. Sizes now come from here.
 *
 * Every step is a `clamp()` so type is fluid between the minimum and the
 * maximum rather than jumping at breakpoints. The pairs are
 * [min, preferred, max]; the preferred term is viewport-relative, which is what
 * makes a display heading feel deliberate on a phone and commanding on a
 * desktop.
 *
 * `display` is for the hero only — one per page, at most.
 */
export const typeScale = {
  display: 'clamp(2.75rem, 1.5rem + 6vw, 6rem)',
  h1: 'clamp(2.25rem, 1.5rem + 3.5vw, 4rem)',
  h2: 'clamp(1.75rem, 1.25rem + 2.2vw, 2.75rem)',
  h3: 'clamp(1.25rem, 1.05rem + 0.9vw, 1.75rem)',
  h4: 'clamp(1.125rem, 1rem + 0.5vw, 1.375rem)',
  bodyLg: 'clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)',
  body: '1rem',
  bodySm: '0.875rem',
  eyebrow: '0.8125rem',
} as const

/**
 * Line heights and tracking, paired to the scale above. Display type needs
 * tighter leading and negative tracking to hold together at large sizes; body
 * type needs the opposite.
 */
export const typeSetting = {
  display: { lineHeight: '0.95', letterSpacing: '-0.03em' },
  heading: { lineHeight: '1.1', letterSpacing: '-0.02em' },
  body: { lineHeight: '1.65', letterSpacing: '0' },
  eyebrow: { lineHeight: '1.2', letterSpacing: '0.12em' },
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

  // Parchment — the body colour on every dark surface it will actually sit on.
  {
    name: 'parchment on deep canvas',
    foreground: warm.parchment,
    background: surface.deep,
  },
  {
    name: 'parchment on base canvas',
    foreground: warm.parchment,
    background: surface.base,
  },
  {
    name: 'parchment on raised card',
    foreground: warm.parchment,
    background: surface.raised,
  },
  {
    name: 'parchment on slate',
    foreground: warm.parchment,
    background: brand.slate,
  },

  // Dark canvas. Every one of these is a surface real copy sits on, so all are
  // held to the body threshold unless explicitly marked large.
  {
    name: 'white on deep canvas',
    foreground: neutral.white,
    background: surface.deep,
  },
  {
    name: 'white on base canvas',
    foreground: neutral.white,
    background: surface.base,
  },
  {
    name: 'white on raised card',
    foreground: neutral.white,
    background: surface.raised,
  },
  {
    name: 'light grey on deep canvas',
    foreground: neutral.lightGrey,
    background: surface.deep,
  },
  {
    name: 'light grey on raised card',
    foreground: neutral.lightGrey,
    background: surface.raised,
  },
  {
    name: 'teal on deep canvas',
    foreground: brand.teal,
    background: surface.deep,
  },
  {
    name: 'teal on raised card',
    foreground: brand.teal,
    background: surface.raised,
  },
  {
    name: 'gold on deep canvas',
    foreground: brand.gold,
    background: surface.deep,
  },
  {
    name: 'gold on raised card',
    foreground: brand.gold,
    background: surface.raised,
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
