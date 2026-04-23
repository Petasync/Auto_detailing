import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { MotionSection, Rise } from './motion'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75',
    alt: 'Fahrzeugaufbereitung — Lackpolitur',
    label: 'Außen',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=75',
    alt: 'Innenraumaufbereitung — Leder & Armaturen',
    label: 'Innen',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=75',
    alt: 'Sportwagen nach Vollaufbereitung',
    label: 'Ergebnis',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=75',
    alt: 'BMW nach Lackversiegelung',
    label: 'Außen',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=75',
    alt: 'Fahrzeug nach Komplettaufbereitung',
    label: 'Detail',
    span: 'md:col-span-2',
  },
]

export default function Galerie() {
  const [lightbox, setLightbox] = useState(null)

  const open = (i) => setLightbox(i)
  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox((i) => (i - 1 + photos.length) % photos.length), [])
  const next = useCallback(() => setLightbox((i) => (i + 1) % photos.length), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, close, prev, next])

  return (
    <MotionSection id="galerie" className="bg-onyx-950 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <Rise className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" /> Galerie
            </Rise>
            <Rise as="h2" className="font-serif text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.02] tracking-[-0.01em] text-stone-50">
              Arbeit, die <span className="italic text-[var(--gold)]">spricht</span>.
            </Rise>
          </div>
          <Rise className="max-w-sm text-stone-400">
            Jedes Fahrzeug erzählt eine Geschichte — unsere Aufgabe ist es, sie strahlend zu machen.
          </Rise>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5">
          {photos.map((p, i) => (
            <Rise
              key={i}
              className={`group relative cursor-zoom-in overflow-hidden rounded-2xl ring-1 ring-white/5 ${p.span}`}
              onClick={() => open(i)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-onyx-900 md:h-full md:min-h-[220px] md:aspect-auto">
                <img
                  src={p.thumb}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/70 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
                <div className="absolute inset-x-0 bottom-0 flex items-end p-6 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="rounded-full border border-[var(--gold)]/40 bg-onyx-950/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--gold)] backdrop-blur">
                    {p.label}
                  </span>
                </div>
              </div>
            </Rise>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-onyx-950/97 backdrop-blur-2xl"
            onClick={close}
          >
            <button
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-stone-300 transition-all hover:border-white/30 hover:text-white"
              onClick={close}
              aria-label="Schließen"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 text-stone-300 transition-all hover:border-white/30 hover:text-white md:left-8"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 text-stone-300 transition-all hover:border-white/30 hover:text-white md:right-8"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="max-h-[85vh] max-w-[86vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.25em] text-stone-500">
              {lightbox + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionSection>
  )
}
