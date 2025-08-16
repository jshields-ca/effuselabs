'use client'

import { SectionContainer } from '@/components/layout/SectionContainer'
import { H2, H3, Text } from '@/components/ui'
import { LightweightAnimatedContainer as Animated } from '@/components/ui/LightweightAnimatedContainer'
import React from 'react'

export interface PainSolutionSectionProps {
  id?: string
  problem: {
    heading: string
    description: string
    icon?: string
  }
  solution: {
    heading: string
    description: string
    icon?: string
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
      background={isDark ? 'dark' : 'white'}
      padding="lg"
    >
      <Animated animation="slideUp">
        <div className="max-w-6xl mx-auto">
          {/* Problem & Solution Grid */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 mb-12">
            {/* Problem Side */}
            <div className="text-center lg:text-left">
              {problem.icon && (
                <div
                  className="text-6xl mb-4 flex justify-center lg:justify-start"
                  aria-hidden
                >
                  {problem.icon}
                </div>
              )}
              <H3
                className={`mb-4 ${isDark ? 'text-white' : 'text-effuse-off-black'}`}
              >
                {problem.heading}
              </H3>
              <Text
                className={
                  isDark ? 'text-slate-300' : 'text-effuse-off-black/75'
                }
              >
                {problem.description}
              </Text>
            </div>

            {/* Solution Side */}
            <div className="text-center lg:text-left">
              {solution.icon && (
                <div
                  className="text-6xl mb-4 flex justify-center lg:justify-start"
                  aria-hidden
                >
                  {solution.icon}
                </div>
              )}
              <H3
                className={`mb-4 ${isDark ? 'text-white' : 'text-effuse-off-black'}`}
              >
                {solution.heading}
              </H3>
              <Text
                className={
                  isDark ? 'text-slate-300' : 'text-effuse-off-black/75'
                }
              >
                {solution.description}
              </Text>
            </div>
          </div>

          {/* Benefits Bullets */}
          {bullets.length > 0 && (
            <Animated animation="fadeIn" delay={0.2}>
              <div className="text-center">
                <H2 className={`mb-8 ${isDark ? 'text-white' : ''}`}>
                  Key Benefits
                </H2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                  {bullets.map((bullet, index) => (
                    <Animated
                      key={index}
                      animation="fadeIn"
                      delay={0.1 * (index + 3)}
                    >
                      <div
                        className={`p-4 rounded-lg ${
                          isDark
                            ? 'bg-slate-800/50 border border-slate-600/30'
                            : 'bg-slate-50/80 border border-effuse-light-grey/30'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-xl text-effuse-gold" aria-hidden>
                            ✓
                          </div>
                          <Text
                            className={`flex-1 text-sm ${
                              isDark
                                ? 'text-slate-300'
                                : 'text-effuse-off-black'
                            }`}
                          >
                            {bullet}
                          </Text>
                        </div>
                      </div>
                    </Animated>
                  ))}
                </div>
              </div>
            </Animated>
          )}
        </div>
      </Animated>
    </SectionContainer>
  )
}

export default PainSolutionSection
