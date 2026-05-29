import { NextRequest, NextResponse } from 'next/server'

const COUNTRY_LANG: Record<string, string> = {
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh', SG: 'zh',
  RO: 'ro', MD: 'ro',
  DE: 'de', AT: 'de', CH: 'de',
  IT: 'it',
  FR: 'fr', BE: 'fr',
}

export async function GET(req: NextRequest) {
  const country = req.headers.get('x-vercel-ip-country')?.toUpperCase() || ''
  const lang = COUNTRY_LANG[country] || 'en'
  return NextResponse.json({ lang, country })
}
