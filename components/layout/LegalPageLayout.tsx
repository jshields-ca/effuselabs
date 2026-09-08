import { SectionContainer } from '@/components/layout/SectionContainer'
import { H1, Reveal, Text } from '@/components/ui'
import React from 'react'

interface LegalPageLayoutProps {
  title: string
  children: React.ReactNode
}

/*
 * Shared shell for /privacy, /terms and /accessibility. All three are draft
 * copy — per CLAUDE.md, drafting legal pages is mine to do, but final
 * language is Jeremy's call, so every one of these carries a visible notice
 * saying so rather than reading as finished, reviewed legal text.
 */
export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <SectionContainer id="legal-content" background="deep" padding="xl">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <H1 className="mb-6 text-effuse-parchment">{title}</H1>
          <div
            role="note"
            className="mb-10 rounded-lg border border-effuse-gold/30 bg-effuse-gold/10 p-4"
          >
            <Text className="text-sm text-effuse-parchment">
              <strong className="text-effuse-parchment">
                Draft, not final.
              </strong>{' '}
              This page exists so the site has a real destination instead of a
              broken link. The language below hasn&apos;t had legal review yet —
              treat it as a placeholder for the real policy, not as a binding
              statement.
            </Text>
          </div>
          <div className="space-y-8 [&_h2]:mb-3 [&_h2]:mt-10 [&_p]:text-effuse-parchment">
            {children}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}

export default LegalPageLayout
