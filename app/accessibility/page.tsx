import { LegalPageLayout } from '@/components/layout/LegalPageLayout'
import { H2, Text } from '@/components/ui'
import { contact } from '@/content/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility — Effuse Labs',
  description:
    'Our accessibility commitment and the standards this site is built to.',
}

export default function AccessibilityPage() {
  return (
    <LegalPageLayout title="Accessibility Statement">
      <div>
        <H2 className="text-effuse-parchment">Our commitment</H2>
        <Text>
          Effuse Labs exists because badly designed software builds barriers.
          Accessibility isn&apos;t a feature we bolt on — it&apos;s the reason
          this company exists, and we hold this site to the same standard we
          hold the products we build.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">Standard we target</H2>
        <Text>
          This site is built to meet WCAG 2.1 Level AA. That&apos;s checked
          automatically, not just claimed: every colour pairing used for text on
          this site is measured for contrast, and the build fails if one falls
          short.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">What that means in practice</H2>
        <Text>
          Motion respects your system&apos;s reduced-motion setting everywhere
          it appears on this site, with no exceptions. Every interactive element
          — links, buttons, the mobile menu — is reachable and operable by
          keyboard, with a visible focus indicator. Interactive elements keep
          their native semantics: a link is a link, a button is a button, not a
          styled
          <code className="mx-1 rounded bg-surface-raised px-1.5 py-0.5 text-sm">
            div
          </code>
          pretending to be one.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">Known limitations</H2>
        <Text>
          This site is under active development. If you hit a barrier —
          something that doesn&apos;t work with a screen reader, keyboard
          navigation that traps or skips, or contrast that&apos;s hard to read —
          we want to know, and we&apos;ll treat it as a bug, not feedback for
          someday.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">Feedback</H2>
        <Text>
          Tell us at{' '}
          <a
            href={`mailto:${contact.email}`}
            className="text-effuse-teal underline underline-offset-2"
          >
            {contact.email}
          </a>{' '}
          — what page, what happened, and what device or assistive technology
          you were using, if you can. We&apos;ll respond.
        </Text>
      </div>
    </LegalPageLayout>
  )
}
