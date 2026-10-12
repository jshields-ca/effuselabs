import type { Metadata } from 'next'

/**
 * Per-route metadata: title, description, canonical URL, and the Open Graph
 * and Twitter fields a link preview is built from.
 *
 * WHY THIS EXISTS
 * Next does not derive `og:title` or `og:url` from a page's `title`. A page
 * that set only `title` and `description` inherited the root layout's whole
 * `openGraph` object, so a shared link to /services previewed with the
 * homepage's title, description and URL. Building every route's metadata
 * here keeps the preview fields in step with the page they describe.
 *
 * Images are not set here: each route's `opengraph-image.tsx` supplies them,
 * and Next copies the Open Graph image into `twitter:image` when none is set.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  /** Route path, resolved against `metadataBase` in app/layout.tsx. */
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: 'Effuse Labs',
      locale: 'en_CA',
      title,
      description,
      url: path,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
