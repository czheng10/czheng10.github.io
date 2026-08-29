import logoMark from '../assets/logo-mark.png'
import './Logo.css'

export default function Logo({ className = '' }) {
  return (
    <img
      src={logoMark}
      alt="Cindy Zheng monogram"
      className={'logo-mark' + (className ? ' ' + className : '')}
    />
  )
}
