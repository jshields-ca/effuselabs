import type { shareCards } from '../content/social'

/**
 * The route inventory.
 *
 * Every route the site serves, in one place. Add a route here and every check
 * that iterates it — smoke assertions and visual baselines — applies to the new
 * route automatically, with no new test file.
 *
 * This lives outside `*.spec.ts` because Playwright refuses to let one test
 * file import another, and both suites need it.
 *
 * `card` names the route's entry in `shareCards` (content/social.ts), so the
 * smoke suite can check the share card still says what the page says.
 */
export const ROUTES = [
  { path: '/', name: 'home', card: 'home' },
  { path: '/products/lumina', name: 'Lumina product page', card: 'lumina' },
  { path: '/about', name: 'about', card: 'about' },
  { path: '/services', name: 'services', card: 'services' },
  { path: '/privacy', name: 'privacy', card: 'privacy' },
  { path: '/terms', name: 'terms', card: 'terms' },
  { path: '/accessibility', name: 'accessibility', card: 'accessibility' },
] as const satisfies ReadonlyArray<{
  path: string
  name: string
  card: keyof typeof shareCards
}>

export type Route = (typeof ROUTES)[number]
