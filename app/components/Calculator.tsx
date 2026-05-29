'use client'
import { useState } from 'react'
import { useLang } from '../LangContext'
import type { Lang } from '../LangContext'

const BASE_PRICE: Record<number, number> = {
  20: 17.5, 30: 25, 40: 37.5, 50: 55,
  60: 75, 80: 115, 100: 170, 120: 240,
}

const TYPE_MULT: Record<string, number> = {
  standard: 1.0,
  rgb3d: 1.5,
  infinity: 2.0,
  neon: 0, // per meter
}

const MAT_MULT: Record<string, number> = {
  acrylic: 1.0,
  stainless: 1.3,
  aluminum: 1.15,
  brass: 1.5,
}

const SHIP: Record<string, [number, number]> = {
  eu: [280, 480],
  us: [320, 580],
  asia: [180, 360],
  au: [380, 620],
  other: [300, 550],
}

const UI: Record<Lang, {
  tag: string; title: string; sub: string
  labelText: string; labelHeight: string; labelType: string
  labelMat: string; labelQty: string; labelDest: string
  calcBtn: string; types: string[]; mats: string[]; dests: string[]
  destKeys: string[]
  result: { letters: string; pricePerLetter: string; subtotal: string; discount: string; shipping: string; total: string; note: string; waBtn: string }
  neonNote: string
}> = {
  zh: {
    tag: 'AI 智能计算器', title: '获取即时报价', sub: '填写您的需求，立即查看工厂报价估算',
    labelText: '文字内容（例如：OPEN）', labelHeight: '字母高度', labelType: '产品类型',
    labelMat: '材质', labelQty: '数量（字母数）', labelDest: '发货目的地',
    calcBtn: '立即计算报价',
    types: ['LED槽字（经典款）', '3D RGB彩色字', '无限镜深渊字', 'LED霓虹（按米计）'],
    mats: ['亚克力面板', '不锈钢面板 (+30%)', '铝制面板 (+15%)', '黄铜面板 (+50%)'],
    dests: ['欧洲', '美国/加拿大', '亚洲', '澳大利亚', '其他'],
    destKeys: ['eu', 'us', 'asia', 'au', 'other'],
    result: {
      letters: '字母数', pricePerLetter: '每字价格', subtotal: '小计',
      discount: '数量折扣', shipping: '运费估算（海运）', total: '总计估算',
      note: '以上为工厂报价估算，设计打样免费。最终报价请联系我们。',
      waBtn: '发送报价到WhatsApp确认订单',
    },
    neonNote: '霓虹灯按线米计算，请联系AVA或WhatsApp获取具体报价。',
  },
  en: {
    tag: 'AI Calculator', title: 'Instant Price Quote', sub: 'Fill in your requirements and get an instant factory price estimate',
    labelText: 'Text / Letters (e.g. OPEN)', labelHeight: 'Letter Height', labelType: 'Product Type',
    labelMat: 'Material', labelQty: 'Quantity (number of letters)', labelDest: 'Shipping Destination',
    calcBtn: 'Calculate Quote Now',
    types: ['LED Channel Letters (Classic)', '3D RGB Full-Color', 'Infinity Mirror', 'LED Neon (per meter)'],
    mats: ['Acrylic Face (Standard)', 'Stainless Steel (+30%)', 'Aluminum (+15%)', 'Brass (+50%)'],
    dests: ['Europe', 'USA / Canada', 'Asia', 'Australia', 'Other'],
    destKeys: ['eu', 'us', 'asia', 'au', 'other'],
    result: {
      letters: 'Letters', pricePerLetter: 'Price/letter', subtotal: 'Subtotal',
      discount: 'Qty discount', shipping: 'Shipping estimate (sea)', total: 'TOTAL ESTIMATE',
      note: 'Factory price estimate. Free design & mockup included. Contact us for final confirmed quote.',
      waBtn: 'Send Quote to WhatsApp to Confirm Order',
    },
    neonNote: 'Neon signs are priced per meter. Contact AVA or WhatsApp for a specific quote.',
  },
  ro: {
    tag: 'Calculator AI', title: 'Ofertă Instant', sub: 'Completați cerința și obțineți estimare de preț din fabrică',
    labelText: 'Text / Litere (ex: OPEN)', labelHeight: 'Înălțime literă', labelType: 'Tip produs',
    labelMat: 'Material', labelQty: 'Cantitate (nr. de litere)', labelDest: 'Destinație livrare',
    calcBtn: 'Calculează Oferta',
    types: ['Litere Canal LED (Clasic)', '3D RGB Full-Color', 'Infinity Mirror', 'LED Neon (per metru)'],
    mats: ['Față Acrilic (Standard)', 'Inox (+30%)', 'Aluminiu (+15%)', 'Alamă (+50%)'],
    dests: ['Europa', 'SUA / Canada', 'Asia', 'Australia', 'Altele'],
    destKeys: ['eu', 'us', 'asia', 'au', 'other'],
    result: {
      letters: 'Litere', pricePerLetter: 'Preț/literă', subtotal: 'Subtotal',
      discount: 'Reducere cant.', shipping: 'Transport estimat (maritim)', total: 'TOTAL ESTIMAT',
      note: 'Estimare preț fabrică. Design și machetă gratuite. Contactați-ne pentru ofertă finală confirmată.',
      waBtn: 'Trimite Oferta pe WhatsApp',
    },
    neonNote: 'Neonul se calculează per metru liniar. Contactați AVA sau WhatsApp pentru ofertă specifică.',
  },
  de: {
    tag: 'KI-Kalkulator', title: 'Sofortangebot', sub: 'Anforderungen eingeben und sofort Fabrikpreisschätzung erhalten',
    labelText: 'Text / Buchstaben (z.B. OPEN)', labelHeight: 'Buchstabenhöhe', labelType: 'Produkttyp',
    labelMat: 'Material', labelQty: 'Menge (Anzahl Buchstaben)', labelDest: 'Lieferziel',
    calcBtn: 'Angebot berechnen',
    types: ['LED-Kanalbuchstaben (Klassisch)', '3D RGB Vollfarbe', 'Infinity Mirror', 'LED Neon (pro Meter)'],
    mats: ['Acrylfront (Standard)', 'Edelstahl (+30%)', 'Aluminium (+15%)', 'Messing (+50%)'],
    dests: ['Europa', 'USA / Kanada', 'Asien', 'Australien', 'Sonstige'],
    destKeys: ['eu', 'us', 'asia', 'au', 'other'],
    result: {
      letters: 'Buchstaben', pricePerLetter: 'Preis/Buchstabe', subtotal: 'Zwischensumme',
      discount: 'Mengenrabatt', shipping: 'Versandschätzung (Seeweg)', total: 'GESAMTSCHÄTZUNG',
      note: 'Fabrikpreisschätzung. Design & Muster kostenlos. Kontaktieren Sie uns für ein endgültiges Angebot.',
      waBtn: 'Angebot per WhatsApp bestätigen',
    },
    neonNote: 'Neon-Schilder werden pro Laufmeter berechnet. Kontaktieren Sie AVA oder WhatsApp.',
  },
  it: {
    tag: 'Calcolatore AI', title: 'Preventivo Istantaneo', sub: 'Inserisci le tue esigenze e ottieni subito una stima di prezzo dalla fabbrica',
    labelText: 'Testo / Lettere (es. OPEN)', labelHeight: 'Altezza lettera', labelType: 'Tipo prodotto',
    labelMat: 'Materiale', labelQty: 'Quantità (numero di lettere)', labelDest: 'Destinazione spedizione',
    calcBtn: 'Calcola Preventivo',
    types: ['Lettere Canale LED (Classico)', '3D RGB Full-Color', 'Infinity Mirror', 'LED Neon (al metro)'],
    mats: ['Fronte Acrilico (Standard)', 'Acciaio Inox (+30%)', 'Alluminio (+15%)', 'Ottone (+50%)'],
    dests: ['Europa', 'USA / Canada', 'Asia', 'Australia', 'Altro'],
    destKeys: ['eu', 'us', 'asia', 'au', 'other'],
    result: {
      letters: 'Lettere', pricePerLetter: 'Prezzo/lettera', subtotal: 'Subtotale',
      discount: 'Sconto quantità', shipping: 'Spedizione stimata (marittima)', total: 'TOTALE STIMATO',
      note: 'Stima prezzo fabbrica. Design e mockup gratuiti. Contattaci per preventivo finale confermato.',
      waBtn: 'Invia Preventivo su WhatsApp',
    },
    neonNote: 'Le insegne neon si calcolano al metro lineare. Contatta AVA o WhatsApp per un preventivo specifico.',
  },
  fr: {
    tag: 'Calculateur IA', title: 'Devis Instantané', sub: 'Remplissez vos besoins et obtenez immédiatement une estimation de prix usine',
    labelText: 'Texte / Lettres (ex. OPEN)', labelHeight: 'Hauteur de lettre', labelType: 'Type de produit',
    labelMat: 'Matériau', labelQty: 'Quantité (nombre de lettres)', labelDest: 'Destination livraison',
    calcBtn: 'Calculer le Devis',
    types: ['Lettres Caisson LED (Classique)', '3D RGB Couleur Complète', 'Infinity Mirror', 'LED Néon (au mètre)'],
    mats: ['Face Acrylique (Standard)', 'Acier Inoxydable (+30%)', 'Aluminium (+15%)', 'Laiton (+50%)'],
    dests: ['Europe', 'USA / Canada', 'Asie', 'Australie', 'Autre'],
    destKeys: ['eu', 'us', 'asia', 'au', 'other'],
    result: {
      letters: 'Lettres', pricePerLetter: 'Prix/lettre', subtotal: 'Sous-total',
      discount: 'Remise quantité', shipping: 'Expédition estimée (maritime)', total: 'TOTAL ESTIMÉ',
      note: 'Estimation prix usine. Design et maquette gratuits. Contactez-nous pour un devis final confirmé.',
      waBtn: 'Envoyer le Devis sur WhatsApp',
    },
    neonNote: 'Les enseignes néon sont calculées au mètre linéaire. Contactez AVA ou WhatsApp.',
  },
}

