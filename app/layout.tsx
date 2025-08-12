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
        {/* Complete critical CSS inlined to eliminate blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical Hero Styles */
            .hero-critical { 
              background: linear-gradient(135deg, rgb(29,29,33) 0%, rgb(128,130,133) 50%, rgb(34,67,82) 100%);
              min-height: 100vh;
              display: flex;
              align-items: center;
              position: relative;
              overflow: hidden;
            }
            .hero-text { color: white; z-index: 20; position: relative; width: 100%; }
            .hero-title { font-size: 3rem; font-weight: bold; line-height: 1.1; margin-bottom: 1.5rem; color: white; }
            
            /* Critical Layout Styles */
            .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .text-center { text-align: center; }
            .text-white { color: white; }
            .text-lg { font-size: 1.125rem; }
            .text-xl { font-size: 1.25rem; }
            .font-bold { font-weight: bold; }
            .font-medium { font-medium: 500; }
            .leading-tight { line-height: 1.25; }
            .leading-relaxed { line-height: 1.625; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-12 { margin-bottom: 3rem; }
            .space-y-8 > * + * { margin-top: 2rem; }
            .grid { display: grid; }
            .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
            .items-center { align-items: center; }
            .gap-10 { gap: 2.5rem; }
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .justify-center { justify-content: center; }
            .w-full { width: 100%; }
            .max-w-7xl { max-width: 80rem; }
            .max-w-3xl { max-width: 48rem; }
            .relative { position: relative; }
            .absolute { position: absolute; }
            .inset-0 { inset: 0; }
            .z-10 { z-index: 10; }
            .z-20 { z-index: 20; }
            .opacity-10 { opacity: 0.1; }
            .opacity-90 { opacity: 0.9; }
            
            /* Button Styles */
            .btn { 
              display: inline-flex; 
              align-items: center; 
              padding: 0.75rem 1.5rem; 
              border-radius: 0.5rem; 
              font-weight: 500; 
              text-decoration: none; 
              transition: all 0.2s; 
            }
            .btn-primary { 
              background: #FFD700; 
              color: #1d1d21; 
            }
            .btn-primary:hover { 
              background: #ffd900; 
              transform: translateY(-1px); 
            }
            .btn-secondary { 
              border: 2px solid white; 
              color: white; 
              background: transparent; 
            }
            .btn-secondary:hover { 
              background: white; 
              color: #1d1d21; 
            }
            
            /* Responsive */
            @media (min-width: 640px) { 
              .hero-title { font-size: 4rem; }
              .px-4 { padding-left: 1.5rem; padding-right: 1.5rem; }
            }
            @media (min-width: 1024px) { 
              .hero-title { font-size: 5rem; }
              .hero-text { text-align: left; }
              .grid-cols-1 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
              .px-4 { padding-left: 2rem; padding-right: 2rem; }
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
      </body>
    </html>
  )
}
