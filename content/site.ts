/**
 * Site-wide content: navigation, footer, contact details, social links.
 *
 * WHY THIS FILE EXISTS
 * This replaces a Sanity CMS integration that never worked. `lib/sanity/`
 * built its client at module scope with a fallback project id of `demo`, and
 * `PageWrapper` awaited a fetch against it on every single page render — a
 * network round trip, on every request, to a project that does not exist. The
 * fetch always failed and always fell back to hardcoded defaults, so the CMS
 * contributed nothing but latency, ~120 kB of client bundle, and the illusion
 * that content was editable.
 *
 * Content now lives here: typed, versioned in git, and resolved at build time.
 * There is one editor of this site, and that editor writes TypeScript.
 *
 * If a CMS is ever genuinely needed — a non-technical editor, or content that
 * changes without a deploy — this module is the seam to swap. Keep the shapes
 * below stable and a fetch can be dropped in behind them.
 */

export interface NavLink {
  label: string
  href: string
}

export interface FooterLinkGroup {
  heading: string
  links: NavLink[]
}

export interface SocialLink {
  label: string
  href: string
}

/*
 * These anchors resolve on the homepage. Now that /products/lumina exists as
 * a second real route, a bare `#contact` would try to scroll the current
 * page — a dead link from anywhere but home. `/#contact` always routes to
 * the homepage section first.
 */

/** Primary navigation, left to right. */
export const navLinks: NavLink[] = [
  { label: 'Products', href: '/#products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
]

/** The single call to action in the header. */
export const headerCta: NavLink = {
  label: 'Get in Touch',
  href: '/#contact',
}

export const brand = {
  name: 'Effuse Labs',
  tagline: 'Intelligent Software for Small Business Growth',
  blurb: 'Effuse Labs: Pouring out potential for small business.',
} as const

export const contact = {
  email: 'jeremy@effuse.io',
  location: 'Winnipeg, Manitoba, Canada',
} as const

/**
 * Footer columns.
 *
 * Deliberately short. The previous footer advertised Careers, News, an API
 * Reference, Documentation, Support and a Blog — six anchors that pointed at
 * IDs present on no page — plus /privacy, /terms and /accessibility, which
 * were hard 404s. Every link here resolves to something that exists today.
 * The legal pages and the rest return as real routes when the site's
 * information architecture is built.
 */
export const footerGroups: FooterLinkGroup[] = [
  {
    heading: 'Products',
    links: [{ label: 'Lumina', href: '/products/lumina' }],
  },
  {
    heading: 'Company',
    links: [{ label: 'Contact', href: '/#contact' }],
  },
]

/**
 * Social profiles.
 *
 * GitHub is confirmed real (Jeremy, 2026-09-08): https://github.com/effuselabs,
 * with Lumina's own repo at https://github.com/effuselabs/lumina.
 *
 * LinkedIn, Twitter/X and Bluesky are confirmed as real accounts Effuse Labs
 * will have, but the actual URLs haven't been sent yet — these three hrefs
 * are placeholders per the placeholder-content policy in docs/ROADMAP.md,
 * not verified addresses. Replace with the real URLs when they arrive; don't
 * ship these to production first.
 */
export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/effuselabs' },
  { label: 'Twitter', href: 'https://twitter.com/effuselabs' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/effuselabs.bsky.social' },
  { label: 'GitHub', href: 'https://github.com/effuselabs' },
]
