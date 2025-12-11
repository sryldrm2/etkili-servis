import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallButton from '@/components/StickyCallButton'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Etkili Servis - Endüstriyel Mutfak Ekipmanları Tamir Servisi',
  description: 'İstanbul Anadolu Yakası, Gebze, Kocaeli ve İzmit bölgelerinde endüstriyel mutfak ekipmanları tamir hizmeti. Hızlı, güvenilir ve garantili servis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCallButton />
        <WhatsAppButton />
      </body>
    </html>
  )
}

