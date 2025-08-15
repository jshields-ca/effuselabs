import ProductPageTemplate from '@/components/product/ProductPageTemplate'
import {
  FeatureBreakdownSection,
  FinalCTASection,
  PainSolutionSection,
  PricingSection,
} from '@/components/sections'

export const metadata = {
  title: 'SilentLedger — Effuse Labs',
  description:
    'SilentLedger provides discreet, professional financial management for businesses requiring enhanced privacy.',
}

export default function SilentLedgerProductPage() {
  return (
    <ProductPageTemplate
      hero={{
        productName: 'SilentLedger',
        headline: 'Discreet financial management for professional services',
        subheadline:
          'Advanced accounting and financial reporting with enhanced privacy features for businesses that require discretion.',
        primaryCtaLabel: 'Request Access',
        primaryCtaHref: '#access',
        background: 'dark',
        accentGradient: { from: '#22C5C3', to: '#0B2B33' },
      }}
    >
      <PainSolutionSection
        problem={{
          heading: 'Traditional accounting lacks privacy controls',
          description:
            'Standard financial software exposes sensitive business data through cloud syncing, third-party integrations, and unsecured communications.',
          icon: '🔓',
        }}
        solution={{
          heading: 'Enterprise-grade privacy by design',
          description:
            'SilentLedger provides full financial management capabilities with zero-knowledge architecture and military-grade encryption.',
          icon: '🔒',
        }}
        bullets={[
          'End-to-end encrypted financial records',
          'No third-party data sharing',
          'Compliance with privacy regulations',
          'Secure client communication channels',
        ]}
        background="light"
      />

      <FeatureBreakdownSection
        heading="Professional-grade financial tools with uncompromising privacy"
        subheading="All the accounting features you need, with security that protects what matters most."
        items={[
          {
            icon: '🔐',
            title: 'Zero-Knowledge Architecture',
            description:
              'Your financial data is encrypted before it leaves your device. Even we cannot access your information.',
          },
          {
            icon: '📋',
            title: 'Comprehensive Accounting',
            description:
              'Full double-entry bookkeeping, invoice management, and financial reporting capabilities.',
          },
          {
            icon: '🛡️',
            title: 'Compliance Ready',
            description:
              'Built-in compliance tools for GDPR, CCPA, and other privacy regulations.',
          },
          {
            icon: '📞',
            title: 'Secure Communications',
            description:
              'Encrypted messaging and document sharing with clients and partners.',
          },
        ]}
        variant="checklist"
        background="dark"
      />

      <PricingSection
        placeholder={{
          heading: 'Invitation Only',
          description:
            'SilentLedger is available by invitation only. Contact us to discuss your privacy requirements and request access.',
          ctaLabel: 'Request Access',
          ctaHref: 'mailto:hello@effuse.io?subject=SilentLedger Access Request',
        }}
        background="light"
      />

      <FinalCTASection
        heading="Protect what you\'ve built"
        description="Your financial data deserves the highest level of protection. Experience the difference with SilentLedger."
        primaryCta={{
          label: 'Request Access',
          href: 'mailto:hello@effuse.io?subject=SilentLedger Access Request',
        }}
        secondaryCta={{
          label: 'Learn About Privacy',
          href: '#privacy',
        }}
        background="dark"
      />
    </ProductPageTemplate>
  )
}
