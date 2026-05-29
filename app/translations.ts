export type Lang = 'zh' | 'en' | 'ro' | 'de' | 'it' | 'fr'

export const t: Record<Lang, {
  navbar: { links: { href: string; label: string }[]; langBtn: string }
  hero: { tag: string; title1: string; title2: string; sub: string; cta: string; ctaSub: string }
  products: { tag: string; title: string; items: { name: string; desc: string; tag: string }[] }
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
        { name: '3D RGB立体字', desc: '全彩RGB灯光效果，可程序控制颜色变换，适合高端商场和品牌展示', tag: '畅销款' },
        { name: '无限镜深渊字', desc: '独特的深度镜像效果，视觉震撼，让您的品牌脱颖而出', tag: '网红款' },
        { name: 'LED发光字', desc: '节能高效，亮度均匀，适合户外广告牌和商铺门头', tag: '经典款' },
        { name: 'LED霓虹灯', desc: '复古霓虹效果，现代LED技术，安全耐用，适合餐厅酒吧', tag: '潮流款' },
        { name: 'LED槽字', desc: '专业商业字体，适合商场入口、写字楼导视系统', tag: '商务款' },
        { name: 'LED灯箱', desc: '超薄超亮灯箱，定制任意形状和尺寸，防水防尘', tag: '实用款' },
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
        { name: '3D RGB Super Letters', desc: 'Full-color RGB lighting with programmable color effects, perfect for premium retail and brand displays', tag: 'Best Seller' },
        { name: 'Abyss Infinity Letters', desc: 'Unique depth mirror effect, visually stunning, makes your brand stand out instantly', tag: 'Viral' },
        { name: 'LED Channel Letters', desc: 'Energy-efficient, uniform brightness, ideal for outdoor signage and storefronts', tag: 'Classic' },
        { name: 'LED Neon Signs', desc: 'Vintage neon look with modern LED tech — safe, durable, perfect for restaurants and bars', tag: 'Trending' },
        { name: 'LED Cabinet Letters', desc: 'Professional business font signs, ideal for mall entrances and office buildings', tag: 'Business' },
        { name: 'LED Light Boxes', desc: 'Ultra-thin ultra-bright light boxes, custom shape and size, waterproof', tag: 'Practical' },
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
        { name: 'Litere 3D RGB', desc: 'Efecte RGB full-color programabile, perfecte pentru magazine premium și afișaje de brand', tag: 'Best Seller' },
        { name: 'Litere Efect Infinit', desc: 'Efect unic de oglindă adâncă, spectaculos vizual, brandul tău iese în evidență', tag: 'Viral' },
        { name: 'Litere Canal LED', desc: 'Eficiente energetic, luminozitate uniformă, ideale pentru publicitate exterioară', tag: 'Clasic' },
        { name: 'Neon LED', desc: 'Look neon retro cu tehnologie LED modernă — sigure, durabile, perfecte pentru restaurante', tag: 'Trendy' },
        { name: 'Litere Casetate', desc: 'Font profesional de business, ideale pentru mall-uri și clădiri de birouri', tag: 'Business' },
        { name: 'Casete Luminoase', desc: 'Ultra-subțiri ultra-luminoase, formă și dimensiune custom, rezistente la apă', tag: 'Practic' },
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
        { name: '3D RGB Leuchtbuchstaben', desc: 'Vollfarbige RGB-Beleuchtung mit programmierbaren Farbeffekten, perfekt für Premium-Einzelhandel', tag: 'Bestseller' },
        { name: 'Infinity-Spiegel Buchstaben', desc: 'Einzigartiger Tiefenspiegel-Effekt, visuell beeindruckend, Ihre Marke sticht sofort hervor', tag: 'Viral' },
        { name: 'LED-Kanalschriften', desc: 'Energieeffizient, gleichmäßige Helligkeit, ideal für Außenwerbung und Schaufenster', tag: 'Klassisch' },
        { name: 'LED Neon-Schilder', desc: 'Vintage-Neon-Look mit moderner LED-Technik — sicher, langlebig, perfekt für Restaurants', tag: 'Trend' },
        { name: 'LED-Kastenleuchten', desc: 'Professionelle Geschäftsschriften, ideal für Einkaufszentren und Bürogebäude', tag: 'Business' },
        { name: 'LED-Leuchtkasten', desc: 'Ultradünne ultrastrahlende Leuchtkästen, individuelle Form und Größe, wasserdicht', tag: 'Praktisch' },
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
        { name: 'Lettere 3D RGB', desc: 'Illuminazione RGB a pieno colore con effetti programmabili, perfette per negozi premium', tag: 'Bestseller' },
        { name: 'Lettere Infinity Mirror', desc: 'Effetto specchio profondo unico, visivamente spettacolare, il tuo brand spicca subito', tag: 'Virale' },
        { name: 'Lettere LED a Canale', desc: 'Efficienza energetica, luminosità uniforme, ideali per pubblicità esterna e vetrine', tag: 'Classico' },
        { name: 'Insegne Neon LED', desc: 'Look neon vintage con tecnologia LED moderna — sicure, durature, perfette per ristoranti', tag: 'Tendenza' },
        { name: 'Lettere a Cassetta', desc: 'Font business professionale, ideali per centri commerciali e uffici', tag: 'Business' },
        { name: 'Lightbox LED', desc: 'Ultrasottili e ultraluminosi, forma e dimensione custom, impermeabili', tag: 'Pratico' },
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
        { name: 'Lettres 3D RGB', desc: 'Éclairage RGB couleur complète avec effets programmables, parfait pour les boutiques premium', tag: 'Bestseller' },
        { name: 'Lettres Infinity Mirror', desc: 'Effet miroir profond unique, visuellement spectaculaire, votre marque se démarque immédiatement', tag: 'Viral' },
        { name: 'Lettres Caisson LED', desc: 'Économes en énergie, luminosité uniforme, idéales pour la publicité extérieure', tag: 'Classique' },
        { name: 'Enseignes Néon LED', desc: 'Look néon vintage avec technologie LED moderne — sûres, durables, parfaites pour restaurants', tag: 'Tendance' },
        { name: 'Lettres Boîtier', desc: 'Police professionnelle business, idéales pour centres commerciaux et immeubles de bureaux', tag: 'Business' },
        { name: 'Caissons Lumineux', desc: 'Ultra-minces et ultra-lumineux, forme et taille personnalisées, imperméables', tag: 'Pratique' },
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
