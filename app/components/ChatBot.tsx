'use client'
import { useState, useRef, useEffect } from 'react'
import { useLang } from '../LangContext'
import { t } from '../translations'
import type { Lang } from '../translations'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const LANG_TO_BCP47: Record<Lang, string> = {
  zh: 'zh-CN',
  en: 'en-US',
  ro: 'ro-RO',
  de: 'de-DE',
  it: 'it-IT',
  fr: 'fr-FR',
}

function getVoice(lang: Lang): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices()
  const bcp = LANG_TO_BCP47[lang]
  return (
    voices.find(v => v.lang === bcp) ||
    voices.find(v => v.lang.startsWith(lang)) ||
    voices.find(v => v.lang.startsWith('en')) ||
    null
  )
}

function speak(text: string, lang: Lang) {
  if (typeof window === 'undefined') return
  window.speechSynthesis.cancel()
  const plain = text.replace(/[*_#`~>]/g, '').slice(0, 300)
  const utt = new SpeechSynthesisUtterance(plain)
  utt.lang = LANG_TO_BCP47[lang]
  const voice = getVoice(lang)
  if (voice) utt.voice = voice
  utt.rate = lang === 'zh' ? 0.9 : 0.95
  utt.pitch = 1.1
  window.speechSynthesis.speak(utt)
}

export default function ChatBot() {
  const { lang } = useLang()
  const ui = t[lang].chat

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: ui.welcome },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const [bubbleIdx, setBubbleIdx] = useState(0)
  const [showBubble, setShowBubble] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Update welcome message when lang changes (no user messages yet)
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].role === 'assistant') {
        return [{ role: 'assistant', content: t[lang].chat.welcome }]
      }
      return prev
    })
  }, [lang])

  // Bubble cycle
  useEffect(() => {
    const t1 = setTimeout(() => setShowBubble(true), 3000)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (!showBubble || open) return
    const interval = setInterval(() => {
      setBubbleIdx(i => (i + 1) % ui.bubbles.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [showBubble, open, ui.bubbles.length])

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [messages, open])

  async function send() {
    const text = input.trim()
    if (!text || loading) return
    const userMsg: Message = { role: 'user', content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, lang }),
      })
      const data = await res.json()
      const reply = data.reply || ui.errorMsg
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
      speak(reply, lang)
      setSpeaking(true)
      const wordCount = reply.split(/\s+/).length
      setTimeout(() => setSpeaking(false), Math.max(2000, wordCount * 400))
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: ui.errorMsg }])
    } finally {
      setLoading(false)
    }
  }

  const waUrl = `https://wa.me/8618859718326?text=${encodeURIComponent(ui.waText)}`

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-3 left-3 md:bottom-24 md:right-6 md:left-auto z-50 md:w-[380px] bg-zinc-950 border border-xblue/20 flex flex-col shadow-2xl" style={{ height: '520px', maxHeight: '75dvh' }}>
          {/* Header */}
          <div className="px-4 py-3 flex items-center gap-3 bg-gradient-to-r from-xblue to-xblue-light">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              AVA
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">AVA — XD Sign</p>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                {speaking
                  ? (lang === 'zh' ? '正在说话...' : lang === 'ro' ? 'Vorbește...' : lang === 'de' ? 'Spricht...' : lang === 'it' ? 'Sta parlando...' : lang === 'fr' ? 'Parle...' : 'Speaking...')
                  : (lang === 'zh' ? '在线报价' : lang === 'ro' ? 'Online' : lang === 'de' ? 'Online' : lang === 'it' ? 'Online' : lang === 'fr' ? 'En ligne' : 'Online')
                }
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white text-xl leading-none flex-shrink-0">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-black/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-xblue flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-0.5">A</div>
                )}
                <div className={`max-w-[80%] px-3 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-xblue text-white rounded-2xl rounded-br-sm'
                    : 'bg-zinc-900 text-white/90 border border-white/5 rounded-2xl rounded-bl-sm'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-xblue flex items-center justify-center text-white text-xs font-bold flex-shrink-0">A</div>
                <div className="bg-zinc-900 border border-white/5 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                  <span className="text-white/40 text-xs mr-1">{ui.typing}</span>
                  <span className="w-1.5 h-1.5 bg-xblue rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-xblue rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-xblue rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* WhatsApp quick action */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border-t border-[#25D366]/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-[#25D366] text-xs font-medium">{ui.waBtn}</span>
          </a>

          {/* Input */}
          <div className="border-t border-white/5 p-3 flex gap-2 bg-zinc-950">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder={ui.placeholder}
              className="flex-1 bg-zinc-900 border border-white/10 text-white placeholder-white/30 px-3 py-2.5 text-sm focus:outline-none focus:border-xblue/50 transition-colors"
              style={{ fontSize: '16px' }}
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="bg-xblue hover:bg-xblue-light text-white w-10 h-10 flex items-center justify-center transition-colors disabled:opacity-40 flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Bubble notification */}
      {showBubble && !open && (
        <div
          className="fixed bottom-24 right-4 z-50 bg-zinc-900 border border-xblue/30 px-4 py-3 max-w-[220px] cursor-pointer shadow-xl"
          onClick={() => { setOpen(true); setShowBubble(false) }}
        >
          <button
            className="absolute -top-2 -right-2 bg-zinc-700 rounded-full w-5 h-5 text-xs flex items-center justify-center text-white/60 hover:bg-zinc-600"
            onClick={e => { e.stopPropagation(); setShowBubble(false) }}
          >×</button>
          <p className="text-sm text-white/80">{ui.bubbles[bubbleIdx]}</p>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => { setOpen(o => !o); setShowBubble(false) }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-xblue hover:bg-xblue-light text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
        aria-label="Chat AVA"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="font-bold text-sm tracking-wider">AVA</span>
        )}
      </button>
    </>
  )
}
