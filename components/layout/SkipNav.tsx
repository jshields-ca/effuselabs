import React from 'react'

export const SkipNav: React.FC = () => {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        className="absolute top-4 left-4 z-50 bg-effuse-gold text-effuse-off-black px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-effuse-teal focus:ring-offset-2 transition-all duration-200"
      >
        Skip to main content
      </a>
    </div>
  )
}
