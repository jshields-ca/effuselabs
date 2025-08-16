import { PageWrapper } from '@/components/layout'
import React from 'react'
import ProductHero, { ProductHeroProps } from './ProductHero'

export interface ProductPageTemplateProps {
  hero: ProductHeroProps
  children?: React.ReactNode // additional sections follow the hero
}

const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({
  hero,
  children,
}) => {
  return (
    <PageWrapper>
      <ProductHero {...hero} />
      {/* Slot for subsequent sections (pain/solution, features, pricing, final CTA) */}
      {children ?? null}
    </PageWrapper>
  )
}

export default ProductPageTemplate
export type { ProductHeroProps }
