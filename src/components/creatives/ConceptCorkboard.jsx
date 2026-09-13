import FlipCard from '../FlipCard.jsx'
import './ConceptCorkboard.css'

// A café-flavored cousin of the clothesline concept: instead of pieces
// clipped to a line of twine, they're pinned to a corkboard -- the kind
// of board an actual coffee shop has on its wall (flyers, event
// notices, customer polaroids). Same tilted-paper, "pinned up" charm as
// clothesline, but the prop itself is more on-theme for a café site.
// Pins sit off-center (not aligned to any shared line), so there's no
// line-alignment to get wrong the way the clothesline's clips did.
export default function ConceptCorkboard({ pieces }) {
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
