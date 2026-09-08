import { SectionContainer } from '@/components/layout'
import {
  ContactForm,
  FounderStatementSection,
  HeroSection,
  PhilosophySection,
} from '@/components/sections'
import { contact } from '@/content/site'
import {
  AccentBar,
  Button,
  Card,
  Grid,
  GridItem,
  H2,
  H3,
  LuminousField,
  Reveal,
  Pour,
  Text,
} from '@/components/ui'
import { Check, Server } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Philosophy Section */}
      <PhilosophySection id="features" />

      {/*
        The shell parts a little more at each boundary — see components/ui/Pour.
      */}
      <Pour openness={0.3} />

      {/* Founder Statement (dark) */}
      <FounderStatementSection
        signatureSrc="/brand/jeremy-signature.png"
        signatureAlt="Jeremy Shields's signature"
        signatureWidth={1209}
        signatureHeight={1059}
      />

      <Pour openness={0.55} flip />

      {/* Products Section */}
      <SectionContainer id="products" background="raised" padding="lg">
        <Reveal>
          <div className="text-center mb-12">
            <AccentBar
              size="md"
              variant="lumina"
              position="center"
              className="mb-6"
            />
            <H2 className="mb-4 text-effuse-parchment">Our Products</H2>
            <Text className="text-effuse-parchment/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Intelligent software solutions designed to turn operational
              burdens into your greatest strengths.
            </Text>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Lumina */}
            <Card
              id="lumina"
              variant="elevated"
              className="p-8 bg-surface-base bg-gradient-to-br from-lumina-gradient-start/10 to-lumina-gradient-end/10 border border-surface-border hover:border-lumina-gradient-start/40 transition-all duration-500 ease-out hover:shadow-gold-glow"
            >
              <div
                className="-mx-8 -mt-8 mb-6 h-1.5 rounded-t-lg bg-gradient-to-r from-lumina-gradient-start to-lumina-gradient-end"
                aria-hidden
              />
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <H3 className="mb-4 text-effuse-parchment">Lumina</H3>
                  <Text className="mb-6 text-effuse-parchment leading-relaxed font-normal">
                    An all-in-one, AI-powered platform for salons and
                    barbershops. Lumina replaces a patchwork of apps with a
                    single, elegant solution to manage bookings, financials, and
                    client relationships, illuminating the path to sustainable
                    growth.
                  </Text>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check
                        className="mr-2 h-4 w-4 flex-shrink-0 text-effuse-gold"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <Text className="text-sm text-effuse-parchment">
                        Intelligent dashboard with AI insights
                      </Text>
                    </li>
                    <li className="flex items-center">
                      <Check
                        className="mr-2 h-4 w-4 flex-shrink-0 text-effuse-gold"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <Text className="text-sm text-effuse-parchment">
                        Flexible financials for commission & chair rental
                      </Text>
                    </li>
                    <li className="flex items-center">
                      <Check
                        className="mr-2 h-4 w-4 flex-shrink-0 text-effuse-gold"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <Text className="text-sm text-effuse-parchment">
                        Seamless online booking integration
                      </Text>
                    </li>
                    <li className="flex items-center">
                      <Check
                        className="mr-2 h-4 w-4 flex-shrink-0 text-effuse-gold"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <Text className="text-sm text-effuse-parchment">
                        Unified POS & CRM system
                      </Text>
                    </li>
                  </ul>
                  <Button
                    variant="primary"
                    href="/products/lumina"
                    aria-label="Learn more about Lumina"
                  >
                    Learn More About Lumina
                  </Button>
                </div>
                {/*
                  The real Lumina mark, replacing the generic Lightbulb icon
                  placeholder. Icon-only, not the full lockup with the baked-
                  in "LUMINA" wordmark — that wordmark is rendered in black,
                  which disappears on this site's dark canvas. Live text
                  below does that job instead: real text beats text baked
                  into an image, for the same reason a screen reader can read
                  one and not the other.
                */}
                <div className="flex flex-col items-center justify-center rounded-lg bg-surface-deep p-8 text-center">
                  <Image
                    src="/brand/lumina-mark.png"
                    alt=""
                    aria-hidden="true"
                    width={800}
                    height={558}
                    className="h-20 w-auto"
                  />
                  <H3 className="mt-4 text-effuse-parchment">Lumina</H3>
                  <Text className="mt-2 text-effuse-parchment/70">
                    Illuminating Business Growth
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>
      </SectionContainer>

      {/*
        Solutions Section

        This used to re-pitch Lumina under a vaguer header, immediately after
        the Products section already pitched Lumina — the same offering
        twice, which a design-committee content review flagged as the
        biggest structural gap on the site: Effuse Labs has two real lines
        of business (Lumina, and self-hosting/open-source support for other
        businesses), and the second one appeared nowhere but a hero eyebrow
        tag. Rewritten in place — same component, same slot, no new route or
        nav change, since that's stage-6 scope — to actually describe it.

        Copy here is draft, per docs/ROADMAP.md's placeholder-content
        policy: written to read as real copy, not lorem ipsum, but not
        final — the real pass is stage 6, with Jeremy's own words.
      */}
      <SectionContainer id="solutions" background="base" padding="lg">
        <Reveal>
          <div className="text-center mb-12">
            <H2 className="mb-4 text-effuse-parchment">
              Own Your Tools, Not Rent Them
            </H2>
            <Text className="text-effuse-parchment/70 max-w-2xl mx-auto text-lg leading-relaxed font-normal">
              Not every business needs software built from scratch. Sometimes
              the right fix is taking back control of the tools you already pay
              for, month after month.
            </Text>
          </div>

          <Grid cols={1} gap="lg" className="max-w-2xl mx-auto">
            <GridItem>
              <Card
                variant="elevated"
                className="h-full p-8 text-center bg-surface-raised border-surface-border"
              >
                <div
                  className="-mx-8 -mt-8 mb-6 h-1.5 rounded-t-lg bg-gradient-to-r from-effuse-slate to-effuse-teal"
                  aria-hidden
                />
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex flex-col items-center justify-center md:min-h-[140px]">
                    <span className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-effuse-teal/10 text-effuse-teal ring-1 ring-effuse-teal/25">
                      <Server
                        className="h-7 w-7"
                        aria-hidden="true"
                        strokeWidth={1.75}
                      />
                    </span>
                    <H3 className="text-effuse-parchment text-center text-xl font-semibold">
                      Open-Source & Self-Hosted Software
                    </H3>
                  </div>
                  <ul className="space-y-2 mb-4 text-left min-h-[120px]">
                    <li className="flex items-start gap-2">
                      <svg
                        aria-hidden
                        className="mt-0.5 h-5 w-5 text-effuse-gold"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <Text as="span" className="text-sm text-effuse-parchment">
                        No per-seat fees that creep every year
                      </Text>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        aria-hidden
                        className="mt-0.5 h-5 w-5 text-effuse-gold"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <Text as="span" className="text-sm text-effuse-parchment">
                        Your data stays on infrastructure you control
                      </Text>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        aria-hidden
                        className="mt-0.5 h-5 w-5 text-effuse-gold"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <Text as="span" className="text-sm text-effuse-parchment">
                        Setup, migration, and ongoing support included
                      </Text>
                    </li>
                  </ul>
                  <Text className="mb-6 text-effuse-parchment leading-relaxed">
                    Subscription software adds up, and the moment you stop
                    paying, you lose access to your own data. We set up,
                    configure, and support self-hosted, open-source alternatives
                    to the tools you&apos;re renting — so you own what you run,
                    and pay only for the support you actually use.
                  </Text>
                  <Button
                    variant="primary"
                    size="sm"
                    href="/services"
                    className="mt-auto"
                  >
                    Learn More About Our Services
                  </Button>
                </div>
              </Card>
            </GridItem>
          </Grid>
        </Reveal>
      </SectionContainer>

      {/* Contact / CTA */}
      <SectionContainer
        id="contact"
        background="deep"
        padding="xl"
        className="relative isolate overflow-hidden"
      >
        <LuminousField intensity="section" />
        <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
          <AccentBar
            size="md"
            variant="effuse"
            position="center"
            className="mb-6"
          />
          <H2 className="mb-6 text-effuse-parchment">
            Ready to build with clarity?
          </H2>
          <Text className="mx-auto mb-10 max-w-2xl text-body-lg text-effuse-parchment">
            Tell us what your business is wrestling with. Whether that is
            software we build for you, or open-source tools we set up and keep
            running, the first conversation is free and there is no script.
          </Text>

          {/*
            This used to be a bare "Email {address}" button — real, unlike the
            inert "Get Started" / "Schedule Demo" buttons it originally
            replaced, but still just a link. The form below constructs a
            proper mailto: with the fields filled in, rather than a backend
            this repo doesn't have credentials to build honestly — see
            components/sections/ContactForm.tsx.
          */}
          <ContactForm />

          <Text className="mt-8 text-body-sm text-effuse-parchment/60">
            Prefer email directly? Reach us at{' '}
            <a
              href={`mailto:${contact.email}`}
              className="text-effuse-teal underline underline-offset-2"
            >
              {contact.email}
            </a>
            .
          </Text>

          <Text className="mt-6 text-body-sm text-effuse-parchment/70">
            {contact.location}
          </Text>
        </Reveal>
      </SectionContainer>
    </>
  )
}
