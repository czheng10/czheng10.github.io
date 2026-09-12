import FlipCard from '../FlipCard.jsx'
import './ConceptShelf.css'

const ITEMS_PER_SHELF = 3

function chunk(list, size) {
  const rows = []
  for (let i = 0; i < list.length; i += size) rows.push(list.slice(i, i + size))
  return rows
}

// Concept 2: a real pottery-shop shelf — each row of pieces "rests" on
// a hand-drawn line-art shelf board, matching the site's stroke-only
// icon style (ink color, no fill; see docs/DESIGN.md's iconography rules)
// rather than a stock illustration.
export default function ConceptShelf({ pieces }) {
  const rows = chunk(pieces, ITEMS_PER_SHELF)

  return (
    <div className="concept-shelf">
      {rows.map((row, i) => (
        <div className="shelf-row" key={i}>
          <div className="shelf-items">
            {row.map((piece) => (
              <div
                className="shelf-item"
                key={piece.id}
                style={{ aspectRatio: `${piece.width} / ${piece.height}` }}
              >
                <FlipCard {...piece} />
              </div>
            ))}
          </div>
          <svg
            className="shelf-board"
            viewBox="0 0 600 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M4 8 H596" />
            <path d="M10 8 L10 32" />
            <path d="M590 8 L590 32" />
            <path d="M10 32 L2 40" />
            <path d="M590 32 L598 40" />
          </svg>
        </div>
      ))}
    </div>
  )
}
