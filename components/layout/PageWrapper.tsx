import { ScrollIndicator } from '@/components/ui'
import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { SkipNav } from './SkipNav'

interface PageWrapperProps {
  children: React.ReactNode
  showNavbar?: boolean
  showFooter?: boolean
  className?: string
}

/**
 * Synchronous by design. This was previously an async server component that
 * awaited a Sanity fetch before any page could render — a network round trip
 * on every request, to a project id that defaulted to `demo`. Header content
 * now comes from `content/site.ts` at build time.
 */
export const PageWrapper = ({
  children,
  showNavbar = true,
  showFooter = true,
  className = '',
}: PageWrapperProps) => {
  return (
    <div
      className={
        `min-h-screen flex flex-col overflow-x-clip bg-white` +
        (className ? ` ${className}` : '')
      }
    >
      {/* Scroll Progress Indicator */}
      <ScrollIndicator variant="linear" color="brand" />

      {/* Skip Navigation for Accessibility */}
      <SkipNav />

      {/* Header/Navigation */}
      {showNavbar && <Navbar />}

      {/* Main Content */}
      <main id="main-content" className="flex-1 overflow-x-clip">
        {children}
      </main>

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  )
}