interface CalcResult {
  text: string; letters: number; height: number
  pricePerLetter: number; subtotal: number
  discountPct: number; discountAmt: number
  shipMin: number; shipMax: number
  totalMin: number; totalMax: number
  type: string; mat: string; dest: string
}

function calculate(text: string, height: number, typeKey: string, matKey: string, destKey: string): CalcResult | null {
  const cleanText = text.replace(/\s+/g, '').length
  const letters = Math.max(1, cleanText || 1)
  const base = BASE_PRICE[height] || 37.5
  const typeMult = TYPE_MULT[typeKey] || 1
  const matMult = MAT_MULT[matKey] || 1
  const pricePerLetter = Math.round(base * typeMult * matMult * 100) / 100
  const subtotalRaw = pricePerLetter * letters
  const discountPct = letters >= 50 ? 20 : letters >= 21 ? 15 : letters >= 6 ? 10 : 0
  const discountAmt = Math.round(subtotalRaw * discountPct / 100 * 100) / 100
  const subtotal = Math.round((subtotalRaw - discountAmt) * 100) / 100
  const [shipMin, shipMax] = SHIP[destKey] || SHIP.other
  return {
    text, letters, height, pricePerLetter, subtotal,
    discountPct, discountAmt,
    shipMin, shipMax,
    totalMin: subtotal + shipMin, totalMax: subtotal + shipMax,
    type: typeKey, mat: matKey, dest: destKey,
  }
}

