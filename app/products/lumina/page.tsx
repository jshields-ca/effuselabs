import ProductPageTemplate from '@/components/product/ProductPageTemplate'
import { product } from '@/lib/design/tokens'
import {
  FeatureBreakdownSection,
  FinalCTASection,
  PainSolutionSection,
  PricingSection,
} from '@/components/sections'

export const metadata = {
  title: 'Lumina — Effuse Labs',
  description:
    'Lumina is an all-in-one, AI-powered platform for salons and barbershops.',
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
        accentGradient: {
          from: product.lumina.gold,
          to: product.lumina.coral,
        },
      }}
    >
      <PainSolutionSection
        problem={{
          heading: 'Managing multiple systems is exhausting',
          description:
            'Juggling separate apps for bookings, payments, inventory, and marketing creates inefficiencies, data silos, and endless frustration.',
          icon: '😫',
        }}
        solution={{
          heading: 'One platform, unlimited potential',
          description:
            'Lumina unifies everything you need in a single, intuitive platform designed specifically for salon and barbershop workflows.',
          icon: '✨',
        }}
        bullets={[
          'Eliminate data entry between systems',
          'Reduce monthly software costs by 60%',
          'Get real-time insights across your business',
          'Scale without adding complexity',
        ]}
        background="light"
      />

      <FeatureBreakdownSection
        heading="Everything you need, beautifully integrated"
        subheading="From client acquisition to financial reporting, Lumina handles it all with salon-specific intelligence."
        items={[
          {
            icon: '📅',
            title: 'Smart Booking System',
            description:
              'AI-powered scheduling that learns your preferences, reduces no-shows, and maximizes chair utilization.',
          },
          {
            icon: '💳',
            title: 'Integrated Payments',
            description:
              'Accept payments, track tips, manage splits, and handle refunds without leaving the platform.',
          },
          {
            icon: '📊',
            title: 'Business Intelligence',
            description:
              'Real-time dashboards showing revenue trends, client retention, and performance metrics that matter.',
          },
          {
            icon: '👥',
            title: 'Client Relationship Management',
            description:
              'Build lasting relationships with automated follow-ups, preference tracking, and personalized communications.',
          },
          {
            icon: '📦',
            title: 'Inventory Management',
            description:
              'Track product levels, automate reorders, and integrate with suppliers for seamless operations.',
          },
          {
            icon: '📱',
            title: 'Mobile-First Design',
            description:
              'Full functionality on any device, with offline capabilities for uninterrupted service.',
          },
        ]}
        variant="grid"
        background="dark"
      />

      <PricingSection
        placeholder={{
          heading: 'Coming Soon',
          description:
            'Lumina is currently in development. Join our waitlist to be the first to know when we launch and get exclusive early-bird pricing.',
          ctaLabel: 'Join the Waitlist',
          ctaHref: '#waitlist',
        }}
        background="light"
      />

      <FinalCTASection
        heading="Ready to transform your salon?"
        description="Join the waitlist and be among the first to experience the future of salon management."
        primaryCta={{
          label: 'Join the Waitlist',
          href: '#waitlist',
        }}
        secondaryCta={{
          label: 'Learn More',
          href: 'mailto:hello@effuse.io',
        }}
        background="gradient"
      />
    </ProductPageTemplate>
  )
}
