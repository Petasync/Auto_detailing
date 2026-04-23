import { CheckCircle2 } from 'lucide-react'
import { MotionSection, Rise } from './motion'

const values = [
  'Handarbeit ohne Ausnahme — keine Automatik-Wäsche',
  'pH-neutrale, materialschonende Produkte für Lack & Leder',
  'Jedes Fahrzeug bekommt ungeteilte, individuelle Aufmerksamkeit',
  'Transparente Kommunikation — Festpreise, keine versteckten Kosten',
]

const stats = [
  { n: '8+', label: 'Jahre Erfahrung' },
  { n: '350+', label: 'Aufbereitungen' },
  { n: '4,9', label: 'Kundenbewertung' },
  { n: '48h', label: 'Termingarantie' },
]

export default function UeberUns() {
  return (
    <MotionSection id="ueber-uns" className="bg-onyx-900 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">

        {/* Image side */}
        <Rise className="relative order-2 md:order-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-onyx-850">
            <img
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1000&q=85"
              alt="Petasync Detailing Studio"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/60 via-transparent to-transparent" />
          </div>

          {/* Floating stats card */}
          <div className="absolute -bottom-6 -right-4 md:-right-10 rounded-2xl border border-white/10 bg-onyx-950/95 p-6 shadow-2xl backdrop-blur-lg">
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {stats.map(({ n, label }) => (
                <div key={label}>
                  <div className="font-serif text-3xl leading-none text-[var(--gold)]">{n}</div>
                  <div className="mt-1 text-xs text-stone-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Rise>

        {/* Text side */}
        <div className="order-1 md:order-2">
          <Rise className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            <span className="h-px w-10 bg-[var(--gold)]" /> Über uns
          </Rise>

          <Rise as="h2" className="font-serif text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.02] tracking-[-0.01em] text-stone-50">
            Leidenschaft ist kein<br />
            <span className="italic text-[var(--gold)]">Marketingwort</span>.
          </Rise>

          <Rise className="mt-6 text-stone-400 leading-relaxed">
            Petasync Detailing entstand, weil wir selbst das Studio nicht finden konnten,
            das uns wirklich überzeugt hat. Also haben wir es gebaut. Jedes Fahrzeug,
            das unser Studio verlässt, ist ein persönliches Statement.
          </Rise>

          <Rise className="mt-4 text-stone-400 leading-relaxed">
            Wir arbeiten ausschließlich nach Termin — nicht weil wir elitär sind, sondern
            weil jedes Auto die Zeit verdient, die es braucht. Kein Fließband, keine
            Kompromisse.
          </Rise>

          <Rise className="mt-10 space-y-4">
            {values.map((v) => (
              <div key={v} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" strokeWidth={1.5} />
                <span className="text-sm text-stone-300">{v}</span>
              </div>
            ))}
          </Rise>
        </div>
      </div>
    </MotionSection>
  )
}
