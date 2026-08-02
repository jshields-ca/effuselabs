import { SectionContainer } from '@/components/layout'
import {
  FounderStatementSection,
  PhilosophySection,
} from '@/components/sections'
import { HeroSection } from '@/components/sections/HeroSection'
import {
  AccentBar,
  Button,
  Card,
  Grid,
  GridItem,
  H2,
  H3,
  SectionDivider,
  Text,
} from '@/components/ui'
// Use lightweight CSS animations instead of Framer Motion
import { LightweightAnimatedContainer as AnimatedContainer } from '@/components/ui/LightweightAnimatedContainer'

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
        <AnimatedContainer animation="slideUp">
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
                  <H3 className="text-effuse-teal mb-4 text-2xl font-semibold">
                    Lumina
                  </H3>
                  <Text className="mb-6 text-effuse-off-black leading-relaxed font-normal">
                    An all-in-one, AI-powered platform for salons and
                    barbershops. Lumina replaces a patchwork of apps with a
                    single, elegant solution to manage bookings, financials, and
                    client relationships, illuminating the path to sustainable
                    growth.
                  </Text>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-effuse-gold mr-2 text-lg">✓</span>
                      <Text className="text-sm text-effuse-off-black">
                        Intelligent dashboard with AI insights
                      </Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-effuse-gold mr-2 text-lg">✓</span>
                      <Text className="text-sm text-effuse-off-black">
                        Flexible financials for commission & chair rental
                      </Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-effuse-gold mr-2 text-lg">✓</span>
                      <Text className="text-sm text-effuse-off-black">
                        Seamless online booking integration
                      </Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-effuse-gold mr-2 text-lg">✓</span>
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
                <div className="bg-gradient-to-br from-lumina-gradient-start to-lumina-gradient-end rounded-lg p-8 text-center text-white">
                  <div className="text-6xl mb-4">💡</div>
                  <H3 className="text-white mb-2">Lumina</H3>
                  <Text className="text-white/90">
                    Illuminating Business Growth
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedContainer>
      </SectionContainer>

      {/* Solutions Section */}
      <SectionContainer id="solutions" background="lighter" padding="lg">
        <AnimatedContainer animation="slideUp">
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
                    <div className="text-6xl mb-3" aria-hidden>
                      💇‍♀️
                    </div>
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
        </AnimatedContainer>
      </SectionContainer>

      {/* Contact/CTA Section */}
      <SectionContainer id="contact" background="dark" padding="lg">
        <AnimatedContainer animation="fadeIn" className="text-center">
          <H2 className="text-white mb-6">Ready to Build with Clarity?</H2>
          <Text className="text-slate-300 max-w-2xl mx-auto mb-8">
            Join the growing number of small businesses that trust Effuse Labs
            to streamline their operations and unlock their potential.
          </Text>
          <div className="inline-flex gap-4 mb-8">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              Schedule Demo
            </Button>
          </div>
          <div className="max-w-md mx-auto">
            <Text className="text-slate-300 text-sm mb-2">
              Get in touch with our team:
            </Text>
            <Text className="text-white">
              <a
                href="mailto:hello@effuse.io"
                className="hover:text-effuse-teal transition-colors"
              >
                hello@effuse.io
              </a>
            </Text>
          </div>
        </AnimatedContainer>
      </SectionContainer>
    </>
  )
}
