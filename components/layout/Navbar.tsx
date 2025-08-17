'use client'

import Image from 'next/image'
import React from 'react'
// TEMPORARY: Disable complex animations to fix 269 KiB bundle issue
// TODO: Implement CSS-only mobile menu animations
import { Button } from '@/components/ui'
import { useNavigation } from '@/lib/hooks/useNavigation'
import type { HeaderContent } from '@/lib/sanity/types'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative text-effuse-white hover:text-effuse-gold hover:bg-effuse-teal/10 transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-gold focus-visible:ring-offset-2 rounded-md px-3 py-2 font-inter tracking-wide uppercase"
      style={{ letterSpacing: '0.04em' }}
      tabIndex={0}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute left-0 bottom-0 w-full h-0.5 bg-effuse-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </a>
  )
}

const MobileMenuButton: React.FC<{
  isOpen: boolean
  onClick: () => void
}> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-3 rounded-lg text-effuse-white hover:text-effuse-gold hover:bg-effuse-slate/20 transition-all duration-300 focus-brand interactive-glow hover:scale-110 active:scale-95"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-6 relative">
        <span
          className={cn(
            'absolute top-1 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300',
            isOpen ? 'rotate-45 translate-y-2 bg-effuse-gold' : ''
          )}
        />
        <span
          className={cn(
            'absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300',
            isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          )}
        />
        <span
          className={cn(
            'absolute top-5 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300',
            isOpen ? '-rotate-45 -translate-y-2 bg-effuse-gold' : ''
          )}
        />
      </div>
    </button>
  )
}

const MobileMenu: React.FC<{
  isOpen: boolean
  onClose: () => void
  header: HeaderContent
}> = ({ isOpen, onClose, header }) => {
  return (
    <div>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-effuse-off-black bg-opacity-50 z-40 md:hidden transition-opacity duration-200"
            onClick={onClose}
            onKeyDown={e => e.key === 'Escape' && onClose()}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
          />

          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-effuse-white shadow-xl z-50 md:hidden transform transition-transform duration-300 translate-x-0">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-effuse-light-grey">
                <span className="font-bold text-xl text-effuse-off-black">
                  Menu
                </span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-md text-effuse-off-black hover:text-effuse-teal hover:bg-effuse-light-grey transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <div className="flex flex-col space-y-6">
                  {header.navLinks?.map(link => (
                    <NavLink
                      key={`${link.label}-${link.href}`}
                      href={link.href}
                      onClick={onClose}
                    >
                      <span className="text-lg">{link.label}</span>
                    </NavLink>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  {header.cta?.href ? (
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      href={header.cta.href}
                    >
                      {header.cta.label}
                    </Button>
                  ) : (
                    <Button variant="primary" size="lg" className="w-full">
                      Get Started
                    </Button>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export const Navbar: React.FC<{ header: HeaderContent }> = ({ header }) => {
  const { isMobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu } =
    useNavigation()
  const defaultLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]
  const navLinks =
    header.navLinks && header.navLinks.length > 0
      ? header.navLinks
      : defaultLinks

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-effuse-slate/95 backdrop-blur-sm shadow-lg'
            : 'bg-effuse-slate/90 backdrop-blur-sm'
        )}
        aria-label="Primary Navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="flex items-center gap-2 text-2xl font-bold text-effuse-white hover:text-effuse-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-gold focus-visible:ring-offset-2 rounded-md font-poppins"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Image
                  src="/logo-450x450.png"
                  alt="Effuse Labs logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                  priority
                />
                <span>{header.brandName || 'Effuse Labs'}</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <NavLink key={`${link.label}-${link.href}`} href={link.href}>
                  {link.label.replace(/\b(\w)/g, c => c.toUpperCase())}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                {header.cta?.href ? (
                  <Button
                    href={header.cta.href}
                    className="bg-effuse-gold text-effuse-off-black font-inter font-semibold px-6 py-2 rounded-lg shadow-sm transition-all duration-200 hover:bg-effuse-gold/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-gold focus-visible:ring-offset-2"
                  >
                    {header.cta.label.replace(/\b(\w)/g, c => c.toUpperCase())}
                  </Button>
                ) : (
                  <Button
                    href="#contact"
                    className="bg-effuse-gold text-effuse-off-black font-inter font-semibold px-6 py-2 rounded-lg shadow-sm transition-all duration-200 hover:bg-effuse-gold/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-gold focus-visible:ring-offset-2"
                  >
                    Get Started
                  </Button>
                )}
              </div>
              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        header={header}
      />
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-14 lg:h-16" />
    </>
  )
}
