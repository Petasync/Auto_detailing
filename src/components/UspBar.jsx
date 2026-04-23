import { Sparkles, ShieldCheck, Clock } from 'lucide-react'
import { MotionSection, Rise } from './motion'

const items = [
  { icon: Sparkles, title: 'Studio-Qualität', sub: 'Reinraum-Standard, kontrolliertes Licht, null Kompromisse.' },
  { icon: ShieldCheck, title: 'Schonende Produkte', sub: 'pH-neutrale Chemie und weiche Fasern für Lack & Material.' },
  { icon: Clock, title: 'Termin binnen 48h', sub: 'Schnelle Verfügbarkeit – ohne Abstriche bei der Gründlichkeit.' },
]

export default function UspBar() {
  return (
    <MotionSection id="usp" className="relative border-y border-white/5 bg-onyx-900">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 gap-px overflow-hidden md:grid-cols-3">
        {items.map(({ icon: Icon, title, sub }, i) => (
          <Rise
            key={title}
            className="relative flex items-start gap-5 bg-onyx-900 px-6 py-10 md:px-10 md:py-14
                       before:absolute before:right-0 before:top-6 before:bottom-6 before:w-px before:bg-white/5 last:before:hidden"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/5 text-[var(--gold)]">
              <Icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div>
              <div className="mb-1 font-serif text-2xl text-stone-50">{title}</div>
              <div className="max-w-xs text-sm leading-relaxed text-stone-400">{sub}</div>
            </div>
            <span className="absolute left-6 top-6 font-serif text-xs tracking-[0.25em] text-stone-600 md:left-10">
              0{i + 1}
            </span>
          </Rise>
        ))}
      </div>
    </MotionSection>
  )
}
