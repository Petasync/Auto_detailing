import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Rise, stagger } from './motion'
import BtnPrimary from './BtnPrimary'
import BtnOutline from './BtnOutline'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      {/* CSS fallback background — visible when no video loads */}
      <div className="absolute inset-0 bg-gradient-to-br from-onyx-950 via-[#0f0e0a] to-onyx-950" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 60% 40%, oklch(0.45 0.08 82 / 0.25), transparent)',
        }}
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-onyx-950/80 via-onyx-950/20 to-transparent" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 40%, #000 100%)' }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-28 md:px-10 md:pb-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-[52rem]"
        >
          <Rise key="eyebrow" className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Premium Auto&shy;auf&shy;bereitung
            </span>
          </Rise>

          <Rise
            key="title"
            as="h1"
            className="font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.015em] text-stone-50"
          >
            Dein Auto.<br />
            <span className="italic text-[var(--gold)]">Kompromisslos</span> aufbereitet.
          </Rise>

          <Rise key="sub" className="mt-7 max-w-xl text-lg leading-relaxed text-stone-300 md:text-xl">
            Premium Innen- und Außenreinigung in&nbsp;
            <span className="text-stone-100">München</span>. Handarbeit, Leidenschaft,
            sichtbares Ergebnis.
          </Rise>

          <Rise key="cta" className="mt-10 flex flex-wrap items-center gap-4">
            <BtnPrimary href="#buchung">
              Termin buchen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
            </BtnPrimary>
            <BtnOutline href="#leistungen">
              Leistungen ansehen
            </BtnOutline>
          </Rise>
        </motion.div>
      </div>

      <motion.a
        href="#usp"
        initial={{ opacity: 0 }}
        animate={{ opacity: reduce ? 1 : [0, 1, 1, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-stone-400"
        aria-label="Scroll"
      >
        <ChevronDown className="h-6 w-6" strokeWidth={1.5} />
      </motion.a>
    </section>
  )
}
