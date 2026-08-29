import { useState } from 'react'
import Cover from '../components/Cover.jsx'
import Menu from '../components/Menu.jsx'
import './Home.css'

// The landing experience: a full-screen cover you tap through, which
// reveals the café "menu" — each item is a page of the site.
export default function Home() {
  const [entered, setEntered] = useState(false)

  return (
    <div className="landing">
      <Cover entered={entered} onEnter={() => setEntered(true)} />
      <Menu visible={entered} />
    </div>
  )
}
