'use client'

import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import usePrefersReducedMotion from '@/lib/hooks/usePrefersReducedMotion'

interface LightweightAnimatedContainerProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'emerge' | 'reveal'
  delay?: number
  duration?: number
}

const LightweightAnimatedContainer = React.forwardRef<HTMLDivElement, LightweightAnimatedContainerProps>(
  ({ 
    children, 
    className, 
    animation = 'fadeIn', 
    delay = 0, 
    duration = 0.5,
    ...props 
  }, ref) => {
    const reduced = usePrefersReducedMotion()
    const [isVisible, setIsVisible] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const elementRef = useRef<HTMLDivElement | null>(null)

    // Intersection Observer for performance
    useEffect(() => {
      const element = elementRef.current
      if (!element || reduced) {
        setIsVisible(true)
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => setIsVisible(true), delay * 1000)
            setHasAnimated(true)
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      )

      observer.observe(element)
      return () => observer.disconnect()
    }, [reduced, hasAnimated, delay])

    const animationClasses = {
      fadeIn: isVisible ? 'animate-fade-in' : 'opacity-0',
      slideUp: isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8',
      slideLeft: isVisible ? 'animate-slide-left' : 'opacity-0 translate-x-8',
      slideRight: isVisible ? 'animate-slide-right' : 'opacity-0 -translate-x-8',
      scale: isVisible ? 'animate-scale' : 'opacity-0 scale-95',
      emerge: isVisible ? 'animate-scale' : 'opacity-0 scale-95', // Same as scale for simplicity
      reveal: isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8', // Same as slideUp
    }

    return (
      <div
        ref={(node: HTMLDivElement | null) => {
          elementRef.current = node
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        className={cn(
          'transition-all ease-out',
          `duration-${Math.round(duration * 1000)}`,
          animationClasses[animation],
          className
        )}
        style={{
          transitionDelay: reduced ? '0ms' : `${delay * 1000}ms`,
          transitionDuration: reduced ? '0ms' : `${duration * 1000}ms`
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)

const LightweightAnimatedItem = React.forwardRef<HTMLDivElement, LightweightAnimatedContainerProps>(
  (props, ref) => {
    return <LightweightAnimatedContainer {...props} ref={ref} />
  }
)

LightweightAnimatedContainer.displayName = 'LightweightAnimatedContainer'
LightweightAnimatedItem.displayName = 'LightweightAnimatedItem'

export { LightweightAnimatedContainer, LightweightAnimatedItem }
export default LightweightAnimatedContainer
