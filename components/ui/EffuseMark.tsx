import React from 'react'

export interface EffuseMarkProps {
  className?: string
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
 * Single colour, via `currentColor` — set colour with a text-* class on this
 * component or an ancestor, the same convention Footer.tsx's SOCIAL_ICONS
 * already use. No two-tone shell/core split: the source silhouette is one
 * continuous shape, not two overlapping regions, so a faithful trace has one
 * fill. A two-colour version would mean inventing a dividing line that isn't
 * actually in the drawing — worth doing later as its own pass if the flat
 * mark earns a bigger role, not as a guess bolted on here.
 */
export const EffuseMark: React.FC<EffuseMarkProps> = ({ className }) => {
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
