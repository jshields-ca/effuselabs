import { H2, H3, Text, Button, Grid, GridItem, Card } from '@/components/ui'
import { SectionContainer } from '@/components/layout'
import { DynamicHeroSection } from '@/components/sections/DynamicHeroSection'
import { DarkFeatureSection, LightFeatureSection } from '@/components/sections'
import { getHeroContent } from '@/lib/sanity/api'
// Use lightweight CSS animations instead of Framer Motion
import { LightweightAnimatedContainer as AnimatedContainer } from '@/components/ui/LightweightAnimatedContainer'

export default async function Home() {
  const initialHero = await getHeroContent()
  return (
    <>
      {/* Hero Section (CMS-driven) */}
      <DynamicHeroSection initialContent={initialHero} />

      {/* Sprint Progress Section */}
      <SectionContainer background="white" padding="lg">
        <AnimatedContainer animation="slideUp" delay={0.1}>
          <div className="bg-brand-gold text-off-black px-8 py-6 rounded-lg text-center mb-16">
            <Text className="text-off-black font-semibold mb-2">🚀 Sprint 4 In Progress</Text>
            <Text className="text-off-black text-sm">CMS hero integration and performance/mobile optimization underway</Text>
          </div>
        </AnimatedContainer>
      </SectionContainer>

      {/* Feature Sections (EFF-42) */}
      <LightFeatureSection id="features" />
      <DarkFeatureSection />

      {/* Products Section */}
      <SectionContainer id="products" background="white" padding="lg">
        <AnimatedContainer animation="slideUp">
          <div className="text-center mb-12">
            <H2 className="mb-4">Our Products</H2>
            <Text className="text-slate-grey max-w-2xl mx-auto">
              Intelligent software solutions designed for growing businesses and independent creators.
            </Text>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Lumina */}
            <Card variant="elevated" className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <H3 className="text-brand-teal-light mb-4">Lumina</H3>
                  <Text className="mb-6">
                    AI-powered business management platform designed specifically for salons and barbershops. 
                    Lumina illuminates the path to growth by replacing patchwork solutions with a single, elegant platform.
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
                  <Button variant="primary">Learn More About Lumina</Button>
                </div>
                <div className="bg-gradient-to-br from-brand-teal-light to-brand-gold rounded-lg p-8 text-center text-white">
                  <div className="text-6xl mb-4">💡</div>
                  <H3 className="text-white mb-2">Lumina</H3>
                  <Text className="text-white/90">Illuminating Business Growth</Text>
                </div>
              </div>
            </Card>

            {/* SilentLedger */}
            <Card variant="elevated" className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-off-black to-medium-grey rounded-lg p-8 text-center text-white order-2 md:order-1">
                  <div className="text-6xl mb-4">📊</div>
                  <H3 className="text-white mb-2">SilentLedger</H3>
                  <Text className="text-white/90">Financial Clarity for Creators</Text>
                </div>
                <div className="order-1 md:order-2">
                  <H3 className="text-brand-gold mb-4">SilentLedger</H3>
                  <Text className="mb-6">
                    Financial dashboard designed specifically for solo developers and digital creators in Canada. 
                    Track income, expenses, and taxes with tools built for the creator economy.
                  </Text>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-brand-teal-light mr-2">✓</span>
                      <Text className="text-sm">Canadian tax optimization for creators</Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-teal-light mr-2">✓</span>
                      <Text className="text-sm">Multi-platform income tracking</Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-teal-light mr-2">✓</span>
                      <Text className="text-sm">Automated expense categorization</Text>
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-teal-light mr-2">✓</span>
                      <Text className="text-sm">Real-time financial insights</Text>
                    </li>
                  </ul>
                  <Button variant="secondary">Learn More About SilentLedger</Button>
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
            <H2 className="mb-4">Who We Serve</H2>
            <Text className="text-slate-grey max-w-2xl mx-auto">
              From beauty professionals to digital creators, we build software that understands your unique business needs.
            </Text>
          </div>
          
          <Grid cols={1} gap="lg" className="lg:grid-cols-2">
            <GridItem>
              <Card variant="elevated" className="h-full p-8 text-center">
                <div className="text-6xl mb-6">💇‍♀️</div>
                <H3 className="mb-4 text-brand-teal-light">Beauty Professionals</H3>
                <Text className="mb-6">
                  Salon owners, hair stylists, barbers, and spa professionals who need intelligent business 
                  management that understands the unique challenges of the beauty industry.
                </Text>
                <div className="space-y-2 mb-6 text-left">
                  <div className="flex items-center">
                    <span className="text-brand-gold mr-2">•</span>
                    <Text className="text-sm">Commission & chair rental management</Text>
                  </div>
                  <div className="flex items-center">
                    <span className="text-brand-gold mr-2">•</span>
                    <Text className="text-sm">Client booking & relationship management</Text>
                  </div>
                  <div className="flex items-center">
                    <span className="text-brand-gold mr-2">•</span>
                    <Text className="text-sm">Service pricing & inventory tracking</Text>
                  </div>
                </div>
                <Button variant="primary" size="sm">Explore Lumina</Button>
              </Card>
            </GridItem>
            <GridItem>
              <Card variant="elevated" className="h-full p-8 text-center">
                <div className="text-6xl mb-6">💻</div>
                <H3 className="mb-4 text-brand-gold">Digital Creators</H3>
                <Text className="mb-6">
                  Solo developers, freelancers, content creators, and digital entrepreneurs in Canada 
                  who need financial clarity and tax optimization for the creator economy.
                </Text>
                <div className="space-y-2 mb-6 text-left">
                  <div className="flex items-center">
                    <span className="text-brand-teal-light mr-2">•</span>
                    <Text className="text-sm">Canadian tax optimization & compliance</Text>
                  </div>
                  <div className="flex items-center">
                    <span className="text-brand-teal-light mr-2">•</span>
                    <Text className="text-sm">Multi-platform income aggregation</Text>
                  </div>
                  <div className="flex items-center">
                    <span className="text-brand-teal-light mr-2">•</span>
                    <Text className="text-sm">Expense tracking & financial insights</Text>
                  </div>
                </div>
                                  <Button variant="secondary" size="sm">Explore SilentLedger</Button>
              </Card>
            </GridItem>
          </Grid>
        </AnimatedContainer>
      </SectionContainer>

      {/* About Section */}
      <SectionContainer id="about" background="white" padding="lg">
        <AnimatedContainer animation="slideUp">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <H2 className="mb-4">About Effuse Labs</H2>
              <Text className="text-slate-grey max-w-2xl mx-auto">
                We believe local businesses are the backbone of our communities and deserve access to 
                the same level of technology typically reserved for large corporations.
              </Text>
            </div>
            
            <Grid cols={1} gap="lg" className="lg:grid-cols-2">
              <GridItem>
                <div className="space-y-6">
                  <div>
                    <H3 className="text-brand-teal-light mb-3">Our Mission</H3>
                    <Text>
                      To pour out a continuous stream of innovative ideas, elegant code, and intelligent 
                      solutions that democratize the power of data for underserved small businesses.
                    </Text>
                  </div>
                  <div>
                    <H3 className="text-brand-teal-light mb-3">Our Values</H3>
                    <ul className="space-y-2 text-off-black">
                      <li><strong>Clarity:</strong> We make the complex simple</li>
                      <li><strong>Empowerment:</strong> We give users tools to build their own success</li>
                      <li><strong>Innovation:</strong> We are always thinking ahead</li>
                      <li><strong>Accessibility:</strong> Our tools are for everyone</li>
                    </ul>
                  </div>
                </div>
              </GridItem>
              <GridItem>
                <Card variant="outline" className="p-6">
                  <H3 className="mb-4">Founded in Winnipeg</H3>
                  <Text className="mb-4">
                    Based in Winnipeg, Manitoba, Canada, Effuse Labs was founded with the vision of 
                    creating accessible, powerful software that helps small businesses thrive in an 
                    increasingly digital world.
                  </Text>
                  <Text>
                    Our founder, Jeremy Shields, brings a unique perspective as a federally-recognized 
                    person with a disability, ensuring accessibility and inclusivity are at the core 
                    of everything we build.
                  </Text>
                </Card>
              </GridItem>
            </Grid>
          </div>
        </AnimatedContainer>
      </SectionContainer>

      {/* Contact/CTA Section */}
      <SectionContainer id="contact" background="dark" padding="lg">
        <AnimatedContainer animation="fadeIn" className="text-center">
          <H2 className="text-white mb-6">Ready to Transform Your Business?</H2>
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
