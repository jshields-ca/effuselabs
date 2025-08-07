import React from 'react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href?: string
  isCurrentPage?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center space-x-2 text-sm', className)}
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg
                className="w-4 h-4 mx-2 text-medium-grey"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            
            {item.href && !item.isCurrentPage ? (
              <a
                href={item.href}
                className="text-medium-grey hover:text-brand-teal-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-md px-1 py-0.5"
              >
                {item.label}
              </a>
            ) : (
              <span
                className={cn(
                  'px-1 py-0.5',
                  item.isCurrentPage
                    ? 'text-off-black font-medium'
                    : 'text-medium-grey'
                )}
                aria-current={item.isCurrentPage ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}