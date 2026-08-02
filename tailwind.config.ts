import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Effuse Labs Core Palette
        'effuse-slate': '#2E3440',
        'effuse-teal': '#22C5C3',
        'effuse-gold': '#FFD25A',
        'effuse-coral': '#FF7A5A',
        'effuse-off-black': '#1D1D21',
        'effuse-medium-grey': '#808285',
        'effuse-light-grey': '#F1F3F5',
        'effuse-white': '#FFFFFF',
        // Lumina Product Palette
        'lumina-gold': '#FFD25A',
        'lumina-coral': '#FF7A5A',
        'lumina-gradient-start': '#FFD25A',
        'lumina-gradient-end': '#FF7A5A',
        'lumina-teal': '#0B2B33',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        mono: ['var(--font-ibmplexmono)', 'IBM Plex Mono', 'monospace'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
