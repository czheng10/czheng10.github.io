import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import './Nav.css'

const links = [
  { to: '/', label: 'Menu', end: true },
  { to: '/professional', label: 'Professional' },
  { to: '/creatives', label: 'Creatives' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand font-display" end>
          <Logo className="nav-logo" />
          <span>Cindy Zheng</span>
        </NavLink>
        <nav className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' nav-link-active' : '')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
