import { useState } from 'react'
import FlipCard from '../FlipCard.jsx'
import './ConceptPhotobook.css'

// Concept 3: a photo book — one piece per page, with a page-turn
// animation (CSS rotateY, keyed on piece id so React remounts the page
// and replays it) instead of a plain crossfade or instant swap.
export default function ConceptPhotobook({ pieces }) {
  const [index, setIndex] = useState(0)
  const piece = pieces[index]

  const goPrev = () => setIndex((i) => (i - 1 + pieces.length) % pieces.length)
  const goNext = () => setIndex((i) => (i + 1) % pieces.length)

  return (
    <div className="concept-photobook">
      <div className="photobook-book">
        <button
          type="button"
          className="photobook-nav photobook-prev"
          onClick={goPrev}
          aria-label="Previous page"
        >
          ‹
        </button>

        <div className="photobook-page-wrap">
          <div
            className="photobook-page-card"
            key={piece.id}
            style={{ aspectRatio: `${piece.width} / ${piece.height}` }}
          >
            <FlipCard {...piece} />
          </div>
        </div>

        <button
          type="button"
          className="photobook-nav photobook-next"
          onClick={goNext}
          aria-label="Next page"
        >
          ›
        </button>
      </div>

      <p className="photobook-caption">
        Page {index + 1} of {pieces.length}
      </p>
    </div>
  )
}
