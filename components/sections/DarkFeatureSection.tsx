'use client'

import React from 'react'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { H2, H3, Text, Button } from '@/components/ui'
import { LightweightAnimatedContainer as Animated } from '@/components/ui/LightweightAnimatedContainer'

type FeatureItem = {
  icon: string
  title: string
  description: string
}

interface DarkFeatureSectionProps {
  id?: string
  heading?: string
  subheading?: string
  primaryCtaLabel?: string
  onPrimaryCtaClick?: () => void
  features?: FeatureItem[]
}

const DarkFeatureSection: React.FC<DarkFeatureSectionProps> = ({
  id = 'features-dark',
  heading = 'Built for ambitious teams',
  subheading = 'Premium UX, performance-first architecture, and accessible by default.',
  primaryCtaLabel = 'Get Started',
  onPrimaryCtaClick,
  features = [
    {
      icon: '⚡',
      title: 'Performance-first',
      description: '100/98 Lighthouse baseline with strict budgets.',
    },
    {
      icon: '♿',
      title: 'Accessible',
      description: 'WCAG AA foundations and reduced-motion support.',
    },
    {
      icon: '🧩',
      title: 'Composable',
      description: 'Reusable UI with Tailwind and typed props.',
    },
    {
      icon: '🔒',
      title: 'Secure by default',
      description: 'HSTS, modern headers, and best practices.',
    },
  ],
}) => {
  const handlePrimaryCtaClick = () => {
    if (onPrimaryCtaClick) onPrimaryCtaClick()
  }

  return (
    <SectionContainer id={id} background="dark" padding="lg">
      <Animated animation="slideUp">
        <div className="text-center mb-12">
          <H2 className="text-white mb-4">{heading}</H2>
          <Text className="text-light-grey max-w-2xl mx-auto">
            {subheading}
          </Text>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <Animated key={item.title} animation="fadeIn" delay={0.05 * index}>
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <div className="text-4xl mb-3" aria-hidden>
                  {item.icon}
                </div>
                <H3 className="text-white mb-2">{item.title}</H3>
                <Text className="text-light-grey text-sm">
                  {item.description}
                </Text>
              </div>
            </Animated>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="primary"
            onClick={handlePrimaryCtaClick}
            aria-label={primaryCtaLabel}
          >
            {primaryCtaLabel}
          </Button>
        </div>
      </Animated>
    </SectionContainer>
  )
}

export default DarkFeatureSection
