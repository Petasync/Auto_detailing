import { useState, useRef, useCallback } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { MotionSection, Rise } from './motion'

export default function BeforeAfter() {
  const [pos, setPos] = useState(48)
  const wrapRef = useRef(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(2, Math.min(98, p)))
  }, [])

  const onPointerDown = (e) => {
    dragging.current = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = (e) => {
    dragging.current = false
    e.currentTarget.releasePointerCapture?.(e.pointerId)
  }

  return (
    <MotionSection id="vorher-nachher" className="bg-onyx-900 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-4">
          <Rise className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            <span className="h-px w-10 bg-[var(--gold)]" /> Vorher · Nachher
          </Rise>
          <Rise as="h2" className="font-serif text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.02] tracking-[-0.01em] text-stone-50">
            Der Unterschied, den man <span className="italic text-[var(--gold)]">sieht</span>.
          </Rise>
          <Rise className="mt-6 text-stone-400">
            Jedes Fahrzeug verdient das gleiche Maß an Aufmerksamkeit. Ziehe den Regler
            und sieh, was zwischen Standard-Wäsche und echter Aufbereitung liegt.
          </Rise>
          <Rise className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-serif text-3xl text-[var(--gold)]">12h+</div>
              <div className="text-stone-400">Bearbeitung pro Fahrzeug</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[var(--gold)]">350+</div>
              <div className="text-stone-400">Zufriedene Kunden</div>
            </div>
          </Rise>
        </div>

        <Rise className="md:col-span-8">
          <div
            ref={wrapRef}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl ring-1 ring-white/10 touch-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {/* AFTER (base layer) */}
            <img
              src="/images/ba1-wheel-before.jpg"
              alt="Nachher"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />

            {/* BEFORE (clipped layer) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src="/images/ba1-wheel-before.jpg"
                alt="Vorher"
                className="h-full w-full object-cover"
                draggable={false}
                style={{ filter: 'saturate(0.35) brightness(0.55) contrast(0.9)' }}
              />
              <div
                className="absolute inset-0 mix-blend-multiply opacity-70"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 30%, rgba(110,90,60,0.55), transparent 45%), radial-gradient(circle at 70% 60%, rgba(80,70,50,0.5), transparent 50%), radial-gradient(circle at 40% 80%, rgba(90,80,60,0.4), transparent 40%)'
                }}
              />
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/15 bg-onyx-950/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-stone-200 backdrop-blur">
              Vorher
            </div>
            <div className="pointer-events-none absolute right-5 bottom-5 rounded-full border border-[var(--gold)]/40 bg-onyx-950/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--gold)] backdrop-blur">
              Nachher
            </div>

            {/* Divider line */}
            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-[var(--gold)]"
              style={{ left: `${pos}%`, boxShadow: '0 0 20px 1px var(--gold)' }}
            />

            {/* Handle */}
            <div
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${pos}%` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)] text-onyx-950 shadow-[0_0_40px_-4px_var(--gold)] ring-4 ring-onyx-950/60 transition-transform hover:scale-110">
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </div>
            </div>
          </div>
        </Rise>
      </div>
    </MotionSection>
  )
}
