import FlipCard from '../FlipCard.jsx'
import './ConceptPinterest.css'

// Concept 1: infinite-feed / Pinterest-style tiles — a CSS column
// masonry so pieces keep their natural aspect ratio instead of being
// cropped into a uniform grid.
export default function ConceptPinterest({ pieces }) {
  return (
    <div className="concept-pinterest">
      {pieces.map((piece) => (
        <div
          className="pinterest-tile"
          key={piece.id}
          style={{ aspectRatio: `${piece.width} / ${piece.height}` }}
        >
          <FlipCard {...piece} />
        </div>
      ))}
    </div>
  )
}
