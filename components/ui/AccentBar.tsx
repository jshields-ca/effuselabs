import { cn } from '@/lib/utils'
import React from 'react'

export interface AccentBarProps {
  /** Size variant of the accent bar */
  size?: 'sm' | 'md' | 'lg'
  /** Color variant */
  variant?: 'lumina' | 'teal' | 'coral'
  /** Custom className for additional styling */
  className?: string
  /** Position relative to parent element */
  position?: 'top' | 'bottom' | 'left' | 'center' | 'inline'
  /** Whether to animate the bar */
  animated?: boolean
}

/**
 * AccentBar - A branded accent element for emphasis and visual hierarchy
 *
 * Features:
 * - Multiple size and color variants
 * - Flexible positioning options
 * - Optional animations
 * - Accessibility compliant (decorative element)
 * - Responsive design
 */
export const AccentBar: React.FC<AccentBarProps> = ({
  size = 'md',
  variant = 'lumina',
  className,
  position = 'inline',
  animated = false,
  ...props
}) => {
  const baseClasses = 'accent-bar'

  const sizeClasses = {
    sm: 'h-0.5 w-12',
    md: 'h-1 w-16',
    lg: 'h-1.5 w-24',
  }

  const variantClasses = {
    lumina: 'accent-bar',
    teal: 'accent-bar-teal',
    coral: 'bg-gradient-to-r from-effuse-coral to-lumina-coral',
  }

  const positionClasses = {
    top: 'absolute -top-2 left-0',
    bottom: 'absolute -bottom-2 left-0',
    left: 'absolute top-1/2 -left-2 transform -translate-y-1/2 rotate-90',
    center: 'mx-auto',
    inline: '',
  }

  const animationClasses = animated
    ? 'animate-scale transition-all duration-300 ease-out'
    : ''

  // For positioned accents, wrap in a container
  if (position !== 'inline') {
    return (
      <div className="relative">
        <div
          role="presentation"
          aria-hidden="true"
          className={cn(
            baseClasses,
            sizeClasses[size],
            variantClasses[variant],
            positionClasses[position],
            animationClasses,
            className
          )}
          {...props}
        />
      </div>
    )
  }

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        positionClasses[position],
        animationClasses,
        className
      )}
      {...props}
    />
  )
}

AccentBar.displayName = 'AccentBar'
