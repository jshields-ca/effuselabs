import React from 'react'
import ProductPageTemplate from '@/components/product/ProductPageTemplate'

export const metadata = {
  title: 'Lumina — Effuse Labs',
  description: 'Lumina is an all-in-one, AI-powered platform for salons and barbershops.'
}

export default function LuminaProductPage() {
  return (
    <ProductPageTemplate
      hero={{
        productName: 'Lumina',
        headline: 'Illuminate your growth with an all‑in‑one platform',
        subheadline:
          'Replace the patchwork of apps with a single, elegant system for bookings, financials, and client relationships.',
        primaryCtaLabel: 'Join the Waitlist',
        primaryCtaHref: '#waitlist',
        background: 'light',
        accentGradient: { from: '#FFD25A', to: '#FF7F50' },
      }}
    />
  )
}


