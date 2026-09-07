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

export const metadata: Metadata = {
  title: 'Effuse Labs - Intelligent Software for Small Business Growth',
  description:
    'Effuse Labs builds AI-powered business management solutions for small and medium-sized businesses. Our flagship product, Lumina, transforms salon and barber operations.',
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
}

// Next.js 14: configure viewport via dedicated export instead of metadata.viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
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
        <PageWrapper>{children}</PageWrapper>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
