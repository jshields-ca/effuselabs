import { cn } from '@/lib/utils'
import React from 'react'

interface TypographyProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

/**
 * Typography primitives.
 *
 * Sizes come from the type scale in `lib/design/tokens.ts` via the `text-h1` …
 * `text-body-sm` utilities, rather than a per-component stack of
 * `text-3xl md:text-4xl lg:text-5xl`. The scale is fluid (clamp), so these need
 * no responsive variants at all.
 *
 * Two things these deliberately no longer do:
 *
 * - They no longer carry a font-family class at all. Body copy inherits Public
 *   Sans from `body`; headings opt into the display face explicitly via
 *   `font-display`. The old `font-inter` was redundant *and* actively harmful:
 *   `globals.css` defined an unlayered rule setting font-weight 700 on it,
 *   which beat the `font-normal` and `font-medium` sitting beside it in the
 *   same class string, so every one of these rendered bold.
 * - They no longer hardcode a colour. The site is dark-first with light
 *   sections, so colour is inherited from the surface, which `SectionContainer`
 *   sets. Baking in a dark foreground meant every heading on a dark section had
 *   to fight it.
 *
 * `Code` is gone: it was the only consumer of IBM Plex Mono, a font downloaded
 * on every page for a component no route rendered.
 */

/*
 * Headings set in Fraunces. `font-semibold` rather than bold: the face has
 * enough presence at display sizes that bold closes up the counters, and the
 * WONK axis is doing the character work instead.
 */
const HEADING = 'font-display font-semibold tracking-tight'

const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h1', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('text-h1', HEADING, className)}
      {...props}
    >
      {children}
    </Component>
  )
)

const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h2', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('text-h2', HEADING, className)}
      {...props}
    >
      {children}
    </Component>
  )
)

const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h3', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('text-h3', HEADING, className)}
      {...props}
    >
      {children}
    </Component>
  )
)

const H4 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h4', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('text-h4', HEADING, className)}
      {...props}
    >
      {children}
    </Component>
  )
)

const H5 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h5', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('text-body-lg', HEADING, className)}
      {...props}
    >
      {children}
    </Component>
  )
)

const H6 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h6', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('text-body', HEADING, className)}
      {...props}
    >
      {children}
    </Component>
  )
)

const Text = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, as: Component = 'p', ...props }, ref) => (
    <Component ref={ref} className={cn('text-body', className)} {...props}>
      {children}
    </Component>
  )
)

const Lead = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, as: Component = 'p', ...props }, ref) => (
    <Component ref={ref} className={cn('text-body-lg', className)} {...props}>
      {children}
    </Component>
  )
)

const Small = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, as: Component = 'small', ...props }, ref) => (
    <Component ref={ref} className={cn('text-body-sm', className)} {...props}>
      {children}
    </Component>
  )
)

/** An uppercase, wide-tracked label naming the section above a heading. */
const Eyebrow = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, as: Component = 'p', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('text-eyebrow font-medium uppercase', className)}
      {...props}
    >
      {children}
    </Component>
  )
)

H1.displayName = 'H1'
H2.displayName = 'H2'
H3.displayName = 'H3'
H4.displayName = 'H4'
H5.displayName = 'H5'
H6.displayName = 'H6'
Text.displayName = 'Text'
Lead.displayName = 'Lead'
Small.displayName = 'Small'
Eyebrow.displayName = 'Eyebrow'

export { Eyebrow, H1, H2, H3, H4, H5, H6, Lead, Small, Text }
export type { TypographyProps }
