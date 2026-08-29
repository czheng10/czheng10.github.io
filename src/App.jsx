import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import Professional from './pages/Professional.jsx'
import About from './pages/About.jsx'
import Creatives from './pages/Creatives.jsx'
import Contact from './pages/Contact.jsx'

// Using HashRouter (URLs look like /#/about) instead of BrowserRouter.
// GitHub Pages serves static files with no server-side routing, so a
// direct visit or refresh on /about would 404 with BrowserRouter unless
// we add a workaround. HashRouter sidesteps that entirely.
function AppShell() {
  const location = useLocation()
  // The landing page ("/") is its own full-screen cover + menu
  // experience — no persistent nav bar there, so it feels like walking
  // up to a café rather than browsing a normal website.
  const isLanding = location.pathname === '/'

  return (
    <div className="site">
      {!isLanding && <Nav />}
      <main className={isLanding ? 'site-main site-main-landing' : 'site-main'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/about" element={<About />} />
          <Route path="/creatives" element={<Creatives />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  )
}
