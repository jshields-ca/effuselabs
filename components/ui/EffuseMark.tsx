import { brand } from '@/lib/design/tokens'
import React from 'react'

export interface EffuseMarkProps {
  className?: string
  /**
   * `mono` (default) renders one shape in `currentColor` — set colour with a
   * text-* class, the same convention Footer.tsx's SOCIAL_ICONS already use.
   * `twoTone` splits it into the shell (teal) and the flame (gold) — see the
   * comment below for why that split is real geometry, not an invented line.
   */
  variant?: 'mono' | 'twoTone'
}

/*
 * The flat mark. Jeremy drew a droplet-and-flame silhouette that reads the
 * same idea as the glossy 3D logo (public/logo-800x800.png) — a shell
 * curling back around a core — but as a single flat shape, which the glossy
 * render can't be: gradients and specular highlights that read as "premium"
 * at 800x800 turn to mud at a 16px favicon or a 20px footer mark. This is
 * that shape traced into a clean vector path (potrace, from Jeremy's PNG)
 * so it stays crisp at any size instead of being another raster asset.
 *
 * TWO-TONE VARIANT
 *
 * The single-fill trace looked like one continuous silhouette, but it isn't:
 * measuring the source PNG's alpha mask row by row shows two genuinely
 * separate lobes — a small flame-tail on the left and the main body on the
 * right — that don't actually touch until about 90% of the way down, where
 * they merge into one rounded base. The gap between them sits at a nearly
 * constant x the whole way, so splitting the mask there (traced separately
 * with potrace) isn't inventing a boundary — it's the boundary already in
 * Jeremy's drawing. The payoff: the merged base encloses a real hole in the
 * silhouette, which lands almost exactly on the "shell around a core" idea
 * the glossy logo renders explicitly. Held up checked down to 24px.
 */
