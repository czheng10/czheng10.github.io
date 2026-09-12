import cindyPhoto from '../assets/cindy-cafe-photo.jpg'
import houseBlendBag from '../assets/house-blend-bag.png'
import './About.css'

export default function About() {
  return (
    <section className="about">
      <div className="hero">
        <div className="hero-text">
          <p className="about-greeting">Hey hey, this is Cindy~</p>
          <h2 className="about-subheader">
            My house blend is made up of equal parts creativity and code.
          </h2>
        </div>
        <img
          src={houseBlendBag}
          alt=""
          className="hero-drink-icon"
          aria-hidden="true"
        />
      </div>

      <div className="about-body">
        <img
          src={cindyPhoto}
          alt="Cindy sitting at a café table with an iced latte"
          className="about-photo"
        />
        <p>
          I am a software engineer building AI agents (and occasionally
          battling them too). At LinkedIn, I work on Marketing Technology
          Engineering, where I've shipped an AI-driven search-optimization
          algorithm and built production AI agents across multiple product
          lines. I have a B.S. in Computer Science and Engineering from MIT
          already behind me.
        </p>
        <p>
          Off the clock, you'll usually find me with a matcha in hand, clay
          under my nails from the pottery wheel, and a running daydream
          about the café I'll open someday. A creative activity, a good
          conversation, and a cute fit are what fill my cup.
        </p>
        <p className="about-signoff">
          Thanks again for dropping by Studio, hope you enjoyed your stay :)
        </p>
      </div>
    </section>
  )
}
