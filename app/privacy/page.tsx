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
          This site uses Vercel Analytics and Vercel Speed Insights to
          understand traffic patterns and page performance. Both are
          privacy-focused: they don&apos;t use cookies and don&apos;t track you
          across other sites. If you email us or fill out a contact form, we
          receive whatever you send us — name, email address, and message
          content.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">How we use it</H2>
        <Text>
          Analytics data helps us understand which pages are useful and where
          the site is slow. Contact information is used only to respond to you —
          we don&apos;t sell it, rent it, or use it for marketing you
          haven&apos;t asked for.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">Third parties</H2>
        <Text>
          This site is hosted on Vercel, which processes traffic and performance
          data on our behalf under its own privacy commitments. We don&apos;t
          share your information with anyone else.
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
