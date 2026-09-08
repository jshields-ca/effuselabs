import ProductPageTemplate from '@/components/product/ProductPageTemplate'
import { brand } from '@/lib/design/tokens'
import {
  FeatureBreakdownSection,
  FinalCTASection,
  PainSolutionSection,
  PricingSection,
} from '@/components/sections'
import {
  Cloud,
  Database,
  HardDrive,
  MessagesSquare,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'

/*
 * Draft copy throughout, per docs/ROADMAP.md's placeholder-content policy.
 * This route exists so "Services" in the nav points somewhere real instead
 * of a homepage anchor re-describing Lumina — see the design-committee
 * content review that found the site represented only one of Effuse Labs'
 * two lines of business. Real copywriting is stage-6 work; this proves the
 * structure.
 */
export const metadata: Metadata = {
  title: 'Services — Effuse Labs',
  description:
    'We set up, configure, and support self-hosted, open-source alternatives to the subscription software your business already depends on.',
}

export default function ServicesPage() {
  return (
    <ProductPageTemplate
      hero={{
        headline: 'Own your software instead of renting it',
        subheadline:
          "We set up, configure, and support self-hosted, open-source alternatives to the tools you're already paying a subscription for.",
        primaryCtaLabel: 'Talk about your stack',
        primaryCtaHref: '/#contact',
        accentGradient: {
          from: brand.slate,
          to: brand.teal,
        },
      }}
    >
      <PainSolutionSection
        problem={{
          heading: 'Subscription costs that only go up',
          description:
            'Every tool your business runs on is another monthly line item, and most of them creep every year. Cancel, and you lose access to your own data.',
          icon: Cloud,
        }}
        solution={{
          heading: 'Software you actually own',
          description:
            'We migrate you to self-hosted, open-source alternatives — same job done, except the software and the data are yours, running on infrastructure you control.',
          icon: ShieldCheck,
        }}
        bullets={[
          'No per-seat fees that creep every year',
          'Your data stays on infrastructure you control',
          'Setup, migration, and ongoing support included',
          'Works alongside Lumina, or entirely on its own',
        ]}
      />

      <FeatureBreakdownSection
        heading="What we set up and support"
        subheading="A starting point, not a limit — if it's self-hostable, we can probably run it for you."
        items={[
          {
            icon: HardDrive,
            title: 'File storage and sharing',
            description:
              'Self-hosted alternatives to cloud drive subscriptions, with the same sync and sharing experience your team already expects.',
          },
          {
            icon: MessagesSquare,
            title: 'Team communication and docs',
            description:
              "Chat, wikis, and shared documents that live on your own infrastructure instead of a third party's.",
          },
          {
            icon: Database,
            title: 'Business and CRM tooling',
            description:
              "Client records, invoicing, and line-of-business software you can extend, instead of waiting on a vendor's roadmap.",
          },
          {
            icon: Users,
            title: 'Analytics without third-party tracking',
            description:
              "Understand how your site or app is used without handing every visitor's data to an ad network.",
          },
        ]}
        variant="checklist"
      />

      <PricingSection
        placeholder={{
          heading: 'How engagements work',
          description:
            "There's no fixed package yet — every business's stack is different. Tell us what you're running (or what you'd like to stop paying for), and we'll scope a plan together.",
          ctaLabel: 'Start the conversation',
          ctaHref: '/#contact',
        }}
      />

      <FinalCTASection
        heading="Ready to own your stack?"
        description="Tell us what you're running today. The first conversation is free, and there's no obligation."
        primaryCta={{
          label: 'Get in touch',
          href: '/#contact',
        }}
        background="gradient"
      />
    </ProductPageTemplate>
  )
}
