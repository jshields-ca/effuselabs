'use client'

import { useState, useEffect } from 'react'

export interface NavigationState {
  isMobileMenuOpen: boolean
  isScrolled: boolean
}

export const useNavigation = () => {
  const [state, setState] = useState<NavigationState>({
    isMobileMenuOpen: false,
    isScrolled: false,
  })

  // Handle scroll behavior for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setState(prev => ({ ...prev, isScrolled: scrolled }))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setState(prev => ({ ...prev, isMobileMenuOpen: !prev.isMobileMenuOpen }))
  }

  const closeMobileMenu = () => {
    setState(prev => ({ ...prev, isMobileMenuOpen: false }))
  }

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu()
      }
    }

    if (state.isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [state.isMobileMenuOpen])

  return {
    ...state,
    toggleMobileMenu,
    closeMobileMenu,
  }
}
