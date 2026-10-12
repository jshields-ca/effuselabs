import type { ShareCard } from '@/content/social'
import { brand, gradients, surface, warm } from '@/lib/design/tokens'
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * The social share card renderer, used by every `opengraph-image.tsx`.
 *
 * WHY THIS EXISTS
 * The site's only `og:image` was the 800×800 logo on a transparent
 * background, sent with a `summary` Twitter card. LinkedIn, Facebook, Slack
 * and iMessage all lay a link preview out at roughly 1.91:1, so a square
 * transparent image was either dropped, shrunk to a tiny thumbnail, or
 * composited onto the platform's own background colour — which is why a
 * shared effuse.io link looked like it had no image at all.
 *
 * This renders a real 1200×630 card per route at build time through
 * `next/og`. Next statically prerenders an `opengraph-image` route with no
 * dynamic input, so the card is a plain PNG served from the CDN — nothing is
 * generated per request, and the `fs` reads below run only during the build.
 *
 * Colours come from the design tokens like everything else (Non-negotiable
 * 1). The fonts are the same faces `next/font` loads for the site, committed
 * as static TTFs because Satori can't read woff2 or variable fonts.
 */

export const shareCardSize = { width: 1200, height: 630 } as const
export const shareCardContentType = 'image/png'

/*
 * `next/og` accepts colours only as strings it can parse itself, and its
 * parser does not understand the space-separated `rgb(r g b / a)` syntax the
 * `emission` tokens use. So the glows are built from the brand hex plus an
 * 8-digit alpha suffix here, rather than reusing `emission` directly.
 */
const alpha = (hex: string, opacity: number) =>
  `${hex}${Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0')}`

const VARIANTS = {
  effuse: {
    logo: () => readFile(join(process.cwd(), 'public/logo-450x450.png')),
    logoWidth: 340,
    logoHeight: 340,
    bar: gradients.effuse,
    eyebrow: brand.teal,
    glowLeft: brand.teal,
    glowRight: brand.gold,
  },
  lumina: {
    logo: () => readFile(join(process.cwd(), 'public/brand/lumina-mark.png')),
    logoWidth: 380,
    logoHeight: 265,
    bar: gradients.lumina,
    eyebrow: brand.gold,
    glowLeft: brand.gold,
    glowRight: brand.gold,
  },
} as const

/*
 * Every path is a literal joined to `process.cwd()` so the bundler can trace
 * the file statically; a computed path makes Turbopack warn that it may have
 * to trace the whole project.
 */
const fonts = () =>
  Promise.all([
    readFile(
      join(process.cwd(), 'lib/og/fonts/BricolageGrotesque-SemiBold.ttf')
    ),
    readFile(join(process.cwd(), 'lib/og/fonts/PublicSans-Regular.ttf')),
    readFile(join(process.cwd(), 'lib/og/fonts/PublicSans-SemiBold.ttf')),
  ])

export async function renderShareCard(card: ShareCard) {
  const v = VARIANTS[card.variant]
  const [[display, body, bodySemi], logo] = await Promise.all([
    fonts(),
    v.logo(),
  ])
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: surface.deep,
          // Light entering from the upper left and pooling to the right — the
          // same composition as the homepage hero.
          backgroundImage: [
            `radial-gradient(circle at 0% 0%, ${alpha(v.glowLeft, 0.22)} 0%, ${alpha(v.glowLeft, 0)} 45%)`,
            `radial-gradient(circle at 82% 50%, ${alpha(v.glowRight, 0.2)} 0%, ${alpha(v.glowRight, 0)} 38%)`,
          ].join(', '),
          fontFamily: 'Public Sans',
          color: warm.parchment,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 760,
            padding: '80px 0 72px 80px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: 2.5,
                textTransform: 'uppercase',
                color: v.eyebrow,
              }}
            >
              {card.eyebrow}
            </div>
            <div
              style={{
                marginTop: 28,
                fontFamily: 'Bricolage Grotesque',
                fontSize: 68,
                lineHeight: 1.05,
                letterSpacing: -1.5,
              }}
            >
              {card.title}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                width: 120,
                height: 6,
                borderRadius: 3,
                backgroundImage: v.bar,
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 24,
                fontSize: 30,
              }}
            >
              <span style={{ fontWeight: 600 }}>Effuse Labs</span>
              <span
                style={{
                  width: 8,
                  height: 8,
                  margin: '0 18px',
                  backgroundColor: brand.gold,
                }}
              />
              <span>effuse.io</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: 48,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img>; next/image does not exist here. */}
          <img src={logoSrc} width={v.logoWidth} height={v.logoHeight} alt="" />
        </div>
      </div>
    ),
    {
      ...shareCardSize,
      fonts: [
        { name: 'Bricolage Grotesque', data: display, weight: 600 },
        { name: 'Public Sans', data: body, weight: 400 },
        { name: 'Public Sans', data: bodySemi, weight: 600 },
      ],
    }
  )
}
