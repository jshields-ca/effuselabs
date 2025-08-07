'use client'

import { H1, Text, Button, HatchingCoreBackground } from '@/components/ui'
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
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-grey via-off-black to-brand-teal-dark">
      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-off-black/50 to-transparent z-10" />
      
      {/* Hatching Core Background */}
      <HatchingCoreBackground className="z-0" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedContainer animation="emerge" duration={1.5} className="space-y-8 pb-24">
          {/* Company name */}
          <AnimatedItem animation="slideUp" delay={0.3} duration={1.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 1, 0.9],
                y: [20, 0, 0]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <Text className="text-brand-teal-light text-lg font-medium tracking-[0.3em] uppercase transform hover:text-brand-teal-light/80 transition-colors duration-500">
                {subtitle}
              </Text>
            </motion.div>
          </AnimatedItem>

          {/* Hatching Core Icon and Text */}
          <AnimatedItem animation="reveal" delay={0.5} duration={2.0}>
            <div className="flex items-center justify-center space-x-4 mb-8">
              {/* Hatching Core Icon */}
              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.1, 1],
                  opacity: [0, 1, 0.9]
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut"
                }}
              >
                <div className="w-16 h-16 relative">
                  {/* Outer shell with enhanced animation */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ rotateZ: 0, scale: 1, filter: "blur(0px)" }}
                    animate={{ 
                      rotateZ: [0, -25, -15, 0],
                      scale: [1, 1.3, 1.1, 1],
                      filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
                    }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut"
                    }}
                  >
                    <svg width="64" height="64" viewBox="0 0 64 64">
                      <defs>
                        <linearGradient id="shell-gradient-hero-enhanced" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22C5C3" stopOpacity="0.9" />
                          <stop offset="25%" stopColor="#6B7280" stopOpacity="0.7" />
                          <stop offset="50%" stopColor="#22C5C3" stopOpacity="0.8" />
                          <stop offset="75%" stopColor="#6B7280" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#22C5C3" stopOpacity="0.9" />
                        </linearGradient>
                        <filter id="shell-glow-hero-enhanced">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      <path
                        d="M 32,12 Q 42,24 48,32 Q 52,40 48,48 Q 42,52 32,52 Q 22,52 18,48 Q 12,40 18,32 Q 22,24 32,12"
                        fill="url(#shell-gradient-hero-enhanced)"
                        filter="drop-shadow(0 0 8px rgba(34, 197, 195, 0.3))"
                      />
                    </svg>
                  </motion.div>
                  
                  {/* Golden core with enhanced radiance */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.6, opacity: 0.5 }}
                    animate={{ 
                      scale: [0.6, 1.2, 1],
                      opacity: [0.5, 1, 0.95]
                    }}
                    transition={{
                      duration: 3.5,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative">
                      {/* Enhanced core glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"
                        style={{
                          width: '32px',
                          height: '32px',
                          filter: 'blur(6px)',
                          opacity: 0.7
                        }}
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.7, 1, 0.7],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <div 
                        className="rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 shadow-2xl"
                        style={{
                          width: '32px',
                          height: '32px',
                          boxShadow: '0 0 15px rgba(255, 193, 7, 0.8), 0 0 30px rgba(255, 193, 7, 0.4)'
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Hatching Core Text - starts before icon is fully revealed */}
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ 
                  opacity: [0, 1, 0.9],
                  x: [-20, 0, 0],
                  scale: [0.9, 1.05, 1]
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut"
                }}
              >
                <H1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight transform perspective-1000 hover:text-white/90 transition-colors duration-500">
                  Hatching Core
                </H1>
              </motion.div>
            </div>
          </AnimatedItem>

          {/* Main headline - enhanced slide-up with fade */}
          <AnimatedItem animation="reveal" delay={1.5} duration={1.5}>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ 
                opacity: [0, 1, 0.9],
                y: [30, 0, 0],
                scale: [0.95, 1.02, 1]
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut"
              }}
            >
              <H1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 transform perspective-1000 hover:text-white/90 transition-colors duration-500">
                {title}
              </H1>
            </motion.div>
          </AnimatedItem>

          {/* Description - enhanced animation */}
          <AnimatedItem animation="slideUp" delay={2.0} duration={1.2}>
            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(2px)" }}
              animate={{ 
                opacity: [0, 1, 0.9],
                y: [25, 0, 0],
                filter: ["blur(2px)", "blur(0px)", "blur(0px)"]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <Text className="text-light-grey text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-12 transform hover:text-light-grey/80 transition-colors duration-500">
                {description}
              </Text>
            </motion.div>
          </AnimatedItem>

          {/* Call-to-action buttons with breathing animation */}
          <AnimatedItem animation="scale" delay={2.5} duration={1.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ 
                opacity: [0, 1, 0.9],
                scale: [0.9, 1, 1],
                y: [20, 0, 0]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                {/* Primary button with breathing animation */}
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                    boxShadow: [
                      "0 0 0 rgba(255, 193, 7, 0)",
                      "0 0 20px rgba(255, 193, 7, 0.3)",
                      "0 0 0 rgba(255, 193, 7, 0)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="w-full sm:w-auto min-w-[200px] text-lg px-8 py-4 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-brand-gold/30 hover:bg-brand-gold/90 relative overflow-hidden"
                    onClick={() => {
                      const element = document.querySelector(primaryCtaHref)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {/* Subtle gradient shift animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold opacity-0"
                      animate={{
                        opacity: [0, 0.3, 0],
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="relative z-10">{primaryCtaText}</span>
                  </Button>
                </motion.div>
                
                {/* Secondary button with subtle hover enhancement */}
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-full sm:w-auto min-w-[200px] text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-off-black transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/30 relative overflow-hidden"
                  onClick={() => {
                    const element = document.querySelector(secondaryCtaHref)
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0"
                    whileHover={{
                      opacity: 1,
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="relative z-10">{secondaryCtaText}</span>
                </Button>
              </div>
            </motion.div>
          </AnimatedItem>
        </AnimatedContainer>
        
        {/* Enhanced scroll indicator */}
        <AnimatedItem animation="emerge" delay={3.0} duration={1.0}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <motion.div 
              className="flex flex-col items-center space-y-3 text-white group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Text className="text-sm font-medium tracking-wide transition-all duration-300 group-hover:text-brand-teal-light">
                Scroll to explore
              </Text>
              <motion.div 
                className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/20 hover:border-brand-teal-light group-hover:shadow-lg group-hover:shadow-brand-teal-light/25"
                animate={{
                  y: [0, 5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="w-1 h-3 bg-white rounded-full mt-2 group-hover:bg-brand-teal-light transition-colors duration-300"
                  animate={{
                    y: [0, 8, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </AnimatedItem>
      </div>
    </section>
  )
}
