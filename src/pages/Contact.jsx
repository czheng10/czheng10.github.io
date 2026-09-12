import './Contact.css'

export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <p>
        Best way to reach me:{' '}
        <a href="mailto:cindyzheng95@gmail.com">cindyzheng95@gmail.com</a>
      </p>
      <p>
        Best way to reach me professionally?{' '}
        <a
          href="https://www.linkedin.com/in/cindynzheng/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
      <p>
        Want to see what else I'm up to?{' '}
        <a
          href="https://www.instagram.com/cindynzheng/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        .
      </p>
      <div className="contact-links">
        <a href="https://github.com/czheng10" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  )
}
