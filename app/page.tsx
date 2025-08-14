import { H2, H3, Text, Button, Grid, GridItem, Card } from '@/components/ui'
import { SectionContainer } from '@/components/layout'
import { DynamicHeroSection } from '@/components/sections/DynamicHeroSection'
import { PhilosophySection, FounderStatementSection } from '@/components/sections'
import { getHeroContent } from '@/lib/sanity/api'
// Use lightweight CSS animations instead of Framer Motion
import { LightweightAnimatedContainer as AnimatedContainer } from '@/components/ui/LightweightAnimatedContainer'

export default async function Home() {
  const initialHero = await getHeroContent()
  return (
    <>
      {/* Hero Section (CMS-driven) */}
      <DynamicHeroSection initialContent={initialHero} />

      {/* Philosophy Section */}
      <PhilosophySection id="features" />

      {/* Founder Statement (dark) */}
      <FounderStatementSection />

      {/* Products Section */}
      <SectionContainer id="products" background="white" padding="lg">
        <AnimatedContainer animation="slideUp">
          <div className="text-center mb-12">
            <H2 className="mb-4">Our Products</H2>
            <Text className="text-slate-grey max-w-2xl mx-auto">
              Intelligent software solutions designed to turn operational burdens into your greatest strengths.
            </Text>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Lumina */}
            <Card id="lumina" variant="elevated" className="p-8">
              <div className="-mx-8 -mt-8 mb-6 h-1.5 rounded-t-lg bg-gradient-to-r from-[#FFD25A] to-[#FF7F50]" aria-hidden />
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <H3 className="text-brand-teal-light mb-4">Lumina</H3>
                  <Text className="mb-6">
                    An all-in-one, AI-powered platform for salons and barbershops. Lumina replaces a patchwork of apps with a single, elegant solution to manage bookings, financials, and client relationships, illuminating the path to sustainable growth.
                  </Text>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-brand-gold mr-2">✓</span>
                      <Text className="text-sm">Intelligent dashboard with AI insights</Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-gold mr-2">✓</span>
                      <Text className="text-sm">Flexible financials for commission & chair rental</Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-gold mr-2">✓</span>
                      <Text className="text-sm">Seamless online booking integration</Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-gold mr-2">✓</span>
                      <Text className="text-sm">Unified POS & CRM system</Text>
                    </li>
                  </ul>
                  <Button variant="primary" href="/products/lumina" aria-label="Learn more about Lumina">Learn More About Lumina</Button>
                </div>
                <div className="bg-gradient-to-br from-[#FFD25A] to-[#FF7F50] rounded-lg p-8 text-center text-white">
                  <div className="text-6xl mb-4">💡</div>
                  <H3 className="text-white mb-2">Lumina</H3>
                  <Text className="text-white/90">Illuminating Business Growth</Text>
                </div>
              </div>
            </Card>

            {/* SilentLedger */}
            <Card id="silentledger" variant="elevated" className="p-8">
              <div className="-mx-8 -mt-8 mb-6 h-1.5 rounded-t-lg bg-gradient-to-r from-[#1600e8] to-[#b11866]" aria-hidden />
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-[#1600e8] to-[#b11866] rounded-lg p-8 text-center text-white order-2 md:order-1">
                  <div className="text-6xl mb-4">📊</div>
                  <H3 className="text-white mb-2">SilentLedger</H3>
                  <Text className="text-white/90">Financial Clarity for Creators</Text>
                </div>
                <div className="order-1 md:order-2">
                  <H3 className="text-brand-gold mb-4">SilentLedger</H3>
                  <Text className="mb-6">
                    A dedicated financial dashboard for Canadian creators and solo developers. SilentLedger automates income tracking, expense categorization, and tax optimization, bringing financial clarity to the creator economy.
                  </Text>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-[#ff2525] mr-2">✓</span>
                      <Text className="text-sm">Canadian tax optimization for creators</Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#ff2525] mr-2">✓</span>
                      <Text className="text-sm">Multi-platform income tracking</Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#ff2525] mr-2">✓</span>
                      <Text className="text-sm">Automated expense categorization</Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#ff2525] mr-2">✓</span>
                      <Text className="text-sm">Real-time financial insights</Text>
                    </li>
                  </ul>
                  <Button variant="secondary" href="#silentledger" aria-label="Learn more about SilentLedger">Learn More About SilentLedger</Button>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedContainer>
      </SectionContainer>

      {/* Solutions Section */}
      <SectionContainer id="solutions" background="light" padding="lg">
        <AnimatedContainer animation="slideUp">
          <div className="text-center mb-12">
            <H2 className="mb-4">Built for the Builders</H2>
            <Text className="text-slate-grey max-w-2xl mx-auto">
              From the cornerstones of our communities to the pioneers of the digital frontier, our tools are crafted for the passionate creators and service providers building the future.
            </Text>
          </div>
          
          <Grid cols={1} gap="lg" className="lg:grid-cols-2">
            <GridItem>
              <Card variant="elevated" className="h-full p-8 text-center shadow-xl border-black/10">
                <div className="-mx-8 -mt-8 mb-6 h-1.5 rounded-t-lg bg-gradient-to-r from-[#FFD25A] to-[#FF7F50]" aria-hidden />
                <div className="flex flex-col h-full">
                <div className="mb-4 flex flex-col items-center justify-center md:min-h-[140px]">
                  <div className="text-6xl mb-3" aria-hidden>💇‍♀️</div>
                  <H3 className="text-off-black text-center">Salons & Barbershops</H3>
                </div>
                <ul className="space-y-2 mb-4 text-left min-h-[120px]">
                  <li className="flex items-start gap-2">
                    <svg aria-hidden className="mt-0.5 h-5 w-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <Text as="span" className="text-sm">Commission & chair rental management</Text>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg aria-hidden className="mt-0.5 h-5 w-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <Text as="span" className="text-sm">Client booking & relationship management</Text>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg aria-hidden className="mt-0.5 h-5 w-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <Text as="span" className="text-sm">Service pricing & inventory tracking</Text>
                  </li>
                </ul>
                <Text className="mb-6">
                  You’re more than a stylist; you&apos;re an artist, a confidant, and a community hub. You build relationships and transform your clients&apos; confidence, one appointment at a time. Your craft deserves to be the focus, not the endless paperwork that comes with it.
                </Text>
                <Button variant="primary" size="sm" href="/products/lumina" className="mt-auto">Explore Lumina</Button>
                </div>
              </Card>
            </GridItem>
            <GridItem>
              <Card variant="elevated" className="h-full p-8 text-center shadow-xl border-black/10">
                <div className="-mx-8 -mt-8 mb-6 h-1.5 rounded-t-lg bg-gradient-to-r from-[#1600e8] to-[#b11866]" aria-hidden />
                <div className="flex flex-col h-full">
                <div className="mb-4 flex flex-col items-center justify-center md:min-h-[140px]">
                  <div className="text-6xl mb-3" aria-hidden>💻</div>
                  <H3 className="text-off-black text-center">Independent Creators & Developers</H3>
                </div>
                <ul className="space-y-2 mb-4 text-left min-h-[120px]">
                  <li className="flex items-start gap-2">
                    <svg aria-hidden className="mt-0.5 h-5 w-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <Text as="span" className="text-sm">Canadian tax optimization & compliance</Text>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg aria-hidden className="mt-0.5 h-5 w-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <Text as="span" className="text-sm">Multi-platform income aggregation</Text>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg aria-hidden className="mt-0.5 h-5 w-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <Text as="span" className="text-sm">Expense tracking & financial insights</Text>
                  </li>
                </ul>
                <Text className="mb-6">
                  You are the architects of the new economy, turning ideas into code, pixels, and powerful content. You thrive on the freedom of creation, but that freedom often comes with the burden of running a business alone. We believe your energy is best spent creating, not crunching numbers.
                </Text>
                <Button variant="secondary" size="sm" href="#silentledger" className="mt-auto">Explore SilentLedger</Button>
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
          <Text className="text-light-grey max-w-2xl mx-auto mb-8">
            Join the growing number of small businesses that trust Effuse Labs to streamline their operations and unlock their potential.
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
            <Text className="text-light-grey text-sm mb-2">
              Get in touch with our team:
            </Text>
            <Text className="text-white">
              <a href="mailto:hello@effuse.io" className="hover:text-brand-teal-light transition-colors">
                hello@effuse.io
              </a>
            </Text>
          </div>
        </AnimatedContainer>
      </SectionContainer>
    </>
  )
}
