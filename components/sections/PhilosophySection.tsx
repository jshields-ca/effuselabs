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
/*
 * Three beliefs a client would recognise, not three engineering practices.
 * "Performance" and "Longevity" used to speak in build vocabulary — HSTS,
 * performance budgets, typed components, DRY — which reads as noise to the
 * small-business owner this site is for, and left out the belief the whole
 * firm rests on: that a business should own its tools, and that owning them
 * shouldn't mean maintaining them.
 */
const items = [
  {
    label: 'Accessibility',
    title: 'Built for everyone who uses it',
    copy: "We build with a deep sense of empathy: clear information, intuitive workflows, and tools that work for everyone — including the people most software forgets. Meeting recognized accessibility standards (WCAG AA) isn't an afterthought for us; it's why we started.",
  },
  {
    label: 'Ownership',
    title: "Your data shouldn't be held hostage",
    copy: 'Renting software means renting access to your own records — and the price only goes one way. We build and set up tools you own, on open standards, with no lock-in. That includes lock-in to us: if you ever leave, you leave with everything.',
  },
  {
    label: 'Stewardship',
    title: "Owning it shouldn't mean maintaining it",
    copy: "Self-hosting has always had a catch: someone has to look after it. That's us. We source the server, keep everything updated and patched, back it up, watch it, and answer when you call — so your software stays fast, secure and reliable for years.",
  },
]

const OFFSETS = ['', 'md:ml-16 lg:ml-24', 'md:ml-32 lg:ml-48']

const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  id = 'philosophy',
  heading = 'Our Philosophy',
  intro = 'We believe software should feel like a source of relief, not another burden — and not another bill that grows every year. Whether we build it or set it up, the goal is the same: tools that work for you, that you own, and that you never have to babysit.',
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
