import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from './LangContext'

export const metadata: Metadata = {
  title: 'XD Sign — Custom LED Signs & Volumetric Letters',
  description: 'Professional LED sign manufacturer from China. 3D letters, neon signs, infinity mirror effects. Factory direct price. Worldwide shipping.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
