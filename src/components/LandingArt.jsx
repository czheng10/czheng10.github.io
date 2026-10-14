import { useEffect, useRef, useState } from 'react'
import cafeInterior from '../assets/cafe-interior.png'
import './LandingArt.css'

// Full-bleed café-interior line-art illustration used as ambient
// background on several pages, recolored to the site's ink tone. A
// slow opacity "breathe" (see .landing-art-bg in LandingArt.css) keeps
// it alive at rest; the landing page additionally layers a
// mouse-driven parallax drift on top for a sense of depth, but that's
// opt-in (`parallax` prop) since the busier content pages just want
// the quieter fade.
//
// `focus` (CSS object-position) + `zoom` (extra scale on top of the
// base object-fit: cover) let each page frame a different detail of
// the same illustration -- e.g. the espresso bar behind the landing
// cards, the hanging shelf of plants/pitcher behind Creatives, the
// café table + menu board behind Contact -- rather than every page
// repeating the identical crop. `peakOpacity` overrides the breathe
// animation's top opacity (see amb-breathe in LandingArt.css) for
// pages where the landing page's full intensity reads as too loud
// behind real content.
export default function LandingArt({
  className = '',
  focus = '50% 50%',
  zoom = 1.05,
  parallax: parallaxEnabled = false,
  peakOpacity,
}) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const frame = useRef(null)

  useEffect(() => {
    if (!parallaxEnabled) return
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
  }, [parallaxEnabled])

  return (
    <div className={'landing-art-wrap' + (className ? ' ' + className : '')}>
      <img
        src={cafeInterior}
        alt=""
        className="landing-art-bg"
        style={{
          objectPosition: focus,
          transform: `translate(${parallax.x * -10}px, ${parallax.y * -8}px) scale(${zoom})`,
          ...(peakOpacity != null ? { '--art-peak-opacity': peakOpacity } : {}),
        }}
        aria-hidden="true"
      />
    </div>
  )
}