export default function Calculator() {
  const { lang } = useLang()
  const ui = UI[lang] || UI.en

  const [text, setText] = useState('')
  const [height, setHeight] = useState(40)
  const [type, setType] = useState('standard')
  const [mat, setMat] = useState('acrylic')
  const [qty, setQty] = useState('')
  const [dest, setDest] = useState('eu')
  const [result, setResult] = useState<CalcResult | null>(null)

  const typeKeys = ['standard', 'rgb3d', 'infinity', 'neon']
  const matKeys = ['acrylic', 'stainless', 'aluminum', 'brass']

  function handleCalc() {
    const effectiveText = qty ? 'x'.repeat(parseInt(qty) || 1) : text
    if (!effectiveText.trim() && !qty) return
    if (type === 'neon') { setResult({ text, letters: 0, height, pricePerLetter: 0, subtotal: 0, discountPct: 0, discountAmt: 0, shipMin: 0, shipMax: 0, totalMin: 0, totalMax: 0, type: 'neon', mat, dest }); return }
    const r = calculate(effectiveText, height, type, mat, dest)
    setResult(r)
  }

  function buildWaText() {
    if (!result) return ''
    const destLabel = ui.dests[ui.destKeys.indexOf(result.dest)]
    if (lang === 'zh') return `您好！我通过XD Sign网站的AI计算器获得了以下报价估算，希望确认订单：\n\n文字：${result.text || `${result.letters}个字母`}\n字高：${result.height}cm\n类型：${ui.types[typeKeys.indexOf(result.type)]}\n材质：${ui.mats[matKeys.indexOf(result.mat)]}\n数量：${result.letters}个\n目的地：${destLabel}\n\n估算总价：$${result.totalMin}–$${result.totalMax} USD\n（含海运到${destLabel}）\n\n请提供最终确认报价，谢谢！`
    if (lang === 'ro') return `Bună ziua! Am obținut o estimare de preț prin calculatorul AI de pe site-ul XD Sign:\n\nText: ${result.text || `${result.letters} litere`}\nÎnălțime: ${result.height}cm\nTip: ${ui.types[typeKeys.indexOf(result.type)]}\nMaterial: ${ui.mats[matKeys.indexOf(result.mat)]}\nCantitate: ${result.letters} litere\nDestinație: ${destLabel}\n\nTotal estimat: $${result.totalMin}–$${result.totalMax} USD (incl. transport maritim)\n\nVă rog trimiteți oferta finală confirmată, mulțumesc!`
    return `Hello! I used the AI calculator on XD Sign website and got the following estimate:\n\nText: ${result.text || `${result.letters} letters`}\nHeight: ${result.height}cm\nType: ${ui.types[typeKeys.indexOf(result.type)]}\nMaterial: ${ui.mats[matKeys.indexOf(result.mat)]}\nQty: ${result.letters} letters\nDestination: ${destLabel}\n\nTotal estimate: $${result.totalMin}–$${result.totalMax} USD (incl. sea freight)\n\nPlease confirm final quote, thank you!`
  }

  return (
    <section id="calculator" className="py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">{ui.tag}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{ui.title}</h2>
          <p className="text-white/40 leading-relaxed">{ui.sub}</p>
        </div>

        <div className="border border-white/10 bg-zinc-950/60 p-8 space-y-6">
          {/* Row 1: Text + Height */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">{ui.labelText}</label>
              <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="AICRAIOVA"
                className="w-full bg-black border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-xblue/50"
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">{ui.labelHeight}</label>
              <select
                value={height}
                onChange={e => setHeight(Number(e.target.value))}
                className="w-full bg-black border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-xblue/50"
              >
                {Object.keys(BASE_PRICE).map(h => (
                  <option key={h} value={h}>{h} cm</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Type + Material */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">{ui.labelType}</label>
              <select
                value={type}
                onChange={e => setType(e.target.value)}
                className="w-full bg-black border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-xblue/50"
              >
                {typeKeys.map((k, i) => <option key={k} value={k}>{ui.types[i]}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">{ui.labelMat}</label>
              <select
                value={mat}
                onChange={e => setMat(e.target.value)}
                className="w-full bg-black border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-xblue/50"
              >
                {matKeys.map((k, i) => <option key={k} value={k}>{ui.mats[i]}</option>)}
              </select>
            </div>
          </div>

          {/* Row 3: Qty + Dest */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">{ui.labelQty}</label>
              <input
                type="number"
                value={qty}
                onChange={e => setQty(e.target.value)}
                min="1"
                placeholder={text ? `${text.replace(/\s/g, '').length}` : '1'}
                className="w-full bg-black border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-xblue/50"
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">{ui.labelDest}</label>
              <select
                value={dest}
                onChange={e => setDest(e.target.value)}
                className="w-full bg-black border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-xblue/50"
              >
                {ui.dests.map((d, i) => <option key={ui.destKeys[i]} value={ui.destKeys[i]}>{d}</option>)}
              </select>
            </div>
          </div>

          <button
            onClick={handleCalc}
            className="w-full py-4 bg-xblue hover:bg-xblue-light text-white font-semibold text-sm tracking-widest uppercase transition-all duration-300"
          >
            {ui.calcBtn}
          </button>
        </div>

        {/* Result panel */}
        {result && (
          <div className="mt-6 border border-xblue/30 bg-xblue/5 p-8">
            {result.type === 'neon' ? (
              <p className="text-white/70 text-sm text-center">{ui.neonNote}</p>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-black/40 p-4">
                    <div className="text-white/40 text-xs uppercase tracking-wide mb-1">{ui.result.letters}</div>
                    <div className="text-white text-xl font-bold">{result.letters}</div>
                  </div>
                  <div className="bg-black/40 p-4">
                    <div className="text-white/40 text-xs uppercase tracking-wide mb-1">{ui.result.pricePerLetter}</div>
                    <div className="text-white text-xl font-bold">${result.pricePerLetter}</div>
                  </div>
                  <div className="bg-black/40 p-4">
                    <div className="text-white/40 text-xs uppercase tracking-wide mb-1">{ui.result.subtotal}</div>
                    <div className="text-white text-xl font-bold">${result.subtotal}</div>
                  </div>
                  {result.discountPct > 0 && (
                    <div className="bg-black/40 p-4">
                      <div className="text-white/40 text-xs uppercase tracking-wide mb-1">{ui.result.discount}</div>
                      <div className="text-green-400 text-xl font-bold">-{result.discountPct}% (-${result.discountAmt})</div>
                    </div>
                  )}
                  <div className="bg-black/40 p-4">
                    <div className="text-white/40 text-xs uppercase tracking-wide mb-1">{ui.result.shipping}</div>
                    <div className="text-white text-xl font-bold">${result.shipMin}–${result.shipMax}</div>
                  </div>
                  <div className="bg-xblue/20 border border-xblue/40 p-4 col-span-2 md:col-span-1">
                    <div className="text-xblue text-xs uppercase tracking-wide mb-1">{ui.result.total}</div>
                    <div className="text-white text-2xl font-bold">${result.totalMin}–${result.totalMax}</div>
                    <div className="text-white/30 text-xs mt-1">USD</div>
                  </div>
                </div>

                <p className="text-white/30 text-xs text-center mb-6">{ui.result.note}</p>

                <a
                  href={`https://wa.me/8618859718326?text=${encodeURIComponent(buildWaText())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#20b857] text-white font-semibold text-sm tracking-wide transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {ui.result.waBtn}
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
