import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionDividerProps {
  /** Size variant of the divider */
  size?: 'sm' | 'md' | 'lg';
  /** Custom className for additional styling */
  className?: string;
  /** Whether to animate the divider reveal on scroll */
  animated?: boolean;
  /** Custom color variant */
  variant?: 'teal' | 'gradient' | 'subtle';
  /** Accessibility label for screen readers */
  'aria-label'?: string;
}

/**
 * SectionDivider - A branded section separator component
 * 
 * Features:
 * - Responsive design with multiple size variants
 * - Optional scroll-triggered animations
 * - Accessibility compliant
 * - Uses Tailwind utility classes for consistent styling
 * - Respects prefers-reduced-motion
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({
  size = 'md',
  className,
  animated = false,
  variant = 'teal',
  'aria-label': ariaLabel = 'Section divider',
  ...props
}) => {
  const baseClasses = 'section-divider';
  
  const sizeClasses = {
    sm: 'my-8 max-w-md h-0.5',
    md: 'my-16 max-w-lg h-0.5',
    lg: 'my-20 max-w-2xl h-1'
  };
  
  const variantClasses = {
    teal: 'section-divider',
    gradient: 'section-divider-lg',
    subtle: 'opacity-50 section-divider'
  };
  
  const animationClasses = animated ? 'animate-divider-reveal' : '';
  
  return (
    <div
      role="separator"
      aria-label={ariaLabel}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        animationClasses,
        className
      )}
      {...props}
    />
  );
};

SectionDivider.displayName = 'SectionDivider';
