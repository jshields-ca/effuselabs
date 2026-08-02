import { cn } from '@/lib/utils'
import React from 'react'

export type AccentBarVariant = 'effuse' | 'teal' | 'lumina'

export interface AccentBarProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: AccentBarVariant
  className?: string
  position?: 'top' | 'bottom' | 'left' | 'center' | 'inline'
  animated?: boolean
}

/**
 * A branded accent rule.
 *
 * The default is `effuse`, a teal-to-gold gradient — the shell opening onto the
 * core, which is what the Hatching Core logo depicts. It previously defaulted
 * to `lumina`, so the firm's own accent was rendered in its product's colours.
 * That is fine with one product and incoherent with two: nothing would
 * distinguish Effuse Labs from Lumina, or from whatever ships next.
 *
 * Use `lumina` only in Lumina's own context — its product page, or its card on
 * the homepage.
 *
 * Decorative: hidden from assistive technology.
 */
export const AccentBar: React.FC<AccentBarProps> = ({
  size = 'md',
  variant = 'effuse',
  className,
  position = 'inline',
  animated = false,
}) => {
  const sizeClasses = {
    sm: 'h-0.5 w-12',
    md: 'h-1 w-16',
    lg: 'h-1.5 w-24',
  }

  const variantClasses: Record<AccentBarVariant, string> = {
    effuse: 'bg-gradient-to-r from-effuse-teal to-effuse-gold',
    teal: 'bg-effuse-teal',
    lumina: 'bg-gradient-to-r from-lumina-gold to-lumina-coral',
  }

  const positionClasses = {
    top: 'absolute -top-2 left-0',
    bottom: 'absolute -bottom-2 left-0',
    left: 'absolute top-1/2 -left-2 -translate-y-1/2 rotate-90',
    center: 'mx-auto',
    inline: '',
  }

  /*
   * A <span>, not a <div>. This is decorative phrasing-level content and is
   * used inside <p> — a <div> there is invalid HTML, which browsers silently
   * restructure, producing a hydration mismatch (React error #418) rather than
   * anything that looks like a markup problem.
   */
  const bar = (
    <span
      aria-hidden="true"
      className={cn(
        'block rounded-full',
        sizeClasses[size],
        variantClasses[variant],
        positionClasses[position],
        animated && 'motion-safe:animate-scale',
        className
      )}
    />
  )

  return position === 'inline' || position === 'center' ? (
    bar
  ) : (
    <span className="relative block">{bar}</span>
  )
}

AccentBar.displayName = 'AccentBar'
