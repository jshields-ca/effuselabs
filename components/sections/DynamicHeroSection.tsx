'use client'

import { useState, useEffect, useRef } from 'react'
import { H1, Text, Button } from '@/components/ui'
// Use lightweight CSS animations instead of Framer Motion
import { LightweightAnimatedContainer as AnimatedContainer, LightweightAnimatedItem as AnimatedItem } from '@/components/ui/LightweightAnimatedContainer'

// Three.js HeroCanvas removed for final performance optimization - using pure CSS background
import { getHeroContent } from '@/lib/sanity/api'
import type { HeroSectionContent } from '@/lib/sanity/types'

interface DynamicHeroSectionProps {
  fallbackContent?: Partial<Omit<HeroSectionContent, '_id' | '_type'>>
  initialContent?: Omit<HeroSectionContent, '_id' | '_type'>
}

export function DynamicHeroSection({ fallbackContent, initialContent }: DynamicHeroSectionProps) {
  const [heroContent, setHeroContent] = useState<Omit<HeroSectionContent, '_id' | '_type'> | null>(initialContent || null)
  const [isLoading, setIsLoading] = useState(!initialContent)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    async function loadHeroContent() {
      try {
        if (!initialContent) {
          const content = await getHeroContent()
          setHeroContent(content)
        }
      } catch (error) {
        console.error('Error loading hero content:', error)
        // Use fallback content if CMS fails
        setHeroContent({
          title: fallbackContent?.title || "Intelligent Software for Small Business Growth",
          subtitle: fallbackContent?.subtitle || "Effuse Labs",
          description: fallbackContent?.description || "We pour out innovative solutions that transform operational burdens into competitive strengths for small businesses.",
          primaryCtaText: fallbackContent?.primaryCtaText || "Get Started",
          secondaryCtaText: fallbackContent?.secondaryCtaText || "Learn More",
          primaryCtaHref: fallbackContent?.primaryCtaHref || "#contact",
          secondaryCtaHref: fallbackContent?.secondaryCtaHref || "#about"
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadHeroContent()
  }, [fallbackContent, initialContent])

  // Background effects removed - using pure CSS for optimal performance

  // Show loading state or fallback content while loading
  if (isLoading || !heroContent) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-grey via-off-black to-brand-teal-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-off-black/50 to-transparent z-10" />
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-brand-teal-light/20 to-transparent rounded-full blur-3xl transform rotate-12" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-brand-gold/20 to-transparent rounded-full blur-2xl transform -rotate-12" />
          </div>
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse space-y-8">
            <div className="h-4 bg-brand-teal-light/30 rounded w-32 mx-auto"></div>
            <div className="h-16 bg-white/30 rounded w-96 mx-auto"></div>
            <div className="h-8 bg-light-grey/30 rounded w-80 mx-auto"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-12 bg-brand-gold/30 rounded w-32"></div>
              <div className="h-12 bg-white/30 rounded w-32"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const handleCtaClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = href
    }
  }

  return (
    <section
      ref={sectionRef}
      className="hero-critical relative min-h-screen min-h-[100svh] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] flex items-center overflow-hidden"
    >
      {/* Pure CSS animated background for optimal performance */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-grey via-off-black to-brand-teal-dark opacity-90" />
        {/* Animated gradient overlay for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal-dark/20 via-transparent to-brand-gold/20 animate-pulse" />
        {/* Subtle particle effect with CSS */}
        <div className="absolute inset-0 opacity-10" style={{
          background: `radial-gradient(circle at 20% 80%, rgba(34, 197, 195, 0.3) 0%, transparent 50%),
                       radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.3) 0%, transparent 50%),
                       radial-gradient(circle at 40% 40%, rgba(34, 197, 195, 0.2) 0%, transparent 50%)`
        }} />
      </div>

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-off-black/35 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="hero-text text-center lg:text-left">
            <AnimatedContainer animation="fadeIn" className="space-y-8">
              {/* Company name */}
              <AnimatedItem animation="slideUp" delay={0.1}>
                <div className="mb-4">
                  <Text className="text-brand-teal-light text-lg font-medium tracking-wide uppercase">
                    {heroContent.subtitle}
                  </Text>
                </div>
              </AnimatedItem>

              {/* Main headline */}
              <AnimatedItem animation="slideUp" delay={0.1}>
                <H1 className="hero-title text-white">
                  {heroContent.title}
                </H1>
              </AnimatedItem>

              {/* Description */}
              <AnimatedItem animation="slideUp" delay={0.15}>
                <Text className="text-light-grey text-lg sm:text-xl max-w-3xl lg:max-w-2xl lg:mx-0 mx-auto leading-relaxed mb-12">
                  {heroContent.description}
                </Text>
              </AnimatedItem>

              {/* Call-to-action buttons */}
              <AnimatedItem animation="fadeIn" delay={0.2}>
                <div className="flex flex-col gap-4 items-center" style={{ marginTop: '2rem' }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleCtaClick(heroContent.primaryCtaHref)}
                    style={{ 
                      minWidth: '200px', 
                      fontSize: '1.125rem', 
                      padding: '1rem 2rem' 
                    }}
                  >
                    {heroContent.primaryCtaText}
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleCtaClick(heroContent.secondaryCtaHref)}
                    style={{ 
                      minWidth: '200px', 
                      fontSize: '1.125rem', 
                      padding: '1rem 2rem' 
                    }}
                  >
                    {heroContent.secondaryCtaText}
                  </button>
                </div>
              </AnimatedItem>
            </AnimatedContainer>
          </div>

          {/* Right: empty to balance layout and maintain left anchoring */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
