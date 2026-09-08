import { SectionContainer } from '@/components/layout/SectionContainer'
import { H1, Reveal } from '@/components/ui'
import React from 'react'

interface LegalPageLayoutProps {
  title: string
  children: React.ReactNode
}

/*
 * Shared shell for /privacy, /terms and /accessibility. These used to carry
 * a visible "Draft, not final" notice — per CLAUDE.md, drafting legal pages
 * is mine to do, but final language is Jeremy's call, and he reviewed this
 * language and approved it as-is, not just as a placeholder. The notice
 * came out; the language itself is unchanged.
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
          <div className="space-y-8 [&_h2]:mb-3 [&_h2]:mt-10 [&_p]:text-effuse-parchment">
            {children}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}

export default LegalPageLayout
