import { useState } from 'react'
import cindyPhoto from '../assets/cindy-cafe-photo.jpg'
import houseBlendBag from '../assets/house-blend-bag.png'
import './About.css'

export default function About() {
  const [photoFlipped, setPhotoFlipped] = useState(false)

  return (
    <section className="about">
      <div className="about-layout">
        {/* Photo gets its own big column now, instead of floating
            beside the greeting text — reuses the Creatives page's
            cream "polaroid" card frame (see .flip-card-face /
            .corkboard-photo in FlipCard.css/Corkboard.css) so the
            photo reads as part of the same corkboard/postcard world as
            the art pieces. Click/tap still flips it to the caption. */}
        <div className="about-photo-col">
          <button
            type="button"
            className={'about-photo-flip' + (photoFlipped ? ' is-flipped' : '')}
            onClick={() => setPhotoFlipped((f) => !f)}
            aria-pressed={photoFlipped}
            aria-label={
              photoFlipped
                ? 'Caption — click to flip back to the photo'
                : 'Cindy sitting at a café table with an iced latte — click to flip for a caption'
            }
          >
            <span className="about-photo-flip-inner">
              <span className="about-photo-flip-face about-photo-flip-front">
                <img
                  src={cindyPhoto}
                  alt="Cindy sitting at a café table with an iced latte"
                  className="about-photo"
                />
              </span>
              <span className="about-photo-flip-face about-photo-flip-back">
                <span className="about-photo-back-text">
                  Me at a coffee shop in Yunnan, China's capital of coffee
                  bean production!
                </span>
              </span>
            </span>
          </button>
          <p className="about-greeting">Hey hey, this is Cindy~</p>
        </div>

        <div className="about-text-col">
          <h2 className="about-subheader">
            My house blend is made up of equal parts creativity and code.
          </h2>

          <p>
            By (week)day, I'm a software engineer with an interest in AI
            and data. In the last year, that's meant developing Answer
            Engine Optimization (AEO) solutions and building production AI
            chatbots, as well as building data pipelines and agent
            evaluations that make those systems trustworthy rather than
            just impressive in a demo. Prior to going full-time, I studied
            Computer Science and Engineering at MIT, where the lessons
            that stuck had less to do with syntax and more to do with how
            to think.
          </p>

          {/* The house-blend bag — a coffee-shop illustration — floats
              beside the paragraph that's actually about matcha/cafes/
              coffee daydreams. */}
          <img
            src={houseBlendBag}
            alt=""
            className="about-bag-icon"
            aria-hidden="true"
          />

          <p>
            Off the clock, you'll usually find me either whisking a
            matcha, throwing on the pottery wheel, or daydreaming with my
            friends about our future bakery/cafe/flower shop. A creative
            side quest, a good conversation, and a cute fit are what fill
            my cup, and ultimately, I'm a believer that a little whimsy
            (and a dash of caffeine) can take you a long way~
          </p>
          <p className="about-signoff">
            Thanks for dropping by Studio, hope you enjoyed your stay and
            can't wait to see you again :)
          </p>
        </div>
      </div>
    </section>
  )
}
