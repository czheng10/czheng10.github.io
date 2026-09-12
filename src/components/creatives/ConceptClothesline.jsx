import FlipCard from '../FlipCard.jsx'
import './ConceptClothesline.css'

// Concept 4 (original idea): pieces hang like polaroids clipped to a
// line of twine, each tilted a little so the display reads as lived-in
// rather than a rigid grid — leaning into the site's "organic" shape
// language (see docs/DESIGN.md).
export default function ConceptClothesline({ pieces }) {
  return (
    <div className="concept-clothesline">
      <div className="clothesline-wire" aria-hidden="true" />
      <div className="clothesline-items">
        {pieces.map((piece, i) => {
          const tilt = (i % 2 === 0 ? -1 : 1) * (3 + (i % 3) * 2)
          return (
            <div
              className="clothesline-item"
              key={piece.id}
              style={{ '--tilt': `${tilt}deg` }}
            >
              <span className="clothesline-clip" aria-hidden="true" />
              <div
                className="clothesline-polaroid"
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
