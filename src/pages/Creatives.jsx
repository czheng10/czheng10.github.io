import { creativesData } from '../data/creativesData.js'
import matchaLatte from '../assets/matcha-latte-icon.png'
import Corkboard from '../components/creatives/Corkboard.jsx'
import LandingArt from '../components/LandingArt.jsx'
import './Creatives.css'

export default function Creatives() {
  return (
    <section className="creatives-page">
      {/* Zoomed into the open shelf of cups, bowls and a pitcher --
          the same café line art as the landing page, framed on its
          ceramics so it echoes the pottery below rather than repeating
          the landing page's full-room crop. */}
      <LandingArt className="creatives-page-art" focus="74% 26%" zoom={2.4} peakOpacity={0.28} />

      {/* The whole page is one continuous corkboard: the title + intro
          and the matcha icon are "taped" cards (page chrome), the art
          pieces below are "pinned" (see Corkboard.jsx) -- tape vs. pin
          is the visual cue that separates the two kinds of content. */}
      <div className="creatives-board">
        <div className="creatives-board-header">
          <div className="corkboard-card corkboard-title-card">
            <span className="corkboard-tape corkboard-tape-left" aria-hidden="true" />
            <span className="corkboard-tape corkboard-tape-right" aria-hidden="true" />
            <h1>Creatives</h1>
            <p className="creatives-intro">Made with care.</p>
            <p className="creatives-instructions">Click a piece to see it up close, click again to flip it over.</p>
          </div>

          <div className="corkboard-card corkboard-matcha-card">
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
