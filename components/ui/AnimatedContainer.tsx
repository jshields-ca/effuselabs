'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import usePrefersReducedMotion from '@/lib/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/utils'

interface AnimatedContainerProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'reveal' | 'emerge'
  delay?: number
  duration?: number
  stagger?: number
}

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -100, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  },
  reveal: {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
  },
  emerge: {
    hidden: { opacity: 0, scale: 0.8, y: 40, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
  }
}

const AnimatedContainer = React.forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ 
    children, 
    className, 
    animation = 'fadeIn', 
    delay = 0, 
    duration = 0.5,
    stagger = 0.15,
    ...props 
  }, ref) => {
    const reduced = usePrefersReducedMotion()
    const [isVisible, setIsVisible] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const elementRef = useRef<HTMLDivElement | null>(null)

    // Intersection Observer for performance - only animate when visible
    useEffect(() => {
      const element = elementRef.current
      if (!element || reduced) {
        setIsVisible(true) // Skip intersection if reduced motion
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true)
            setHasAnimated(true) // Animate only once
          }
        },
        { threshold: 0.1, rootMargin: '50px' } // Start animation slightly before visible
      )

      observer.observe(element)
      return () => observer.disconnect()
    }, [reduced, hasAnimated])

    return (
      <motion.div
        ref={(node: HTMLDivElement | null) => {
          elementRef.current = node
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        className={cn(className)}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={animations[animation]}
        transition={{
          duration: reduced ? 0 : duration,
          delay: reduced ? 0 : delay,
          staggerChildren: reduced ? 0 : stagger,
          ease: 'easeOut',
          type: 'tween'
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

const AnimatedItem = React.forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ 
    children, 
    className, 
    animation = 'fadeIn', 
    delay = 0, 
    duration = 0.5,
    ...props 
  }, ref) => {
    const reduced = usePrefersReducedMotion()
    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        variants={animations[animation]}
        transition={{
          duration: reduced ? 0 : duration,
          delay: reduced ? 0 : delay,
          ease: 'easeOut',
          type: 'tween'
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

AnimatedContainer.displayName = 'AnimatedContainer'
AnimatedItem.displayName = 'AnimatedItem'

export { AnimatedContainer, AnimatedItem }
export type { AnimatedContainerProps }