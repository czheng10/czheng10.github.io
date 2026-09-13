import { useState } from 'react'
import { creativesData } from '../data/creativesData.js'
import matchaLatte from '../assets/matcha-latte-icon.png'
import ConceptPinterest from '../components/creatives/ConceptPinterest.jsx'
import ConceptShelf from '../components/creatives/ConceptShelf.jsx'
import ConceptPhotobook from '../components/creatives/ConceptPhotobook.jsx'
import ConceptClothesline from '../components/creatives/ConceptClothesline.jsx'
import ConceptCorkboard from '../components/creatives/ConceptCorkboard.jsx'
import './Creatives.css'

// TEMPORARY: a side-by-side comparison switcher for the Creatives page
// layout concepts (same pattern used for the landing-page ambience
// comparison — see docs/INSPIRATION.md). Cindy narrowed the original 4
// down to Pinterest tiles vs. Clothesline, then asked for a more
// café-themed cousin of Clothesline — Corkboard swaps the twine +
// clothespin for a corkboard + pushpin (a prop you'd actually find on a
// coffee shop wall), keeping the same tilted, pinned-up charm. Once she
// decides, delete this switcher and keep only the winning concept.
const CONCEPTS = [
  { id: 'pinterest', label: '1 · Pinterest tiles', Component: ConceptPinterest },
  { id: 'shelf', label: '2 · Pottery shelf', Component: ConceptShelf },
  { id: 'photobook', label: '3 · Photo book', Component: ConceptPhotobook },
  { id: 'clothesline', label: '4 · Clothesline', Component: ConceptClothesline },
  { id: 'corkboard', label: '5 · Corkboard (café take on 4)', Component: ConceptCorkboard },
]

export default function Creatives() {
  const [activeId, setActiveId] = useState(CONCEPTS[0].id)
  const active = CONCEPTS.find((concept) => concept.id === activeId)
  const Active = active.Component

  return (
    <section>
      <div className="hero">
        <div className="hero-text">
          <h1>Creatives</h1>
          <p className="creatives-intro">
            A look at some of my art outside of engineering work. Click any
            piece to flip it over.
          </p>
        </div>
        <img
          src={matchaLatte}
          alt=""
          className="hero-drink-icon"
          aria-hidden="true"
        />
      </div>

      <div
        className="concept-switcher"
        role="tablist"
        aria-label="Gallery layout concept"
      >
        {CONCEPTS.map((concept) => (
          <button
            key={concept.id}
            type="button"
            role="tab"
            aria-selected={activeId === concept.id}
            className={`concept-switcher-btn${activeId === concept.id ? ' is-active' : ''}`}
            onClick={() => setActiveId(concept.id)}
          >
            {concept.label}
          </button>
        ))}
      </div>

      <Active pieces={creativesData} />

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
