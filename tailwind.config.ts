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
        'off-black': '#1D1D21',
        'medium-grey': '#808285',
        'light-grey': '#F1F3F5',
        'slate-grey': '#2E3440',
        'brand-gold': '#FFD25A',
        'brand-teal-dark': '#0B2B33',
        'brand-teal-light': '#22C5C3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
