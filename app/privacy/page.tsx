import { LegalPageLayout } from '@/components/layout/LegalPageLayout'
import { H2, Text } from '@/components/ui'
import { contact } from '@/content/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Effuse Labs',
  description: 'How Effuse Labs collects, uses, and protects information.',
}

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <div>
        <H2 className="text-effuse-parchment">What this site collects</H2>
        <Text>
          This site uses Umami, an analytics tool we run ourselves rather than a
          third party&apos;s, to understand how the site is used. It
          doesn&apos;t use cookies and doesn&apos;t track you across other
          sites. Beyond page views, it records session replay and heatmap data —
          a recording of how you move, scroll, and click on this site, and an
          aggregate map of where visitors click most — so we can see where the
          site is confusing or slow, not just that it is. If you email us or
          fill out a contact form, we receive whatever you send us — name, email
          address, business (if you give one), and message content.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">How we use it</H2>
        <Text>
          Analytics and session-replay data help us find pages that are
          confusing, slow, or broken — the honest goal is a site that&apos;s
          easier to use, including for the accessibility work this firm exists
          to do. We don&apos;t use it to identify individual visitors, and we
          don&apos;t combine it with anything you send us through the contact
          form. Contact information is used only to respond to you — we
          don&apos;t sell it, rent it, or use it for marketing you haven&apos;t
          asked for.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">Third parties</H2>
        <Text>
          This site is hosted on Vercel, which processes traffic on our behalf
          under its own privacy commitments. Analytics, including session replay
          and heatmaps, runs on Umami, self-hosted on infrastructure we control
          — that data does not pass through or get shared with a third-party
          analytics vendor. Messages sent through the contact form are delivered
          using Resend, an email delivery service — it processes your name,
          email address, business (if provided) and message solely to send that
          message to us. None of Vercel, Umami, or Resend gets to do anything
          else with your information, and we don&apos;t share it with anyone
          beyond that.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">Your rights</H2>
        <Text>
          You can ask what information we hold about you, ask us to correct or
          delete it, or ask us to stop using it. Contact us at{' '}
          <a
            href={`mailto:${contact.email}`}
            className="text-effuse-teal underline underline-offset-2"
          >
            {contact.email}
          </a>{' '}
          and we&apos;ll respond.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">Questions</H2>
        <Text>
          Reach us at{' '}
          <a
            href={`mailto:${contact.email}`}
            className="text-effuse-teal underline underline-offset-2"
          >
            {contact.email}
          </a>
          .
        </Text>
      </div>
    </LegalPageLayout>
  )
}
