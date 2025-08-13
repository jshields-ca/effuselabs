'use client'

import React from 'react'
// TEMPORARY: Disable complex animations to fix 269 KiB bundle issue
// TODO: Implement CSS-only mobile menu animations
import { useNavigation } from '@/lib/hooks/useNavigation'
import { Button } from '@/components/ui'
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
      className="text-off-black hover:text-brand-teal-light transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-md px-2 py-1"
      tabIndex={0}
    >
      {children}
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
      className="md:hidden p-2 rounded-md text-off-black hover:text-brand-teal-light hover:bg-light-grey transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-6 relative">
        <span className={cn(
          "absolute top-1 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300",
          isOpen ? "rotate-45 translate-y-2" : ""
        )} />
        <span className={cn(
          "absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300",
          isOpen ? "opacity-0" : "opacity-100"
        )} />
        <span className={cn(
          "absolute top-5 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300",
          isOpen ? "-rotate-45 -translate-y-2" : ""
        )} />
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
          className="fixed inset-0 bg-off-black bg-opacity-50 z-40 md:hidden transition-opacity duration-200"
          onClick={onClose}
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 translate-x-0">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-light-grey">
                <span className="font-bold text-xl text-off-black">Menu</span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-md text-off-black hover:text-brand-teal-light hover:bg-light-grey transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <div className="flex flex-col space-y-6">
                  {header.navLinks?.map((link) => (
                    <NavLink key={`${link.label}-${link.href}`} href={link.href} onClick={onClose}>
                      <span className="text-lg">{link.label}</span>
                    </NavLink>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="mt-8">
                  {header.cta?.href ? (
                    <Button variant="primary" size="lg" className="w-full" href={header.cta.href}>
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
  const { isMobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu } = useNavigation()
  const defaultLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]
  const navLinks = (header.navLinks && header.navLinks.length > 0) ? header.navLinks : defaultLinks

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white'
        )}
        aria-label="Primary Navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="flex items-center gap-2 text-2xl font-bold text-off-black hover:text-brand-teal-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-md"
              >
                <img src="/logo.svg" alt="Effuse Labs logo" className="h-8 w-auto" />
                <span>{header.brandName || 'Effuse Labs'}</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink key={`${link.label}-${link.href}`} href={link.href}>{link.label}</NavLink>
              ))}
            </nav>

            {/* Desktop CTA & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                {header.cta?.href ? (
                  <Button variant="primary" href={header.cta.href}>{header.cta.label}</Button>
                ) : (
                  <Button variant="primary" href="#contact">Get Started</Button>
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
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} header={header} />
      
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-14 lg:h-16" />
    </>
  )
}