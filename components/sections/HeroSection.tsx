import { AccentBar, Button, LuminousField } from '@/components/ui'
import { brand } from '@/content/site'
import { ArrowRight } from 'lucide-react'
import React from 'react'

interface HeroSectionProps {
  eyebrow?: string
  title?: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

/**
 * The hero.
 *
 * A server component. It holds no state and no event handlers, so none of it
 * needs to ship to the client — the luminous background is CSS and the reveal
 * is a CSS animation.
 *
 * The composition is deliberately asymmetric: copy pinned left, light entering
 * from the upper left and pooling to the right. A centred stack over a gradient
 * is what every site template produces, and it is what this hero did before.
 */
export function HeroSection({
  eyebrow = 'Vertical SaaS · Self-hosted & open source',
  title = 'Intelligent software for small business growth.',
  description = 'We pour out innovative solutions that turn operational burdens into competitive strengths — for the businesses larger vendors overlook.',
  primaryCta = { label: 'Start a conversation', href: '#contact' },
  secondaryCta = { label: 'See our work', href: '#products' },
}: HeroSectionProps) {
  return (
    <section
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-surface-deep"
      aria-labelledby="hero-heading"
    >
      <LuminousField intensity="hero" />

      {/*
        Grounding wash so copy never sits directly on a bright part of the
        field. This is what keeps contrast predictable instead of dependent on
        where a gradient happens to land.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-surface-deep via-surface-deep/70 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="motion-safe:animate-fade-in mb-6 flex items-center gap-3 text-eyebrow font-medium uppercase text-effuse-teal">
            <AccentBar size="sm" variant="effuse" />
            {eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="motion-safe:animate-slide-up font-display text-display font-semibold text-effuse-parchment"
          >
            {title}
          </h1>

          <p className="motion-safe:animate-slide-up mt-8 max-w-2xl text-body-lg text-effuse-parchment [animation-delay:120ms] [animation-fill-mode:backwards]">
            {description}
          </p>

          <div className="motion-safe:animate-slide-up mt-10 flex flex-col gap-4 [animation-delay:240ms] [animation-fill-mode:backwards] sm:flex-row sm:items-center">
            <Button variant="primary" size="lg" href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          </div>

          <p className="motion-safe:animate-fade-in mt-12 text-body-sm text-effuse-parchment/70 [animation-delay:400ms] [animation-fill-mode:backwards]">
            {brand.name} · Winnipeg, Manitoba
          </p>
        </div>
      </div>
    </section>
  )
}
