/**
 * Social share cards — the copy on the 1200×630 image a platform shows when
 * someone pastes a link to this site.
 *
 * Every string here is lifted from copy already on the page it represents
 * (the hero eyebrow, the page headline), not written for the card. A share
 * card is a preview of the page, so it should say what the page says.
 * e2e/smoke.spec.ts fails if a card's title no longer appears on its page —
 * the home and Services cards drifted exactly that way once already.
 *
 * `variant` follows the brand hierarchy in CLAUDE.md: Effuse Labs' own pages
 * use the firm's slate → teal; only Lumina's page uses Lumina's gold → coral.
 */

export interface ShareCard {
  /** Small caps line above the headline. */
  eyebrow: string
  /** The headline. Keep it short enough to read in a thumbnail. */
  title: string
  /** Also the image's alt text (`og:image:alt`). */
  alt: string
  variant: 'effuse' | 'lumina'
}

export const shareCards = {
  home: {
    eyebrow: 'Self-hosted, fully managed',
    title: "Own your software. We'll keep it running.",
    alt: "Effuse Labs — Own your software. We'll keep it running.",
    variant: 'effuse',
  },
  services: {
    eyebrow: 'Services',
    title: 'Own your software. Skip the upkeep.',
    alt: 'Effuse Labs Services — Own your software. Skip the upkeep.',
    variant: 'effuse',
  },
  about: {
    eyebrow: 'About Effuse Labs',
    title: 'Two ways to stop renting your software',
    alt: 'About Effuse Labs — Two ways to stop renting your software',
    variant: 'effuse',
  },
  lumina: {
    eyebrow: 'Lumina · by Effuse Labs',
    title: 'Illuminate your growth with an all‑in‑one platform',
    alt: 'Lumina by Effuse Labs — Illuminate your growth with an all-in-one platform',
    variant: 'lumina',
  },
  /*
   * The legal pages override `openGraph` in their metadata, which also drops
   * the image they would otherwise inherit from app/opengraph-image.tsx — so
   * each needs its own card. The title is the page's own heading.
   */
  privacy: {
    eyebrow: 'Effuse Labs',
    title: 'Privacy Policy',
    alt: 'Effuse Labs — Privacy Policy',
    variant: 'effuse',
  },
  terms: {
    eyebrow: 'Effuse Labs',
    title: 'Terms of Service',
    alt: 'Effuse Labs — Terms of Service',
    variant: 'effuse',
  },
  accessibility: {
    eyebrow: 'Effuse Labs',
    title: 'Accessibility Statement',
    alt: 'Effuse Labs — Accessibility Statement',
    variant: 'effuse',
  },
} as const satisfies Record<string, ShareCard>
