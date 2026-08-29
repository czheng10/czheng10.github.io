import './Contact.css'

export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <p>
        Best way to reach me: <a href="mailto:you@example.com">you@example.com</a>
      </p>
      <div className="contact-links">
        <a href="https://github.com/czheng10" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
