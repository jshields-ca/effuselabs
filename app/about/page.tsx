import { SectionContainer } from '@/components/layout'
import {
  AccentBar,
  Button,
  Eyebrow,
  H1,
  H2,
  H3,
  Reveal,
  Text,
} from '@/components/ui'
import { CheckCircle2, GitBranch, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'

/*
 * Draft copy throughout, per the placeholder-content policy in
 * docs/ROADMAP.md — this page exists so the site has a real destination for
 * "who is Effuse Labs," not because the words below are final. Jeremy's own
 * account of the company, in his own words, is stage-6 copywriting work.
 */
export const metadata: Metadata = {
  title: 'About — Effuse Labs',
  description:
    'Effuse Labs is a Winnipeg-based software firm building open-source, accessible tools for small businesses — and helping others own their software instead of renting it.',
}

const practices = [
  {
    icon: ShieldCheck,
    title: 'Accessibility is gated, not requested',
    copy: 'Every dark surface on this site meets WCAG AA, and a contrast check runs in CI against the declared colour pairs — not a manual review someone might skip under deadline.',
  },
  {
    icon: GitBranch,
    title: 'One source of truth for design',
    copy: 'Every colour, radius, shadow and font in this codebase lives in one file. A build fails on a raw hex value anywhere else, or a colour pair that falls short of contrast standards.',
  },
  {
    icon: CheckCircle2,
    title: 'Shipped means tested',
    copy: 'A production build runs through an automated check before anything merges — every route responds, every internal link resolves to somewhere real, and reduced-motion is honoured everywhere motion exists.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SectionContainer id="about-hero" background="deep" padding="xl">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <AccentBar size="md" variant="effuse" className="mb-6" />
            <H1 className="mb-6 text-effuse-parchment">About Effuse Labs</H1>
            <Text className="text-body-lg text-effuse-parchment">
              Effuse Labs is a small software firm in Winnipeg, Manitoba. The
              name comes from <em>effundere</em> — to pour out — and it
              describes both what the company makes and how it works:
              accessible, open, and built to be owned rather than rented.
            </Text>
          </div>
        </Reveal>
      </SectionContainer>

      <SectionContainer id="about-what-we-do" background="base" padding="xl">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow className="mb-3 text-effuse-teal">What we do</Eyebrow>
            <H2 className="mb-6 text-effuse-parchment">
              Two ways to stop renting your software
            </H2>
            <div className="space-y-6">
              <Text className="text-effuse-parchment">
                <strong className="text-effuse-parchment">Lumina</strong> is our
                own product: an open-source, self-hostable platform for salons
                and barbershops, covering booking, clients, staff and
                financials. Free to run yourself; we host and support it for
                businesses that would rather we did.
              </Text>
              <Text className="text-effuse-parchment">
                <strong className="text-effuse-parchment">
                  Open-source and self-hosting support
                </strong>{' '}
                is the other half. Not every business needs custom software —
                sometimes the right fix is taking back control of the tools you
                already pay a subscription for. We set up, configure and support
                self-hosted, open-source alternatives, so you own what you run.
              </Text>
            </div>
          </div>
        </Reveal>
      </SectionContainer>

      <SectionContainer id="about-founder" background="deep" padding="xl">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow className="mb-3 text-effuse-teal">Why it exists</Eyebrow>
            <H2 className="mb-6 text-effuse-parchment">
              Accessibility is autobiography here, not positioning
            </H2>
            <Text className="text-effuse-parchment">
              Jeremy Shields, the founder, is a developer and a
              federally-recognized person with a disability. He started Effuse
              Labs on the belief that technology should be a source of
              liberation, not frustration — badly designed software builds
              barriers, and this firm exists to stop doing that. It shows up as
              a rule, not a slogan: every dark surface on this site is checked
              against WCAG AA in an automated build, not left to a
              reviewer&apos;s judgement.
            </Text>
          </div>
        </Reveal>
      </SectionContainer>

      <SectionContainer id="about-how-we-build" background="base" padding="xl">
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl">
            <Eyebrow className="mb-3 text-effuse-teal">How we build</Eyebrow>
            <H2 className="mb-6 text-effuse-parchment">
              What &ldquo;engineering discipline&rdquo; actually means here
            </H2>
            <Text className="text-effuse-parchment">
              This is not a claim you have to take on faith — every rule below
              is enforced by an automated check in this very repository, and it
              fails the build when broken.
            </Text>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
            {practices.map(practice => (
              <div key={practice.title}>
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-effuse-teal/10 text-effuse-teal ring-1 ring-effuse-teal/25">
                  <practice.icon
                    className="h-6 w-6"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                </span>
                <H3 className="mb-3 text-effuse-parchment">{practice.title}</H3>
                <Text className="text-effuse-parchment/80">
                  {practice.copy}
                </Text>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionContainer>

      <SectionContainer
        id="about-contact"
        background="gradient"
        padding="xl"
        className="text-center"
      >
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <H2 className="mb-4 text-effuse-parchment">
              Want to talk about your business?
            </H2>
            <Text className="mb-8 text-effuse-parchment/80">
              Whether that&apos;s software we build for you, or open-source
              tools we set up and keep running, the first conversation is free.
            </Text>
            <Button variant="primary" size="lg" href="/#contact">
              Get in touch
            </Button>
          </div>
        </Reveal>
      </SectionContainer>
    </>
  )
}
