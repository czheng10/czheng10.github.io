// Small line-art icons standing in for steps of making coffee, used on
// the Career timeline blobs in place of plain numbers. Deliberately
// simple (stroke-only, currentColor) so they read clearly at a small
// size and pick up whatever color the blob around them is.
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

// Whole beans
export function Beans(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 9c-2.5 1-4 3.2-3.3 5.8C5.4 17.4 8 18.6 10 17.8c2-.8 3-3 2.3-5.6C11.6 9.6 10 8.2 8 9z" />
      <path d="M7.3 10.2c1.4 1.6 1.7 4 .6 6" />
      <path d="M14 12c-1.8 1-2.8 2.8-2.2 5 .6 2.2 2.6 3.2 4.2 2.5 1.6-.7 2.4-2.6 1.8-4.8-.6-2.2-2-3.4-3.8-2.7z" />
      <path d="M13.3 13c1.1 1.4 1.4 3.3.6 4.8" />
    </svg>
  )
}

// Grinder — hopper on a cylindrical body
export function Grinder(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3h8l-2 5H10z" />
      <rect x="7.5" y="8" width="9" height="9" rx="1.5" />
      <path d="M12 17v3" />
      <path d="M9 20h6" />
      <path d="M16.5 11.5h2" />
    </svg>
  )
}

// Portafilter — basket, spouts, and handle
export function Portafilter(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4h6v3H9z" />
      <path d="M8 7h8l-1 2H9z" />
      <path d="M9.5 9c-.5 3 .5 6 2.5 6s3-3 2.5-6" />
      <path d="M12 15v4" />
    </svg>
  )
}

// Steaming milk pitcher
export function Pitcher(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 8h8l-1 10a2 2 0 0 1-2 1.8H10A2 2 0 0 1 8 18z" />
      <path d="M15 9c1.5.3 2.2 1 2.2 2S16.5 12.5 15 12.8" />
      <path d="M7.5 9.5L5 8" />
      <path d="M9.5 4.5c.6.8.6 1.4 0 2.2" />
      <path d="M13 4.5c.6.8.6 1.4 0 2.2" />
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

export const coffeeIcons = [Beans, Grinder, Portafilter, Pitcher, Cup]

// Graduation cap — used for education/certificate entries on the
// timeline, to set them visually apart from the coffee-making icons
// used for work roles.
export function GraduationCap(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5L2 9.5l10 4.5 10-4.5L12 5z" />
      <path d="M6 11.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.5" />
      <path d="M20.5 9.5v5.5" />
    </svg>
  )
}
