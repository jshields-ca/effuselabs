/**
 * The route inventory.
 *
 * Every route the site serves, in one place. Add a route here and every check
 * that iterates it — smoke assertions and visual baselines — applies to the new
 * route automatically, with no new test file.
 *
 * This lives outside `*.spec.ts` because Playwright refuses to let one test
 * file import another, and both suites need it.
 */
export const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/products/lumina', name: 'Lumina product page' },
  { path: '/about', name: 'about' },
  { path: '/services', name: 'services' },
] as const

export type Route = (typeof ROUTES)[number]
