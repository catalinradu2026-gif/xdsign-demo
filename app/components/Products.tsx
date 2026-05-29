'use client'
import { useState } from 'react'
import { useLang } from '../LangContext'
import { t } from '../translations'

const PRODUCT_IMAGES = [
  {
    main: 'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_17_Colorful-Glowing-Lettering-Door-Logo-Dazzling-3D-600x600.jpg',
    thumbs: [
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_25_Colorful-Luminous-Lettering-Customized-Door-Sign-Background-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_15_Star-Road-3D-Colorful-Luminous-Logo-LED-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_57_Colorful-Luminous-Signage-Logo-Lightbox-Color-Customizable-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_55_Colorful-Glowing-Lettering-Door-Logo-Dazzling-3D-300x300.jpg',
    ],
    link: 'https://xd-ledsign.com/product/3d-super-letter-with-rgb/',
  },
  {
    main: 'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_29_Star-Road-Character-Creation-Abyss-Mirror-3D-600x600.jpg',
    thumbs: [
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_29_Thousand-Layer-Mirror-Luminous-Character-3D-Dazzling-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_20_Thousand-Layer-Infinite-Mirror-Luminous-Character-Abyss-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_19_Thousand-Layer-Mirror-Luminous-Character-Abyssal-Mirror-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_20_Abyss-Mirror-Luminous-Character-Thousand-Layer-Mirror-300x300.jpg',
    ],
    link: 'https://xd-ledsign.com/product/3d-abyss-letters/',
  },
  {
    main: 'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_13_Abyssal-Mirror-Luminous-Character-Door-Sign-Customized-300x300.jpg',
    thumbs: [
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_17_Abyssal-Luminous-Character-Door-Sign-Customized-Outdoor-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_18_Abyss-Mirror-Luminous-Character-Thousand-Layer-Mirror-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_21_Abyss-Mirror-Luminous-Character-Thousand-Layer-Mirror-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/02/imgi_22_Thousand-Layer-Mirror-Luminous-Character-3D-Dazzling-300x300.jpg',
    ],
    link: 'https://xd-ledsign.com/product/3d-abyss-letters-3/',
  },
  {
    main: 'https://xd-ledsign.com/wp-content/uploads/2026/04/主图_01-600x600.png',
    thumbs: [
      'https://xd-ledsign.com/wp-content/uploads/2026/04/主图_05-300x300.png',
      'https://xd-ledsign.com/wp-content/uploads/2026/04/主图_07-300x300.png',
      'https://xd-ledsign.com/wp-content/uploads/2026/04/主图_02-300x300.png',
      'https://xd-ledsign.com/wp-content/uploads/2026/04/主图_03-300x300.png',
    ],
    link: 'https://xd-ledsign.com/product/custom-led-neon-signs/',
  },
  {
    main: 'https://xd-ledsign.com/wp-content/uploads/2026/04/主图_01-24-600x600.png',
    thumbs: [
      'https://xd-ledsign.com/wp-content/uploads/2026/04/主图_03-8-300x300.png',
      'https://xd-ledsign.com/wp-content/uploads/2026/04/主图_04-17-300x300.png',
      'https://xd-ledsign.com/wp-content/uploads/2026/04/主图_05-17-300x300.png',
      'https://xd-ledsign.com/wp-content/uploads/2026/04/主图_06-19-300x300.png',
    ],
    link: 'https://xd-ledsign.com/product/led-channel-letters/',
  },
  {
    main: 'https://xd-ledsign.com/wp-content/uploads/2026/03/主图_01-83-300x300.jpg',
    thumbs: [
      'https://xd-ledsign.com/wp-content/uploads/2026/03/主图_01-84-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/03/主图_01-36-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/03/主图_01-39-300x300.jpg',
      'https://xd-ledsign.com/wp-content/uploads/2026/03/主图_02-21-300x300.jpg',
    ],
    link: 'https://xd-ledsign.com/product/creative-hanging-lightbox/',
  },
]

export default function Products() {
  const { lang } = useLang()
  const tr = t[lang].products
  const [activeThumb, setActiveThumb] = useState<number[]>(PRODUCT_IMAGES.map(() => 0))

  function selectThumb(productIdx: number, thumbIdx: number) {
    setActiveThumb(prev => prev.map((v, i) => i === productIdx ? thumbIdx : v))
  }

  function getActiveImg(i: number) {
    const p = PRODUCT_IMAGES[i]
    const idx = activeThumb[i]
    return idx === 0 ? p.main : p.thumbs[idx - 1]
  }

  return (
    <section id="products" className="py-24 bg-zinc-950 border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xblue text-xs tracking-[0.3em] uppercase mb-4">{tr.tag}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">{tr.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tr.items.map((item, i) => (
            <div key={i} className="border border-white/8 bg-black/40 hover:border-xblue/40 transition-all duration-300 group flex flex-col overflow-hidden">
              {/* Main image */}
              <div className="relative aspect-square bg-zinc-900 overflow-hidden">
                <img
                  src={getActiveImg(i)}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 text-xs text-gold border border-gold/40 bg-black/70 px-2 py-0.5 tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-1.5 p-2 bg-zinc-900/50">
                {[PRODUCT_IMAGES[i].main, ...PRODUCT_IMAGES[i].thumbs].map((src, j) => (
                  <button
                    key={j}
                    onClick={() => selectThumb(i, j)}
                    className={`flex-1 aspect-square overflow-hidden border transition-all ${
                      activeThumb[i] === j ? 'border-xblue' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg text-white mb-2 group-hover:text-xblue-light transition-colors">
                  {item.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-white/40">
                      <span className="text-xblue mt-0.5 flex-shrink-0">›</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-2">
                  <a
                    href="#calculator"
                    className="flex-1 text-center py-2.5 bg-xblue hover:bg-xblue-light text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    {lang === 'zh' ? '获取报价' : lang === 'ro' ? 'Obține ofertă' : lang === 'de' ? 'Angebot' : lang === 'it' ? 'Preventivo' : lang === 'fr' ? 'Devis' : 'Get Quote'}
                  </a>
                  <a
                    href={PRODUCT_IMAGES[i].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 border border-white/20 hover:border-white/50 text-white/60 hover:text-white text-xs transition-colors"
                  >
                    ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
