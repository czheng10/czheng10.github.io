import { creativesData } from '../data/creativesData.js'
import matchaLatte from '../assets/matcha-latte-icon.png'
import './Creatives.css'

export default function Creatives() {
  return (
    <section>
      <div className="hero">
        <div className="hero-text">
          <h1>Creatives</h1>
          <p className="creatives-intro">
            A look at some of my art outside of engineering work.
          </p>
        </div>
        <img
          src={matchaLatte}
          alt=""
          className="hero-drink-icon"
          aria-hidden="true"
        />
      </div>
      <div className="creatives-grid">
        {creativesData.map((piece) => (
          <figure key={piece.id} className="creatives-card">
            <div className="creatives-placeholder" aria-hidden="true" />
            <figcaption>{piece.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
