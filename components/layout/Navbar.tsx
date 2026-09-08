'use client'

import { Button } from '@/components/ui'
// Aliased: `NavLink` is already the name of the presentational link component
// defined below.
import {
  brand,
  headerCta,
  navLinks,
  type NavLink as NavLinkData,
} from '@/content/site'
import { useFocusTrap } from '@/lib/hooks/useFocusTrap'
import { useNavigation } from '@/lib/hooks/useNavigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  onClick,
  className,
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      'group relative rounded-md px-3 py-2 text-eyebrow font-medium uppercase',
      'text-effuse-parchment/70 transition-colors duration-200 hover:text-effuse-parchment',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-deep',
      className
    )}
  >
    <span className="relative z-10">{children}</span>
    {/* Underline wipes in from the left on hover — the "poured" motif at its
        smallest scale. */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-effuse-teal to-effuse-gold transition-transform duration-300 group-hover:scale-x-100"
    />
  </Link>
)

const MobileMenuButton: React.FC<{
  isOpen: boolean
  onClick: () => void
}> = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-lg p-3 text-effuse-parchment transition-colors duration-200 hover:bg-effuse-parchment/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-deep md:hidden"
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
  >
    <span className="relative block h-6 w-6">
      <span
        className={cn(
          'absolute left-0 top-1 h-0.5 w-6 origin-center bg-current transition-transform duration-300',
          isOpen && 'translate-y-2 rotate-45 bg-effuse-gold'
        )}
      />
      <span
        className={cn(
          'absolute left-0 top-3 h-0.5 w-6 bg-current transition-opacity duration-300',
          isOpen ? 'opacity-0' : 'opacity-100'
        )}
      />
      <span
        className={cn(
          'absolute left-0 top-5 h-0.5 w-6 origin-center bg-current transition-transform duration-300',
          isOpen && '-translate-y-2 -rotate-45 bg-effuse-gold'
        )}
      />
    </span>
  </button>
)

const MobileMenu: React.FC<{
  isOpen: boolean
  onClose: () => void
  links: NavLinkData[]
}> = ({ isOpen, onClose, links }) => {
  const panelRef = useFocusTrap<HTMLDivElement>(isOpen)

  return (
    <>
      {/*
        Decorative backdrop. Clicking it closes the menu, but it is not a
        control: no role, not focusable. It was previously a
        <div role="button" tabIndex={0}>, which added a phantom stop to the tab
        order announced as an unlabelled button — and its onKeyDown for Escape
        could never fire, because Escape is handled at the document level in
        useNavigation. Every dismissal path it offers is also on the close
        button.

        Stays mounted rather than unmounting while closed, so it and the panel
        below can transition out, not just in — see the `mobile-menu-*`
        classes in globals.css. `inert` while closed keeps it (and everything
        under it) out of the tab order and off the accessibility tree during
        the exit animation, without waiting on the transition to finish.
      */}
      <div
        aria-hidden="true"
        inert={!isOpen}
        className={cn(
          'mobile-menu-backdrop fixed inset-0 z-40 bg-surface-deep/80 backdrop-blur-sm md:hidden',
          isOpen && 'mobile-menu-backdrop-open'
        )}
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!isOpen}
        className={cn(
          'mobile-menu-panel fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] border-l border-surface-border bg-surface-base shadow-2xl md:hidden',
          isOpen && 'mobile-menu-panel-open'
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-surface-border p-6">
            <span className="text-h4 font-semibold text-effuse-parchment">
              Menu
            </span>
            <button
              onClick={onClose}
              className="rounded-md p-2 text-effuse-parchment/70 transition-colors duration-200 hover:bg-effuse-parchment/10 hover:text-effuse-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-6 py-8">
            <div className="flex flex-col gap-2">
              {links.map(link => (
                <NavLink
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  onClick={onClose}
                  className="text-body-lg"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                href={headerCta.href}
                onClick={onClose}
              >
                {headerCta.label}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export const Navbar: React.FC = () => {
  const { isMobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu } =
    useNavigation()

  return (
    <>
      <header
        aria-label="Primary Navigation"
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
          // Translucent over the dark canvas rather than a hardcoded slate-900
          // gradient. The previous implementation set three inline rgba values
          // that belonged to no palette in this project.
          isScrolled
            ? 'border-surface-border bg-surface-deep/85 backdrop-blur-md'
            : 'border-transparent bg-surface-deep/50 backdrop-blur-sm'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link
              href="/"
              className="flex flex-shrink-0 items-center gap-3 rounded-md font-display text-h4 font-semibold text-effuse-parchment transition-colors duration-200 hover:text-effuse-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-deep"
            >
              <Image
                src="/logo-450x450.png"
                alt=""
                width={44}
                height={44}
                className="rounded-full"
                priority
              />
              <span>{brand.name}</span>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navLinks.map(link => (
                <NavLink key={`${link.label}-${link.href}`} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Button variant="primary" size="sm" href={headerCta.href}>
                  {headerCta.label}
                </Button>
              </div>
              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        links={navLinks}
      />

      {/*
        Spacer matching the header height exactly.

        It was h-14 lg:h-16 against a header declared h-16 lg:h-18 — and `h-18`
        is not a Tailwind class in v3 or v4, so it emitted nothing and the
        header was 4rem at every width. The mismatch therefore bit on mobile
        only: the top 8px of every page sat underneath the header. Both are now
        real classes and both change at the same breakpoint.
      */}
      <div className="h-16 lg:h-20" aria-hidden="true" />
    </>
  )
}
