import { SectionContainer } from '@/components/layout/SectionContainer'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  H2,
  H3,
  Reveal,
  Text,
} from '@/components/ui'
import React from 'react'
import { Check } from 'lucide-react'

export interface PricingTier {
  name: string
  price?: string
  period?: string
  description: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  highlighted?: boolean
}

export interface PricingSectionProps {
  id?: string
  heading?: string
  subheading?: string
  tiers?: PricingTier[]
  placeholder?: {
    heading: string
    description: string
    ctaLabel?: string
    ctaHref?: string
  }
  background?: 'light' | 'dark'
}

const PricingSection: React.FC<PricingSectionProps> = ({
  id = 'pricing',
  heading = 'Simple, transparent pricing',
  subheading = 'Choose the plan that works for your business.',
  tiers,
  placeholder,
  background = 'light',
}) => {
  const isDark = background === 'dark'

  // Show placeholder if no tiers provided
  if (!tiers && placeholder) {
    return (
      <SectionContainer
        id={id}
        background={isDark ? 'base' : 'white'}
        padding="lg"
      >
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <H2
              className={`mb-4 ${isDark ? 'text-effuse-parchment' : 'text-effuse-off-black'}`}
            >
              {placeholder.heading}
            </H2>
            <Text
              className={`text-lg mb-8 max-w-2xl mx-auto ${
                isDark ? 'text-effuse-parchment' : 'text-effuse-off-black/75'
              }`}
            >
              {placeholder.description}
            </Text>

            {placeholder.ctaLabel && placeholder.ctaHref && (
              <Button variant="primary" size="lg" href={placeholder.ctaHref}>
                {placeholder.ctaLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </SectionContainer>
    )
  }

  // Show pricing tiers if provided
  return (
    <SectionContainer
      id={id}
      background={isDark ? 'base' : 'white'}
      padding="lg"
    >
      <Reveal>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <H2
              className={`mb-4 ${isDark ? 'text-effuse-parchment' : 'text-effuse-off-black'}`}
            >
              {heading}
            </H2>
            <Text
              className={`max-w-2xl mx-auto ${
                isDark ? 'text-effuse-parchment' : 'text-effuse-off-black/75'
              }`}
            >
              {subheading}
            </Text>
          </div>

          {/* Pricing Tiers */}
          <div
            className={`grid gap-8 ${
              tiers && tiers.length === 1
                ? 'max-w-md mx-auto'
                : tiers && tiers.length === 2
                  ? 'md:grid-cols-2 max-w-4xl mx-auto'
                  : 'md:grid-cols-3'
            }`}
          >
            {tiers?.map((tier, index) => (
              <Reveal key={tier.name} order={index}>
                <Card
                  className={`h-full relative ${
                    tier.highlighted
                      ? 'ring-2 ring-effuse-gold shadow-lg transform scale-105'
                      : ''
                  } ${
                    isDark
                      ? 'bg-effuse-slate/20 border-white/10'
                      : 'bg-white border-black/10'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-effuse-gold text-effuse-off-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader>
                    <H3
                      className={`text-center ${isDark ? 'text-effuse-parchment' : 'text-effuse-off-black'}`}
                    >
                      {tier.name}
                    </H3>
                    {tier.price && (
                      <div className="text-center mt-4">
                        <div
                          className={`text-4xl font-bold ${isDark ? 'text-effuse-parchment' : 'text-effuse-off-black'}`}
                        >
                          {tier.price}
                        </div>
                        {tier.period && (
                          <Text
                            className={`text-sm ${isDark ? 'text-effuse-parchment' : 'text-effuse-off-black/75'}`}
                          >
                            {tier.period}
                          </Text>
                        )}
                      </div>
                    )}
                    <Text
                      className={`text-center mt-4 ${
                        isDark
                          ? 'text-effuse-parchment'
                          : 'text-effuse-off-black/75'
                      }`}
                    >
                      {tier.description}
                    </Text>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-effuse-gold flex items-center justify-center mt-0.5">
                            <span
                              className="text-xs font-semibold text-effuse-off-black"
                              aria-hidden
                            >
                              <Check
                                className="h-4 w-4"
                                aria-hidden="true"
                                strokeWidth={2.5}
                              />
                            </span>
                          </div>
                          <Text
                            className={`flex-1 ${
                              isDark
                                ? 'text-effuse-parchment'
                                : 'text-effuse-off-black'
                            }`}
                          >
                            {feature}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      variant={tier.highlighted ? 'primary' : 'secondary'}
                      size="lg"
                      href={tier.ctaHref}
                      className="w-full"
                    >
                      {tier.ctaLabel}
                    </Button>
                  </CardFooter>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}

export default PricingSection
