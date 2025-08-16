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
        // SilentLedger Palette
        'sl-bg-dark': '#100B00',
        'sl-bg-light': '#fcfcfc',
        'sl-red': '#ff2525',
        'sl-blue': '#1600e8',
        'sl-purple': '#630ca7',
        'sl-magenta': '#b11866',
        // Gradients (for use with bg-gradient-to-*)
        'effuse-gradient': 'linear-gradient(90deg, #2E3440 0%, #22C5C3 100%)',
        'lumina-gradient': 'linear-gradient(90deg, #FFD25A 0%, #FF7A5A 100%)',
        'sl-gradient': 'linear-gradient(90deg, #1600e8 0%, #ff2525 100%)',
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
