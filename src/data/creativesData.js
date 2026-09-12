// Real ceramics photos for the Creatives page. `width`/`height` are the
// processed image's actual pixel dimensions — used by the layout
// concepts to size each card with the right aspect ratio instead of
// cropping/stretching. `back` is placeholder copy until Cindy supplies
// real per-piece info (materials, glaze, story); every layout concept
// flips to show whatever's here.
import piece1 from '../assets/creatives/piece-1.jpg'
import piece2 from '../assets/creatives/piece-2.jpg'
import piece3 from '../assets/creatives/piece-3.jpg'
import piece4 from '../assets/creatives/piece-4.jpg'
import piece5 from '../assets/creatives/piece-5.jpg'
import piece6 from '../assets/creatives/piece-6.jpg'
import piece7 from '../assets/creatives/piece-7.jpg'
import piece8 from '../assets/creatives/piece-8.jpg'

const PLACEHOLDER_BACK = 'More about this piece is coming soon.'

export const creativesData = [
  { id: 1, image: piece1, width: 1400, height: 1050, alt: 'Handmade ceramic piece by Cindy Zheng', title: 'Piece 1', back: PLACEHOLDER_BACK },
  { id: 2, image: piece2, width: 1400, height: 1050, alt: 'Handmade ceramic piece by Cindy Zheng', title: 'Piece 2', back: PLACEHOLDER_BACK },
  { id: 3, image: piece3, width: 1050, height: 1400, alt: 'Handmade ceramic piece by Cindy Zheng', title: 'Piece 3', back: PLACEHOLDER_BACK },
  { id: 4, image: piece4, width: 1050, height: 1400, alt: 'Handmade ceramic piece by Cindy Zheng', title: 'Piece 4', back: PLACEHOLDER_BACK },
  { id: 5, image: piece5, width: 1050, height: 1400, alt: 'Handmade ceramic piece by Cindy Zheng', title: 'Piece 5', back: PLACEHOLDER_BACK },
  { id: 6, image: piece6, width: 1050, height: 1400, alt: 'Handmade ceramic piece by Cindy Zheng', title: 'Piece 6', back: PLACEHOLDER_BACK },
  { id: 7, image: piece7, width: 1050, height: 1400, alt: 'Handmade ceramic piece by Cindy Zheng', title: 'Piece 7', back: PLACEHOLDER_BACK },
  { id: 8, image: piece8, width: 824, height: 1400, alt: 'Handmade ceramic piece by Cindy Zheng', title: 'Piece 8', back: PLACEHOLDER_BACK },
]
