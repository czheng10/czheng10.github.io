import { useState } from 'react'
import Cover from '../components/Cover.jsx'
import Menu from '../components/Menu.jsx'
import LandingArt from '../components/LandingArt.jsx'
import './Home.css'

// The landing experience: a cover card sits on top of the menu card.
// Tapping it drops the cover behind (z-index swap + a swooshing
// slide/rotate) while the menu simultaneously grows/settles forward —
// the two movements together sell the "cards swapping depth" illusion
// much better than either one animating alone.
export default function Home() {
  const [entered, setEntered] = useState(false)

  return (
    <div className="landing">
      <LandingArt />
      <div className="landing-stack">
        <Menu active={entered} />
        <Cover entered={entered} onEnter={() => setEntered(true)} />
      </div>
    </div>
  )
}
