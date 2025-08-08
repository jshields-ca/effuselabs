'use client'

import { useState, useEffect } from 'react'
import { Text, Button } from '@/components/ui'
import FluidParallaxBackground from '@/components/ui/FluidParallaxBackground'
import HeroCanvas from '@/components/ui/HeroCanvas'
import usePrefersReducedMotion from '@/lib/hooks/usePrefersReducedMotion'
import { AnimatedContainer, AnimatedItem } from '@/components/ui'
import { motion } from 'framer-motion'

interface HatchingCoreHeroSectionProps {
  title?: string
  subtitle?: string
  description?: string
  primaryCtaText?: string
  secondaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaHref?: string
}

export function HatchingCoreHeroSection({
  title = "Intelligent Software for Small Business Growth",
  subtitle = "Effuse Labs",
  description = "We pour out innovative solutions that transform operational burdens into competitive strengths for small businesses.",
  primaryCtaText = "Get a Demo",
  secondaryCtaText = "Learn More",
  primaryCtaHref = "#contact",
  secondaryCtaHref = "#about"
}: HatchingCoreHeroSectionProps) {
  const [isClient, setIsClient] = useState(false)
  const prefersReduced = usePrefersReducedMotion()
  useEffect(() => setIsClient(true), [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-off-black">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-off-black" />
        {isClient && (prefersReduced ? <FluidParallaxBackground /> : <HeroCanvas />)}
        {/* Simplified uniform overlay to avoid right-side banding */}
        <div className="absolute inset-0 bg-gradient-to-b from-off-black/25 via-transparent to-off-black/35 pointer-events-none" />
      </div>

      {/* Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            {/* Left: Text */}
            <div className="order-2 lg:order-1 text-left">
              <AnimatedContainer animation="emerge" duration={1.5} className="space-y-8 pb-24">
                <AnimatedItem animation="slideUp" delay={0.3} duration={1.2}>
                  <Text className="text-brand-teal-light text-sm sm:text-base font-medium tracking-[0.3em] uppercase">
                    {subtitle}
                  </Text>
                </AnimatedItem>

                <AnimatedItem animation="slideUp" delay={0.5} duration={1.5}>
                  <motion.h1
                    className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  >
                    {title}
                  </motion.h1>
                </AnimatedItem>

                <AnimatedItem animation="slideUp" delay={0.7} duration={1.2}>
                  <motion.p
                    className="text-light-grey text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  >
                    {description}
                  </motion.p>
                </AnimatedItem>

                <AnimatedItem animation="slideUp" delay={0.5} duration={1.5}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Button 
                        variant="primary" 
                        size="lg"
                        className="w-full sm:w-auto min-w-[200px] text-lg px-8 py-4"
                        onClick={() => {
                          const el = document.querySelector(primaryCtaHref)
                          el?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        {primaryCtaText}
                      </Button>
                    </motion.div>
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="w-full sm:w-auto min-w-[200px] text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-off-black"
                      onClick={() => {
                        const el = document.querySelector(secondaryCtaHref)
                        el?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      {secondaryCtaText}
                    </Button>
                  </div>
                </AnimatedItem>
              </AnimatedContainer>
            </div>

            {/* Right: empty space to balance layout (threads/clouds remain background) */}
            <div className="relative order-1 lg:order-2" aria-hidden="true" />
          </div>
        </div>
    </section>
  )
}
