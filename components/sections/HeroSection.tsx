'use client'

import { H1, Text, Button } from '@/components/ui'
import { AnimatedContainer, AnimatedItem } from '@/components/ui'

interface HeroSectionProps {
  title?: string
  subtitle?: string
  description?: string
  primaryCtaText?: string
  secondaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaHref?: string
}

export function HeroSection({
  title = "Intelligent Software for Small Business Growth",
  subtitle = "Effuse Labs",
  description = "We pour out innovative solutions that transform operational burdens into competitive strengths for small businesses.",
  primaryCtaText = "Get Started",
  secondaryCtaText = "Learn More",
  primaryCtaHref = "#contact",
  secondaryCtaHref = "#about"
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-grey via-off-black to-brand-teal-dark">
      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-off-black/50 to-transparent z-10" />
      
      {/* Deprecated background removed */}

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedContainer animation="emerge" duration={1.5} className="space-y-8 pb-24">
          {/* Company name */}
          <AnimatedItem animation="slideUp" delay={0.3} duration={1.2}>
            <div className="mb-6">
              <Text className="text-brand-teal-light text-lg font-medium tracking-[0.3em] uppercase transform hover:text-brand-teal-light/80 transition-colors duration-500">
                {subtitle}
              </Text>
            </div>
          </AnimatedItem>

          {/* Main headline */}
          <AnimatedItem animation="reveal" delay={0.7} duration={1.5}>
            <H1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 transform perspective-1000 hover:text-white/90 transition-colors duration-500">
              {title}
            </H1>
          </AnimatedItem>

          {/* Description */}
          <AnimatedItem animation="slideUp" delay={1.0} duration={1.2}>
            <Text className="text-light-grey text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-12 transform hover:text-light-grey/80 transition-colors duration-500">
              {description}
            </Text>
          </AnimatedItem>

          {/* Call-to-action buttons */}
          <AnimatedItem animation="scale" delay={1.3} duration={1.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                variant="primary" 
                size="lg"
                className="w-full sm:w-auto min-w-[200px] text-lg px-8 py-4 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-brand-gold/30 hover:bg-brand-gold/90"
                onClick={() => {
                  const element = document.querySelector(primaryCtaHref)
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {primaryCtaText}
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="w-full sm:w-auto min-w-[200px] text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-off-black transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/30"
                onClick={() => {
                  const element = document.querySelector(secondaryCtaHref)
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {secondaryCtaText}
              </Button>
            </div>
          </AnimatedItem>
        </AnimatedContainer>
        
        {/* Scroll indicator - positioned outside main content container */}
        <AnimatedItem animation="emerge" delay={1.8} duration={1.0}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex flex-col items-center space-y-3 text-white group cursor-pointer">
              <Text className="text-sm font-medium tracking-wide transition-all duration-300 group-hover:text-brand-teal-light">
                Scroll to explore
              </Text>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/20 hover:scale-125 hover:border-brand-teal-light group-hover:shadow-lg group-hover:shadow-brand-teal-light/25">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce group-hover:bg-brand-teal-light transition-colors duration-300" />
              </div>
            </div>
          </div>
        </AnimatedItem>
      </div>
    </section>
  )
}
