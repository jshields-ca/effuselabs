import React from 'react'
import { H4, Text, Small } from '@/components/ui'
import { Container } from '@/components/ui'

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
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-light-grey hover:bg-brand-teal-light hover:text-white transition-colors duration-200 text-medium-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
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
      className="text-medium-grey hover:text-brand-teal-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-md"
    >
      {children}
    </a>
  )
}

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-grey text-white">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">Effuse Labs</h3>
              <Text className="text-light-grey mb-4">
                Intelligent Software for Small Business Growth. We pour out innovative solutions 
                that transform operational burdens into competitive strengths.
              </Text>
            </div>
            
            {/* Contact Info */}
            <div className="mb-6">
              <Text className="text-light-grey">
                <strong>Location:</strong> Winnipeg, Manitoba, Canada
              </Text>
              <Text className="text-light-grey">
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:hello@effuse.io" 
                  className="hover:text-brand-teal-light transition-colors duration-200"
                >
                  hello@effuse.io
                </a>
              </Text>
            </div>

            {/* Social Links */}
            <div>
              <H4 className="text-white mb-4">Connect With Us</H4>
              <div className="flex space-x-4">
                <SocialLink
                  href="https://linkedin.com/company/effuselabs"
                  label="LinkedIn"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  }
                />
                <SocialLink
                  href="https://twitter.com/effuselabs"
                  label="Twitter/X"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  }
                />
                <SocialLink
                  href="https://bsky.app/profile/effuselabs"
                  label="BlueSky"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-2.67-.296-5.568.628-6.383 3.364C.378 17.703 0 22.663 0 23.353c0 .688.139 1.86.902 2.203.659.299 1.664.621 4.3-1.24C7.954 22.314 10.913 18.375 12 16.261c1.087 2.114 4.046 6.053 6.798 7.995 2.636 1.861 3.641 1.539 4.3 1.24.763-.343.902-1.515.902-2.203 0-.69-.378-5.65-.624-6.479-.815-2.736-3.713-3.66-6.383-3.364-.139.016-.277.034-.415.056.138-.017.276-.036.415-.056 2.67.296 5.568-.628 6.383-3.364C23.622 9.418 24 4.458 24 3.768c0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z"/>
                    </svg>
                  }
                />
                <SocialLink
                  href="https://github.com/effuselabs"
                  label="GitHub"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <H4 className="text-white mb-4">Company</H4>
            <ul className="space-y-3">
              <li><FooterLink href="#about">About Us</FooterLink></li>
              <li><FooterLink href="#careers">Careers</FooterLink></li>
              <li><FooterLink href="#news">News & Updates</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <H4 className="text-white mb-4">Products</H4>
            <ul className="space-y-3">
              <li><FooterLink href="#lumina">Lumina</FooterLink></li>
              <li><FooterLink href="#silentledger">SilentLedger</FooterLink></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <H4 className="text-white mb-4">Resources</H4>
            <ul className="space-y-3">
              <li><FooterLink href="#documentation">Documentation</FooterLink></li>
              <li><FooterLink href="#support">Support</FooterLink></li>
              <li><FooterLink href="#api">API Reference</FooterLink></li>
              <li><FooterLink href="#blog">Blog</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-medium-grey">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Small className="text-light-grey">
              © {currentYear} Effuse Labs. All rights reserved.
            </Small>
            
            <div className="flex space-x-6">
              <FooterLink href="/privacy">
                <Small className="text-light-grey hover:text-brand-teal-light">Privacy Policy</Small>
              </FooterLink>
              <FooterLink href="/terms">
                <Small className="text-light-grey hover:text-brand-teal-light">Terms of Service</Small>
              </FooterLink>
              <FooterLink href="/accessibility">
                <Small className="text-light-grey hover:text-brand-teal-light">Accessibility</Small>
              </FooterLink>
            </div>
          </div>
          
          {/* Made with note */}
          <div className="mt-6 text-center">
            <Small className="text-medium-grey">
              Built with ❤️ in Winnipeg, Manitoba 🇨🇦
            </Small>
          </div>
        </div>
      </Container>
    </footer>
  )
}