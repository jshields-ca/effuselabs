import { PageWrapper } from '@/components/layout/PageWrapper'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Public_Sans } from 'next/font/google'
import './globals.css'

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
 * This description is what a search engine or an LLM crawler actually reads
 * to summarize the company — it was claiming Lumina "transforms salon and
 * barber operations" in the present tense on a product that hasn't launched
 * (see docs/ROADMAP.md), and it described only one of Effuse Labs' two real
 * lines of business. Corrected to be honest about both, in the same terms
 * CLAUDE.md itself uses to describe the company — this is a factual fix,
 * not a copywriting pass; real marketing copy is stage 6.
 */
const SITE_TITLE =
  'Effuse Labs - Intelligent Software for Small Business Growth'
const SITE_DESCRIPTION =
  'Effuse Labs builds accessible software for small businesses: Lumina, an open-source platform for salons and barbershops now in development, and hands-on support setting up self-hosted, open-source tools for businesses that would rather own their software than rent it.'

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'small business software',
    'salon management',
    'AI-powered insights',
    'business growth',
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
  manifest: '/site.webmanifest',
  /*
   * A square logo, not a designed 1200x630 social card — this repo has no
   * wide OG image yet. `summary` (not `summary_large_image`) is the right
   * Twitter card type for a square image; using the large-image card with a
   * square asset would letterbox it. A real per-route OG image is stage-7
   * follow-up work, tracked in docs/ROADMAP.md rather than faked here.
   */
  openGraph: {
    type: 'website',
    siteName: 'Effuse Labs',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: 'https://www.effuse.io',
    images: [
      { url: '/logo-800x800.png', width: 800, height: 800, alt: 'Effuse Labs' },
    ],
  },
  twitter: {
    card: 'summary',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/logo-800x800.png'],
  },
}

// Viewport is a dedicated export rather than metadata.viewport, per Next 16.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

/*
 * Organization structured data. Named accounts only — the social profile
 * URLs in content/site.ts still include LinkedIn/Twitter/Bluesky
 * placeholders pending Jeremy sending the real ones (see docs/ROADMAP.md),
 * and a `sameAs` claim search engines treat as fact shouldn't point at a
 * guessed URL. GitHub is confirmed real, so it's the only one listed here.
 */
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Effuse Labs',
  url: 'https://www.effuse.io',
  logo: 'https://www.effuse.io/logo-800x800.png',
  sameAs: ['https://github.com/effuselabs'],
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
