import { cn } from '@/lib/utils'
import React from 'react'

interface EnhancedLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  variant?: 'default' | 'brand' | 'subtle'
  underline?: 'none' | 'hover' | 'always'
}

const EnhancedLink: React.FC<EnhancedLinkProps> = ({
  children,
  className,
  variant = 'default',
  underline = 'hover',
  ...props
}) => {
  const variants = {
    default: 'text-effuse-teal hover:text-effuse-gold',
    brand: 'text-effuse-gold hover:text-effuse-teal',
    subtle: 'text-effuse-medium-grey hover:text-effuse-off-black',
  }

  const underlineStyles = {
    none: '',
    hover:
      'hover:underline decoration-2 underline-offset-4 decoration-effuse-teal hover:decoration-effuse-gold',
    always:
      'underline decoration-2 underline-offset-4 decoration-effuse-teal hover:decoration-effuse-gold',
  }

  return (
    <a
      className={cn(
        'transition-all duration-300 font-medium focus-brand interactive-lift inline-block',
        variants[variant],
        underlineStyles[underline],
        'hover:scale-105 active:scale-95',
        className
      )}
      {...props}
    >
      <span className="relative">
        {children}
        <span className="absolute inset-0 rounded-md bg-effuse-teal/10 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
      </span>
    </a>
  )
}

export default EnhancedLink
export type { EnhancedLinkProps }
