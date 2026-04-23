import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import BtnPrimary from './BtnPrimary'

const links = [
  ['Home', '#home'],
  ['Leistungen', '#leistungen'],
  ['Preise', '#preise'],
  ['Galerie', '#galerie'],
  ['Über uns', '#ueber-uns'],
  ['Buchung', '#buchung'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ' +
        (scrolled
          ? 'bg-onyx-900/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent')
      }
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="flex items-baseline gap-2 text-stone-100">
          <span className="font-serif text-2xl tracking-tight">Petasync</span>
          <span className="text-[var(--gold)] text-sm font-light tracking-[0.2em]">DETAILING</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="group relative text-sm text-stone-300 transition-colors hover:text-stone-50"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BtnPrimary href="#buchung" className="!py-2.5 !px-6">
            Termin buchen{' '}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
          </BtnPrimary>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-stone-100 lg:hidden"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          {open
            ? <X className="h-5 w-5" strokeWidth={1.5} />
            : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-white/5 bg-onyx-950/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {links.map(([l, h]) => (
                <a
                  key={l}
                  href={h}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-stone-200 hover:bg-white/5"
                >
                  {l}
                </a>
              ))}
              <BtnPrimary href="#buchung" className="mt-3 justify-center" onClick={() => setOpen(false)}>
                Termin buchen <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </BtnPrimary>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
