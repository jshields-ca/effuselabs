// Sanity document types

export interface HeroSectionContent {
  _id: string
  _type: 'heroSection'
  title: string
  subtitle: string
  description: string
  primaryCtaText: string
  secondaryCtaText: string
  primaryCtaHref: string
  secondaryCtaHref: string
  backgroundSettings?: {
    enableParticles?: boolean
    particleColor?: string
    gradientOverlay?: boolean
  }
}

export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

// Header / Navigation document types
export interface HeaderNavLink {
  label: string
  href: string
}

export interface HeaderCta {
  label: string
  href: string
}

export interface HeaderContent {
  brandName: string
  navLinks: HeaderNavLink[]
  cta?: HeaderCta
}