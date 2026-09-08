import { SectionContainer } from '@/components/layout/SectionContainer'
import {
  AccentBar,
  Eyebrow,
  H2,
  H3,
  LuminousField,
  Reveal,
  Text,
} from '@/components/ui'
import React from 'react'

interface PhilosophySectionProps {
  id?: string
  heading?: string
  intro?: string
}

/*
 * Offset, unnumbered, per docs/DESIGN_PLAN.md. The three principles here
 * carry no sequence — nothing makes accessibility "first" and longevity
 * "third" — so the numbered gold circles this replaced were claiming an
 * order that didn't exist. Each block now steps right of the last instead,
 * so the eye descends the page rather than scanning a numbered list, with a
 * short true label (carrying the information the numbers pretended to)
 * rather than a digit.
 */
const items = [
  {
    label: 'Accessibility',
    title: 'Human-centred and accessible by default',
    copy: "Technology should serve people, not the other way around. We build every product with a deep sense of empathy, ensuring a clear information hierarchy and intuitive workflows that feel effortless. Our commitment to WCAG AA standards and reduced-motion support isn't an afterthought; it's a core principle that ensures the tools we build are accessible and delightful for everyone.",
  },
  {
    label: 'Performance',
    title: 'Built for performance and peace of mind',
    copy: 'Your software should be your most reliable employee. We build on a performance-first architecture, with performance budgets and accessibility checks enforced automatically on every change, so your tools stay fast as they grow. Our commitment to security is just as rigorous, implementing modern headers, HSTS, and industry best practices to protect your data and give you a foundation of trust you can build on.',
  },
  {
    label: 'Longevity',
    title: 'Pragmatic and future-ready',
    copy: "We build for the long term. By using typed components, clean structure, and DRY (Don't Repeat Yourself) principles, we create systems that are elegant, maintainable, and scalable. This pragmatic approach allows us to deliver exceptional value efficiently and ensures your software is a resilient asset, ready to grow and adapt right alongside your business.",
  },
]

const OFFSETS = ['', 'md:ml-16 lg:ml-24', 'md:ml-32 lg:ml-48']

const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  id = 'philosophy',
  heading = 'Our Philosophy',
  intro = "We believe powerful software should feel like a source of relief, not another burden. By fusing thoughtful design with pragmatic engineering, we build tools that don't just work—they empower. This is the Effuse difference.",
}) => {
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
          <H2 className="mb-6 text-effuse-parchment">{heading}</H2>
          <Text className="text-body-lg text-effuse-parchment">{intro}</Text>
        </div>

        <ul
          className="relative z-10 mx-auto max-w-4xl space-y-12"
          aria-label="Effuse Labs philosophy principles"
        >
          {items.map((item, index) => (
            <Reveal key={item.label} order={index}>
              <li className={`max-w-xl ${OFFSETS[index]}`}>
                <Eyebrow className="mb-3 flex items-center gap-3 text-effuse-teal">
                  <AccentBar size="sm" variant="effuse" />
                  {item.label}
                </Eyebrow>
                <H3 className="mb-3 font-medium text-effuse-parchment">
                  {item.title}
                </H3>
                <Text className="text-effuse-parchment">{item.copy}</Text>
              </li>
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </SectionContainer>
  )
}

export default PhilosophySection
