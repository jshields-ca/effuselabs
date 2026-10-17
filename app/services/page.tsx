import ProductPageTemplate from '@/components/product/ProductPageTemplate'
import { brand } from '@/lib/design/tokens'
import {
  FeatureBreakdownSection,
  FinalCTASection,
  PainSolutionSection,
  ToolShowcaseSection,
} from '@/components/sections'
import type { ShowcaseTool } from '@/components/sections'
import { pageMetadata } from '@/lib/metadata'
import {
  ArrowRightLeft,
  Cloud,
  Database,
  HardDrive,
  LifeBuoy,
  MessagesSquare,
  Search,
  ServerCog,
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
export const metadata: Metadata = pageMetadata({
  title: 'Services — Effuse Labs',
  description:
    'We set up, host and manage open-source alternatives to the subscription software your business depends on — you own it, we keep it running.',
  path: '/services',
})

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
    name: 'Invoice Ninja',
    category: 'Invoicing & payments',
    href: 'https://invoiceninja.com',
    icon: 'invoice-ninja.svg',
  },
  {
    name: 'Zammad',
    category: 'Helpdesk & ticketing',
    href: 'https://zammad.org',
    icon: 'zammad.svg',
  },
  {
    name: 'Documenso',
    category: 'E-signatures',
    href: 'https://documenso.com',
    icon: 'documenso.svg',
  },
  {
    name: 'Cal.com',
    category: 'Appointment scheduling',
    href: 'https://cal.com',
    icon: 'cal-com.svg',
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
        headline: 'Own your software. Skip the upkeep.',
        subheadline:
          "We replace the subscriptions you're renting with open-source software you own — then handle the updates, backups and support, so owning it never becomes another job.",
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
          heading: 'Software you own, managed for you',
          description:
            "We move you to open-source alternatives that do the same job — except the software and the data are yours. Self-hosting has always had a catch: someone has to look after it. That's us.",
          icon: ShieldCheck,
        }}
        bullets={[
          'No per-seat fees that creep every year',
          'Your data stays on infrastructure you control',
          'Updates, backups and monitoring handled for you',
          'Leave any time, with everything — no lock-in, including to us',
          'Canadian hosting available',
          'Works alongside Lumina, or entirely on its own',
        ]}
      />

      {/*
        Self-hosting's honest objection is "who maintains it?" — this section
        is the answer, and the reason to hire someone rather than follow a
        tutorial. Grid variant, four steps, so it never leaves an orphan
        card in the two-column layout.
      */}
      <FeatureBreakdownSection
        id="how-it-works"
        background="raised"
        heading="How it works"
        subheading="Self-hosted doesn't have to mean self-managed. You get the control; we take the maintenance."
        items={[
          {
            icon: Search,
            title: 'Look',
            description:
              "We review what you're paying for today, what your team actually uses, and what's worth replacing — and what isn't.",
          },
          {
            icon: ServerCog,
            title: 'Host',
            description:
              'We source a server sized to your needs and requirements — including Canadian hosting if you want your data to stay in Canada.',
          },
          {
            icon: ArrowRightLeft,
            title: 'Move',
            description:
              'We set up the open-source replacement, migrate your data, and get your team comfortable with it before anything is switched off.',
          },
          {
            icon: LifeBuoy,
            title: 'Run',
            description:
              'On a monthly retainer, we keep it updated, patched, backed up and monitored — and we test that the backups actually restore. You have one number to call.',
          },
        ]}
      />

      <FeatureBreakdownSection
        id="what-we-run"
        heading="What we set up and support"
        subheading="The core categories most businesses start with."
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
        description="Every business's stack is different, so there's no fixed package: setup is scoped to what you're moving, and ongoing management is a monthly retainer sized to what we run for you. Tell us what you're paying for today — the first conversation is free, with no obligation."
        primaryCta={{
          label: 'Get in touch',
          href: '/#contact',
        }}
      />
    </ProductPageTemplate>
  )
}
