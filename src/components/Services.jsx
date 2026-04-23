import { ArrowUpRight } from 'lucide-react'
import { MotionSection, Rise } from './motion'

function ServiceCard({ videoSrc, poster, eyebrow, title, bullets, idx }) {
  return (
    <Rise className="group relative cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/5">
        <div className="relative aspect-[4/5] overflow-hidden bg-onyx-900">
          <video
            src={videoSrc}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/30 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[var(--gold)]/0 transition-all duration-500 group-hover:ring-2 group-hover:ring-[var(--gold)]/70 group-hover:shadow-[0_0_60px_-10px_var(--gold)]" />

          <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              <span>0{idx}</span>
              <span className="h-px w-8 bg-[var(--gold)]/70" />
              <span>{eyebrow}</span>
            </div>
            <h3 className="font-serif text-3xl leading-tight text-stone-50 md:text-4xl">
              {title}
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-300">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
              {b}
            </li>
          ))}
        </ul>
        <a
          href="#leistungen"
          className="group/link inline-flex items-center gap-2 text-sm text-[var(--gold)] transition-colors hover:text-[var(--gold-hi)]"
        >
          Mehr erfahren
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" strokeWidth={1.5} />
        </a>
      </div>
    </Rise>
  )
}

export default function Services() {
  return (
    <MotionSection id="leistungen" className="bg-onyx-950 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <Rise className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" /> Leistungen
            </Rise>
            <Rise as="h2" className="font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.01em] text-stone-50">
              Zwei Welten.<br />
              <span className="italic text-stone-400">Ein Standard.</span>
            </Rise>
          </div>
          <Rise className="max-w-md text-stone-400">
            Ob Lackfinish unter Studio-Licht oder Innenraum wie aus der Auslieferung — jedes
            Detail wird von Hand bearbeitet.
          </Rise>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <ServiceCard
            idx="1"
            eyebrow="Außen"
            videoSrc="/videos/reel-exterior.mp4"
            poster="/images/hero-poster.jpg"
            title="Außenreinigung & Politur"
            bullets={['Handwäsche', 'Lackpolitur', 'Felgen & Reifen']}
          />
          <ServiceCard
            idx="2"
            eyebrow="Innen"
            videoSrc="/videos/reel-interior.mp4"
            poster="/images/studio-wide.jpg"
            title="Innenraumaufbereitung"
            bullets={['Polster & Leder', 'Armaturen', 'Geruchsneutralisation']}
          />
        </div>
      </div>
    </MotionSection>
  )
}
