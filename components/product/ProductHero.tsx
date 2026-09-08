import { SectionContainer } from '@/components/layout/SectionContainer'
import { Button, H1, H2, Reveal, Text } from '@/components/ui'
import Image from 'next/image'
import React from 'react'

export interface ProductHeroProps {
  id?: string
  logoSrc?: string
  logoAlt?: string
  /**
   * The logo's real pixel width and height, so `next/image` preserves its
   * actual aspect ratio instead of forcing a square. Defaults assume a
   * roughly square mark; pass the source file's real dimensions for
   * anything wider or taller than that.
   */
  logoWidth?: number
  logoHeight?: number
  productName?: string
  headline: string
  subheadline?: string
  primaryCtaLabel: string
  primaryCtaHref: string
  /** e.g. a link to the product's public GitHub repo. Opens in a new tab. */
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  accentGradient?: { from: string; to: string }
}

const ProductHero: React.FC<ProductHeroProps> = ({
  id = 'product-hero',
  logoSrc,
  logoAlt = 'Product logo',
  logoWidth = 48,
  logoHeight = 48,
  productName,
  headline,
  subheadline,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  accentGradient,
}) => {
  return (
    <SectionContainer id={id} background="base" padding="lg">
      {accentGradient ? (
        <div
          className="-mt-6 -mb-8 -mx-0 h-1.5 rounded-t-lg"
          style={{
            background: `linear-gradient(90deg, ${accentGradient.from}, ${accentGradient.to})`,
          }}
          aria-hidden
        />
      ) : null}

      <Reveal>
        <div className="max-w-5xl mx-auto text-center">
          {logoSrc ? (
            <div className="mb-6 flex justify-center">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                className="h-12 w-auto"
              />
            </div>
          ) : null}

          {productName ? (
            <H2 className="text-effuse-parchment mb-2">{productName}</H2>
          ) : null}

          <H1 className="text-effuse-parchment mb-4">{headline}</H1>

          {subheadline ? (
            <Text className="text-effuse-parchment/80 mb-8 max-w-3xl mx-auto">
              {subheadline}
            </Text>
          ) : null}

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href={primaryCtaHref}>
              {primaryCtaLabel}
            </Button>
            {secondaryCtaLabel && secondaryCtaHref ? (
              <Button variant="secondary" size="lg" href={secondaryCtaHref}>
                {secondaryCtaLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}

export default ProductHero
