import { PageWrapper } from '@/components/layout/PageWrapper'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Public_Sans } from 'next/font/google'
import './globals.css'

/**
 * Display. A warm serif with SOFT, WONK and opsz axes, so headings can be
 * tuned rather than merely set — see docs/DESIGN_PLAN.md for why warmth is the
 * argument here. Display sizes only; it never carries body copy.
 */
const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK', 'opsz'],
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
      className={`scroll-smooth ${fraunces.variable} ${publicSans.variable}`}
    >
      <body>
        <PageWrapper>{children}</PageWrapper>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
