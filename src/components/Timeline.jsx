import { useEffect, useRef, useState } from 'react'
import { coffeeIcons, FrenchPress } from './icons/CoffeeIcons.jsx'
import './Timeline.css'

// One entry in the zigzag timeline. Observes its own visibility and
// fades/slides in once scrolled into view (an organic reveal instead
// of everything appearing at once). The marker is a hand-drawn-looking
// blob (via an asymmetric border-radius) holding an icon — education
// entries get a French press in the alt (cream) blob shape/color,
// work roles cycle through the coffee-culture icons in the default
// (green) blob.
//
// Education cards intentionally use a different, lighter layout than
// work cards rather than just a different color: a "Degree"/
// "Certificate" pill (so a Codepath certificate never reads as if it
// were a school) and a single plain status line ("Started"/
// "Graduated") instead of a bullet list, since a resume-style bullet
// list for a one-word fact looked silly.
function TimelineItem({ entry, index, Icon }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const isEducation = entry.type === 'education'

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <li
      ref={ref}
      className={'timeline-item' + (visible ? ' timeline-item-visible' : '')}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className={'timeline-marker' + (isEducation ? ' timeline-marker-alt' : '')}>
        <Icon className="timeline-marker-icon" />
      </div>
      <div className={'timeline-card' + (isEducation ? ' timeline-card-edu' : '')}>
        <div className="timeline-meta">
          <span className="timeline-date">{entry.date}</span>
          <span className={'timeline-type' + (isEducation ? ' timeline-type-education' : '')}>
            {isEducation ? entry.credential : 'Work'}
          </span>
        </div>
        <h3 className="timeline-title">{entry.header}</h3>
        <div className="timeline-org">{entry.subheader}</div>
        {isEducation ? (
          <p className="timeline-status">{entry.status}</p>
        ) : (
          <ul className="timeline-bullets">
            {entry.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default function Timeline({ entries }) {
  // Coffee icons cycle only across work entries, so the beans-to-cup
  // sequence isn't thrown off by education entries interleaved between
  // them; education entries always get the French press instead.
  let workCounter = 0

  return (
    <ul className="timeline">
      {entries.map((entry, index) => {
        const Icon =
          entry.type === 'education' ? FrenchPress : coffeeIcons[workCounter++ % coffeeIcons.length]
        return <TimelineItem key={entry.header + entry.date} entry={entry} index={index} Icon={Icon} />
      })}
    </ul>
  )
}
