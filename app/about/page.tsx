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

/*
 * Marketing-tone pass: these used to speak in the vocabulary of the build
 * pipeline itself — "runs in CI," "fails the build," "declared colour
 * pairs." Jeremy's feedback was direct: it reads as expertise to another
 * developer and as noise to the small-business owner this site is actually
 * for. Each one now leads with the plain-language outcome and keeps the
 * verifiable, specific claim (still true, still checkable) as the proof
 * point rather than the headline.
 */
const practices = [
  {
    icon: ShieldCheck,
    title: 'Accessible by default, not by request',
    copy: 'Every dark section of this site is checked automatically for readability every time we make a change — not a manual review someone could skip under deadline.',
  },
  {
    icon: GitBranch,
    title: 'One consistent look, enforced automatically',
    copy: "Every colour, shape and font on this site comes from a single source. A page that strays from it, or falls short of accessibility standards, doesn't go live until it's fixed.",
  },
  {
    icon: CheckCircle2,
    title: 'Nothing ships untested',
    copy: 'Before any update to this site goes live, it is checked end to end automatically: every page loads, every link goes somewhere real, and visitors who prefer less motion get a calm, still page instead of animation.',
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
              Jeremy Shields, the founder, spent years working around software
              that wasn&apos;t built with him in mind before he decided to stop
              working around it and start building the alternative — the founder
              statement above tells that story directly. Here, it shows up as a
              rule, not a slogan: every dark surface on this site is checked
              automatically against recognized accessibility standards (WCAG
              AA), not left to a reviewer&apos;s judgement.
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
              is enforced automatically, every time we update this site, not
              simply promised.
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
