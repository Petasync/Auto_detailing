import { MotionSection, Rise } from './motion'

const steps = [
  ['01', 'Terminbuchung', 'Online oder telefonisch — unkompliziert und transparent.'],
  ['02', 'Fahrzeug-Check', 'Gemeinsame Begutachtung. Du entscheidest, wir beraten.'],
  ['03', 'Aufbereitung', 'Handarbeit im Studio, unter kontrollierten Bedingungen.'],
  ['04', 'Abholung strahlend', 'Schlüssel zurück, Lack wie neu — Wow-Effekt inklusive.'],
]

export default function Process() {
  return (
    <MotionSection id="prozess" className="relative bg-onyx-950 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <Rise className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            <span className="h-px w-10 bg-[var(--gold)]" /> Prozess
          </Rise>
          <Rise as="h2" className="max-w-3xl font-serif text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.02] tracking-[-0.01em] text-stone-50">
            Vier Schritte bis zum <span className="italic text-[var(--gold)]">Wow-Effekt</span>.
          </Rise>
        </div>

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-[54px] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />

          {steps.map(([n, title, sub]) => (
            <Rise key={n} className="relative">
              <div className="relative flex h-[108px] items-start">
                <span className="font-serif text-6xl leading-none text-[var(--gold)]">{n}</span>
                <span className="absolute right-0 top-4 hidden h-3 w-3 rounded-full border border-[var(--gold)]/40 bg-onyx-950 md:block" />
              </div>
              <h4 className="mt-2 font-serif text-2xl text-stone-50">{title}</h4>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-400">{sub}</p>
            </Rise>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
