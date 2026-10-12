import { shareCards } from '@/content/social'
import {
  renderShareCard,
  shareCardContentType,
  shareCardSize,
} from '@/lib/og/renderShareCard'

// Social share image for this route — see lib/og/renderShareCard.tsx.
export const alt = shareCards.about.alt
export const size = shareCardSize
export const contentType = shareCardContentType

export default function Image() {
  return renderShareCard(shareCards.about)
}
