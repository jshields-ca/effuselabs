import { SectionContainer } from '@/components/layout/SectionContainer'
import { H2, H3, Reveal, Text } from '@/components/ui'
import Image from 'next/image'
import React from 'react'
import { Check, type LucideIcon } from 'lucide-react'

export interface FeatureItem {
  icon: LucideIcon
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
      background={isDark ? 'base' : 'white'}
      padding="lg"
    >
      <Reveal>
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
                isDark ? 'text-effuse-light-grey' : 'text-effuse-off-black/75'
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
                <Reveal key={item.title} order={index}>
                  {variant === 'checklist' ? (
                    /* Checklist Variant */
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-effuse-gold flex items-center justify-center">
                        <span
                          className="text-sm font-semibold text-effuse-off-black"
                          aria-hidden
                        >
                          <Check
                            className="h-4 w-4"
                            aria-hidden="true"
                            strokeWidth={2.5}
                          />
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
                              ? 'text-effuse-light-grey'
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
                          ? 'bg-surface-raised border border-surface-border hover:bg-slate-800/70 hover:shadow-lg'
                          : 'bg-effuse-light-grey/60 border border-effuse-light-neutral shadow-sm hover:shadow-lg hover:border-effuse-teal/20 hover:bg-white'
                      }`}
                    >
                      <div className="mb-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-effuse-teal/10 text-effuse-slate ring-1 ring-effuse-teal/25">
                          <item.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                            strokeWidth={1.75}
                          />
                        </span>
                      </div>
                      <H3
                        className={`mb-3 ${isDark ? 'text-white' : 'text-effuse-off-black'}`}
                      >
                        {item.title}
                      </H3>
                      <Text
                        className={
                          isDark
                            ? 'text-effuse-light-grey'
                            : 'text-effuse-off-black/75'
                        }
                      >
                        {item.description}
                      </Text>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>

            {/* Optional Screenshot */}
            {screenshotSrc && (
              <Reveal order={3}>
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
              </Reveal>
            )}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}

export default FeatureBreakdownSection
