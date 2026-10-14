import { useMemo, useState } from 'react'
import { Bean, Mug, ToGoCup } from './icons/CoffeeIcons.jsx'
import './FlipCard.css'

// One of these picked at random per card for the postage stamp -- just
// a bit of visual variety across pieces, rather than every stamp
// showing the same bean.
const stampIcons = [Bean, Mug, ToGoCup]

// Shared flip mechanic: click (or Enter/Space, since this is a real
// <button>) flips the card via a 3D CSS transform. Front is always the
// photo; back is a postcard-style note: a dashed "postage stamp" in
// the top-right corner (like a real mailed postcard), big title first,
// then the caption written on faint ruled lines (like the address
// lines on the back of a real postcard). Now used only inside
// Corkboard's enlarged lightbox view (small pinned photos on the board
// just open that lightbox instead of flipping in place -- at ~190px
// the caption read too small to be legible).
export default function FlipCard({ image, alt, title, back }) {
  const [flipped, setFlipped] = useState(false)
  // Memoized (not re-rolled every render) so the stamp doesn't change
  // icon every time the card is flipped back and forth -- just once
  // per time this card is mounted (i.e. once per lightbox open).
  const StampIcon = useMemo(
    () => stampIcons[Math.floor(Math.random() * stampIcons.length)],
    []
  )

  // The back face's caption text is now selectable (see .flip-card-back
  // in FlipCard.css), but the whole card is still one big <button> --
  // without this check, releasing a text-selection drag fires a click
  // same as a plain tap, flipping the card shut right as you select
  // the text you wanted to read/copy.
  function handleClick() {
    const selection = window.getSelection()
    if (selection && selection.toString().length > 0) return
    setFlipped((f) => !f)
  }

  return (
    <button
      type="button"
      className={`flip-card ${flipped ? 'is-flipped' : ''}`}
      onClick={handleClick}
      aria-pressed={flipped}
      aria-label={
        flipped
          ? `${title} — showing info, click to flip back to the photo`
          : `${title} — click to flip for more info`
      }
    >
      <span className="flip-card-inner">
        <span className="flip-card-face flip-card-front">
          <img src={image} alt={alt} />
        </span>
        <span className="flip-card-face flip-card-back">
          <span className="flip-card-message-col">
            <span className="flip-card-title">{title}</span>
            <span className="flip-card-info">{back}</span>
          </span>
          <span className="flip-card-stamp-col">
            <span className="flip-card-stamp" aria-hidden="true">
              <StampIcon />
            </span>
          </span>
        </span>
      </span>
    </button>
  )
}
