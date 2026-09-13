import { creativesData } from '../data/creativesData.js'
import matchaLatte from '../assets/matcha-latte-icon.png'
import Corkboard from '../components/creatives/Corkboard.jsx'
import './Creatives.css'

export default function Creatives() {
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

      <Corkboard pieces={creativesData} />

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
