'use client'

import { SectionContainer } from '@/components/layout/SectionContainer'
import { H2, H3, Text } from '@/components/ui'
import { LightweightAnimatedContainer as Animated } from '@/components/ui/LightweightAnimatedContainer'
import React from 'react'

interface PhilosophySectionProps {
  id?: string
  heading?: string
  intro?: string
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  id = 'philosophy',
  heading = 'Our Philosophy',
  intro = "We believe powerful software should feel like a source of relief, not another burden. By fusing thoughtful design with pragmatic engineering, we build tools that don't just work—they empower. This is the Effuse difference.",
}) => {
  const items = [
    {
      num: 1,
      title: 'Human-Centered & Accessible by Default',
      copy: "Technology should serve people, not the other way around. We build every product with a deep sense of empathy, ensuring a clear information hierarchy and intuitive workflows that feel effortless. Our commitment to WCAG AA standards and reduced-motion support isn't an afterthought; it's a core principle that ensures the tools we build are accessible and delightful for everyone.",
    },
    {
      num: 2,
      title: 'Built for Performance & Peace of Mind',
      copy: 'Your software should be your most reliable employee. We build on a performance-first architecture, chasing 100/98 Lighthouse scores and monitoring Core Web Vitals to ensure your tools are lightning-fast. Our commitment to security is just as rigorous, implementing modern headers, HSTS, and industry best practices to protect your data and give you a foundation of trust you can build on.',
    },
    {
      num: 3,
      title: 'Pragmatic & Future-Ready',
      copy: "We build for the long term. By using typed components, clean structure, and DRY (Don't Repeat Yourself) principles, we create systems that are elegant, maintainable, and scalable. This pragmatic approach allows us to deliver exceptional value efficiently and ensures your software is a resilient asset, ready to grow and adapt right alongside your business.",
    },
  ]

  return (
    <SectionContainer id={id} background="white" padding="lg">
      <Animated animation="slideUp">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <H2 className="mb-4 text-effuse-off-black">{heading}</H2>
          <Text className="text-effuse-off-black/75 text-lg leading-relaxed font-normal">
            {intro}
          </Text>
        </div>

        <ol
          className="mx-auto max-w-4xl space-y-8"
          aria-label="Effuse Labs philosophy principles"
        >
          {items.map((item, index) => (
            <Animated key={item.title} animation="fadeIn" delay={0.05 * index}>
              <li className="relative flex gap-6 rounded-xl border border-effuse-light-grey/40 bg-slate-50/80 backdrop-blur-sm p-8 shadow-md hover:shadow-lg hover:border-effuse-teal/30 hover:bg-white transition-all duration-300">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-effuse-gold text-effuse-off-black font-semibold"
                  aria-hidden
                >
                  {item.num}
                </div>
                <div>
                  <H3 className="mb-3 text-effuse-off-black font-medium">{item.title}</H3>
                  <Text className="text-effuse-off-black/80 leading-relaxed font-normal">
                    {item.copy}
                  </Text>
                </div>
              </li>
            </Animated>
          ))}
        </ol>
      </Animated>
    </SectionContainer>
  )
}

export default PhilosophySection
