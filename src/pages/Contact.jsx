import { contactLinks } from '../data/contactData.js'
import { Mail, LinkedIn, Instagram, GitHub } from '../components/icons/ContactIcons.jsx'
import './Contact.css'

const iconMap = { mail: Mail, linkedin: LinkedIn, instagram: Instagram, github: GitHub }

// Contact re-imagined as the café's "order slip" rather than a plain
// list of links — the same walking-into-a-café metaphor the rest of
// the site uses, extended to the one page that was still just plain
// text. The torn/zigzag bottom edge (see .order-slip::after in
// Contact.css) and dashed dividers are the receipt cues; the icon
// buttons underneath get a hover/press "bounce" so picking a pickup
// method feels tactile instead of like clicking a plain pill link.
export default function Contact() {
  return (
    <section className="contact">
      <div className="order-slip">
        <div className="order-slip-header">
          <span className="order-slip-eyebrow">Order Slip</span>
          <h1 className="font-display">Say Hello</h1>
          <p className="order-slip-sub">One order, a few ways to pick it up.</p>
        </div>

        <div className="order-slip-divider" aria-hidden="true" />

        <ul className="order-slip-list">
          {contactLinks.map((link) => {
            const external = link.href.startsWith('http')
            return (
              <li key={link.id} className="order-slip-row">
                <span className="order-slip-row-label">{link.note}</span>
                <a
                  href={link.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="order-slip-row-value"
                >
                  {link.value}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="order-slip-divider" aria-hidden="true" />

        <div className="order-slip-icons">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.icon]
            const external = link.href.startsWith('http')
            return (
              <a
                key={link.id}
                href={link.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="order-slip-icon-btn"
                aria-label={link.label}
                title={link.label}
              >
                <Icon className="order-slip-icon" />
              </a>
            )
          })}
        </div>

        <div className="order-slip-footer">
          <span>Thanks for your order</span>
          <span>Est. 2026</span>
        </div>
      </div>
    </section>
  )
}
