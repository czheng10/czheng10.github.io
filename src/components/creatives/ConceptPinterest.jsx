import FlipCard from '../FlipCard.jsx'
import './ConceptPinterest.css'

// Concept 1: infinite-feed / Pinterest-style tiles — a CSS column
// masonry so pieces keep their natural aspect ratio instead of being
// cropped into a uniform grid. Each tile is framed the same
// cream-polaroid-border way as the clothesline concept (`.pinterest-frame`
// borrows that treatment) so the two concepts share a visual language.
export default function ConceptPinterest({ pieces }) {
  return (
    <div className="concept-pinterest">
      {pieces.map((piece) => (
        <div className="pinterest-tile" key={piece.id}>
          <div
            className="pinterest-frame"
            style={{ aspectRatio: `${piece.width} / ${piece.height}` }}
          >
            <FlipCard {...piece} />
          </div>
        </div>
      ))}
    </div>
  )
}
