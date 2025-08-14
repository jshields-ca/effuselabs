import type { Metadata, Viewport } from 'next'
import './globals.css'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

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
  // Canonical base for all absolute URLs
  metadataBase: new URL('https://www.effuse.io'),
  alternates: { canonical: '/' },
  // Favicons & PWA
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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Critical resource hints for LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* ONLY Critical above-the-fold CSS inlined */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical Hero Section Only */
            .hero-critical { 
              background: linear-gradient(135deg, rgb(29,29,33) 0%, rgb(128,130,133) 50%, rgb(34,67,82) 100%);
              min-height: 100vh;
              display: flex;
              align-items: center;
              position: relative;
              overflow: hidden;
            }
            .hero-text { color: white; z-index: 20; position: relative; width: 100%; }
            .hero-title { 
              font-size: 3rem; 
              font-weight: bold; 
              line-height: 1.1; 
              margin-bottom: 1.5rem; 
              color: white; 
            }
            
            /* Critical Background Animations */
            @keyframes flow-horizontal {
              0% { transform: translateX(-50px) rotate(0deg); }
              100% { transform: translateX(50px) rotate(5deg); }
            }
            @keyframes float-slow {
              0%, 100% { transform: translateY(0px) scale(1); }
              50% { transform: translateY(-20px) scale(1.05); }
            }
            @keyframes float-reverse {
              0%, 100% { transform: translateY(0px) translateX(0px); }
              50% { transform: translateY(20px) translateX(30px); }
            }
            
            /* Critical Responsive */
            @media (min-width: 640px) { 
              .hero-title { font-size: 4rem; }
            }
            @media (min-width: 1024px) { 
              .hero-title { font-size: 5rem; }
              .hero-text { text-align: left; }
            }
            @media (max-width: 1023px) { 
              .hero-text { text-align: center; }
            }
          `
        }} />
      </head>
      <body className={`antialiased font-sans`}>
        <PageWrapper>
          {children}
        </PageWrapper>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
