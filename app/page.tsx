import { SectionContainer } from '@/components/layout'
import {
  FounderStatementSection,
  PhilosophySection,
} from '@/components/sections'
import { HeroSection } from '@/components/sections/HeroSection'
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
  SectionDivider,
  Text,
} from '@/components/ui'
import { ArrowRight, Check, Lightbulb, Scissors } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Philosophy Section */}
      <PhilosophySection id="features" />

      {/* Elegant section divider */}
      <SectionDivider size="md" animated />

      {/* Founder Statement (dark) */}
      <FounderStatementSection />

      {/* Section divider with subtle styling */}
      <SectionDivider size="lg" variant="subtle" />

      {/* Products Section */}
      <SectionContainer id="products" background="white" padding="lg">
        <Reveal>
          <div className="text-center mb-12">
            <AccentBar
              size="md"
              variant="lumina"
              position="center"
              className="mb-6"
            />
            <H2 className="mb-4 text-effuse-off-black">Our Products</H2>
            <Text className="text-effuse-medium-grey max-w-2xl mx-auto text-lg leading-relaxed">
              Intelligent software solutions designed to turn operational
              burdens into your greatest strengths.
            </Text>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Lumina */}
            <Card
              id="lumina"
              variant="elevated"
              className="p-8 bg-gradient-to-br from-lumina-gradient-start/5 to-lumina-gradient-end/5 border border-lumina-gradient-start/20 hover:border-lumina-gradient-start/40 transition-all duration-500 ease-out hover:shadow-gold-glow"
            >
              <div
                className="-mx-8 -mt-8 mb-6 h-1.5 rounded-t-lg bg-gradient-to-r from-lumina-gradient-start to-lumina-gradient-end"
                aria-hidden
              />
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <H3 className="mb-4 text-effuse-off-black">Lumina</H3>
                  <Text className="mb-6 text-effuse-off-black leading-relaxed font-normal">
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
                      <Text className="text-sm text-effuse-off-black">
                        Intelligent dashboard with AI insights
                      </Text>
                    </li>
                    <li className="flex items-center">
                      <Check
                        className="mr-2 h-4 w-4 flex-shrink-0 text-effuse-gold"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <Text className="text-sm text-effuse-off-black">
                        Flexible financials for commission & chair rental
                      </Text>
                    </li>
                    <li className="flex items-center">
                      <Check
                        className="mr-2 h-4 w-4 flex-shrink-0 text-effuse-gold"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <Text className="text-sm text-effuse-off-black">
                        Seamless online booking integration
                      </Text>
                    </li>
                    <li className="flex items-center">
                      <Check
                        className="mr-2 h-4 w-4 flex-shrink-0 text-effuse-gold"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <Text className="text-sm text-effuse-off-black">
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
                <div className="rounded-lg bg-gradient-to-br from-lumina-gradient-start to-lumina-gradient-end p-8 text-center text-effuse-off-black">
                  <Lightbulb
                    className="mx-auto mb-4 h-14 w-14"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                  <H3 className="mb-2 text-effuse-off-black">Lumina</H3>
                  <Text className="text-effuse-off-black/80">
                    Illuminating Business Growth
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>
      </SectionContainer>

      {/* Solutions Section */}
      <SectionContainer id="solutions" background="light" padding="lg">
        <Reveal>
          <div className="text-center mb-12">
            <H2 className="mb-4 text-effuse-off-black">
              Built for the Builders
            </H2>
            <Text className="text-effuse-medium-grey max-w-2xl mx-auto text-lg leading-relaxed font-normal">
              Our tools are crafted for the passionate creators and service
              providers who are the cornerstones of our communities.
            </Text>
          </div>

          {/* Single column while Lumina is the only product. */}
          <Grid cols={1} gap="lg" className="max-w-2xl mx-auto">
            <GridItem>
              <Card
                variant="elevated"
                className="h-full p-8 text-center shadow-xl border-black/10"
              >
                <div
                  className="-mx-8 -mt-8 mb-6 h-1.5 rounded-t-lg bg-gradient-to-r from-lumina-gradient-start to-lumina-gradient-end"
                  aria-hidden
                />
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex flex-col items-center justify-center md:min-h-[140px]">
                    <span className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-effuse-teal/10 text-effuse-slate ring-1 ring-effuse-teal/25">
                      <Scissors
                        className="h-7 w-7"
                        aria-hidden="true"
                        strokeWidth={1.75}
                      />
                    </span>
                    <H3 className="text-effuse-off-black text-center text-xl font-semibold">
                      Salons & Barbershops
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
                      <Text as="span" className="text-sm text-effuse-off-black">
                        Commission & chair rental management
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
                      <Text as="span" className="text-sm text-effuse-off-black">
                        Client booking & relationship management
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
                      <Text as="span" className="text-sm text-effuse-off-black">
                        Service pricing & inventory tracking
                      </Text>
                    </li>
                  </ul>
                  <Text className="mb-6 text-effuse-off-black leading-relaxed">
                    You’re more than a stylist; you&apos;re an artist, a
                    confidant, and a community hub. You build relationships and
                    transform your clients&apos; confidence, one appointment at
                    a time. Your craft deserves to be the focus, not the endless
                    paperwork that comes with it.
                  </Text>
                  <Button
                    variant="primary"
                    size="sm"
                    href="/products/lumina"
                    className="mt-auto"
                  >
                    Explore Lumina
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
          <H2 className="mb-6 text-effuse-white">
            Ready to build with clarity?
          </H2>
          <Text className="mx-auto mb-10 max-w-2xl text-body-lg text-effuse-light-grey">
            Tell us what your business is wrestling with. Whether that is
            software we build for you, or open-source tools we set up and keep
            running, the first conversation is free and there is no script.
          </Text>

          {/*
            These were a "Get Started" and a "Schedule Demo" button with no href
            and no onClick — inert elements styled to look like the primary
            action on the page. A mailto: is not the eventual answer, but it
            works today, which an inert button never did. The contact form
            replaces it.
          */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              href={`mailto:${contact.email}`}
            >
              Email {contact.email}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg" href="/products/lumina">
              See what we have built
            </Button>
          </div>

          <Text className="mt-10 text-body-sm text-effuse-light-grey/70">
            {contact.location}
          </Text>
        </Reveal>
      </SectionContainer>
    </>
  )
}
