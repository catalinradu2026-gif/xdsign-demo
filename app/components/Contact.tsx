'use client'
import { useLang } from '../LangContext'
import { t } from '../translations'

export default function Contact() {
  const { lang } = useLang()
  const tr = t[lang].contact

  const waUrl = `https://wa.me/8618859722389?text=${encodeURIComponent(t[lang].chat.waText)}`

  return (
    <section id="contact" className="py-32 bg-zinc-950 border-t border-white/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xblue text-xs tracking-[0.3em] uppercase mb-6">{tr.tag}</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">{tr.title}</h2>
        <p className="text-white/50 leading-relaxed mb-12">{tr.sub}</p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {/* WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-white/10 bg-[#25D366]/10 hover:bg-[#25D366]/20 p-6 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#25D366] flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">{tr.wa}</div>
              <div className="text-white/40 text-xs">{tr.phone}</div>
            </div>
          </a>

          {/* WeChat */}
          <div className="flex items-center gap-4 border border-white/10 bg-[#07C160]/10 p-6">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#07C160] flex-shrink-0">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c-.098-.544-.147-1.104-.147-1.675 0-3.76 3.547-6.812 7.917-6.812.38 0 .753.025 1.12.07C15.9 4.348 12.554 2.188 8.691 2.188zm-2.361 3.06a1.062 1.062 0 1 1 0 2.125 1.062 1.062 0 0 1 0-2.125zm4.927 0a1.062 1.062 0 1 1 0 2.125 1.062 1.062 0 0 1 0-2.125zM24 14.465c0-3.399-3.188-6.155-7.124-6.155-3.937 0-7.124 2.756-7.124 6.155 0 3.4 3.187 6.155 7.124 6.155.748 0 1.467-.098 2.139-.28a.657.657 0 0 1 .54.074l1.428.836a.247.247 0 0 0 .126.041.222.222 0 0 0 .221-.221c0-.054-.021-.107-.036-.16l-.294-1.11a.444.444 0 0 1 .16-.5C23.086 18.17 24 16.405 24 14.465zm-9.491-1.24a.799.799 0 1 1 0-1.598.799.799 0 0 1 0 1.597zm4.733 0a.799.799 0 1 1 0-1.598.799.799 0 0 1 0 1.597z"/>
            </svg>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">{tr.wechat}</div>
              <div className="text-white/40 text-xs">xd-ledsign</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <a href={`mailto:${tr.email}`} className="block text-white/40 hover:text-white text-sm transition-colors">
            ✉️ {tr.email}
          </a>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block text-white/40 hover:text-white text-sm transition-colors">
            📞 {tr.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
