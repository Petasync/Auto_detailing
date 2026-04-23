import { ArrowRight, Phone } from 'lucide-react'
import { MotionSection, Rise } from './motion'
import BtnPrimary from './BtnPrimary'

export default function CtaBanner() {
  return (
    <MotionSection className="relative overflow-hidden">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-950/70 via-onyx-950/80 to-onyx-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0b_85%)]" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-28 text-center md:px-10 md:py-40">
          <Rise className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            <span className="h-px w-10 bg-[var(--gold)]" />
            Jetzt anfragen
            <span className="h-px w-10 bg-[var(--gold)]" />
          </Rise>
          <Rise as="h2" className="mx-auto max-w-4xl font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.015em] text-stone-50">
            Bereit für den <span className="italic text-[var(--gold)]">Wow-Effekt?</span>
          </Rise>
          <Rise className="mx-auto mt-6 max-w-xl text-stone-300 md:text-lg">
            Reserviere deinen Slot — wir melden uns binnen 24 Stunden zurück.
          </Rise>
          <Rise className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <BtnPrimary href="#buchung">
              Jetzt Termin sichern
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
            </BtnPrimary>
            <a
              href="tel:+498912345678"
              className="inline-flex items-center gap-2 text-sm text-stone-300 transition-colors hover:text-stone-50"
            >
              <Phone className="h-4 w-4 text-[var(--gold)]" strokeWidth={1.5} />
              oder direkt anrufen
            </a>
          </Rise>
        </div>
      </div>
    </MotionSection>
  )
}
