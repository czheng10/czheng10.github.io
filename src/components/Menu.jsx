import { Link } from 'react-router-dom'
import { menuData } from '../data/menuData.js'
import './Menu.css'

export default function Menu({ active }) {
  return (
    <div className={'menu-card' + (active ? ' menu-card-active' : '')}>
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
  )
}
