import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)

const navLinks = [
  ['Home', '#home'],
  ['Leistungen', '#leistungen'],
  ['Preise', '#preise'],
  ['Galerie', '#galerie'],
  ['Über uns', '#ueber-uns'],
  ['Buchung', '#buchung'],
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-onyx-950">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">

          {/* Brand + Kontakt */}
          <div>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="font-serif text-2xl text-stone-50">Petasync</span>
              <span className="text-[var(--gold)] text-xs font-light tracking-[0.2em]">DETAILING</span>
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-stone-400">
              Premium Autoaufbereitung in München. Nach Terminvereinbarung — für Fahrzeuge, die es verdienen.
            </p>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" strokeWidth={1.5} />
                Arnulfstraße 12, 80335 München
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" strokeWidth={1.5} />
                <a href="tel:+498912345678" className="transition-colors hover:text-[var(--gold)]">+49 (0) 89 123 456 78</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" strokeWidth={1.5} />
                <a href="mailto:hallo@petasync-detailing.de" className="transition-colors hover:text-[var(--gold)]">hallo@petasync-detailing.de</a>
              </li>
            </ul>
          </div>

          {/* Navigation + Öffnungszeiten */}
          <div>
            <div className="mb-6 text-xs uppercase tracking-[0.25em] text-stone-500">Navigation</div>
            <ul className="grid grid-cols-2 gap-y-3 text-sm text-stone-300">
              {navLinks.map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="transition-colors hover:text-[var(--gold)]">{l}</a>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-xs uppercase tracking-[0.25em] text-stone-500">Öffnungszeiten</div>
            <div className="mt-4 space-y-1.5 text-sm text-stone-300">
              <div className="flex justify-between"><span>Mo — Fr</span><span>08:00 — 18:00</span></div>
              <div className="flex justify-between"><span>Samstag</span><span>09:00 — 14:00</span></div>
              <div className="flex justify-between text-stone-500"><span>Sonntag</span><span>Geschlossen</span></div>
            </div>
          </div>

          {/* Social + Newsletter */}
          <div>
            <div className="mb-6 text-xs uppercase tracking-[0.25em] text-stone-500">Folgen</div>
            <div className="mb-8 flex gap-3">
              {[InstagramIcon, FacebookIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-stone-300 transition-all hover:border-[var(--gold)]/60 hover:text-[var(--gold)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <div className="rounded-2xl border border-[var(--gold)]/20 bg-[var(--gold)]/[0.03] p-6">
              <div className="mb-3 font-serif text-xl text-stone-50">Newsletter</div>
              <p className="mb-4 text-xs leading-relaxed text-stone-400">
                Einblicke ins Studio, neue Projekte, Angebote — selten, nie Spam.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center overflow-hidden rounded-full border border-white/10 bg-onyx-900/60">
                <input
                  type="email"
                  placeholder="deine@email.de"
                  className="flex-1 bg-transparent px-5 py-2.5 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="mr-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gold)] text-onyx-950 transition-colors hover:bg-[var(--gold-hi)]"
                  aria-label="Abschicken"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-stone-500 md:flex-row md:items-center md:px-10">
          <div>© {new Date().getFullYear()} Petasync Detailing. Alle Rechte vorbehalten.</div>
          <div className="flex gap-6">
            <a href="/impressum.html" className="hover:text-stone-300">Impressum</a>
            <a href="/datenschutz.html" className="hover:text-stone-300">Datenschutz</a>
            <a href="/agb.html" className="hover:text-stone-300">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
