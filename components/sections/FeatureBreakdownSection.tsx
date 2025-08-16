'use client'

import { SectionContainer } from '@/components/layout/SectionContainer'
import { H2, H3, Text } from '@/components/ui'
import { LightweightAnimatedContainer as Animated } from '@/components/ui/LightweightAnimatedContainer'
import Image from 'next/image'
import React from 'react'

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface FeatureBreakdownSectionProps {
  id?: string
  heading?: string
  subheading?: string
  items: FeatureItem[]
  screenshotSrc?: string
  screenshotAlt?: string
  variant?: 'grid' | 'checklist'
  background?: 'light' | 'dark'
}

const FeatureBreakdownSection: React.FC<FeatureBreakdownSectionProps> = ({
  id = 'feature-breakdown',
  heading = 'Features that work for you',
  subheading = 'Everything you need to streamline your business operations.',
  items,
  screenshotSrc,
  screenshotAlt = 'Product screenshot',
  variant = 'grid',
  background = 'light',
}) => {
  const isDark = background === 'dark'

  return (
    <SectionContainer
      id={id}
      background={isDark ? 'dark' : 'white'}
      padding="lg"
    >
      <Animated animation="slideUp">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <H2
              className={`mb-4 ${isDark ? 'text-white' : 'text-effuse-off-black'}`}
            >
              {heading}
            </H2>
            <Text
              className={`max-w-2xl mx-auto ${
                isDark ? 'text-slate-300' : 'text-effuse-off-black/75'
              }`}
            >
              {subheading}
            </Text>
          </div>

          {/* Content Layout with Optional Screenshot */}
          <div
            className={`${screenshotSrc ? 'grid gap-12 lg:grid-cols-2 items-center' : ''}`}
          >
            {/* Features */}
            <div
              className={
                variant === 'checklist'
                  ? 'space-y-6'
                  : 'grid gap-6 sm:grid-cols-2'
              }
            >
              {items.map((item, index) => (
                <Animated
                  key={item.title}
                  animation="fadeIn"
                  delay={0.1 * index}
                >
                  {variant === 'checklist' ? (
                    /* Checklist Variant */
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-effuse-gold flex items-center justify-center">
                        <span
                          className="text-sm font-semibold text-effuse-off-black"
                          aria-hidden
                        >
                          ✓
                        </span>
                      </div>
                      <div className="flex-1">
                        <H3
                          className={`text-lg mb-2 ${isDark ? 'text-white' : 'text-effuse-off-black'}`}
                        >
                          {item.title}
                        </H3>
                        <Text
                          className={
                            isDark
                              ? 'text-slate-300'
                              : 'text-effuse-off-black/75'
                          }
                        >
                          {item.description}
                        </Text>
                      </div>
                    </div>
                  ) : (
                    /* Grid Variant */
                    <div
                      className={`h-full rounded-xl p-6 transition-all duration-300 ${
                        isDark
                          ? 'bg-slate-800/50 border border-slate-600/30 hover:bg-slate-800/70 hover:shadow-lg'
                          : 'bg-slate-50/80 border border-effuse-light-grey/30 shadow-sm hover:shadow-lg hover:border-effuse-teal/20 hover:bg-white'
                      }`}
                    >
                      <div className="text-4xl mb-4" aria-hidden>
                        {item.icon}
                      </div>
                      <H3
                        className={`mb-3 ${isDark ? 'text-white' : 'text-effuse-off-black'}`}
                      >
                        {item.title}
                      </H3>
                      <Text
                        className={
                          isDark ? 'text-slate-300' : 'text-effuse-off-black/75'
                        }
                      >
                        {item.description}
                      </Text>
                    </div>
                  )}
                </Animated>
              ))}
            </div>

            {/* Optional Screenshot */}
            {screenshotSrc && (
              <Animated animation="fadeIn" delay={0.3}>
                <div className="relative">
                  <Image
                    src={screenshotSrc}
                    alt={screenshotAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  {/* Optional decorative overlay */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
              </Animated>
            )}
          </div>
        </div>
      </Animated>
    </SectionContainer>
  )
}

export default FeatureBreakdownSection
