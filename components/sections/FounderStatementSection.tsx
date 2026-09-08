import { SectionContainer } from '@/components/layout/SectionContainer'
import { H2, Reveal, Text } from '@/components/ui'
import Image from 'next/image'
import React from 'react'

interface FounderStatementSectionProps {
  id?: string
  heading?: string
  quote?: string[]
  attribution?: string
  signatureSrc?: string
  signatureAlt?: string
  signatureWidth?: number
  signatureHeight?: number
}

const DEFAULT_QUOTE = [
  'As a developer and a federally-recognized person with a disability, I have experienced firsthand how poorly designed software can create barriers. I founded Effuse Labs on a simple, unwavering belief: that the power of technology should be a source of liberation, not frustration.',
  "Our purpose is to pour out a continuous stream of elegant, accessible, and truly intuitive tools that empower local businesses to not just compete, but to thrive. We're here to lift the operational burden, illuminate the path to growth, and build a more accessible digital future for everyone.",
]

/*
 * Full bleed, per docs/DESIGN_PLAN.md: "the one full-width moment on the
 * page... the statement set large... the real signature beneath it." This
 * used to be a two-column grid next to a decorative squiggle standing in
 * for Jeremy's actual signature — not a placeholder marked as one, just a
 * generic bezier curve that looked enough like handwriting to be mistaken
 * for the real thing on a page about authenticity.
 *
 * Until a real signature is wired in, this renders nothing where that mark
 * would go — no fake stand-in. That absence is deliberate, the same
 * principle as the placeholder-content policy in docs/ROADMAP.md: a
 * labelled gap is honest; a generic flourish pretending to be personal is
 * not.
 */
const FounderStatementSection: React.FC<FounderStatementSectionProps> = ({
  id = 'founder',
  heading = 'Technology for People, Not the Other Way Around.',
  quote = DEFAULT_QUOTE,
  attribution = 'Jeremy Shields, Founder',
  signatureSrc,
  signatureAlt = '',
  signatureWidth = 240,
  signatureHeight = 100,
}) => {
  return (
    <SectionContainer id={id} background="deep" padding="xl">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <H2 className="mb-8 text-effuse-parchment">{heading}</H2>
          <blockquote className="space-y-6">
            {quote.map((paragraph, idx) => (
              <Text
                key={idx}
                className="font-display text-h4 font-normal leading-snug text-effuse-parchment"
              >
                {paragraph}
              </Text>
            ))}
          </blockquote>

          <div className="mt-10 flex flex-col items-center gap-3">
            {signatureSrc ? (
              <Image
                src={signatureSrc}
                alt={signatureAlt}
                width={signatureWidth}
                height={signatureHeight}
                className="h-24 w-auto sm:h-28"
              />
            ) : null}
            <Text className="text-effuse-parchment/70">— {attribution}</Text>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}

export default FounderStatementSection
