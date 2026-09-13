import FlipCard from '../FlipCard.jsx'
import './Corkboard.css'

// The Creatives page gallery: pieces pinned to a corkboard, the kind of
// board an actual coffee shop has on its wall (flyers, event notices,
// customer polaroids) -- picked after comparing it against a Pinterest
// masonry grid, a line-art pottery shelf, a photo book, and an earlier
// clothesline-and-twine version (see docs/INSPIRATION.md once that's
// regenerated, and _to_delete/creatives-concepts/ for the losing
// concepts' code). Pins sit off-center per piece rather than aligned to
// a shared line, so there's no line-alignment to keep in sync.
export default function Corkboard({ pieces }) {
  return (
    <div className="concept-corkboard">
      <div className="corkboard-items">
        {pieces.map((piece, i) => {
          const tilt = (i % 2 === 0 ? -1 : 1) * (2 + (i % 4))
          const lift = i % 3 === 1 ? '0.75rem' : i % 3 === 2 ? '-0.5rem' : '0rem'
          return (
            <div
              className="corkboard-item"
              key={piece.id}
              style={{ '--tilt': `${tilt}deg`, '--lift': lift }}
            >
              <span className="corkboard-pin" aria-hidden="true" />
              <div
                className="corkboard-photo"
                style={{ aspectRatio: `${piece.width} / ${piece.height}` }}
              >
                <FlipCard {...piece} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
