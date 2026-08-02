import type { Config } from 'tailwindcss'
// Single source of truth for design values. Tokens are added there and
// consumed here — never restated. See lib/design/tokens.ts for why.
import {
  brand,
  gradients,
  neutral,
  product,
  radii,
  shadows,
  status,
  typography,
} from './lib/design/tokens'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Effuse Labs — the firm
        'effuse-slate': brand.slate,
        'effuse-teal': brand.teal,
        'effuse-gold': brand.gold,
        'effuse-off-black': neutral.offBlack,
        'effuse-medium-grey': neutral.mediumGrey,
        'effuse-light-neutral': neutral.lightNeutral,
        'effuse-light-grey': neutral.lightGrey,
        'effuse-white': neutral.white,

        // Lumina — the product
        'lumina-gold': product.lumina.gold,
        'lumina-coral': product.lumina.coral,
        'lumina-teal': product.lumina.deepTeal,
        'lumina-gradient-start': product.lumina.gold,
        'lumina-gradient-end': product.lumina.coral,

        // Semantic status
        success: status.success,
        warning: status.warning,
        error: status.error,
      },

      // Gradients belong here, not in `colors`. As colour values Tailwind
      // emitted them as `background-color: linear-gradient(...)`, which is not
      // valid CSS and never rendered.
      backgroundImage: {
        'effuse-gradient': gradients.effuse,
        'lumina-gradient': gradients.lumina,
      },

      fontFamily: {
        sans: ['var(--font-inter)', ...typography.fontFamily.sans],
        inter: ['var(--font-inter)', ...typography.fontFamily.sans],
        poppins: ['var(--font-poppins)', ...typography.fontFamily.display],
      },

      borderRadius: radii,

      boxShadow: {
        'brand-sm': shadows.sm,
        'brand-md': shadows.md,
        'brand-lg': shadows.lg,
        'brand-xl': shadows.xl,
        'teal-glow': shadows.tealGlow,
        'gold-glow': shadows.goldGlow,
      },
    },
  },
  plugins: [],
}

export default config
