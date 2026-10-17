import { PageWrapper } from '@/components/layout/PageWrapper'
import { pageMetadata } from '@/lib/metadata'
import { brand } from '@/content/site'
import { surface } from '@/lib/design/tokens'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Public_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

/*
 * Self-hosted Umami, replacing @vercel/analytics + @vercel/speed-insights —
 * see docs/ROADMAP.md for why. `data-website-id` is a public identifier, not
 * a secret, so it's safe to inline here rather than plumb through an env
 * var. `recorder.js` additionally captures session replay and heatmap data;
 * that's disclosed in the privacy policy's "What this site collects"
 * section, not just the script tag.
 */
const UMAMI_SCRIPT_SRC = 'https://analytics.sctr.tech/script.js'
const UMAMI_RECORDER_SRC = 'https://analytics.sctr.tech/recorder.js'
const UMAMI_WEBSITE_ID = '9dc66a3c-b7bd-40ee-8b8a-96792963ce59'

/**
 * Display. A grotesk with enough character in its letterforms (the
 * lowercase g and a especially) to read as considered rather than a
 * generated-site default, and enough technical confidence for a software
 * firm — see docs/DESIGN_PLAN.md. Warmth now comes from the parchment/ember
 * color tokens rather than the display face itself. Display sizes only; it
 * never carries body copy.
 */
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

/**
 * Body and utility. Drawn for the US design system with legibility as the
 * brief, which is the right basis for a firm that sells accessibility.
 *
 * This replaces Inter, which was carrying both roles. Inter is the default
 * typeface of nearly every generated site, and using it for display and body
 * alike was the single largest reason the previous pass read as templated.
 */
const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

/*
 * The description is what a search engine or an LLM crawler actually reads
 * to summarize the company. It lives in content/site.ts so the manifest and
 * the structured data below say the same thing.
 */
const SITE_TITLE =
  'Effuse Labs - Software for Small Business, Self-Hosted and Fully Managed'

export const metadata: Metadata = {
  ...pageMetadata({
    title: SITE_TITLE,
    description: brand.description,
    path: '/',
  }),
  keywords: [
    'small business software',
    'salon management',
    'self-hosted software',
    'managed open-source hosting',
    'Canadian hosting',
  ],
  authors: [{ name: 'Effuse Labs' }],
  creator: 'Effuse Labs',
  publisher: 'Effuse Labs',
  robots: 'index, follow',
  metadataBase: new URL('https://www.effuse.io'),
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  // The share image is app/opengraph-image.tsx, not a field here — see
  // lib/og/renderShareCard.tsx for why the old square logo didn't work.
}

// Viewport is a dedicated export rather than metadata.viewport, per Next 16.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  // Mobile browser chrome matches the page canvas instead of flashing white.
  themeColor: surface.deep,
}

/*
 * Organization structured data. All of GitHub, LinkedIn and Twitter/X are
 * confirmed-real accounts (see content/site.ts). Bluesky is left out here
 * even though the handle is real too — @effuse.io is a custom-domain
 * handle that only resolves once effuse.io's DNS is set up for domain
 * verification, which hasn't happened yet, so the profile isn't reliably
 * reachable by that handle right now. A `sameAs` claim search engines
 * treat as fact shouldn't point at something not yet live.
 */
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: brand.name,
  description: brand.description,
  url: 'https://www.effuse.io',
  logo: 'https://www.effuse.io/logo-800x800.png',
  sameAs: [
    'https://github.com/effuselabs',
    'https://www.linkedin.com/company/effuse-labs',
    'https://x.com/effuselabs',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${bricolage.variable} ${publicSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <PageWrapper>{children}</PageWrapper>
        <Script
          src={UMAMI_SCRIPT_SRC}
          data-website-id={UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
        <Script
          src={UMAMI_RECORDER_SRC}
          data-website-id={UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
