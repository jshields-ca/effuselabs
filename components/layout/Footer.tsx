import { Container, EffuseMark, H4, Small } from '@/components/ui'
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
  Twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  /*
   * A simple abstract mark rather than a traced copy of Bluesky's actual
   * butterfly logo — brand press assets weren't sourced, and an imprecise
   * copy of a real mark is worse than an honest placeholder. Swap for the
   * real logo asset once it's on hand.
   */
  Bluesky: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 8.5c-1.6-2.6-4.7-5.1-7.2-5.9-1.7-.5-2.3.4-2.3 1.6 0 1.3.2 4.4 1 5.7.9 1.6 3 2 4.6 1.7-2.4.4-4.5 1.5-1.7 4.5 3.1 3.2 4.4-.6 5-2.7.6 2.1 1.6 5.8 4.9 2.7 2.6-2.7.7-4.1-1.7-4.5 1.6.3 3.7-.1 4.6-1.7.8-1.3 1-4.4 1-5.7 0-1.2-.6-2.1-2.3-1.6-2.5.8-5.6 3.4-7.2 5.9" />
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
            <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
              <EffuseMark variant="twoTone" className="h-6 w-auto" />
              {brand.name}
            </h3>

            {/*
              A "Location:" and "Email:" block used to sit here, duplicating
              the location already in the bottom bar ("Built with care in
              Winnipeg, Manitoba") and the email already reachable via the
              homepage contact form and the Connect With Us icons below.
              Jeremy asked to cut both once he noticed the repetition.
            */}

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
          {/*
            This used to be a copyright line, then a second full-width
            centered line below it reading "Built with care in Winnipeg,
            Manitoba" — its own row, competing for the same visual weight as
            the copyright rather than reading as part of it. The Legal group
            above already gives Privacy/Terms/Accessibility a real home, so
            this row only ever had one thing in it. Putting the location on
            the same row (opposite-justified on desktop, stacked on the
            narrow mobile width where there's no room for two columns) reads
            as one unobtrusive line of small print instead of two, and keeps
            the "built by a real, local firm" signal without asking for its
            own line of attention. Sourced from `contact.location` rather
            than restated here, so the fact lives in one place — it used to
            also appear as its own line in the Company Info column above and
            after the homepage contact form, both removed as duplicates.
          */}
          <div className="flex flex-col items-center gap-1 text-center md:flex-row md:justify-between md:text-left">
            <Small className="text-effuse-parchment">
              © {currentYear} {brand.name}. All rights reserved.
            </Small>
            <Small className="text-effuse-medium-grey">
              Built with care in {contact.location}
            </Small>
          </div>
        </div>
      </Container>
    </footer>
  )
}
