import { useState } from 'react'
import { creativesData } from '../data/creativesData.js'
import matchaLatte from '../assets/matcha-latte-icon.png'
import Corkboard from '../components/creatives/Corkboard.jsx'
import './Creatives.css'

// Three candidate styles for making the taped title/matcha cards feel
// less static -- temporary comparison UI, same pattern used earlier to
// pick the Corkboard layout itself. Remove the switcher (and the two
// styles Cindy doesn't pick) once she's chosen a favorite.
const TITLE_STYLES = [
  { id: 'tilt', label: 'A · Tilt + lift' },
  { id: 'doodle', label: 'B · Hand-drawn doodle' },
  { id: 'breathe', label: 'C · Gentle sway' },
]

// Small hand-drawn-feel sparkle, drawn to the same line-art spec as the
// timeline's coffee icons (stroke-only, currentColor, rounded caps) so
// it fits the site's existing icon language. Only used by style B.
function DoodleSparkle(props) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3c.4 3 1.6 5.8 4 7.5-2.4 1.7-3.6 4.5-4 7.5-.4-3-1.6-5.8-4-7.5 2.4-1.7 3.6-4.5 4-7.5z" />
      <path d="M19 4.5c.2 1.1.7 2 1.6 2.7-.9.7-1.4 1.6-1.6 2.7-.2-1.1-.7-2-1.6-2.7.9-.7 1.4-1.6 1.6-2.7z" />
    </svg>
  )
}

export default function Creatives() {
  const [titleStyle, setTitleStyle] = useState('tilt')

  return (
    <section>
      {/* Temporary: lets Cindy compare the 3 title-card styles live and
          pick one before this switcher gets removed. */}
      <div className="title-style-switcher">
        <span className="title-style-switcher-label">Title card style:</span>
        {TITLE_STYLES.map((style) => (
          <button
            key={style.id}
            type="button"
            className={`title-style-btn${titleStyle === style.id ? ' is-active' : ''}`}
            aria-pressed={titleStyle === style.id}
            onClick={() => setTitleStyle(style.id)}
          >
            {style.label}
          </button>
        ))}
      </div>

      {/* The whole page is one continuous corkboard: the title + intro
          and the matcha icon are "taped" cards (page chrome), the art
          pieces below are "pinned" (see Corkboard.jsx) -- tape vs. pin
          is the visual cue that separates the two kinds of content. */}
      <div className="creatives-board">
        <div className="creatives-board-header">
          <div className={`corkboard-card corkboard-title-card corkboard-card--${titleStyle}`}>
            <span className="corkboard-tape corkboard-tape-left" aria-hidden="true" />
            <span className="corkboard-tape corkboard-tape-right" aria-hidden="true" />
            {titleStyle === 'doodle' && (
              <DoodleSparkle className="corkboard-doodle" aria-hidden="true" />
            )}
            <h1>Creatives</h1>
            <p className="creatives-intro">A look at some of my art endeavors.</p>
            <p className="creatives-instructions">Click any piece to flip it over.</p>
          </div>

          <div className={`corkboard-card corkboard-matcha-card corkboard-card--${titleStyle}`}>
            <span className="corkboard-tape corkboard-tape-left" aria-hidden="true" />
            <span className="corkboard-tape corkboard-tape-right" aria-hidden="true" />
            <img
              src={matchaLatte}
              alt=""
              className="corkboard-matcha-icon"
              aria-hidden="true"
            />
          </div>
        </div>

        <Corkboard pieces={creativesData} />
      </div>

      <p className="creatives-footer-cta">
        Want to see more?{' '}
        <a
          href="https://www.instagram.com/cindysinthestudio/"
          target="_blank"
          rel="noreferrer"
        >
          Visit @cindysinthestudio
        </a>
      </p>
    </section>
  )
}
