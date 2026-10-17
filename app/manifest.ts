import { brand } from '@/content/site'
import { surface } from '@/lib/design/tokens'
import type { MetadataRoute } from 'next'

/*
 * Replaces public/site.webmanifest, which shipped with an empty `name` and
 * `short_name` — a phone's "Add to Home Screen" produced an unlabelled icon —
 * and a white theme and background on a dark-first site, so the installed
 * app launched with a white flash. As a route it reads the brand name,
 * description and canvas colour from their single sources instead of
 * restating them in a static JSON file nothing checked.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: brand.name,
    description: brand.description,
    start_url: '/',
    display: 'standalone',
    theme_color: surface.deep,
    background_color: surface.deep,
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
