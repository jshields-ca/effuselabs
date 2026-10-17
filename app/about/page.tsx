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
import { pageMetadata } from '@/lib/metadata'
import { KeyRound, MessageSquareText, ShieldCheck, Wrench } from 'lucide-react'
import type { Metadata } from 'next'

/*
 * Draft copy throughout, per the placeholder-content policy in
 * docs/ROADMAP.md — this page exists so the site has a real destination for
 * "who is Effuse Labs," not because the words below are final. Jeremy's own
 * account of the company, in his own words, is stage-6 copywriting work.
 */
export const metadata: Metadata = pageMetadata({
  title: 'About — Effuse Labs',
  description:
    'Effuse Labs is a Winnipeg-based software firm building open-source, accessible tools for small businesses — and setting up and managing self-hosted software so businesses can own their tools without maintaining them.',
  path: '/about',
})

/*
 * Client-facing commitments, not site internals. These used to describe this
 * website's own build pipeline ("every dark section of this site is checked
 * automatically…") — true, but it told a prospective client how the site is
 * tested and nothing about how their business would be treated. The
 * verifiable site-quality claims now live on /accessibility, where an
 * account of the site itself belongs.
 */
const practices = [
  {
    icon: KeyRound,
    title: 'You own it, outright',
    copy: "Your data, your software, your server. If you ever leave us, you leave with everything — and we'll help you go.",
  },
  {
    icon: Wrench,
    title: 'Self-hosted, not self-managed',
    copy: 'Updates, security patches, monitoring and backups we actually test-restore are our job, not yours. You get the control without the maintenance.',
  },
  {
    icon: MessageSquareText,
    title: 'Plain language, always',
    copy: "You'll know what you're running, where it runs, what it costs and why. No jargon, no surprise line items.",
  },
  {
    icon: ShieldCheck,
    title: 'Accessible by default',
    copy: 'Everything we build or recommend is checked against recognized accessibility standards (WCAG AA) before it reaches your team or your customers.',
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
                already pay a subscription for. We set up open-source
                alternatives, host them on a server sourced to fit your needs,
                and manage them on an ongoing retainer — so you own what you run
                without having to run it yourself.
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
              Software should work for the people using it
            </H2>
            <div className="space-y-6">
              <Text className="text-effuse-parchment">
                Jeremy Shields, the founder, is a developer and a
                federally-recognized person with a disability. He spent years
                working around software that wasn&apos;t built with him in mind
                before he decided to stop working around it and start building
                the alternative.
              </Text>
              <Text className="text-effuse-parchment">
                Both halves of Effuse Labs come from that. Software should serve
                the people using it — including the ones most vendors forget.
                And a business should never be one price increase or one
                cancelled subscription away from losing its own records.
              </Text>
            </div>
          </div>
        </Reveal>
      </SectionContainer>

      <SectionContainer id="about-how-we-build" background="base" padding="xl">
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl">
            <Eyebrow className="mb-3 text-effuse-teal">
              How we work with you
            </Eyebrow>
            <H2 className="mb-6 text-effuse-parchment">
              What you can expect from us
            </H2>
            <Text className="text-effuse-parchment">
              Owning your software used to mean maintaining it too. It
              doesn&apos;t have to. These are the commitments behind every
              engagement, whether we built the software or set it up.
            </Text>
          </div>
          <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
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
              tools we set up, host and keep running, the first conversation is
              free.
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
