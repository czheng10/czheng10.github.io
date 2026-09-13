import FlipCard from '../FlipCard.jsx'
import './Corkboard.css'

// Renders just the pinned art pieces -- the board itself (background,
// texture, padding) now lives one level up in Creatives.jsx/.css, since
// the whole Creatives page shares one continuous corkboard rather than
// the gallery having its own separate board.
export default function Corkboard({ pieces }) {
  return (
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
  )
}
