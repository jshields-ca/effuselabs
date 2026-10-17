import { SectionContainer } from '@/components/layout/SectionContainer'
import { Button, H2, LuminousField, Reveal, Text } from '@/components/ui'
import React from 'react'

export interface FinalCTASectionProps {
  id?: string
  /*
   * No defaults for heading/description/primaryCta: a default here is a
   * landmine, not a convenience. This component's own defaults used to claim
   * "thousands of businesses already growing" on a pre-launch product and
   * pointed the primary CTA at `#signup`, which exists nowhere — the exact
   * dead-anchor shape CLAUDE.md's non-negotiable #2 already names twice.
   * Neither call site used them, but nothing stopped a future one from
   * inheriting silently. Every call site now supplies real content instead.
   */
  heading: string
  description: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
}

/*
 * Ends the page the way the homepage does: the deep surface with the luminous
 * field glowing through it. This used to override its section with a flat,
 * full-strength teal-to-slate gradient — the one place the site painted
 * light as a solid block, against the rule in lib/design/tokens.ts that
 * gradients are emitted light over the dark canvas — and the heading and
 * body text sat at 1.75–2.13:1 against the teal end. The contrast spec only
 * measured a gradient's last stop at the time, so it never saw that end;
 * it now checks every stop.
 */
const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  id = 'final-cta',
  heading,
  description,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <SectionContainer
      id={id}
      background="deep"
      padding="xl"
      className="relative isolate overflow-hidden"
    >
      <LuminousField intensity="section" />
      <Reveal className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-4 text-effuse-parchment">{heading}</H2>

          <Text className="text-lg mb-8 max-w-2xl mx-auto text-effuse-parchment">
            {description}
          </Text>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" href={primaryCta.href}>
              {primaryCta.label}
            </Button>

            {secondaryCta && (
              <Button variant="secondary" size="lg" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}

export default FinalCTASection
