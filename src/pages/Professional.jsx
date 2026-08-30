import Timeline from '../components/Timeline.jsx'
import { timelineData } from '../data/timelineData.js'
import './Professional.css'

export default function Professional() {
  return (
    <section>
      <div className="hero">
        <h1>The Career</h1>
        <p className="hero-subtitle">
          Placeholder intro line — replace with a real one-liner about
          what you do and care about.
        </p>
      </div>

      <h2 className="section-heading">Career timeline</h2>
      <Timeline entries={timelineData} />
    </section>
  )
}
