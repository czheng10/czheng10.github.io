import cafeInterior from '../assets/cafe-interior.png'

// Full-bleed café-interior line-art illustration behind the landing
// cards, recolored to the site's ink tone.
export default function LandingArt({ className = '' }) {
  return (
    <img
      src={cafeInterior}
      alt=""
      className={'landing-art' + (className ? ' ' + className : '')}
      aria-hidden="true"
    />
  )
}
