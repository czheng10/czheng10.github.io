import { creativesData } from '../data/creativesData.js'
import './Creatives.css'

export default function Creatives() {
  return (
    <section>
      <h1>Creatives</h1>
      <p className="creatives-intro">
        A look at some of my art outside of engineering work.
      </p>
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
