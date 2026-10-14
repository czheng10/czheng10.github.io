// Real ceramics photos for the Creatives page. `width`/`height` are the
// processed image's actual pixel dimensions — used by the layout
// concepts to size each card with the right aspect ratio instead of
// cropping/stretching. `back` is real per-piece copy in Cindy's own
// voice (lightly cleaned up for grammar/typos only) rather than
// rewritten into ad-copy fragments — every layout concept flips the
// shared FlipCard component (see FlipCard.jsx) to show whatever's
// here, so adding a new piece is just adding an entry here with the
// same shape.
import piece1 from '../assets/creatives/piece-1.jpg'
import piece2 from '../assets/creatives/piece-2.jpg'
import piece3 from '../assets/creatives/piece-3.jpg'
import piece4 from '../assets/creatives/piece-4.jpg'
import piece5 from '../assets/creatives/piece-5.jpg'
import piece6 from '../assets/creatives/piece-6.jpg'
import piece7 from '../assets/creatives/piece-7.jpg'
import piece8 from '../assets/creatives/piece-8.jpg'

export const creativesData = [
  {
    id: 4,
    image: piece4,
    width: 1050,
    height: 1400,
    alt: 'Scalloped plate with blue, purple, and green underglaze, hand-painted by Cindy Zheng',
    title: '"Ode to Monet" Plate',
    back: 'Blues, purples, pinks, and greens, underglaze painted roughly to look like a Monet, impressionist painting.',
  },
  {
    id: 2,
    image: piece2,
    width: 1400,
    height: 1050,
    alt: 'Cool-tone white chip and dip plate by Cindy Zheng',
    title: 'Chip and Dip Plate',
    back: 'A cool-tone white glaze that almost looks icy. Would love to do this again, but bigger for soup dumplings!',
  },
  {
    id: 3,
    image: piece3,
    width: 1050,
    height: 1400,
    alt: 'Two-toned pink and green matching plate set by Cindy Zheng',
    title: 'Two-Toned Plates Set',
    back: 'My first matching set, loved that the color combo came out looking like strawberry and pistachio ice cream! Perfect for some side dishes.',
  },
  {
    id: 1,
    image: piece1,
    width: 1400,
    height: 1050,
    alt: 'Brown glazed star jar with a star-shaped lid handle by Cindy Zheng',
    title: 'Star Jar',
    back: 'One of my first attempts at closed forms and hand building. Little Prince-inspired planet/star look.',
  },
  {
    id: 5,
    image: piece5,
    width: 1050,
    height: 1400,
    alt: 'Marbled purple and blue plate by Cindy Zheng',
    title: 'Marbled Plate',
    back: 'Tried a marbling technique by swirling two glazes together, looks like underwater lava swirling with bioluminescence!',
  },
  {
    id: 6,
    image: piece6,
    width: 1050,
    height: 1400,
    alt: 'Elevated pedestal cat bowl with a hand-built cat at the foot by Cindy Zheng',
    title: 'Elevated Cat Bowl',
    back: 'Threw this as two separate pieces (pedestal and slow feeding bowl), hand built the cat at the foot.',
  },
  {
    id: 7,
    image: piece7,
    width: 1050,
    height: 1400,
    alt: 'Rice bowl with a black calligraphy-style brushstroke by Cindy Zheng',
    title: 'Brushstroke Rice Bowl',
    back: 'Inspired by Chinese calligraphy, love the stark black and white.',
  },
  {
    id: 8,
    image: piece8,
    width: 824,
    height: 1400,
    alt: 'Pistachio-green rice bowl with a prominent foot by Cindy Zheng',
    title: 'Pistachio Rice Bowl',
    back: 'A rice bowl with a prominent foot.',
  },
]
