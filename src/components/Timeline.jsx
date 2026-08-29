import { useEffect, useRef, useState } from 'react'
import { matchaIcons } from './icons/MatchaIcons.jsx'
import './Timeline.css'

// One entry in the zigzag timeline. Observes its own visibility and
// fades/slides in once scrolled into view (an organic reveal instead
// of everything appearing at once). The marker is a hand-drawn-looking
// blob (via an asymmetric border-radius) holding an icon for one step
// of making matcha, cycling through the 5 icons in order.
function TimelineItem({ entry, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const Icon = matchaIcons[index % matchaIcons.length]
  const altBlob = index % 2 === 1

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
      <div className={'timeline-marker' + (altBlob ? ' timeline-marker-alt' : '')}>
        <Icon className="timeline-marker-icon" />
      </div>
      <div className="timeline-card">
        <div className="timeline-date">{entry.date}</div>
        <h3 className="timeline-title">{entry.title}</h3>
        <div className="timeline-org">{entry.org}</div>
        <p className="timeline-description">{entry.description}</p>
      </div>
    </li>
  )
}

export default function Timeline({ entries }) {
  return (
    <ul className="timeline">
      {entries.map((entry, index) => (
        <TimelineItem key={entry.title + entry.date} entry={entry} index={index} />
      ))}
    </ul>
  )
}
