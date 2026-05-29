'use client'
import { useLang } from '../LangContext'
import { t } from '../translations'

const ICONS = ['✦', '◈', '▣', '◉', '◆', '▨']

export default function Products() {
  const { lang } = useLang()
  const tr = t[lang].products

  return (
    <section id="products" className="py-32 bg-zinc-950 border-t border-white/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xblue text-xs tracking-[0.3em] uppercase mb-4">{tr.tag}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">{tr.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tr.items.map((item, i) => (
            <div
              key={i}
              className="border border-white/8 bg-black/40 p-8 hover:border-xblue/40 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xblue text-2xl">{ICONS[i]}</span>
                <span className="text-xs text-gold border border-gold/30 px-2 py-0.5 tracking-wider">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-serif text-xl text-white mb-3 group-hover:text-xblue-light transition-colors">
                {item.name}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
