'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'zh' | 'en' | 'ro' | 'de' | 'it' | 'fr'

const LANG_CYCLE: Lang[] = ['zh', 'en', 'ro', 'de', 'it', 'fr']

const VALID: Set<string> = new Set(LANG_CYCLE)

const COUNTRY_LANG: Record<string, Lang> = {
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh', SG: 'zh',
  RO: 'ro', MD: 'ro',
  DE: 'de', AT: 'de', CH: 'de',
  IT: 'it',
  FR: 'fr', BE: 'fr',
}

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  cycleLang: () => void
}

const Ctx = createContext<LangCtx>({ lang: 'zh', setLang: () => {}, cycleLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh')

  useEffect(() => {
    fetch('/api/geo')
      .then(r => r.json())
      .then(d => {
        if (d.lang && VALID.has(d.lang)) setLang(d.lang as Lang)
      })
      .catch(() => {})
  }, [])

  function cycleLang() {
    setLang(cur => {
      const idx = LANG_CYCLE.indexOf(cur)
      return LANG_CYCLE[(idx + 1) % LANG_CYCLE.length]
    })
  }

  return <Ctx.Provider value={{ lang, setLang, cycleLang }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
export { COUNTRY_LANG }
