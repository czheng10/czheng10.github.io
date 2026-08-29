// Small line-art icons standing in for steps of making matcha, used on
// the timeline blobs in place of plain numbers. Deliberately simple
// (stroke-only, currentColor) so they read clearly at a small size and
// pick up whatever color the blob around them is.
const base = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// Chasen — bamboo whisk
export function Whisk(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v6" />
      <path d="M12 9c-3 1-4.5 4-4.5 8" />
      <path d="M12 9c-1.6 1.4-2.4 4-2.2 8" />
      <path d="M12 9c-0.5 1.8-0.5 5 0 8" />
      <path d="M12 9c1.6 1.4 2.4 4 2.2 8" />
      <path d="M12 9c3 1 4.5 4 4.5 8" />
    </svg>
  )
}

// Chawan — tea bowl
export function Bowl(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11h16" />
      <path d="M4.5 11c0 4.5 3.2 8 7.5 8s7.5-3.5 7.5-8" />
      <ellipse cx="12" cy="11" rx="8" ry="2" />
    </svg>
  )
}

// Kettle
export function Teapot(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h11a3 3 0 0 1 0 0" />
      <path d="M4 12c0 4 2.5 6 6 6s6-2 6-6" />
      <path d="M4 12c-1.5-.5-2.5.2-2.5 1.4S2.5 15 4 14.6" />
      <path d="M9 8c0-1.7.9-3 2-3s1.4.8 2 .8 1-.8 1-.8" />
      <path d="M4 12h10" />
    </svg>
  )
}

// Chashaku — bamboo scoop
export function Scoop(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 5l11 11" />
      <path d="M15.5 14.5a2.6 2.6 0 1 1 2 2.5" />
    </svg>
  )
}

// Finished cup, with a little steam
export function Cup(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 10h11v3a5.5 5.5 0 0 1-11 0z" />
      <path d="M16 11.5h1.5a2 2 0 0 1 0 4H16" />
      <path d="M9 4.5c.6.8.6 1.4 0 2.2" />
      <path d="M12.5 4.5c.6.8.6 1.4 0 2.2" />
    </svg>
  )
}

export const matchaIcons = [Whisk, Bowl, Teapot, Scoop, Cup]
