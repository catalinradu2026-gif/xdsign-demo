'use client'
import { useLang } from '../LangContext'
import { t } from '../translations'

export default function Hero() {
  const { lang } = useLang()
  const tr = t[lang].hero

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,111,168,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,168,76,0.08)_0%,transparent_50%)]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-xblue text-xs tracking-[0.4em] uppercase mb-8 font-medium">{tr.tag}</p>

        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          {tr.title1}<br />
          <span className="text-xblue">{tr.title2}</span>
        </h1>

        <p className="text-white/50 text-lg mb-12 tracking-wide">{tr.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#calculator"
            className="px-10 py-4 bg-xblue text-white font-semibold text-sm tracking-widest uppercase hover:bg-xblue-light transition-all duration-300"
          >
            {tr.cta}
          </a>
          <span className="text-white/30 text-sm">{tr.ctaSub}</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/5 max-w-2xl mx-auto">
          <div>
            <div className="font-serif text-3xl text-xblue mb-1">10+</div>
            <div className="text-white/30 text-xs tracking-wide">
              {lang === 'zh' ? '年制造经验' : lang === 'ro' ? 'ani experiență' : lang === 'de' ? 'Jahre Erfahrung' : lang === 'it' ? 'anni esperienza' : lang === 'fr' ? 'ans d\'expérience' : 'years experience'}
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl text-gold mb-1">50+</div>
            <div className="text-white/30 text-xs tracking-wide">
              {lang === 'zh' ? '国家发货' : lang === 'ro' ? 'țări livrate' : lang === 'de' ? 'Länder beliefert' : lang === 'it' ? 'paesi consegnati' : lang === 'fr' ? 'pays livrés' : 'countries shipped'}
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl text-white mb-1">5000+</div>
            <div className="text-white/30 text-xs tracking-wide">
              {lang === 'zh' ? '完成项目' : lang === 'ro' ? 'proiecte finalizate' : lang === 'de' ? 'Projekte abgeschlossen' : lang === 'it' ? 'progetti completati' : lang === 'fr' ? 'projets réalisés' : 'projects completed'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
