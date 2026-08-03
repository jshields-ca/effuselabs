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
  surface,
  warm,
  typeScale,
  typeSetting,
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

        // Dark canvas. The site is dark-first; these are the surfaces the
        // luminous work is poured onto.
        'surface-deep': surface.deep,
        'surface-base': surface.base,
        'surface-raised': surface.raised,
        'surface-border': surface.border,

        // Warm tones. `effuse-parchment` is the body colour on dark;
        // `effuse-ember` is for shadow and edge light only — see tokens.ts.
        'effuse-parchment': warm.parchment,
        'effuse-ember': warm.ember,

        // Semantic status
        success: status.success,
        warning: status.warning,
        error: status.error,
      },

      // Type scale. There was none — the homepage alone made eighteen separate
      // size decisions at their call sites.
      fontSize: {
        display: [typeScale.display, typeSetting.display],
        h1: [typeScale.h1, typeSetting.heading],
        h2: [typeScale.h2, typeSetting.heading],
        h3: [typeScale.h3, typeSetting.heading],
        h4: [typeScale.h4, typeSetting.heading],
        'body-lg': [typeScale.bodyLg, typeSetting.body],
        body: [typeScale.body, typeSetting.body],
        'body-sm': [typeScale.bodySm, typeSetting.body],
        eyebrow: [typeScale.eyebrow, typeSetting.eyebrow],
      },

      // Gradients belong here, not in `colors`. As colour values Tailwind
      // emitted them as `background-color: linear-gradient(...)`, which is not
      // valid CSS and never rendered.
      backgroundImage: {
        'effuse-gradient': gradients.effuse,
        'lumina-gradient': gradients.lumina,
      },

      // The variables come from next/font in app/layout.tsx; the fallbacks come
      // from tokens.ts. `font-inter` and `font-poppins` are gone along with the
      // faces themselves — anything that wants display type asks for
      // `font-display`.
      fontFamily: {
        sans: typography.fontFamily.sans,
        display: typography.fontFamily.display,
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
