// Line-art icons for the Contact "order slip" quick-links. Stroke-only,
// currentColor, sharing the same base spec as CoffeeIcons.jsx (viewBox
// 0 0 24 24, strokeWidth 1.6, round caps/joins) so they sit consistently
// inside the order-slip's circular icon buttons the same way the
// coffee icons sit inside the timeline's blob markers. Brand marks
// (LinkedIn/Instagram/GitHub) are simplified silhouettes rather than
// literal logo reproductions, drawn in the site's own line-art style
// instead of pulled from an icon library — see docs/DESIGN.md's
// iconography rules.
const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// A stroked "dot" — a zero-length line segment with a wide round cap,
// the standard trick for a filled point in a stroke-only icon set.
const dot = (cx, cy) => <path d={`M${cx} ${cy}v.01`} strokeWidth={3} />

export function Mail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

export function LinkedIn(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 10.5V17" />
      {dot(8, 7.3)}
      <path d="M12 17v-4.3" />
      <path d="M12 13.2a1.6 1.6 0 0 1 3.2 0V17" />
    </svg>
  )
}

export function Instagram(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      {dot(16.3, 7.7)}
    </svg>
  )
}

export function GitHub(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="10.5" r="5" />
      <path d="M9 6c.9-1 1.7-1.4 3-1.4s2.1.4 3 1.4" />
      {dot(10, 10.5)}
      {dot(14, 10.5)}
      <path d="M8.7 13.8c-1 1.4-2.4 1.5-3.2 1.1" />
      <path d="M15.3 13.8c1 1.4 2.4 1.5 3.2 1.1" />
      <path d="M12 15v4" />
    </svg>
  )
}
