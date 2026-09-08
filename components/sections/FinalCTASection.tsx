import { SectionContainer } from '@/components/layout/SectionContainer'
import { Button, H2, Reveal, Text } from '@/components/ui'
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
 * `background` used to take 'light' | 'dark' | 'gradient', but every call
 * site across the site has only ever passed 'gradient' — the closing CTA is
 * the one section this design system always ends a page on the brand
 * gradient, per docs/DESIGN_PLAN.md, so the other two branches were dead
 * weight carried for a choice no page makes. Same class of near-duplicated
 * ternary Jeremy flagged in PainSolutionSection, FeatureBreakdownSection,
 * PricingSection and ProductHero, all of which were already collapsed the
 * same way; this was the one left over.
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
      background="gradient"
      padding="xl"
      className="bg-gradient-to-r from-effuse-teal to-effuse-slate"
    >
      <Reveal>
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-4 text-white">{heading}</H2>

          <Text className="text-lg mb-8 max-w-2xl mx-auto text-effuse-parchment">
            {description}
          </Text>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              href={primaryCta.href}
              className="bg-effuse-gold hover:bg-effuse-gold/90"
            >
              {primaryCta.label}
            </Button>

            {secondaryCta && (
              <Button
                variant="secondary"
                size="lg"
                href={secondaryCta.href}
                className="border-white text-white hover:bg-white hover:text-effuse-slate"
              >
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
