import { Link } from 'react-router-dom'
import { menuData } from '../data/menuData.js'
import './Menu.css'

export default function Menu({ visible }) {
  return (
    <div className={'menu-screen' + (visible ? ' menu-screen-visible' : '')}>
      <div className="menu-stack">
        <div className="menu-card-back" aria-hidden="true" />
        <div className="menu-card">
          <div className="menu-card-header">
            <span className="menu-brand font-display">Cindy Zheng</span>
            <span className="menu-label">Menu</span>
          </div>

          <ul className="menu-list">
            {menuData.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="menu-item">
                  <span className="menu-item-label font-display">{item.label}</span>
                  <span className="menu-item-description">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="menu-card-footer">
            <span>Portfolio</span>
            <span>Est. 2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}
