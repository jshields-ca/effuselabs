import { SectionContainer } from '@/components/layout/SectionContainer'
import { H2, H3, Reveal, Text } from '@/components/ui'
import React from 'react'
import { Check, type LucideIcon } from 'lucide-react'

export interface PainSolutionSectionProps {
  id?: string
  problem: {
    heading: string
    description: string
    icon?: LucideIcon
  }
  solution: {
    heading: string
    description: string
    icon?: LucideIcon
  }
  bullets?: string[]
  background?: 'light' | 'dark'
}

const PainSolutionSection: React.FC<PainSolutionSectionProps> = ({
  id = 'pain-solution',
  problem,
  solution,
  bullets = [],
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
          {/* Problem & Solution Grid */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 mb-12">
            {/* Problem Side */}
            <div className="text-center lg:text-left">
              {problem.icon && (
                <div className="mb-4 flex justify-center lg:justify-start">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-effuse-medium-grey/10 text-effuse-medium-grey ring-1 ring-effuse-medium-grey/20">
                    <problem.icon
                      className="h-7 w-7"
                      aria-hidden="true"
                      strokeWidth={1.75}
                    />
                  </span>
                </div>
              )}
              <H3
                className={`mb-4 ${isDark ? 'text-effuse-parchment' : 'text-effuse-off-black'}`}
              >
                {problem.heading}
              </H3>
              <Text
                className={
                  isDark ? 'text-effuse-parchment' : 'text-effuse-off-black/75'
                }
              >
                {problem.description}
              </Text>
            </div>

            {/* Solution Side */}
            <div className="text-center lg:text-left">
              {solution.icon && (
                <div className="mb-4 flex justify-center lg:justify-start">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-effuse-teal/10 text-effuse-teal ring-1 ring-effuse-teal/25">
                    <solution.icon
                      className="h-7 w-7"
                      aria-hidden="true"
                      strokeWidth={1.75}
                    />
                  </span>
                </div>
              )}
              <H3
                className={`mb-4 ${isDark ? 'text-effuse-parchment' : 'text-effuse-off-black'}`}
              >
                {solution.heading}
              </H3>
              <Text
                className={
                  isDark ? 'text-effuse-parchment' : 'text-effuse-off-black/75'
                }
              >
                {solution.description}
              </Text>
            </div>
          </div>

          {/* Benefits Bullets */}
          {bullets.length > 0 && (
            <Reveal order={2}>
              <div className="text-center">
                <H2 className={`mb-8 ${isDark ? 'text-effuse-parchment' : ''}`}>
                  Key Benefits
                </H2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                  {bullets.map((bullet, index) => (
                    <Reveal key={index} order={2}>
                      <div
                        className={`p-4 rounded-lg ${
                          isDark
                            ? 'bg-surface-raised border border-surface-border'
                            : 'bg-effuse-light-grey/60 border border-effuse-light-neutral'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-xl text-effuse-gold" aria-hidden>
                            <Check
                              className="h-4 w-4"
                              aria-hidden="true"
                              strokeWidth={2.5}
                            />
                          </div>
                          <Text
                            className={`flex-1 text-sm ${
                              isDark
                                ? 'text-effuse-parchment'
                                : 'text-effuse-off-black'
                            }`}
                          >
                            {bullet}
                          </Text>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </Reveal>
    </SectionContainer>
  )
}

export default PainSolutionSection
