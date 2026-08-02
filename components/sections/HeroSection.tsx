'use client'

import {
  LightweightAnimatedContainer as AnimatedContainer,
  LightweightAnimatedItem as AnimatedItem,
  Button,
  H1,
  Text,
} from '@/components/ui'
// ...existing code...

interface HeroSectionProps {
  title?: string
  description?: string
}

export function HeroSection({
  title = 'Intelligent Software for Small Business Growth',
  description = 'We pour out innovative solutions that transform operational burdens into competitive strengths for small businesses.',
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-effuse-slate via-effuse-medium-grey to-effuse-teal">
      {/* Enhanced background overlay with sophisticated gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-effuse-off-black/60 via-effuse-off-black/20 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-effuse-teal/10 to-effuse-gold/5 z-10" />

      {/* Content: Left-aligned column layout for headline, description, CTA */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-center gap-8 pb-24 text-left max-w-4xl">
          <AnimatedContainer
            animation="emerge"
            duration={1.5}
            className="w-full space-y-8 text-left"
          >
            <AnimatedItem animation="reveal" delay={0.7} duration={1.5}>
              <H1 className="text-effuse-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 tracking-tight font-inter drop-shadow-sm">
                {title}
              </H1>
            </AnimatedItem>
            <AnimatedItem animation="slideUp" delay={1.0} duration={1.2}>
              <Text className="font-inter font-normal text-xl sm:text-2xl lg:text-2xl text-effuse-white/90 max-w-2xl leading-relaxed mb-10 drop-shadow-sm">
                {description}
              </Text>
            </AnimatedItem>
            <AnimatedItem animation="scale" delay={1.3} duration={1.2}>
              <div className="flex justify-start items-center mb-8">
                <Button
                  variant="primary"
                  href="#waitlist"
                  aria-label="Join the Waitlist"
                  className="bg-effuse-gold text-effuse-off-black font-inter font-semibold px-8 py-3 text-lg rounded-lg shadow-lg transition-all duration-200 hover:bg-effuse-gold/90 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Join the Waitlist
                </Button>
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  )
}
