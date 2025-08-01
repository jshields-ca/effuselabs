import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
