import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UspBar from './components/UspBar'
import Services from './components/Services'
import Preise from './components/Preise'
import BeforeAfter from './components/BeforeAfter'
import Galerie from './components/Galerie'
import Process from './components/Process'
import UeberUns from './components/UeberUns'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import Buchung from './components/Buchung'
import Footer from './components/Footer'
import TweakPanel, { applyTweaks, TWEAK_DEFAULTS } from './components/TweakPanel'

export default function App() {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS)
  const [tweakOpen, setTweakOpen] = useState(false)

  useEffect(() => {
    applyTweaks(TWEAK_DEFAULTS)
    const handler = (e) => {
      if (!e.data || typeof e.data !== 'object') return
      if (e.data.type === '__activate_edit_mode') setTweakOpen(true)
      if (e.data.type === '__deactivate_edit_mode') setTweakOpen(false)
    }
    window.addEventListener('message', handler)
    window.parent?.postMessage({ type: '__edit_mode_available' }, '*')
    return () => window.removeEventListener('message', handler)
  }, [])

  return (
    <div className="min-h-screen bg-onyx-950 text-stone-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <UspBar />
        <Services />
        <Preise />
        <BeforeAfter />
        <Galerie />
        <Process />
        <UeberUns />
        <Testimonials />
        <CtaBanner />
        <Buchung />
      </main>
      <Footer />

      <AnimatePresence>
        {tweakOpen && (
          <TweakPanel tweaks={tweaks} setTweaks={setTweaks} onClose={() => setTweakOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}
