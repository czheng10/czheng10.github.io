import Logo from './Logo'
import './Cover.css'

export default function Cover({ entered, onEnter }) {
  return (
    <div className={'cover-card' + (entered ? ' cover-card-revealed' : '')}>
      <div className="cover-content">
        <Logo className="cover-logo" />
        <span className="cover-eyebrow">Welcome to</span>
        <span className="cover-name font-display">STUDIO</span>
        <span className="cover-byline">by Cindy Zheng</span>
        <button
          type="button"
          className="cover-prompt"
          onClick={onEnter}
          disabled={entered}
          aria-hidden={entered}
          tabIndex={entered ? -1 : 0}
        >
          Read the Menu
        </button>
      </div>
    </div>
  )
}
