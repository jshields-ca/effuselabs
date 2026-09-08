import type { MetadataRoute } from 'next'

/*
 * One entry per real route. This used to list only the homepage — the six
 * routes added since (the Lumina product page, /about, /services, and the
 * three legal pages) were invisible to search engines despite being real,
 * indexable pages. Keep this in step with e2e/routes.ts and the actual page
 * routes under app/ by hand for now; there's no single source both draw
 * from yet.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.effuse.io'
  const lastModified = new Date()

  return [
    { url: `${base}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    {
      url: `${base}/products/lumina`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${base}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${base}/accessibility`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
