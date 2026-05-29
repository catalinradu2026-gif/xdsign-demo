import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'

let groq: Groq | null = null
function getGroq() {
  if (!groq) groq = new Groq({ apiKey: process.env.GROQ_API_KEY })
  return groq
}

const LANG_CODE: Record<string, string> = {
  zh: 'zh', en: 'en', ro: 'ro', de: 'de', it: 'it', fr: 'fr',
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const audio = formData.get('audio') as File | null
    const lang = (formData.get('lang') as string) || 'zh'

    if (!audio) return NextResponse.json({ text: '' }, { status: 400 })

    const transcription = await getGroq().audio.transcriptions.create({
      file: audio,
      model: 'whisper-large-v3',
      language: LANG_CODE[lang] || 'zh',
      response_format: 'json',
    })

    return NextResponse.json({ text: transcription.text || '' })
  } catch (err) {
    console.error('Transcribe error:', err)
    return NextResponse.json({ text: '' }, { status: 200 })
  }
}
