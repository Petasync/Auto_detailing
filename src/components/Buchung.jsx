import { useState } from 'react'
import { ArrowRight, Car, Calendar, MessageSquare, User, Mail, Phone } from 'lucide-react'
import { MotionSection, Rise } from './motion'

const services = [
  { id: 'aussen', label: 'Außenreinigung & Politur' },
  { id: 'innen', label: 'Innenraumaufbereitung' },
  { id: 'komplett', label: 'Komplett-Aufbereitung' },
  { id: 'kratzer', label: 'Kratzerentfernung' },
  { id: 'keramik', label: 'Keramikversiegelung' },
  { id: 'beratung', label: 'Sonstiges / Beratung' },
]

function Field({ icon: Icon, label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-stone-400">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
        {label}{required && ' *'}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-onyx-900/60 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-500 transition-colors focus:border-[var(--gold)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30"
      />
    </div>
  )
}

export default function Buchung() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', car: '', service: '', date: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <MotionSection id="buchung" className="bg-onyx-950 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <Rise className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            <span className="h-px w-10 bg-[var(--gold)]" /> Termin buchen
          </Rise>
          <Rise as="h2" className="font-serif text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.02] tracking-[-0.01em] text-stone-50">
            Dein nächster <span className="italic text-[var(--gold)]">Wow-Effekt</span>.
          </Rise>
          <Rise className="mt-4 max-w-lg text-stone-400">
            Füll das Formular aus — wir melden uns binnen 24 Stunden mit einem Terminvorschlag zurück.
          </Rise>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_400px] lg:gap-20">

          {/* Form */}
          <Rise>
            {sent ? (
              <div className="flex flex-col items-start gap-5 rounded-2xl border border-[var(--gold)]/25 bg-[var(--gold)]/[0.04] p-10">
                <div className="font-serif text-4xl text-stone-50">Danke! ✦</div>
                <p className="max-w-sm text-stone-400">
                  Deine Anfrage ist eingegangen. Wir melden uns spätestens in 24 Stunden persönlich bei dir.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm text-[var(--gold)] underline-offset-4 hover:underline"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="space-y-5"
                name="buchung"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="buchung" />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field icon={User} label="Name" name="name" value={form.name} onChange={set('name')} placeholder="Max Mustermann" required />
                  <Field icon={Mail} label="E-Mail" name="email" type="email" value={form.email} onChange={set('email')} placeholder="max@email.de" required />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field icon={Phone} label="Telefon" name="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+49 (0) 89 ..." />
                  <Field icon={Car} label="Fahrzeug" name="car" value={form.car} onChange={set('car')} placeholder="BMW M3 2022" required />
                </div>

                {/* Service selector */}
                <div>
                  <div className="mb-2 text-xs uppercase tracking-[0.2em] text-stone-400">Leistung *</div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, service: s.id }))}
                        className={
                          'rounded-xl border px-3 py-3 text-left text-xs transition-all duration-200 ' +
                          (form.service === s.id
                            ? 'border-[var(--gold)] bg-[var(--gold)]/10 text-stone-50'
                            : 'border-white/10 text-stone-400 hover:border-white/20 hover:text-stone-200')
                        }
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Field icon={Calendar} label="Wunschdatum" name="date" type="date" value={form.date} onChange={set('date')} />

                <div>
                  <label className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-stone-400">
                    <MessageSquare className="h-3.5 w-3.5" strokeWidth={1.5} />
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={set('message')}
                    rows={4}
                    placeholder="Besonderheiten, Fragen, Wünsche..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-onyx-900/60 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-500 transition-colors focus:border-[var(--gold)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 text-sm font-medium text-onyx-950 transition-all hover:bg-[var(--gold-hi)] hover:shadow-[0_0_50px_-10px_var(--gold)]"
                >
                  Anfrage absenden
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </button>
              </form>
            )}
          </Rise>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <Rise className="rounded-2xl border border-white/5 bg-onyx-900/60 p-8">
              <div className="mb-6 font-serif text-2xl text-stone-50">Wie es abläuft</div>
              <ol className="space-y-6">
                {[
                  ['Anfrage stellen', 'Formular ausfüllen — dauert 2 Minuten.'],
                  ['Rückmeldung', 'Wir melden uns binnen 24h mit Termin & Preis.'],
                  ['Fahrzeug abgeben', 'Bequem bei uns — Abholung auf Anfrage möglich.'],
                  ['Ergebnis genießen', 'Schlüssel zurück, Fahrzeug wie am ersten Tag.'],
                ].map(([t, s], i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-serif text-2xl leading-none text-[var(--gold)]">0{i + 1}</span>
                    <div>
                      <div className="text-sm font-medium text-stone-100">{t}</div>
                      <div className="mt-0.5 text-xs leading-relaxed text-stone-400">{s}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </Rise>

            <Rise className="rounded-2xl border border-white/5 bg-onyx-900/60 p-8">
              <div className="mb-5 font-serif text-2xl text-stone-50">Öffnungszeiten</div>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between text-stone-300"><span>Mo — Fr</span><span>08:00 — 18:00</span></div>
                <div className="flex justify-between text-stone-300"><span>Samstag</span><span>09:00 — 14:00</span></div>
                <div className="flex justify-between text-stone-500"><span>Sonntag</span><span>Geschlossen</span></div>
              </div>
            </Rise>

            <Rise className="rounded-2xl border border-[var(--gold)]/20 bg-[var(--gold)]/[0.03] p-8">
              <div className="mb-2 font-serif text-lg text-stone-50">Lieber direkt?</div>
              <div className="mb-4 text-xs text-stone-400">Ruf uns einfach an — kein Warteschleife, kein Callcenter.</div>
              <a
                href="tel:+498912345678"
                className="inline-flex items-center gap-2 text-[var(--gold)] transition-colors hover:text-[var(--gold-hi)]"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                <span className="text-sm">+49 (0) 89 123 456 78</span>
              </a>
            </Rise>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