export const EffuseMark: React.FC<EffuseMarkProps> = ({
  className,
  variant = 'mono',
}) => {
  if (variant === 'twoTone') {
    return (
      <svg
        className={className}
        viewBox="0 0 536 726"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g transform="translate(0,726) scale(0.1,-0.1)">
          <path
            d="M2591 7225 l-31 -36 0 -1777 0 -1776 63 -59 c34 -32 114 -104 177 -160 262 -231 310 -276 426 -391 148 -147 267 -289 350 -416 251 -387 315 -776 189 -1160 -67 -202 -150 -337 -305 -491 -214 -212 -475 -324 -807 -346 l-93 -6 0 -305 0 -304 183 4 c342 10 673 74 967 190 254 100 556 278 745 439 70 59 254 245 295 298 19 24 42 51 50 60 43 47 182 251 242 356 111 194 168 346 248 652 46 176 75 482 65 693 -19 415 -105 745 -300 1145 -94 193 -217 415 -312 562 -29 46 -53 85 -53 87 0 3 -17 31 -38 63 -21 32 -93 141 -160 243 -66 102 -130 199 -142 215 -52 73 -120 170 -190 269 -158 225 -322 451 -390 536 -25 31 -55 70 -67 86 -226 305 -304 408 -337 450 -23 28 -50 63 -61 79 -11 15 -32 42 -46 59 -15 17 -55 69 -90 116 -35 47 -111 145 -169 218 -58 74 -112 144 -121 158 -8 13 -29 38 -45 56 -16 18 -65 77 -109 131 -43 53 -84 97 -91 97 -6 0 -26 -16 -43 -35z"
            fill={brand.teal}
          />
          <path
            d="M2452 7073 c-86 -93 -153 -170 -237 -272 -11 -13 -27 -31 -35 -40 -37 -39 -181 -224 -238 -304 -166 -233 -277 -453 -331 -652 -66 -248 -50 -574 42 -840 146 -423 406 -811 850 -1269 l57 -59 0 1771 c0 975 -2 1772 -4 1772 -2 0 -49 -48 -104 -107z M1148 5388 c-24 -35 -45 -67 -48 -73 -3 -5 -58 -89 -122 -186 -65 -98 -118 -180 -118 -184 0 -3 -13 -26 -30 -50 -16 -24 -30 -46 -30 -48 0 -2 -24 -45 -54 -94 -128 -213 -368 -674 -426 -818 -4 -11 -20 -46 -34 -78 -14 -32 -26 -60 -26 -62 0 -3 -9 -24 -19 -48 -23 -49 -82 -218 -105 -297 -83 -292 -111 -443 -125 -690 -24 -436 43 -822 216 -1230 25 -58 53 -118 63 -135 9 -16 37 -66 61 -110 84 -158 212 -319 394 -500 226 -224 405 -355 665 -486 126 -63 211 -101 290 -128 36 -13 74 -27 85 -31 11 -4 40 -13 65 -20 25 -7 56 -16 70 -20 14 -5 45 -13 70 -18 25 -6 56 -13 70 -17 109 -25 401 -64 493 -65 4 0 7 137 7 303 l0 304 -117 11 c-172 16 -372 73 -493 140 -25 14 -54 30 -65 36 -100 55 -261 197 -335 296 -19 25 -37 47 -40 50 -28 27 -125 204 -152 278 -4 12 -12 32 -17 45 -66 155 -94 506 -57 702 38 196 146 423 284 595 53 67 193 211 241 248 19 15 48 39 65 53 82 70 255 159 389 200 42 13 77 29 77 35 0 7 -59 65 -131 130 -156 141 -332 339 -450 508 -121 172 -261 416 -337 586 -43 97 -51 117 -73 185 -12 39 -25 75 -29 80 -6 9 -20 60 -51 190 -25 106 -58 350 -59 433 0 23 -4 42 -10 42 -5 0 -29 -28 -52 -62z"
            fill={brand.gold}
          />
        </g>
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 536 726"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(0,726) scale(0.1,-0.1)" fill="currentColor">
        <path d="M2589 7223 c-18 -21 -78 -87 -135 -148 -88 -95 -154 -170 -239 -274 -11 -13 -27 -31 -35 -40 -37 -39 -181 -224 -238 -304 -166 -233 -277 -453 -331 -652 -66 -248 -50 -574 42 -840 176 -509 575 -1048 1144 -1547 245 -214 311 -274 429 -392 397 -396 576 -738 600 -1143 14 -258 -75 -561 -228 -768 -189 -256 -460 -425 -768 -481 -298 -53 -652 -4 -880 124 -25 14 -54 30 -65 36 -100 55 -261 197 -335 296 -19 25 -37 47 -40 50 -28 27 -128 209 -150 275 -4 11 -12 31 -18 45 -67 153 -95 507 -58 705 38 196 146 423 284 595 53 67 193 211 241 248 19 15 48 39 65 53 82 70 255 159 389 200 42 13 77 29 77 35 0 7 -59 65 -131 130 -156 141 -332 339 -450 508 -121 172 -261 416 -337 586 -43 97 -51 117 -73 185 -12 39 -25 75 -29 80 -6 9 -20 60 -51 190 -25 106 -58 350 -59 433 0 23 -4 42 -10 42 -8 0 -84 -102 -100 -135 -3 -5 -58 -89 -122 -186 -65 -98 -118 -180 -118 -184 0 -3 -13 -26 -30 -50 -16 -24 -30 -46 -30 -48 0 -2 -24 -45 -54 -94 -128 -213 -368 -674 -426 -818 -4 -11 -20 -46 -34 -78 -14 -32 -26 -60 -26 -62 0 -3 -9 -24 -19 -48 -23 -49 -82 -218 -105 -297 -83 -292 -111 -443 -125 -690 -24 -436 43 -822 216 -1230 25 -58 53 -118 63 -135 9 -16 37 -66 61 -110 84 -158 212 -319 394 -500 226 -224 405 -355 665 -486 126 -63 211 -101 290 -128 36 -13 74 -27 85 -31 11 -4 40 -13 65 -20 25 -7 56 -16 70 -20 14 -5 45 -13 70 -18 25 -6 56 -13 70 -17 512 -119 1150 -70 1650 127 254 100 556 278 745 439 70 59 254 245 295 298 19 24 42 51 50 60 43 47 182 251 242 356 111 194 168 346 248 652 46 176 75 482 65 693 -19 415 -105 745 -300 1145 -94 193 -217 415 -312 562 -29 46 -53 85 -53 87 0 3 -17 31 -38 63 -21 32 -93 141 -160 243 -66 102 -130 199 -142 215 -52 73 -120 170 -190 269 -158 225 -322 451 -390 536 -25 31 -55 70 -67 86 -226 305 -304 408 -337 450 -23 28 -50 63 -61 79 -11 15 -32 42 -46 59 -15 17 -55 69 -90 116 -35 47 -111 145 -169 218 -58 74 -112 144 -121 158 -8 13 -29 38 -45 56 -16 18 -65 77 -109 131 -43 53 -84 97 -91 97 -6 0 -27 -17 -45 -37z" />
      </g>
    </svg>
  )
}

export default EffuseMark
