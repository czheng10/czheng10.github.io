import { useMemo } from 'react'
import FlipCard from '../FlipCard.jsx'
import './Corkboard.css'

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Picks a valid row size (3-5) out of `remaining` pieces, making sure
// the leftover after this row is either 0 or still at least 3 -- a
// naive Math.min(randomInt(3,5), remaining) can strand a trailing row
// of 1 or 2 (e.g. 8 pieces as 3+4+1), which read like a mistake rather
// than "organic."
function pickRowSize(remaining) {
  const candidates = [3, 4, 5].filter((size) => {
    if (size > remaining) return false
    const leftover = remaining - size
    return leftover === 0 || leftover >= 3
  })
  if (candidates.length === 0) return remaining
  return candidates[randomInt(0, candidates.length - 1)]
}

// Groups pieces into rows of a random size (3-5) each. A strict wrap
// (however many happen to fit the container width) read too tidy and
// grid-like for a corkboard -- clustering pieces into irregular row
// sizes, with a bigger gap between clusters than within one, feels more
// like something actually pinned up over time.
function groupIntoRows(list) {
  const rows = []
  let i = 0
  while (i < list.length) {
    const size = pickRowSize(list.length - i)
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
        <div className="corkboard-items" key={r}>
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
