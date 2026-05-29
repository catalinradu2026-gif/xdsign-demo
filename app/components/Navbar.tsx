'use client'
import { useLang } from '../LangContext'
import { t } from '../translations'

const FLAG: Record<string, string> = {
  zh: '🇨🇳', en: '🇬🇧', ro: '🇷🇴', de: '🇩🇪', it: '🇮🇹', fr: '🇫🇷',
}

export default function Navbar() {
  const { lang, cycleLang } = useLang()
  const tr = t[lang].navbar

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-bold tracking-wider">
          <span className="text-xblue">XD</span>
          <span className="text-white"> Sign</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {tr.links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/60 hover:text-white text-sm tracking-wide transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={cycleLang}
          className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors border border-white/10 hover:border-white/30 px-3 py-1.5"
        >
          <span>{FLAG[lang]}</span>
          <span className="uppercase tracking-wider text-xs">{lang}</span>
        </button>
      </div>
    </nav>
  )
}
