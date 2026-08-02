'use client'

import React from 'react'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { H2, H3, Text } from '@/components/ui'
import { LightweightAnimatedContainer as Animated } from '@/components/ui/LightweightAnimatedContainer'

interface LightFeatureSectionProps {
  id?: string
  heading?: string
  subheading?: string
}

const LightFeatureSection: React.FC<LightFeatureSectionProps> = ({
  id = 'features-light',
  heading = 'What makes Effuse different',
  subheading = 'Thoughtful UX and pragmatic engineering converge to unlock growth.',
}) => {
  const items = [
    {
      title: 'Human-centered',
      icon: '🤝',
      copy: 'Clear information hierarchy and delightful micro-interactions.',
    },
    {
      title: 'Maintainable',
      icon: '🧱',
      copy: 'Typed components, clean structure, and DRY principles.',
    },
    {
      title: 'Observable',
      icon: '📈',
      copy: 'Speed Insights, Analytics, and CWV for real user monitoring.',
    },
    {
      title: 'Future-ready',
      icon: '🚀',
      copy: 'CMS integration and hero enhancements planned under strict budgets.',
    },
  ]

  return (
    <SectionContainer id={id} background="white" padding="lg">
      <Animated animation="slideUp">
        <div className="text-center mb-12">
          <H2 className="mb-4">{heading}</H2>
          <Text className="text-effuse-medium-grey max-w-2xl mx-auto">
            {subheading}
          </Text>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Animated key={item.title} animation="fadeIn" delay={0.05 * index}>
              <div className="h-full rounded-xl border border-black/10 bg-white p-6 text-center shadow-sm">
                <div className="text-4xl mb-3" aria-hidden>
                  {item.icon}
                </div>
                <H3 className="mb-2">{item.title}</H3>
                <Text className="text-effuse-medium-grey text-sm">
                  {item.copy}
                </Text>
              </div>
            </Animated>
          ))}
        </div>
      </Animated>
    </SectionContainer>
  )
}

export default LightFeatureSection
