import { Container, H4, Small, Text } from '@/components/ui'
import { brand, contact, footerGroups, socialLinks } from '@/content/site'
import React from 'react'

/**
 * Icon per social profile, keyed by the label used in `content/site.ts`.
 * Adding a profile there without adding its icon here renders nothing, so
 * keep the two in step.
 */
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  GitHub: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
}

interface SocialLinkProps {
  href: string
  label: string
  icon: React.ReactNode
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-700 hover:bg-effuse-teal hover:text-white transition-colors duration-200 text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-gold focus-visible:ring-offset-2"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-slate-300 hover:text-effuse-teal transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-gold focus-visible:ring-offset-2 rounded-md"
    >
      {children}
    </a>
  )
}

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-effuse-slate text-white">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {brand.name}
              </h3>
              <Text className="text-slate-300 mb-4">{brand.blurb}</Text>
            </div>

            {/* Contact Info */}
            <div className="mb-6">
              <Text className="text-slate-300">
                <strong>Location:</strong> {contact.location}
              </Text>
              <Text className="text-slate-300">
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-effuse-teal transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-gold focus-visible:ring-offset-2 rounded-md"
                >
                  {contact.email}
                </a>
              </Text>
            </div>

            {/* Social Links */}
            <div>
              <H4 className="text-white mb-4">Connect With Us</H4>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <SocialLink
                    key={social.label}
                    href={social.href}
                    label={social.label}
                    icon={SOCIAL_ICONS[social.label]}
                  />
                ))}
              </div>
            </div>
          </div>

          {footerGroups.map(group => (
            <div key={group.heading}>
              <H4 className="text-white mb-4">{group.heading}</H4>
              <ul className="space-y-3">
                {group.links.map(link => (
                  <li key={`${link.label}-${link.href}`}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-effuse-medium-grey">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Small className="text-effuse-light-grey">
              © {currentYear} {brand.name}. All rights reserved.
            </Small>

            {/*
              Privacy Policy, Terms of Service and Accessibility links lived
              here pointing at /privacy, /terms and /accessibility — none of
              which exist, so all three were hard 404s. They return when those
              routes are actually built.
            */}
          </div>

          {/*
            This read "Built with ❤️ in Winnipeg, Manitoba 🇨🇦". The sentiment
            stays; the emoji do not. Emoji are the most environment-variable
            glyphs on a page — the font differs by platform and version, and
            here they were shifting line height enough to make the visual
            regression baselines disagree between this machine and CI. Set in
            words, it renders identically everywhere and reads the same aloud.
          */}
          <div className="mt-6 text-center">
            <Small className="text-effuse-medium-grey">
              Built with care in Winnipeg, Manitoba
            </Small>
          </div>
        </div>
      </Container>
    </footer>
  )
}
