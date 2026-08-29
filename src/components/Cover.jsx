import './Cover.css'

export default function Cover({ entered, onEnter }) {
  return (
    <div
      className={'cover' + (entered ? ' cover-hidden' : '')}
      aria-hidden={entered}
    >
      <button className="cover-button" onClick={onEnter}>
        <span className="cover-eyebrow">welcome to</span>
        <span className="cover-name font-display">Cindy Zheng</span>
        <span className="cover-tagline">a little café of code &amp; creativity</span>
        <span className="cover-prompt">tap to see the menu</span>
      </button>
    </div>
  )
}
