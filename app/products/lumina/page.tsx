import ProductPageTemplate from '@/components/product/ProductPageTemplate'
import { contact, repos } from '@/content/site'
import { product } from '@/lib/design/tokens'
import {
  FeatureBreakdownSection,
  FinalCTASection,
  PainSolutionSection,
} from '@/components/sections'
import {
  CalendarDays,
  ChartLine,
  CreditCard,
  Frown,
  Package,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react'

export const metadata = {
  title: 'Lumina — Effuse Labs',
  description:
    'Lumina is an all-in-one, AI-powered platform for salons and barbershops.',
}

export default function LuminaProductPage() {
  return (
    <ProductPageTemplate
      hero={{
        logoSrc: '/brand/lumina-mark.png',
        logoAlt: '',
        logoWidth: 800,
        logoHeight: 558,
        productName: 'Lumina',
        headline: 'Illuminate your growth with an all‑in‑one platform',
        subheadline:
          'Replace the patchwork of apps with a single, elegant system for bookings, financials, and client relationships.',
        primaryCtaLabel: 'Start a Conversation',
        primaryCtaHref: '/#contact',
        secondaryCtaLabel: 'View on GitHub',
        secondaryCtaHref: repos.lumina,
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
          icon: Frown,
        }}
        solution={{
          heading: 'One platform, unlimited potential',
          description:
            'Lumina unifies everything you need in a single, intuitive platform designed specifically for salon and barbershop workflows.',
          icon: Sparkles,
        }}
        bullets={[
          'Eliminate data entry between systems',
          'Reduce monthly software costs by 60%',
          'Get real-time insights across your business',
          'Scale without adding complexity',
        ]}
      />

      <FeatureBreakdownSection
        heading="Everything you need, beautifully integrated"
        subheading="From client acquisition to financial reporting, Lumina handles it all with salon-specific intelligence."
        items={[
          {
            icon: CalendarDays,
            title: 'Smart Booking System',
            description:
              'AI-powered scheduling that learns your preferences, reduces no-shows, and maximizes chair utilization.',
          },
          {
            icon: CreditCard,
            title: 'Integrated Payments',
            description:
              'Accept payments, track tips, manage splits, and handle refunds without leaving the platform.',
          },
          {
            icon: ChartLine,
            title: 'Business Intelligence',
            description:
              'Real-time dashboards showing revenue trends, client retention, and performance metrics that matter.',
          },
          {
            icon: Users,
            title: 'Client Relationship Management',
            description:
              'Build lasting relationships with automated follow-ups, preference tracking, and personalized communications.',
          },
          {
            icon: Package,
            title: 'Inventory Management',
            description:
              'Track product levels, automate reorders, and integrate with suppliers for seamless operations.',
          },
          {
            icon: Smartphone,
            title: 'Mobile-First Design',
            description:
              'Full functionality on any device, with offline capabilities for uninterrupted service.',
          },
        ]}
        variant="grid"
      />

      {/*
        This used to be two back-to-back blocks — a "Coming Soon" pricing
        placeholder and a "Ready to transform your salon?" final CTA — each
        with its own "Get in Touch" button pointed at the same anchor. Jeremy
        flagged the repetition after a mobile read-through: two consecutive
        sections asking the same question reads as unfinished, not thorough.
        Folded into one: the AGPL/self-hosting fact (which the page still
        needs to state explicitly for the technical evaluator this design
        plan names as a secondary audience) now lives inside the closing
        CTA's own description instead of a separate section above it.
      */}
      <FinalCTASection
        heading="Ready to transform your salon?"
        description="Lumina is open-source and self-hostable under AGPL-3.0 — run it yourself for free, or let us host and support it for you. We're in active development: get in touch to be among the first to experience it."
        primaryCta={{
          label: 'Get in Touch',
          href: '/#contact',
        }}
        secondaryCta={{
          label: 'Learn More',
          href: `mailto:${contact.email}`,
        }}
      />
    </ProductPageTemplate>
  )
}
