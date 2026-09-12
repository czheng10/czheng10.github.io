import { useState } from 'react'
import './FlipCard.css'

// Shared flip mechanic reused by every Creatives-page layout concept:
// click (or Enter/Space, since this is a real <button>) flips the card
// via a 3D CSS transform. Front is always the photo; back is placeholder
// info text until Cindy supplies real per-piece copy.
export default function FlipCard({ image, alt, title, back }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      className={`flip-card ${flipped ? 'is-flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={
        flipped
          ? `${title} — showing info, click to flip back to the photo`
          : `${title} — click to flip for more info`
      }
    >
      <span className="flip-card-inner">
        <span className="flip-card-face flip-card-front">
          <img src={image} alt={alt} />
        </span>
        <span className="flip-card-face flip-card-back">
          <span className="flip-card-title">{title}</span>
          <span className="flip-card-info">{back}</span>
        </span>
      </span>
    </button>
  )
}
