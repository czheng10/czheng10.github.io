// Small line-art icons standing in for coffee-culture staples, used on
// the Career timeline blobs in place of plain numbers. Deliberately
// simple (stroke-only, currentColor) so they read clearly at a small
// size and pick up whatever color the blob around them is. Picked for
// being immediately recognizable as "coffee" at a glance — an earlier
// process-themed set (grinder/portafilter/steaming pitcher) read too
// ambiguous at this size.
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

// Coffee bean
export function Bean(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c3 0 5.2 3.8 5.2 8.5s-2.2 8.5-5.2 8.5S6.8 16.7 6.8 12 9 3.5 12 3.5z" />
      <path d="M12 4c-1.3 2.4-1.3 5.5 0 8s1.3 5.6 0 8" />
    </svg>
  )
}

// Grinder — hopper, body, and a grinding dial
export function Grinder(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3h8l-1.5 4.5h-5z" />
      <rect x="7" y="7.5" width="10" height="10" rx="2" />
      <circle cx="12" cy="12.5" r="2" />
      <path d="M12 17.5v3" />
      <path d="M9 20.5h6" />
    </svg>
  )
}

// Stovetop moka pot
export function MokaPot(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 19h10l-1-4H8z" />
      <path d="M8.5 15V9.5" />
      <path d="M15.5 15V9.5" />
      <path d="M7.5 9.5h9l-1.2-4h-6.6z" />
      <path d="M16 11c1.3.2 2 .8 2 1.6s-.7 1.4-2 1.6" />
    </svg>
  )
}

// Classic mug, with a little steam
export function Mug(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 9h10v6a5 5 0 0 1-10 0z" />
      <path d="M15 10.5h2a2 2 0 0 1 0 4h-2" />
      <path d="M8 4.5c.6.8.6 1.4 0 2.2" />
      <path d="M11.5 4.5c.6.8.6 1.4 0 2.2" />
    </svg>
  )
}

// To-go cup, with lid and sleeve
export function ToGoCup(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 8h10l-1 11a2 2 0 0 1-2 1.8h-4A2 2 0 0 1 8 19z" />
      <path d="M6.5 8h11l.5-2h-12z" />
      <path d="M11 6l.6-2h.8l.6 2" />
      <rect x="7.6" y="12" width="8.8" height="2.6" rx="0.3" />
    </svg>
  )
}

export const coffeeIcons = [Bean, Grinder, MokaPot, Mug, ToGoCup]

// Open book, with a little steam rising off it (same steam-curl style
// as the Mug icon) — used for education/certificate entries on the
// timeline. A graduation cap read as too "academic" against the
// coffee icons used for work roles; a book that's also "brewing"
// keeps the same illustration language while still reading clearly
// as education.
export function Book(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6c2-1 4.5-1 6 0v12c-1.5-1-4-1-6 0z" />
      <path d="M16 6c-2-1-4.5-1-6 0v12c1.5-1 4-1 6 0z" />
      <path d="M9 4.5c.6.8.6 1.4 0 2.2" />
      <path d="M12.5 4.5c.6.8.6 1.4 0 2.2" />
    </svg>
  )
}
