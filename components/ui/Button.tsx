import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', href, children, className, ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105 active:scale-95'

    const variants = {
      primary:
        'bg-effuse-gold text-effuse-off-black hover:bg-effuse-gold/90 hover:shadow-lg active:bg-effuse-gold/80 shadow-md hover:shadow-xl',
      secondary:
        'border-2 border-effuse-gold text-effuse-gold bg-transparent hover:bg-effuse-gold hover:text-effuse-off-black active:bg-effuse-gold/90 hover:shadow-lg',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-md',
      md: 'px-6 py-3 text-base rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-lg',
    }

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    )

    if (href) {
      return (
        <a
          href={href}
          className={buttonClasses}
          role="button"
          tabIndex={0}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps } // Lighthouse optimization branch
