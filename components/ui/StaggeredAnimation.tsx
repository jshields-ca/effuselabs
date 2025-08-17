'use client'

import React from 'react'
import { LightweightAnimatedContainer as Animated } from '@/components/ui/LightweightAnimatedContainer'

interface StaggeredAnimationProps {
  children: React.ReactNode[]
  staggerDelay?: number
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale'
  className?: string
}

const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  staggerDelay = 0.1,
  animation = 'slideUp',
  className
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <Animated
          key={index}
          animation={animation}
          delay={index * staggerDelay}
        >
          {child}
        </Animated>
      ))}
    </div>
  )
}

export default StaggeredAnimation
