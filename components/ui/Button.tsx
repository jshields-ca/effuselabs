import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  children: React.ReactNode
}

const VARIANTS: Record<ButtonVariant, string> = {
  // Gold is the spark. On a dark canvas it reads as the lit element on the
  // page, which is why it carries the primary action.
  primary:
    'bg-effuse-gold text-effuse-off-black hover:bg-effuse-gold/90 shadow-brand-md hover:shadow-gold-glow',
  secondary:
    'border border-effuse-teal/60 text-effuse-teal bg-transparent hover:bg-effuse-teal hover:text-surface-deep hover:border-effuse-teal',
  ghost:
    'text-effuse-parchment hover:text-effuse-parchment hover:bg-effuse-white/10',
  dark: 'bg-effuse-off-black text-white hover:bg-effuse-slate shadow-brand-md',
}

const SIZES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-body-sm rounded-md',
  md: 'px-6 py-3 text-body rounded-lg',
  lg: 'px-8 py-4 text-body-lg rounded-lg',
}

/**
 * Transform and shadow only — never colour alone — so the affordance survives
 * forced-colours mode. The transition is short enough to feel responsive and
 * is disabled wholesale under prefers-reduced-motion (see globals.css).
 */
const BASE =
  'inline-flex items-center justify-center font-semibold whitespace-nowrap ' +
  'transition-[transform,box-shadow,background-color,color] duration-200 ease-out ' +
  'hover:-translate-y-0.5 active:translate-y-0 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-deep ' +
  'disabled:opacity-50 disabled:pointer-events-none'

function isInternal(href: string): boolean {
  return href.startsWith('/') || href.startsWith('#')
}

/**
 * Button, or a link that looks like one.
 *
 * When `href` is present this renders a real link. It previously rendered
 * `<a role="button">`, which tells assistive technology the element is a button
 * — removing the link semantics a link actually has, so it stopped being
 * announced as navigation and stopped appearing in a screen reader's list of
 * links. An anchor is already the right role; overriding it only ever loses
 * information.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', href, children, className, ...props },
    ref
  ) => {
    const classes = cn(BASE, VARIANTS[variant], SIZES[size], className)

    if (href) {
      const anchorProps =
        props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>

      if (isInternal(href)) {
        return (
          <Link href={href} className={classes} {...anchorProps}>
            {children}
          </Link>
        )
      }

      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorProps}
        >
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps, ButtonVariant, ButtonSize }
