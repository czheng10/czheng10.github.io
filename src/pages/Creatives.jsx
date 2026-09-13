import { useState } from 'react'
import { creativesData } from '../data/creativesData.js'
import matchaLatte from '../assets/matcha-latte-icon.png'
import Corkboard from '../components/creatives/Corkboard.jsx'
import './Creatives.css'

// Candidate styles for making the taped title/matcha cards feel less
// static -- temporary comparison UI, same pattern used earlier to pick
// the Corkboard layout itself. Remove the switcher (and whichever style
// Cindy doesn't pick) once she's chosen a favorite.
//
// Two earlier rounds were tried and dropped:
// - Tilt + lift on hover: the hover-lift reads as "this is clickable,"
//   misleading since these cards don't do anything when clicked.
// - Hand-drawn doodle / gentle sway: read as too cutesy/gimmicky, more
//   "look at me" than "part of the board."
//
// This round goes for realism/depth instead of whimsy or motion --
// both styles are static.
const TITLE_STYLES = [
  { id: 'curl', label: 'A · Paper curl' },
  { id: 'layered', label: 'B · Layered depth' },
]

export default function Creatives() {
  const [titleStyle, setTitleStyle] = useState('curl')

  return (
    <section>
      {/* Temporary: lets Cindy compare the title-card styles live and
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
