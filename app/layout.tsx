import type { Metadata, Viewport } from 'next'
import './globals.css'
import { PageWrapper } from '@/components/layout/PageWrapper'

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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical font for LCP optimization */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`antialiased font-sans`}>
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  )
}
