import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Calculator from './components/Calculator'
import Contact from './components/Contact'
import ChatBot from './components/ChatBot'
import { useLang } from './LangContext'

function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-white/5 text-center">
      <p className="text-white/20 text-xs tracking-wide">© 2025 XD Sign · info@xd-ledsign.com</p>
      <p className="text-white/10 text-xs mt-1">AI Demo powered by AIcraiova</p>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Calculator />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  )
}
