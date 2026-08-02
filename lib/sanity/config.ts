import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
}

// Sanity client for fetching data
export const sanityClient = createClient(config)

// GROQ queries
export const heroSectionQuery = `
  *[_type == "heroSection"] | order(_updatedAt desc)[0] {
    _id,
    title,
    subtitle,
    description,
    primaryCtaText,
    secondaryCtaText,
    primaryCtaHref,
    secondaryCtaHref,
    backgroundSettings
  }
`

export const headerQuery = `
  *[_type == "siteSettings"][0] {
    brandName,
    navLinks[]{label, href},
    cta{label, href}
  }
`
