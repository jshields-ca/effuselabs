import { LegalPageLayout } from '@/components/layout/LegalPageLayout'
import { H2, Text } from '@/components/ui'
import { contact } from '@/content/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Effuse Labs',
  description: 'The terms governing use of the Effuse Labs website.',
}

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <div>
        <H2 className="text-effuse-parchment">Using this site</H2>
        <Text>
          This website describes Effuse Labs and its products and services. By
          using it, you agree to use it lawfully and not to attempt to disrupt
          it or access parts of it you&apos;re not meant to.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">
          Lumina&apos;s development status
        </H2>
        <Text>
          Lumina is in active development and hasn&apos;t launched. Nothing on
          this site is an offer to sell a finished product — features, pricing,
          and availability described here can change before launch.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">Intellectual property</H2>
        <Text>
          The site&apos;s design, brand, and written content belong to Effuse
          Labs. Lumina&apos;s source code is released under its own open-source
          licence (AGPL-3.0) once published — that licence, not this page,
          governs what you can do with the code.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">No warranty</H2>
        <Text>
          This site and the information on it are provided as-is, without
          warranty of any kind, to the extent the law allows.
        </Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">Governing law</H2>
        <Text>These terms are governed by the laws of Manitoba, Canada.</Text>
      </div>

      <div>
        <H2 className="text-effuse-parchment">Changes</H2>
        <Text>
          We may update these terms as the business changes. Material changes
          will be reflected by an updated date on this page once this draft
          becomes final.
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
