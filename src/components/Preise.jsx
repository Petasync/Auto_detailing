import { Check } from 'lucide-react'
import { MotionSection, Rise } from './motion'

const tiers = [
  {
    id: 'silver',
    name: 'Silver',
    tagline: 'Außen & Frisch',
    from: '149',
    duration: '3–5 Std.',
    items: [
      'Handwäsche & Trocknung',
      'Felgen & Reifen',
      'Scheiben innen/außen',
      'Kunststoffpflege außen',
      'Innenraum absaugen',
    ],
    cta: 'Jetzt anfragen',
    highlight: false,
  },
  {
    id: 'gold',
    name: 'Gold',
    tagline: 'Komplett-Aufbereitung',
    from: '299',
    duration: '6–9 Std.',
    items: [
      'Alles aus Silver',
      'Maschinenpolish Stufe 1',
      'Lederreinigung & -pflege',
      'Polster- & Teppichreinigung',
      'Kunststoffpflege innen',
      'Dachauskleidung',
    ],
    cta: 'Bestseller wählen',
    highlight: true,
  },
  {
    id: 'platin',
    name: 'Platin',
    tagline: 'Keramik & Vollschutz',
    from: '599',
    duration: '1–2 Tage',
    items: [
      'Alles aus Gold',
      'Multistage-Lackkorrektur',
      'Keramikversiegelung (3 J.)',
      'Scheibenversiegelung',
      'Leder deep-condition',
      'Motorraum-Detail',
    ],
    cta: 'Anfrage stellen',
    highlight: false,
  },
]

export default function Preise() {
  return (
    <MotionSection id="preise" className="bg-onyx-900 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <Rise className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" /> Pakete & Preise
            </Rise>
            <Rise as="h2" className="font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.01em] text-stone-50">
              Klar kalkuliert.<br />
              <span className="italic text-stone-400">Ohne Überraschungen.</span>
            </Rise>
          </div>
          <Rise className="max-w-sm text-stone-400">
            Alle Preise verstehen sich als Richtwerte — das finale Angebot erstellen wir nach Fahrzeugzustand und -größe.
          </Rise>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {tiers.map((t, i) => (
            <Rise
              key={t.id}
              className={
                'relative flex flex-col rounded-2xl p-8 md:p-10 ' +
                (t.highlight
                  ? 'border border-[var(--gold)]/50 bg-[var(--gold)]/[0.06] shadow-[0_0_80px_-20px_var(--gold)]'
                  : 'border border-white/5 bg-onyx-850')
              }
            >
              {t.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gold)] px-4 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-onyx-950">
                  Beliebt
                </div>
              )}

              <div className="mb-8">
                <div className="mb-1 text-xs uppercase tracking-[0.25em] text-stone-500">{t.tagline}</div>
                <div className="font-serif text-3xl text-stone-50">{t.name}</div>
              </div>

              <div className="mb-8 flex items-end gap-1">
                <span className="text-xs text-stone-500">ab</span>
                <span className="font-serif text-5xl leading-none text-stone-50">{t.from}</span>
                <span className="mb-1 text-sm text-stone-400"> €</span>
                <span className="mb-1 ml-2 text-xs text-stone-500">· {t.duration}</span>
              </div>

              <ul className="mb-10 flex-1 space-y-3">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#buchung"
                className={
                  'inline-flex w-full items-center justify-center rounded-full py-3.5 text-sm font-medium transition-all ' +
                  (t.highlight
                    ? 'bg-[var(--gold)] text-onyx-950 hover:bg-[var(--gold-hi)] hover:shadow-[0_0_40px_-10px_var(--gold)]'
                    : 'border border-white/10 text-stone-200 hover:border-[var(--gold)]/40 hover:text-[var(--gold)]')
                }
              >
                {t.cta}
              </a>
            </Rise>
          ))}
        </div>

        <Rise className="mt-8 text-center text-xs text-stone-500">
          Preise inkl. aller Materialien. Fahrzeuge über 5 m oder stark verschmutzte Fahrzeuge auf Anfrage.
        </Rise>
      </div>
    </MotionSection>
  )
}
