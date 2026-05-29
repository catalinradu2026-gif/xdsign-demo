'use client'
import { useLang } from '../LangContext'
import { t } from '../translations'

export default function CalculatorSection() {
  const { lang } = useLang()
  const tr = t[lang].calculator

  return (
    <section id="calculator" className="py-32 bg-black border-t border-white/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">{tr.tag}</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">{tr.title}</h2>
        <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">{tr.sub}</p>

        {/* Visual hint pointing to AVA */}
        <div className="relative inline-block">
          <div className="border border-xblue/30 bg-xblue/5 px-10 py-5 text-white/70 text-sm tracking-wide">
            {tr.cta}
          </div>
          {/* Arrow pointing down-right to chat button */}
          <div className="absolute -bottom-8 right-0 text-xblue/50 text-2xl animate-bounce">↘</div>
        </div>

        {/* Example sizes visual */}
        <div className="mt-24 grid grid-cols-5 gap-4 items-end max-w-xl mx-auto">
          {[20, 30, 40, 60, 80].map((h, i) => (
            <div key={h} className="flex flex-col items-center gap-2">
              <div
                className="w-full bg-gradient-to-t from-xblue to-xblue-light opacity-70 rounded-sm"
                style={{ height: `${h * 1.2}px` }}
              />
              <span className="text-white/30 text-xs">{h}cm</span>
            </div>
          ))}
        </div>
        <p className="text-white/20 text-xs mt-4 tracking-widest uppercase">
          {lang === 'zh' ? '参考尺寸对比' : lang === 'ro' ? 'comparație dimensiuni' : lang === 'de' ? 'Größenvergleich' : lang === 'it' ? 'confronto dimensioni' : lang === 'fr' ? 'comparaison tailles' : 'size reference'}
        </p>
      </div>
    </section>
  )
}
