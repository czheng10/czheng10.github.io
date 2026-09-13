import { useMemo } from 'react'
import FlipCard from '../FlipCard.jsx'
import './Corkboard.css'

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Groups pieces into rows of a random size (3-5) each. A strict wrap
// (however many happen to fit the container width) read too tidy and
// grid-like for a corkboard -- clustering pieces into irregular row
// sizes, with a bigger gap between clusters than within one, feels more
// like something actually pinned up over time.
//
// Every row is a random 3-5 EXCEPT the last one, which just takes
// whatever's left (1-5) -- this keeps working correctly as pieces are
// added or removed over time, rather than only being tuned for exactly
// 8. Only ever the final row is allowed to be small (1-2); an earlier
// version picked each row independently with Math.min(...), which
// could also strand a small row in the *middle* of the board (e.g. 8
// pieces as 3+4+1).
function groupIntoRows(list) {
  const rows = []
  let i = 0
  while (i < list.length) {
    const remaining = list.length - i
    const size = remaining <= 5 ? remaining : randomInt(3, 5)
    rows.push(list.slice(i, i + size))
    i += size
  }
  return rows
}

export default function Corkboard({ pieces }) {
  const rows = useMemo(() => groupIntoRows(pieces), [pieces])

  return (
    <div className="corkboard-board-items">
      {rows.map((row, r) => (
        <div className="corkboard-items" key={r} style={{ '--row-size': row.length }}>
          {row.map((piece, i) => {
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
      ))}
    </div>
  )
}
