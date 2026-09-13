import FlipCard from '../FlipCard.jsx'
import './ConceptClothesline.css'

const ITEMS_PER_LINE = 4

function chunk(list, size) {
  const rows = []
  for (let i = 0; i < list.length; i += size) rows.push(list.slice(i, i + size))
  return rows
}

// Concept 4 (original idea): pieces hang like polaroids clipped to a
// line of twine, each tilted a little so the display reads as lived-in
// rather than a rigid grid. One wire + clip row per line of pieces
// (rather than a single wire across the whole page) so the clips stay
// aligned to their own line even when the pieces wrap onto more than
// one row.
export default function ConceptClothesline({ pieces }) {
  const rows = chunk(pieces, ITEMS_PER_LINE)

  return (
    <div className="concept-clothesline">
      {rows.map((row, r) => (
        <div className="clothesline-row" key={r}>
          <div className="clothesline-wire" aria-hidden="true" />
          <div className="clothesline-items">
            {row.map((piece, i) => {
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
      ))}
    </div>
  )
}
