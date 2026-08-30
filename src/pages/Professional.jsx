import Timeline from '../components/Timeline.jsx'
import { timelineData } from '../data/timelineData.js'
import vanillaLatte from '../assets/vanilla-latte-icon.png'
import './Professional.css'

export default function Professional() {
  return (
    <section>
      <div className="hero">
        <div className="hero-text">
          <h1>The Career</h1>
          <p className="hero-subtitle">
            Placeholder intro line — replace with a real one-liner about
            what you do and care about.
          </p>
        </div>
        <img
          src={vanillaLatte}
          alt=""
          className="hero-drink-icon"
          aria-hidden="true"
        />
      </div>

      <h2 className="section-heading">Career timeline</h2>
      <Timeline entries={timelineData} />
    </section>
  )
}
