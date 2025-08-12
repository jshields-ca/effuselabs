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
        {/* Critical resource hints for LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Inline critical CSS for hero section */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-critical { 
              background: linear-gradient(135deg, rgb(29,29,33) 0%, rgb(128,130,133) 50%, rgb(34,67,82) 100%);
              min-height: 100vh;
              display: flex;
              align-items: center;
              position: relative;
              overflow: hidden;
            }
            .hero-text { color: white; text-align: center; z-index: 20; position: relative; }
            .hero-title { font-size: 3rem; font-weight: bold; line-height: 1.1; margin-bottom: 1.5rem; }
            @media (min-width: 640px) { .hero-title { font-size: 4rem; } }
            @media (min-width: 1024px) { .hero-title { font-size: 5rem; } }
          `
        }} />
      </head>
      <body className={`antialiased font-sans`}>
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  )
}
