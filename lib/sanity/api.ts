import { sanityClient, heroSectionQuery, headerQuery } from './config'
import { unstable_cache } from 'next/cache'
import type { HeroSectionContent, HeaderContent } from './types'

// Default hero content (fallback when CMS is not available)
const defaultHeroContent: Omit<HeroSectionContent, '_id' | '_type'> = {
  title: "Intelligent Software for Small Business Growth",
  subtitle: "Effuse Labs",
  description: "We pour out innovative solutions that transform operational burdens into competitive strengths for small businesses.",
  primaryCtaText: "Get Started",
  secondaryCtaText: "Learn More",
  primaryCtaHref: "#contact",
  secondaryCtaHref: "#about",
  backgroundSettings: {
    enableParticles: true,
    particleColor: "#22C5C3",
    gradientOverlay: true
  }
}

export const getHeroContent = unstable_cache(
  async (): Promise<Omit<HeroSectionContent, '_id' | '_type'>> => {
    try {
      const heroContent = await sanityClient.fetch<HeroSectionContent>(heroSectionQuery)
      if (heroContent) {
        return {
          title: heroContent.title || defaultHeroContent.title,
          subtitle: heroContent.subtitle || defaultHeroContent.subtitle,
          description: heroContent.description || defaultHeroContent.description,
          primaryCtaText: heroContent.primaryCtaText || defaultHeroContent.primaryCtaText,
          secondaryCtaText: heroContent.secondaryCtaText || defaultHeroContent.secondaryCtaText,
          primaryCtaHref: heroContent.primaryCtaHref || defaultHeroContent.primaryCtaHref,
          secondaryCtaHref: heroContent.secondaryCtaHref || defaultHeroContent.secondaryCtaHref,
          backgroundSettings: heroContent.backgroundSettings || defaultHeroContent.backgroundSettings,
        }
      }
      return defaultHeroContent
    } catch (error) {
      console.warn('Failed to fetch hero content from Sanity CMS, using default content:', error)
      return defaultHeroContent
    }
  },
  ['heroContent'],
  { revalidate: 60 }
)

// For preview mode (development)
export function getHeroContentPreview(initialData: HeroSectionContent) {
  return {
    data: initialData,
    loading: false,
    error: null
  }
}

// Default header content (fallback when CMS is not available)
const defaultHeaderContent: HeaderContent = {
  brandName: 'Effuse Labs',
  navLinks: [
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'Get Started', href: '#contact' }
}

export const getHeaderContent = unstable_cache(
  async (): Promise<HeaderContent> => {
    try {
      const header = await sanityClient.fetch<Partial<HeaderContent> | null>(headerQuery)
      if (!header) return defaultHeaderContent
      return {
        brandName: header.brandName || defaultHeaderContent.brandName,
        navLinks: Array.isArray(header.navLinks) && header.navLinks.length > 0
          ? header.navLinks.map(link => ({
              label: link?.label || 'Link',
              href: link?.href || '#',
            }))
          : defaultHeaderContent.navLinks,
        cta: header.cta?.label && header.cta?.href
          ? { label: header.cta.label, href: header.cta.href }
          : defaultHeaderContent.cta,
      }
    } catch (error) {
      console.warn('Failed to fetch header content from Sanity CMS, using default content:', error)
      return defaultHeaderContent
    }
  },
  ['headerContent'],
  { revalidate: 300 }
)
