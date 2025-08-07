import { sanityClient, heroSectionQuery } from './config'
import type { HeroSectionContent } from './types'

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

export async function getHeroContent(): Promise<Omit<HeroSectionContent, '_id' | '_type'>> {
  try {
    const heroContent = await sanityClient.fetch<HeroSectionContent>(heroSectionQuery)
    
    // Return CMS content if available, otherwise use defaults
    if (heroContent) {
      return {
        title: heroContent.title || defaultHeroContent.title,
        subtitle: heroContent.subtitle || defaultHeroContent.subtitle,
        description: heroContent.description || defaultHeroContent.description,
        primaryCtaText: heroContent.primaryCtaText || defaultHeroContent.primaryCtaText,
        secondaryCtaText: heroContent.secondaryCtaText || defaultHeroContent.secondaryCtaText,
        primaryCtaHref: heroContent.primaryCtaHref || defaultHeroContent.primaryCtaHref,
        secondaryCtaHref: heroContent.secondaryCtaHref || defaultHeroContent.secondaryCtaHref,
        backgroundSettings: heroContent.backgroundSettings || defaultHeroContent.backgroundSettings
      }
    }
    
    return defaultHeroContent
  } catch (error) {
    console.warn('Failed to fetch hero content from Sanity CMS, using default content:', error)
    return defaultHeroContent
  }
}

// For preview mode (development)
export function getHeroContentPreview(initialData: HeroSectionContent) {
  return {
    data: initialData,
    loading: false,
    error: null
  }
}
