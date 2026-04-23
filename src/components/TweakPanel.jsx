import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const SERIFS = ['Instrument Serif', 'Playfair Display', 'Cormorant Garamond', 'DM Serif Display']
const SECTION_COLORS = ['#111113', '#14120d', '#0f1418', '#151015']

export function applyTweaks(t) {
  const r = document.documentElement
  r.style.setProperty('--gold', `oklch(${0.72} ${t.goldChroma} ${t.goldHue})`)
  r.style.setProperty('--gold-hi', `oklch(${0.82} ${t.goldChroma} ${t.goldHue})`)
  r.style.setProperty('--serif-family', `"${t.serifFamily}", ui-serif, Georgia, serif`)
}

export const TWEAK_DEFAULTS = {
  goldHue: 82,
  goldChroma: 0.12,
  serifFamily: 'Instrument Serif',
  sectionAltColor: '#111113',
}

export default function TweakPanel({ tweaks, setTweaks, onClose }) {
  const update = (patch) => {
    const next = { ...tweaks, ...patch }
    setTweaks(next)
    applyTweaks(next)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className="fixed bottom-6 right-6 z-[100] w-[320px] rounded-2xl border border-white/10 bg-onyx-950/95 p-5 text-stone-100 shadow-2xl backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="font-serif text-lg">Tweaks</div>
        <button onClick={onClose} className="text-stone-400 hover:text-stone-100">
          <X className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>

      <div className="space-y-5 text-xs">
        <div>
          <div className="mb-2 flex justify-between text-stone-400">
            <span>Gold Hue</span>
            <span className="text-stone-200">{tweaks.goldHue}°</span>
          </div>
          <input
            type="range" min={30} max={220} step={1} value={tweaks.goldHue}
            onChange={(e) => update({ goldHue: Number(e.target.value) })}
            className="w-full accent-[var(--gold)]"
          />
        </div>
        <div>
          <div className="mb-2 flex justify-between text-stone-400">
            <span>Gold Chroma</span>
            <span className="text-stone-200">{tweaks.goldChroma.toFixed(2)}</span>
          </div>
          <input
            type="range" min={0} max={0.2} step={0.01} value={tweaks.goldChroma}
            onChange={(e) => update({ goldChroma: Number(e.target.value) })}
            className="w-full accent-[var(--gold)]"
          />
        </div>
        <div>
          <div className="mb-2 text-stone-400">Serif Font</div>
          <div className="grid grid-cols-2 gap-2">
            {SERIFS.map((s) => (
              <button
                key={s}
                onClick={() => update({ serifFamily: s })}
                className={
                  'rounded-lg border px-3 py-2 text-left text-[11px] transition-colors ' +
                  (tweaks.serifFamily === s
                    ? 'border-[var(--gold)] bg-[var(--gold)]/10 text-stone-50'
                    : 'border-white/10 text-stone-300 hover:border-white/20')
                }
                style={{ fontFamily: `"${s}", serif` }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 text-stone-400">Section Alt</div>
          <div className="flex gap-2">
            {SECTION_COLORS.map((c) => (
              <button
                key={c}
                onClick={() => update({ sectionAltColor: c })}
                className={
                  'h-8 flex-1 rounded-md border ' +
                  (tweaks.sectionAltColor === c ? 'border-[var(--gold)]' : 'border-white/10')
                }
                style={{ background: c }}
                aria-label={c}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
