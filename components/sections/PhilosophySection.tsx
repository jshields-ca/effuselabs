import { SectionContainer } from '@/components/layout/SectionContainer'
import { AccentBar, H2, H3, LuminousField, Reveal, Text } from '@/components/ui'
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
      copy: 'Your software should be your most reliable employee. We build on a performance-first architecture, with performance budgets and accessibility checks enforced automatically on every change, so your tools stay fast as they grow. Our commitment to security is just as rigorous, implementing modern headers, HSTS, and industry best practices to protect your data and give you a foundation of trust you can build on.',
    },
    {
      num: 3,
      title: 'Pragmatic & Future-Ready',
      copy: "We build for the long term. By using typed components, clean structure, and DRY (Don't Repeat Yourself) principles, we create systems that are elegant, maintainable, and scalable. This pragmatic approach allows us to deliver exceptional value efficiently and ensures your software is a resilient asset, ready to grow and adapt right alongside your business.",
    },
  ]

  return (
    <SectionContainer
      id={id}
      background="base"
      padding="xl"
      className="relative isolate overflow-hidden"
    >
      <LuminousField intensity="section" />
      <Reveal>
        <div className="relative z-10 mx-auto mb-16 max-w-3xl">
          <AccentBar size="md" variant="effuse" className="mb-6" />
          <H2 className="mb-6 text-effuse-white">{heading}</H2>
          <Text className="text-body-lg text-effuse-light-grey">{intro}</Text>
        </div>

        <ol
          className="relative z-10 mx-auto max-w-4xl space-y-6"
          aria-label="Effuse Labs philosophy principles"
        >
          {items.map((item, index) => (
            <Reveal key={item.title} order={index}>
              <li className="group relative flex gap-6 rounded-2xl border border-surface-border bg-surface-raised/70 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-effuse-teal/40">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-effuse-gold font-semibold text-effuse-off-black"
                  aria-hidden="true"
                >
                  {item.num}
                </div>
                <div>
                  <H3 className="mb-3 font-medium text-effuse-white">
                    {item.title}
                  </H3>
                  <Text className="text-effuse-light-grey">{item.copy}</Text>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Reveal>
    </SectionContainer>
  )
}

export default PhilosophySection
