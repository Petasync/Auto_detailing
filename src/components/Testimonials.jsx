import { Star } from 'lucide-react'
import { MotionSection, Rise } from './motion'

const items = [
  {
    q: 'Mein 911er hat nach 15 Jahren wieder ausgesehen wie am ersten Tag. Das Studio ist ein anderes Level.',
    name: 'Lukas M.',
    role: 'Porsche 911',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
  },
  {
    q: 'Kompromisslos. Die Liebe zum Detail sieht man an jeder Naht, an jedem Spalt — beeindruckend.',
    name: 'Sabine K.',
    role: 'Range Rover Sport',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
  },
  {
    q: 'Termin binnen zwei Tagen, Abholung am Abend. Unkomplizierter geht\'s nicht und das Ergebnis spricht für sich.',
    name: 'David R.',
    role: 'BMW M4 Competition',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
  },
]

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" strokeWidth={1.5} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <MotionSection id="stimmen" className="bg-onyx-900 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <Rise className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" /> Kundenstimmen
            </Rise>
            <Rise as="h2" className="font-serif text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.02] tracking-[-0.01em] text-stone-50">
              Was unsere Kunden <span className="italic text-stone-400">sagen.</span>
            </Rise>
          </div>
          <Rise className="flex items-center gap-3 text-sm text-stone-400">
            <Stars />
            <span>4,9 / 5 · 127 Bewertungen</span>
          </Rise>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {items.map((t, i) => (
            <Rise
              key={i}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-onyx-850 p-8 ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/30 hover:shadow-[0_20px_60px_-20px_var(--gold)]"
            >
              <div>
                <div className="mb-5">
                  <Stars />
                </div>
                <p className="font-serif text-xl leading-snug text-stone-100">
                  <span className="text-[var(--gold)]">„</span>
                  {t.q}
                  <span className="text-[var(--gold)]">“</span>
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-white/10"
                />
                <div>
                  <div className="text-sm text-stone-50">{t.name}</div>
                  <div className="text-xs text-stone-400">{t.role}</div>
                </div>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
