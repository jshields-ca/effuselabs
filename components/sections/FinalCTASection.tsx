import { SectionContainer } from '@/components/layout/SectionContainer'
import { Button, H2, Reveal, Text } from '@/components/ui'
import React from 'react'

export interface FinalCTASectionProps {
  id?: string
  heading?: string
  description?: string
  primaryCta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  background?: 'light' | 'dark' | 'gradient'
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  id = 'final-cta',
  heading = 'Ready to get started?',
  description = 'Join thousands of businesses already growing with our platform.',
  primaryCta = { label: 'Get Started', href: '#signup' },
  secondaryCta,
  background = 'gradient',
}) => {
  const isGradient = background === 'gradient'
  const isDark = background === 'dark'

  const containerBackground = isGradient
    ? 'gradient'
    : isDark
      ? 'deep'
      : 'white'

  return (
    <SectionContainer
      id={id}
      background={containerBackground}
      padding="xl"
      className={
        isGradient ? 'bg-gradient-to-r from-effuse-teal to-effuse-slate' : ''
      }
    >
      <Reveal>
        <div className="max-w-4xl mx-auto text-center">
          <H2
            className={`mb-4 ${
              isGradient || isDark ? 'text-white' : 'text-effuse-off-black'
            }`}
          >
            {heading}
          </H2>

          <Text
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              isGradient || isDark
                ? 'text-effuse-parchment'
                : 'text-effuse-off-black/75'
            }`}
          >
            {description}
          </Text>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              href={primaryCta.href}
              className={
                isGradient ? 'bg-effuse-gold hover:bg-effuse-gold/90' : ''
              }
            >
              {primaryCta.label}
            </Button>

            {secondaryCta && (
              <Button
                variant="secondary"
                size="lg"
                href={secondaryCta.href}
                className={
                  isGradient
                    ? 'border-white text-white hover:bg-white hover:text-effuse-slate'
                    : ''
                }
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
