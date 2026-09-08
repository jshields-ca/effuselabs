import { SectionContainer } from '@/components/layout/SectionContainer'
import { H2, Reveal, Text } from '@/components/ui'
import Image from 'next/image'
import React from 'react'

export interface ShowcaseTool {
  name: string
  category: string
  href: string
  /** Filename under public/icons/services/ — see that folder's own note. */
  icon: string
}

export interface ToolShowcaseSectionProps {
  id?: string
  heading?: string
  subheading?: string
  tools: ShowcaseTool[]
  closingNote?: string
}

/*
 * A logo wall, not a feature list. `FeatureBreakdownSection` above this one
 * already covers the four categories in depth with a description and one
 * named example each — this section exists to answer a different question:
 * "is that really all?" The honest answer is no, by a wide margin, and the
 * only way to show that convincingly is breadth, not more prose. Twenty
 * real, actively maintained projects across categories nobody would have
 * guessed (personal finance, inventory, habit tracking) says more than any
 * paragraph could about how mature this space already is.
 *
 * Icons come from the dashboard-icons project (github.com/homarr-labs/
 * dashboard-icons), fetched once into public/icons/services/ rather than
 * pulled from their CDN at request time — this site is the one making the
 * case for owning your own infrastructure, so it should not quietly depend
 * on someone else's for something as basic as its own images.
 *
 * Every tile sits on a light card regardless of the source logo's own
 * colours — several of these (Umami, Vaultwarden) are dark line-art
 * clearly designed for a light background, and read as nearly invisible
 * smudges directly on the site's dark canvas. A uniform light tile is also
 * just how logo walls conventionally work, so it doesn't need to be
 * explained.
 */
const ToolShowcaseSection: React.FC<ToolShowcaseSectionProps> = ({
  id = 'tool-showcase',
  heading = "A sample of what's out there",
  subheading = "This is a fraction of what's mature and stable today, across categories that go well beyond the obvious. If it's self-hostable, there's probably already a good answer for it.",
  tools,
  closingNote = "Don't see your tool, or running something more niche? Ask — chances are there's a self-hosted answer for it too.",
}) => {
  return (
    <SectionContainer id={id} background="raised" padding="lg">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <H2 className="mb-4 text-effuse-parchment">{heading}</H2>
          <Text className="mb-12 text-effuse-parchment">{subheading}</Text>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
          {tools.map(tool => (
            <a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-colors duration-200 hover:bg-white/5"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-effuse-light-grey p-2.5 shadow-brand-md transition-transform duration-200 group-hover:-translate-y-0.5">
                <Image
                  src={`/icons/services/${tool.icon}`}
                  alt=""
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="text-center text-body-sm font-medium text-effuse-parchment group-hover:text-effuse-teal">
                {tool.name}
              </span>
              <span className="text-center text-xs text-effuse-parchment/50">
                {tool.category}
              </span>
            </a>
          ))}
        </div>

        {closingNote ? (
          <Text className="mx-auto mt-12 max-w-2xl text-center text-effuse-parchment/70">
            {closingNote}
          </Text>
        ) : null}
      </Reveal>
    </SectionContainer>
  )
}

export default ToolShowcaseSection
