import { useEffect, useRef, useState } from 'react'
import cafeInterior from '../assets/cafe-interior.png'

// Full-bleed café-interior line-art illustration behind the landing
// cards, recolored to the site's ink tone. Two ambience treatments,
// layered since they animate different properties and don't fight
// each other: a slow opacity "breathe" (see .landing-art-bg in
// Home.css) that keeps it alive at rest, plus a mouse-driven parallax
// drift for a sense of depth when someone's cursor is over the page.
export default function LandingArt({ className = '' }) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const frame = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      if (frame.current) return
      frame.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2 // -1..1
        const y = (e.clientY / window.innerHeight - 0.5) * 2
        setParallax({ x, y })
        frame.current = null
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <div className={'landing-art-wrap' + (className ? ' ' + className : '')}>
      <img
        src={cafeInterior}
        alt=""
        className="landing-art-bg"
        style={{ transform: `translate(${parallax.x * -10}px, ${parallax.y * -8}px) scale(1.05)` }}
        aria-hidden="true"
      />
    </div>
  )
}
