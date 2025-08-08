import React from 'react'
import { SkipNav } from './SkipNav'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { getHeaderContent } from '@/lib/sanity/api'

interface PageWrapperProps {
  children: React.ReactNode
  showNavbar?: boolean
  showFooter?: boolean
  className?: string
}

export const PageWrapper = async ({
  children,
  showNavbar = true,
  showFooter = true,
  className = ''
}: PageWrapperProps) => {
  const header = await getHeaderContent()

  return (
    <div className={`min-h-screen flex flex-col overflow-x-clip bg-white` + (className ? ` ${className}` : '')}>
      {/* Skip Navigation for Accessibility */}
      <SkipNav />
      
      {/* Header/Navigation */}
      {showNavbar && <Navbar header={header} />}
      
      {/* Main Content */}
      <main id="main-content" className="flex-1 overflow-x-clip">
        {children}
      </main>
      
      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  )
}