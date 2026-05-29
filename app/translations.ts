export type Lang = 'zh' | 'en' | 'ro' | 'de' | 'it' | 'fr'

export const t: Record<Lang, {
  navbar: { links: { href: string; label: string }[]; langBtn: string }
  hero: { tag: string; title1: string; title2: string; sub: string; cta: string; ctaSub: string }
  products: { tag: string; title: string; items: { name: string; desc: string; tag: string; features: string[] }[] }
  calculator: { tag: string; title: string; sub: string; cta: string }
  contact: { tag: string; title: string; sub: string; wa: string; wechat: string; email: string; phone: string }
  footer: { copy: string; made: string }
  chat: {
    welcome: string
    bubbles: string[]
    placeholder: string
    typing: string
    waBtn: string
    waText: string
    errorMsg: string
  }
}> = {
  zh: {
    navbar: {
      links: [
        { href: '#products', label: '产品' },
        { href: '#calculator', label: '报价' },
        { href: '#contact', label: '联系我们' },
      ],
      langBtn: '语言',
    },
    hero: {
      tag: '中国顶级发光字制造商',
      title1: '为您的品牌',
      title2: '打造完美发光字',
      sub: '3D立体字 · LED发光字 · 无限镜效果 · 霓虹灯 · 全球发货',
      cta: '免费获取报价',
      ctaSub: '工厂直销价 · 无中间商',
    },
    products: {
      tag: '我们的产品',
      title: '专业定制发光标识',
      items: [
        {
          name: '3D RGB超级立体字',
          desc: '全彩RGB灯光效果，可程序控制16万种颜色动态变换，打造高冲击力的商业标识。适用于商场、品牌店、夜总会、酒吧和建筑外立面。',
          tag: '畅销款',
          features: ['全彩RGB动态变色效果', '3D立体槽字结构', '高亮度长寿命LED', '室内外均可安装', '可定制字体、尺寸、Logo', '工厂直销价'],
        },
        {
          name: '3D深渊无限镜字',
          desc: '利用分层镜面技术，在每个字母内部创造震撼的无限深度视觉效果。单色LED（白色/暖白/定制色），奢华外观，让您的品牌瞬间成为网红打卡点。',
          tag: '网红款',
          features: ['无限深度镜像效果', '分层镜面科技', '单色LED（白/暖白/自定义）', '奢华精工外观', '适合展厅、沙龙、购物中心', '免费设计打样'],
        },
        {
          name: 'LED无限镜灯箱',
          desc: '定制LED无限镜，创造令人叹为观止的空间深度效果。独特的多层镜面设计，适合高端展厅、精品店和品牌体验空间。',
          tag: '高端款',
          features: ['多层镜面无限深度', '全尺寸定制', '室内外均可', '低功耗高亮度', '适合品牌展厅和精品店', '全球发货'],
        },
        {
          name: '定制LED霓虹灯',
          desc: '采用现代LED技术复刻经典霓虹效果，节能80%以上，无易碎玻璃，可定制任意文字、Logo和图案。适合餐厅、酒吧、咖啡店、网红打卡墙。',
          tag: '潮流款',
          features: ['现代LED替代传统霓虹', '节能80%+，安全无毒', '可定制任意形状文字Logo', '多种颜色可选', '适合餐厅、酒吧、网红墙', '全球发货'],
        },
        {
          name: 'LED槽字（通道字）',
          desc: '专业商业级LED通道字，高亮耐用，均匀出光。可定制字高20cm至180cm，适合商铺门头、购物中心入口、写字楼导视系统和户外广告牌。',
          tag: '经典款',
          features: ['字高20cm–180cm全规格', '高亮度均匀出光', '铝制/不锈钢/亚克力面板', '室内外防水设计', '适合商铺门头和导视系统', '生产周期7-15天'],
        },
        {
          name: 'LED超薄灯箱',
          desc: '超薄超亮定制灯箱，出光均匀，防水防尘（IP65级），可定制任意形状和尺寸。适合品牌展示、橱窗陈列、商场广告和展览展示。',
          tag: '实用款',
          features: ['IP65防水防尘', '超薄设计均匀出光', '可定制任意形状尺寸', '低功耗高亮度', '适合橱窗、展览、商场', '全球发货'],
        },
      ],
    },
    calculator: {
      tag: 'AI智能报价',
      title: '30秒获取精准报价',
      sub: '告诉AVA您的需求：文字内容、尺寸、材质、数量和发货目的地，立即获得工厂报价',
      cta: '开始报价 →',
    },
    contact: {
      tag: '联系我们',
      title: '工厂直销',
      sub: '专业团队为您服务，支持全球发货，提供免费设计方案',
      wa: '通过WhatsApp联系',
      wechat: '微信联系',
      email: 'info@xd-ledsign.com',
      phone: '+86 188 5972 2389',
    },
    footer: {
      copy: '© 2025 XD Sign. 保留所有权利。',
      made: '专业发光字制造商',
    },
    chat: {
      welcome: '您好！我是AVA，XD Sign的智能报价助手 🌟\n\n我可以帮您：\n• 计算发光字报价\n• 推荐最适合的产品\n• 估算运输费用\n\n请问您需要什么类型的发光字？',
      bubbles: ['👋 您好！需要发光字报价吗？', '🏭 工厂直销，价格最优！', '🚢 支持全球发货'],
      placeholder: '输入您的问题...',
      typing: '正在计算...',
      waBtn: '通过WhatsApp联系',
      waText: '您好，我通过XD Sign网站了解到贵公司的发光字产品，想咨询报价。',
      errorMsg: '连接错误，请稍后重试。',
    },
  },

  en: {
    navbar: {
      links: [
        { href: '#products', label: 'Products' },
        { href: '#calculator', label: 'Get Quote' },
        { href: '#contact', label: 'Contact' },
      ],
      langBtn: 'Language',
    },
    hero: {
      tag: 'China\'s Premier LED Sign Manufacturer',
      title1: 'Custom LED Signs',
      title2: 'Built for Your Brand',
      sub: '3D Letters · LED Channel Signs · Infinity Mirror · Neon · Worldwide Shipping',
      cta: 'Get Free Quote',
      ctaSub: 'Factory Direct Price · No Middlemen',
    },
    products: {
      tag: 'Our Products',
      title: 'Professional Custom Signs',
      items: [
        {
          name: '3D RGB Super Letters',
          desc: 'Full-color programmable RGB lighting with 160,000+ color combinations and dynamic effects. High-impact commercial signage for shopping malls, brand stores, nightclubs, bars and building facades.',
          tag: 'Best Seller',
          features: ['Full RGB dynamic color-changing effect', '3D channel letter structure', 'High brightness long-life LEDs', 'Indoor & outdoor installation', 'Custom font, size & logo', 'Factory direct price'],
        },
        {
          name: '3D Abyss Infinity Letters',
          desc: 'Layered mirror technology creates a stunning infinite depth effect inside each letter. Single color LED (white, warm white, or custom). Luxury finish — turns your storefront into an instant landmark.',
          tag: 'Viral',
          features: ['Infinite depth mirror effect', 'Layered mirror technology', 'Single color LED (white / warm white / custom)', 'Luxury premium finish', 'Perfect for showrooms, salons, malls', 'Free design & mockup'],
        },
        {
          name: 'LED Infinity Mirror',
          desc: 'Custom LED infinity mirror signs with stunning dimensional depth. Multi-layer mirror design for high-end showrooms, boutiques and brand experience spaces.',
          tag: 'Premium',
          features: ['Multi-layer infinity depth', 'Fully custom size & shape', 'Indoor & outdoor capable', 'Low power, high brightness', 'Ideal for brand showrooms', 'Worldwide shipping'],
        },
        {
          name: 'Custom LED Neon Signs',
          desc: 'Modern LED technology that replicates classic neon glow — 80%+ energy saving, no fragile glass, custom text, logo or any shape. Perfect for restaurants, bars, cafés and viral photo walls.',
          tag: 'Trending',
          features: ['Modern LED neon alternative', '80%+ energy saving, non-toxic', 'Custom text, logo, any shape', 'Multiple colors available', 'Restaurants, bars, Instagram walls', 'Worldwide shipping'],
        },
        {
          name: 'LED Channel Letters',
          desc: 'Professional commercial-grade LED channel letters, bright and durable. Available heights 20cm to 180cm. Custom font, color and finish. Ideal for storefronts, mall entrances, office buildings and outdoor advertising.',
          tag: 'Classic',
          features: ['Heights from 20cm to 180cm', 'Bright uniform illumination', 'Aluminum / stainless steel / acrylic face', 'Weatherproof indoor & outdoor', 'Storefronts, malls, wayfinding', 'Production 7–15 business days'],
        },
        {
          name: 'LED Light Box Signs',
          desc: 'Ultra-thin, ultra-bright custom light boxes with even illumination. IP65 waterproof, any shape or size. Perfect for brand displays, window showcases, mall advertising and exhibitions.',
          tag: 'Practical',
          features: ['IP65 waterproof & dustproof', 'Ultra-thin, even illumination', 'Custom shape & size', 'Low power, high brightness', 'Window displays, exhibitions, malls', 'Worldwide shipping'],
        },
      ],
    },
    calculator: {
      tag: 'AI Instant Quote',
      title: 'Get Your Quote in 30 Seconds',
      sub: 'Tell AVA your requirements: text, dimensions, material, quantity and destination — get a factory price instantly',
      cta: 'Start Quote →',
    },
    contact: {
      tag: 'Contact Us',
      title: 'Factory Direct',
      sub: 'Professional team at your service, worldwide shipping, free design included',
      wa: 'Contact via WhatsApp',
      wechat: 'Contact on WeChat',
      email: 'info@xd-ledsign.com',
      phone: '+86 188 5972 2389',
    },
    footer: {
      copy: '© 2025 XD Sign. All rights reserved.',
      made: 'Professional LED Sign Manufacturer',
    },
    chat: {
      welcome: 'Hello! I\'m AVA, XD Sign\'s AI quote assistant 🌟\n\nI can help you:\n• Calculate LED sign quotes\n• Recommend the best product\n• Estimate shipping costs\n\nWhat type of sign are you looking for?',
      bubbles: ['👋 Hi! Need a sign quote?', '🏭 Factory direct, best prices!', '🚢 Worldwide shipping available'],
      placeholder: 'Type your question...',
      typing: 'Calculating...',
      waBtn: 'Contact via WhatsApp',
      waText: 'Hello, I found XD Sign through your website and would like to get a quote for LED signs.',
      errorMsg: 'Connection error, please try again.',
    },
  },

  ro: {
    navbar: {
      links: [
        { href: '#products', label: 'Produse' },
        { href: '#calculator', label: 'Ofertă' },
        { href: '#contact', label: 'Contact' },
      ],
      langBtn: 'Limbă',
    },
    hero: {
      tag: 'Producător Premier de Litere LED din China',
      title1: 'Litere Volumetrice LED',
      title2: 'Personalizate pentru Brandul Tău',
      sub: 'Litere 3D · LED · Efect Infinit · Neon · Livrare Mondială',
      cta: 'Obțineți Ofertă Gratuită',
      ctaSub: 'Preț Direct din Fabrică · Fără Intermediari',
    },
    products: {
      tag: 'Produsele Noastre',
      title: 'Semne Personalizate Profesionale',
      items: [
        {
          name: 'Litere 3D RGB Super',
          desc: 'Iluminare RGB full-color programabilă cu 160.000+ combinații de culori și efecte dinamice. Semnalistică de impact pentru mall-uri, magazine premium, cluburi, baruri și fațade de clădiri.',
          tag: 'Best Seller',
          features: ['Efect RGB dinamic full-color', 'Structură literă canal 3D', 'LED-uri de înaltă luminozitate', 'Interior și exterior', 'Font, dimensiune și logo personalizat', 'Preț direct din fabrică'],
        },
        {
          name: 'Litere 3D Efect Infinit',
          desc: 'Tehnologie cu oglinzi stratificate care creează un efect de adâncime infinită în interiorul fiecărei litere. LED monocrom (alb, alb cald sau culoare personalizată). Finisaj premium.',
          tag: 'Viral',
          features: ['Efect oglindă cu adâncime infinită', 'Tehnologie oglinzi stratificate', 'LED monocrom (alb / alb cald / custom)', 'Finisaj de lux', 'Perfect pentru showroom-uri și saloane', 'Design și machetă gratuite'],
        },
        {
          name: 'Panou LED Infinity Mirror',
          desc: 'Panouri LED infinity mirror personalizate cu efect 3D spectaculos. Design multi-strat pentru showroom-uri de lux, boutique-uri și spații de brand experience.',
          tag: 'Premium',
          features: ['Adâncime infinită multi-strat', 'Dimensiune și formă complet customizabilă', 'Interior și exterior', 'Consum redus, luminozitate ridicată', 'Ideal pentru showroom-uri', 'Livrare mondială'],
        },
        {
          name: 'Neon LED Personalizat',
          desc: 'Tehnologie LED modernă care replică aspectul clasic de neon — economie de energie 80%+, fără sticlă fragilă, orice text, logo sau formă. Perfect pentru restaurante, baruri și pereți Instagram.',
          tag: 'Trendy',
          features: ['Alternativă modernă la neonul clasic', 'Economie energie 80%+, netoxic', 'Orice text, logo sau formă', 'Multiple culori disponibile', 'Restaurante, baruri, pereți virali', 'Livrare mondială'],
        },
        {
          name: 'Litere Canal LED',
          desc: 'Litere canal LED comerciale profesionale, luminoase și durabile. Înălțimi disponibile de la 20cm la 180cm. Font, culoare și finisaj personalizat. Ideale pentru vitrine, mall-uri și publicitate exterioară.',
          tag: 'Clasic',
          features: ['Înălțimi de la 20cm la 180cm', 'Luminozitate uniformă ridicată', 'Aluminiu / inox / față din acrilic', 'Rezistent la intemperii', 'Vitrine, mall-uri, clădiri de birouri', 'Producție 7–15 zile lucrătoare'],
        },
        {
          name: 'Casete Luminoase LED',
          desc: 'Casete luminoase ultra-subțiri și ultra-luminoase cu iluminare uniformă. IP65 rezistent la apă și praf, orice formă sau dimensiune. Perfect pentru afișaje de brand, vitrine și expoziții.',
          tag: 'Practic',
          features: ['IP65 rezistent la apă și praf', 'Ultra-subțire, iluminare uniformă', 'Formă și dimensiune personalizată', 'Consum redus, luminozitate ridicată', 'Vitrine, expoziții, mall-uri', 'Livrare mondială'],
        },
      ],
    },
    calculator: {
      tag: 'Ofertă AI Instant',
      title: 'Obțineți Oferta în 30 de Secunde',
      sub: 'Spuneți-i AVA cerințele: text, dimensiuni, material, cantitate și destinație — primiți prețul din fabrică instant',
      cta: 'Începe Oferta →',
    },
    contact: {
      tag: 'Contact',
      title: 'Direct din Fabrică',
      sub: 'Echipă profesională la dispoziția dvs., livrare mondială, design gratuit inclus',
      wa: 'Contactați pe WhatsApp',
      wechat: 'Contactați pe WeChat',
      email: 'info@xd-ledsign.com',
      phone: '+86 188 5972 2389',
    },
    footer: {
      copy: '© 2025 XD Sign. Toate drepturile rezervate.',
      made: 'Producător Profesional de Semne LED',
    },
    chat: {
      welcome: 'Bună ziua! Sunt AVA, asistentul AI de ofertare al XD Sign 🌟\n\nVă pot ajuta să:\n• Calculați oferta pentru litere LED\n• Recomand produsul potrivit\n• Estimez costul de transport\n\nCe tip de literă sau semn vă interesează?',
      bubbles: ['👋 Salut! Vrei o ofertă pentru litere LED?', '🏭 Preț direct din fabrică!', '🚢 Livrare mondială disponibilă'],
      placeholder: 'Scrieți întrebarea...',
      typing: 'Calculez...',
      waBtn: 'Contactați pe WhatsApp',
      waText: 'Bună ziua! Am găsit XD Sign prin site-ul dvs. și aș dori o ofertă pentru litere LED.',
      errorMsg: 'Eroare de conexiune, reîncercați.',
    },
  },

  de: {
    navbar: {
      links: [
        { href: '#products', label: 'Produkte' },
        { href: '#calculator', label: 'Angebot' },
        { href: '#contact', label: 'Kontakt' },
      ],
      langBtn: 'Sprache',
    },
    hero: {
      tag: 'Chinas führender LED-Schild-Hersteller',
      title1: 'Individuelle LED-Schilder',
      title2: 'Für Ihre Marke',
      sub: '3D-Buchstaben · LED · Infinity-Spiegel · Neon · Weltweiter Versand',
      cta: 'Kostenloses Angebot',
      ctaSub: 'Fabrikpreis · Kein Zwischenhändler',
    },
    products: {
      tag: 'Unsere Produkte',
      title: 'Professionelle Werbeschilder',
      items: [
        {
          name: '3D RGB Super-Leuchtbuchstaben',
          desc: 'Vollfarb-RGB-Beleuchtung mit 160.000+ Farbkombinationen und dynamischen Effekten. Hocheffektives Werbeschild für Einkaufszentren, Markenshops, Nachtclubs, Bars und Gebäudefassaden.',
          tag: 'Bestseller',
          features: ['Dynamischer RGB-Farbwechsel-Effekt', '3D-Kanalbuchstaben-Struktur', 'Hochhelle, langlebige LEDs', 'Innen- & Außenmontage', 'Individuelle Schrift, Größe & Logo', 'Fabrikdirekter Preis'],
        },
        {
          name: '3D Abyss Infinity-Buchstaben',
          desc: 'Mehrschichtige Spiegeltechnologie erzeugt einen atemberaubenden unendlichen Tiefeneffekt im Inneren jedes Buchstabens. Einfarb-LED (weiß, warmweiß oder individuell). Luxuriöse Verarbeitung.',
          tag: 'Viral',
          features: ['Unendlicher Spiegeltiefeneffekt', 'Mehrschichtige Spiegeltechnologie', 'Einfarb-LED (weiß / warmweiß / individuell)', 'Luxuriöse Verarbeitung', 'Showrooms, Salons, Einkaufszentren', 'Kostenloser Design & Muster-Service'],
        },
        {
          name: 'LED Infinity Mirror',
          desc: 'Individuelle LED-Infinity-Spiegel mit beeindruckendem 3D-Tiefeneffekt. Mehrschichtiges Spiegeldesign für hochwertige Showrooms, Boutiquen und Markenerlebnisräume.',
          tag: 'Premium',
          features: ['Mehrstufige Infinity-Tiefe', 'Vollständig anpassbare Größe & Form', 'Innen- & Außenmontage', 'Geringer Verbrauch, hohe Helligkeit', 'Ideal für Markenshowrooms', 'Weltweiter Versand'],
        },
        {
          name: 'LED Neon-Schilder',
          desc: 'Moderne LED-Technologie repliziert den klassischen Neon-Look — 80%+ Energieeinsparung, kein zerbrechliches Glas, individueller Text, Logo oder Form. Perfekt für Restaurants, Bars und Instagram-Wände.',
          tag: 'Trend',
          features: ['Moderner LED-Neon-Ersatz', '80%+ Energieeinsparung, ungiftig', 'Beliebiger Text, Logo, Form', 'Mehrere Farben verfügbar', 'Restaurants, Bars, Fotowände', 'Weltweiter Versand'],
        },
        {
          name: 'LED-Kanalbuchstaben',
          desc: 'Professionelle gewerbliche LED-Kanalbuchstaben, hell und langlebig. Höhen von 20cm bis 180cm. Individuelle Schrift, Farbe und Oberfläche. Ideal für Ladenfronten, Einkaufszentren und Außenwerbung.',
          tag: 'Klassisch',
          features: ['Höhen von 20cm bis 180cm', 'Helle, gleichmäßige Beleuchtung', 'Aluminium / Edelstahl / Acrylfront', 'Wetterfest innen & außen', 'Ladenfronten, Einkaufszentren, Wegweiser', 'Produktion 7–15 Werktage'],
        },
        {
          name: 'LED-Leuchtkasten',
          desc: 'Ultradünne, ultrahelle Leuchtkästen mit gleichmäßiger Beleuchtung. IP65 wasser- und staubdicht, beliebige Form und Größe. Perfekt für Markenpräsentationen, Schaufenster und Ausstellungen.',
          tag: 'Praktisch',
          features: ['IP65 wasser- & staubdicht', 'Ultradünn, gleichmäßige Beleuchtung', 'Individuelle Form & Größe', 'Geringer Verbrauch, hohe Helligkeit', 'Schaufenster, Ausstellungen, Malls', 'Weltweiter Versand'],
        },
      ],
    },
    calculator: {
      tag: 'KI-Sofortangebot',
      title: 'Angebot in 30 Sekunden',
      sub: 'Teilen Sie AVA Ihre Anforderungen mit: Text, Abmessungen, Material, Menge und Lieferziel — sofort Fabrikpreis',
      cta: 'Angebot starten →',
    },
    contact: {
      tag: 'Kontakt',
      title: 'Direkt vom Hersteller',
      sub: 'Professionelles Team zu Ihrer Verfügung, weltweiter Versand, kostenloses Design inklusive',
      wa: 'WhatsApp kontaktieren',
      wechat: 'WeChat kontaktieren',
      email: 'info@xd-ledsign.com',
      phone: '+86 188 5972 2389',
    },
    footer: {
      copy: '© 2025 XD Sign. Alle Rechte vorbehalten.',
      made: 'Professioneller LED-Schild-Hersteller',
    },
    chat: {
      welcome: 'Hallo! Ich bin AVA, KI-Angebotsassistent von XD Sign 🌟\n\nIch kann Ihnen helfen:\n• LED-Schild-Angebote berechnen\n• Das richtige Produkt empfehlen\n• Versandkosten schätzen\n\nWelche Art von Schild suchen Sie?',
      bubbles: ['👋 Hallo! Angebot für LED-Schilder?', '🏭 Fabrikpreise, kein Zwischenhändler!', '🚢 Weltweiter Versand verfügbar'],
      placeholder: 'Ihre Frage eingeben...',
      typing: 'Berechne...',
      waBtn: 'WhatsApp kontaktieren',
      waText: 'Hallo, ich habe XD Sign über Ihre Website gefunden und möchte ein Angebot für LED-Schilder anfragen.',
      errorMsg: 'Verbindungsfehler, bitte erneut versuchen.',
    },
  },

  it: {
    navbar: {
      links: [
        { href: '#products', label: 'Prodotti' },
        { href: '#calculator', label: 'Preventivo' },
        { href: '#contact', label: 'Contatti' },
      ],
      langBtn: 'Lingua',
    },
    hero: {
      tag: 'Produttore Leader di Insegne LED dalla Cina',
      title1: 'Insegne LED Personalizzate',
      title2: 'Per il Tuo Brand',
      sub: 'Lettere 3D · LED · Effetto Infinito · Neon · Spedizione Mondiale',
      cta: 'Preventivo Gratuito',
      ctaSub: 'Prezzo Diretto di Fabbrica · Senza Intermediari',
    },
    products: {
      tag: 'I Nostri Prodotti',
      title: 'Insegne Personalizzate Professionali',
      items: [
        {
          name: 'Lettere 3D RGB Super',
          desc: 'Illuminazione RGB a pieno colore programmabile con 160.000+ combinazioni cromatiche ed effetti dinamici. Segnaletica ad alto impatto per centri commerciali, negozi premium, locali notturni, bar e facciate.',
          tag: 'Bestseller',
          features: ['Effetto RGB dinamico a pieno colore', 'Struttura lettere canale 3D', 'LED alta luminosità lunga durata', 'Installazione interna ed esterna', 'Font, dimensione e logo personalizzati', 'Prezzo diretto di fabbrica'],
        },
        {
          name: 'Lettere 3D Abyss Infinity',
          desc: 'Tecnologia a specchi stratificati che crea uno stupefacente effetto di profondità infinita all\'interno di ogni lettera. LED monocromatico (bianco, bianco caldo o personalizzato). Finitura di lusso.',
          tag: 'Virale',
          features: ['Effetto specchio a profondità infinita', 'Tecnologia a specchi stratificati', 'LED mono (bianco / bianco caldo / custom)', 'Finitura premium di lusso', 'Showroom, saloni, centri commerciali', 'Design e mockup gratuiti'],
        },
        {
          name: 'LED Infinity Mirror',
          desc: 'Insegne LED infinity mirror personalizzate con effetto 3D mozzafiato. Design multi-strato per showroom di lusso, boutique e spazi di brand experience.',
          tag: 'Premium',
          features: ['Profondità infinity multi-strato', 'Dimensione e forma completamente custom', 'Interno ed esterno', 'Basso consumo, alta luminosità', 'Ideale per showroom di brand', 'Spedizione mondiale'],
        },
        {
          name: 'Insegne Neon LED Custom',
          desc: 'Tecnologia LED moderna che replica il classico effetto neon — risparmio energetico 80%+, nessun vetro fragile, testo personalizzato, logo o qualsiasi forma. Perfetto per ristoranti, bar e muri Instagram.',
          tag: 'Tendenza',
          features: ['Alternativa LED al neon classico', '80%+ risparmio energetico, non tossico', 'Testo, logo, qualsiasi forma', 'Diversi colori disponibili', 'Ristoranti, bar, muri virali', 'Spedizione mondiale'],
        },
        {
          name: 'Lettere LED a Canale',
          desc: 'Lettere a canale LED commerciali professionali, luminose e durature. Altezze disponibili da 20cm a 180cm. Font, colore e finitura personalizzati. Ideali per vetrine, centri commerciali e pubblicità esterna.',
          tag: 'Classico',
          features: ['Altezze da 20cm a 180cm', 'Illuminazione uniforme e intensa', 'Alluminio / acciaio inox / fronte acrilico', 'Resistente agli agenti atmosferici', 'Vetrine, centri commerciali, uffici', 'Produzione 7–15 giorni lavorativi'],
        },
        {
          name: 'Lightbox LED',
          desc: 'Lightbox ultra-sottili e ultra-luminosi con illuminazione uniforme. IP65 impermeabile e antipolvere, qualsiasi forma o dimensione. Perfetti per display di brand, vetrine e fiere.',
          tag: 'Pratico',
          features: ['IP65 impermeabile e antipolvere', 'Ultra-sottile, illuminazione uniforme', 'Forma e dimensione personalizzati', 'Basso consumo, alta luminosità', 'Vetrine, fiere, centri commerciali', 'Spedizione mondiale'],
        },
      ],
    },
    calculator: {
      tag: 'Preventivo AI Istantaneo',
      title: 'Preventivo in 30 Secondi',
      sub: 'Dì ad AVA le tue esigenze: testo, dimensioni, materiale, quantità e destinazione — prezzo di fabbrica subito',
      cta: 'Inizia Preventivo →',
    },
    contact: {
      tag: 'Contatti',
      title: 'Diretto dalla Fabbrica',
      sub: 'Team professionale a tua disposizione, spedizione mondiale, design gratuito incluso',
      wa: 'Contatta su WhatsApp',
      wechat: 'Contatta su WeChat',
      email: 'info@xd-ledsign.com',
      phone: '+86 188 5972 2389',
    },
    footer: {
      copy: '© 2025 XD Sign. Tutti i diritti riservati.',
      made: 'Produttore Professionale di Insegne LED',
    },
    chat: {
      welcome: 'Ciao! Sono AVA, l\'assistente AI preventivi di XD Sign 🌟\n\nPosso aiutarti a:\n• Calcolare preventivi per insegne LED\n• Consigliare il prodotto giusto\n• Stimare i costi di spedizione\n\nChe tipo di insegna stai cercando?',
      bubbles: ['👋 Ciao! Preventivo insegne LED?', '🏭 Prezzi diretti di fabbrica!', '🚢 Spedizione mondiale disponibile'],
      placeholder: 'Scrivi la tua domanda...',
      typing: 'Calcolo...',
      waBtn: 'Contatta su WhatsApp',
      waText: 'Ciao, ho trovato XD Sign tramite il vostro sito e vorrei un preventivo per insegne LED.',
      errorMsg: 'Errore di connessione, riprova.',
    },
  },

  fr: {
    navbar: {
      links: [
        { href: '#products', label: 'Produits' },
        { href: '#calculator', label: 'Devis' },
        { href: '#contact', label: 'Contact' },
      ],
      langBtn: 'Langue',
    },
    hero: {
      tag: 'Fabricant Leader d\'Enseignes LED de Chine',
      title1: 'Enseignes LED Personnalisées',
      title2: 'Pour Votre Marque',
      sub: 'Lettres 3D · LED · Effet Infini · Néon · Livraison Mondiale',
      cta: 'Devis Gratuit',
      ctaSub: 'Prix Usine Direct · Sans Intermédiaire',
    },
    products: {
      tag: 'Nos Produits',
      title: 'Enseignes Professionnelles Sur Mesure',
      items: [
        {
          name: 'Lettres 3D RGB Super',
          desc: 'Éclairage RGB couleur complète programmable avec 160 000+ combinaisons et effets dynamiques. Signalétique haut impact pour centres commerciaux, boutiques premium, clubs, bars et façades.',
          tag: 'Bestseller',
          features: ['Effet RGB dynamique couleur complète', 'Structure lettre canal 3D', 'LED haute luminosité longue durée', 'Installation intérieure & extérieure', 'Police, taille et logo personnalisés', 'Prix usine direct'],
        },
        {
          name: 'Lettres 3D Abyss Infinity',
          desc: 'Technologie à miroirs superposés créant un stupéfiant effet de profondeur infinie à l\'intérieur de chaque lettre. LED monochrome (blanc, blanc chaud ou personnalisé). Finition luxe.',
          tag: 'Viral',
          features: ['Effet miroir profondeur infinie', 'Technologie miroirs superposés', 'LED mono (blanc / blanc chaud / custom)', 'Finition luxe premium', 'Showrooms, salons, centres commerciaux', 'Design et maquette gratuits'],
        },
        {
          name: 'LED Infinity Mirror',
          desc: 'Enseignes LED infinity mirror personnalisées avec effet 3D saisissant. Design multi-couches pour showrooms haut de gamme, boutiques et espaces d\'expérience de marque.',
          tag: 'Premium',
          features: ['Profondeur infinity multi-couches', 'Taille et forme entièrement custom', 'Intérieur & extérieur', 'Faible consommation, haute luminosité', 'Idéal pour showrooms de marque', 'Livraison mondiale'],
        },
        {
          name: 'Enseignes Néon LED Custom',
          desc: 'Technologie LED moderne reproduisant l\'effet néon classique — économie d\'énergie 80%+, pas de verre fragile, texte personnalisé, logo ou toute forme. Parfait pour restaurants, bars et murs Instagram.',
          tag: 'Tendance',
          features: ['Alternative LED au néon classique', '80%+ d\'économie, non toxique', 'Texte, logo, toute forme', 'Plusieurs couleurs disponibles', 'Restaurants, bars, murs viraux', 'Livraison mondiale'],
        },
        {
          name: 'Lettres LED Caisson',
          desc: 'Lettres caisson LED commerciales professionnelles, lumineuses et durables. Hauteurs de 20cm à 180cm. Police, couleur et finition personnalisées. Idéales pour vitrines, centres commerciaux et publicité extérieure.',
          tag: 'Classique',
          features: ['Hauteurs de 20cm à 180cm', 'Éclairage uniforme intense', 'Aluminium / inox / face acrylique', 'Résistant aux intempéries', 'Vitrines, centres commerciaux, bureaux', 'Production 7–15 jours ouvrés'],
        },
        {
          name: 'Caissons Lumineux LED',
          desc: 'Caissons lumineux ultra-minces et ultra-lumineux avec éclairage uniforme. IP65 imperméable et anti-poussière, toute forme ou taille. Parfaits pour présentations de marque, vitrines et salons.',
          tag: 'Pratique',
          features: ['IP65 imperméable & anti-poussière', 'Ultra-mince, éclairage uniforme', 'Forme et taille personnalisées', 'Faible consommation, haute luminosité', 'Vitrines, salons, centres commerciaux', 'Livraison mondiale'],
        },
      ],
    },
    calculator: {
      tag: 'Devis IA Instantané',
      title: 'Devis en 30 Secondes',
      sub: 'Dites à AVA vos besoins : texte, dimensions, matériau, quantité et destination — prix usine immédiat',
      cta: 'Démarrer le Devis →',
    },
    contact: {
      tag: 'Contact',
      title: 'Direct de l\'Usine',
      sub: 'Équipe professionnelle à votre service, livraison mondiale, design gratuit inclus',
      wa: 'Contacter par WhatsApp',
      wechat: 'Contacter par WeChat',
      email: 'info@xd-ledsign.com',
      phone: '+86 188 5972 2389',
    },
    footer: {
      copy: '© 2025 XD Sign. Tous droits réservés.',
      made: 'Fabricant Professionnel d\'Enseignes LED',
    },
    chat: {
      welcome: 'Bonjour ! Je suis AVA, l\'assistante IA devis de XD Sign 🌟\n\nJe peux vous aider à :\n• Calculer des devis pour enseignes LED\n• Recommander le bon produit\n• Estimer les frais de livraison\n\nQuel type d\'enseigne recherchez-vous ?',
      bubbles: ['👋 Bonjour ! Devis enseigne LED ?', '🏭 Prix usine direct !', '🚢 Livraison mondiale disponible'],
      placeholder: 'Écrivez votre question...',
      typing: 'Calcul en cours...',
      waBtn: 'Contacter par WhatsApp',
      waText: 'Bonjour, j\'ai trouvé XD Sign via votre site et je souhaite un devis pour des enseignes LED.',
      errorMsg: 'Erreur de connexion, veuillez réessayer.',
    },
  },
}
