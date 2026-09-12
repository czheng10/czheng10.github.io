import cindyPhoto from '../assets/cindy-cafe-photo.jpg'
import houseBlendBag from '../assets/house-blend-bag.png'
import './About.css'

export default function About() {
  return (
    <section className="about">
      <div className="about-body">
        {/* Floated so it sits as a side accent to the opening lines
            instead of splitting the greeting/subheader from the rest
            of the bio in a separate row. */}
        <img
          src={houseBlendBag}
          alt=""
          className="about-bag-icon"
          aria-hidden="true"
        />

        <p className="about-greeting">Hey hey, this is Cindy~</p>
        <h2 className="about-subheader">
          My house blend is made up of equal parts creativity and code.
        </h2>

        <img
          src={cindyPhoto}
          alt="Cindy sitting at a café table with an iced latte"
          className="about-photo"
        />
        <p>
          By (week)day, I am a software engineer at LinkedIn, harnessing AI
          to assist marketers in doing their best work. In the last year,
          that's meant developing Answer Engine Optimization (AEO)
          solutions and building production marketing chatbots across
          multiple LinkedIn business lines. Prior to becoming a software
          engineer full-time, I studied Computer Science and Engineering at
          MIT, where the lessons that stuck had less to do with syntax and
          more to do with how to think.
        </p>
        <p>
          Off the clock, you'll usually find me either whisking a matcha,
          throwing on the pottery wheel, or daydreaming with my friends
          about our future bakery/cafe/flower shop. A creative side quest,
          a good conversation, and a cute fit are what fill my cup, and
          ultimately, I'm a believer that a little whimsy (and a dash of
          caffeine) can take you a long way~
        </p>
        <p className="about-signoff">
          Thanks for dropping by Studio, hope you enjoyed your stay and
          can't wait to see you again :)
        </p>
      </div>
    </section>
  )
}
