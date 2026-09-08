import ProductPageTemplate from '@/components/product/ProductPageTemplate'
import { brand } from '@/lib/design/tokens'
import {
  FeatureBreakdownSection,
  FinalCTASection,
  PainSolutionSection,
  ToolShowcaseSection,
} from '@/components/sections'
import type { ShowcaseTool } from '@/components/sections'
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

/*
 * A deliberately wide sample, not an exhaustive one — see
 * ToolShowcaseSection's own comment for why breadth is the point. Icons
 * live in public/icons/services/, fetched once from the dashboard-icons
 * project rather than pulled from a third-party CDN at request time.
 */
const SHOWCASE_TOOLS: ShowcaseTool[] = [
  {
    name: 'Paperless-ngx',
    category: 'Document archiving',
    href: 'https://docs.paperless-ngx.com',
    icon: 'paperless-ngx.svg',
  },
  {
    name: 'Stirling PDF',
    category: 'PDF tools',
    href: 'https://www.stirlingpdf.com',
    icon: 'stirling-pdf.svg',
  },
  {
    name: 'Vaultwarden',
    category: 'Password management',
    href: 'https://github.com/dani-garcia/vaultwarden',
    icon: 'vaultwarden.svg',
  },
  {
    name: 'Outline',
    category: 'Wiki & knowledge base',
    href: 'https://www.getoutline.com',
    icon: 'outline.svg',
  },
  {
    name: 'Linkwarden',
    category: 'Bookmark management',
    href: 'https://linkwarden.app',
    icon: 'linkwarden.png',
  },
  {
    name: 'AFFiNE',
    category: 'Notes & knowledge',
    href: 'https://affine.pro',
    icon: 'affine.svg',
  },
  {
    name: 'Plane',
    category: 'Project management',
    href: 'https://plane.so',
    icon: 'plane.svg',
  },
  {
    name: 'OpenProject',
    category: 'Project management',
    href: 'https://www.openproject.org',
    icon: 'openproject.svg',
  },
  {
    name: 'Odoo',
    category: 'ERP & business apps',
    href: 'https://www.odoo.com',
    icon: 'odoo.svg',
  },
  {
    name: 'Rocket.Chat',
    category: 'Team communication',
    href: 'https://www.rocket.chat',
    icon: 'rocket-chat.svg',
  },
  {
    name: 'Umami',
    category: 'Privacy-first analytics',
    href: 'https://umami.is',
    icon: 'umami.svg',
  },
  {
    name: 'Postiz',
    category: 'Social media scheduling',
    href: 'https://postiz.com',
    icon: 'postiz.svg',
  },
  {
    name: 'Nextcloud',
    category: 'Cloud storage & files',
    href: 'https://nextcloud.com',
    icon: 'nextcloud.svg',
  },
  {
    name: 'Formbricks',
    category: 'Surveys & feedback',
    href: 'https://formbricks.com',
    icon: 'formbricks.svg',
  },
  {
    name: 'Akaunting',
    category: 'Accounting & invoicing',
    href: 'https://akaunting.com',
    icon: 'akaunting.svg',
  },
  {
    name: 'Habitica',
    category: 'Habit & task tracking',
    href: 'https://habitica.com',
    icon: 'habitica.svg',
  },
  {
    name: 'Grocy',
    category: 'Household inventory',
    href: 'https://grocy.info',
    icon: 'grocy.svg',
  },
  {
    name: 'Actual Budget',
    category: 'Personal finance',
    href: 'https://actualbudget.org',
    icon: 'actual-budget.svg',
  },
  {
    name: 'InvenTree',
    category: 'Inventory management',
    href: 'https://docs.inventree.org',
    icon: 'inventree.svg',
  },
  {
    name: 'Planka',
    category: 'Kanban boards',
    href: 'https://planka.app',
    icon: 'planka.svg',
  },
]

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
            example: { label: 'Nextcloud', href: 'https://nextcloud.com' },
          },
          {
            icon: MessagesSquare,
            title: 'Team communication and docs',
            description:
              "Chat, wikis, and shared documents that live on your own infrastructure instead of a third party's.",
            example: { label: 'Mattermost', href: 'https://mattermost.com' },
          },
          {
            icon: Database,
            title: 'Business and CRM tooling',
            description:
              "Client records, invoicing, and line-of-business software you can extend, instead of waiting on a vendor's roadmap.",
            example: { label: 'ERPNext', href: 'https://frappe.io/erpnext' },
          },
          {
            icon: Users,
            title: 'Analytics without third-party tracking',
            description:
              "Understand how your site or app is used without handing every visitor's data to an ad network.",
            example: {
              label: 'Plausible Analytics',
              href: 'https://plausible.io',
            },
          },
        ]}
        variant="checklist"
      />

      <ToolShowcaseSection tools={SHOWCASE_TOOLS} />

      {/*
        This used to be two back-to-back blocks — a "How engagements work"
        pricing placeholder and a "Ready to own your stack?" final CTA —
        each with its own "get in touch" button pointed at the same anchor.
        Jeremy flagged the same repetition here as on the Lumina page.
        Folded into one: there's no fixed package yet, and that's now said
        inside the closing CTA's own description rather than a section of
        its own above it.
      */}
      <FinalCTASection
        heading="Ready to own your stack?"
        description="There's no fixed package — every business's stack is different. Tell us what you're running today (or what you'd like to stop paying for); the first conversation is free, with no obligation."
        primaryCta={{
          label: 'Get in touch',
          href: '/#contact',
        }}
      />
    </ProductPageTemplate>
  )
}
