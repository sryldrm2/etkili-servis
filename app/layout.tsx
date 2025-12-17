import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallButton from '@/components/StickyCallButton'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.etkiliendustriyelservisi.com'),
  title: 'Etkili Endüstriyel Servis | İstanbul, Kocaeli, Gebze Endüstriyel Mutfak Ekipmanları Tamir Servisi',
  description:
   'İstanbul Anadolu Yakası, Kocaeli ve Gebze bölgesinde tüm endüstriyel mutfak ekipmanları için hızlı, güvenilir tamir ve teknik servis. Hemen arayın: 0535 418 24 31.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: 'Endüstriyel Mutfak Servisi İstanbul | Etkili Servis',
    description: 
     'İstanbul, Gebze ve Kocaeli genelinde hızlı ve garantili endüstriyel mutfak teknik servisi.',
     url: 'https://www.etkiliendustriyelservisi.com',
     siteName: 'Etkili Endüstriyel Servis',
     locale: 'tr_TR',
     type: 'website',
     images: [
      {
        url: 'hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Etkili Endüstriyel Servis',
      },
     ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {/* Google Analytics Global Site Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VE6X24Z8N9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VE6X24Z8N9');
          `}
        </Script>
        {/* LocalBusiness Schema Markup */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Etkili Endüstriyel Servis",
              "image": "https://www.etkiliendustriyelservisi.com/logo.png",
              "url": "https://www.etkiliendustriyelservisi.com/",
              "telephone": ["+905354182431", "+905051915357"],
              "email": "info@etkiliendustriyelservisi.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Merve Mah. Sait Sok. No:18/A",
                "addressLocality": "Sancaktepe",
                "addressRegion": "İstanbul",
                "postalCode": "34785",
                "addressCountry": "TR"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:30",
                  "closes": "17:00"
                }
              ],
              "areaServed": [
                {
                  "@type": "State",
                  "name": "İstanbul"
                },
                {
                  "@type": "City",
                  "name": "Kocaeli"
                },
                {
                  "@type": "City",
                  "name": "Gebze"
                },
                {
                  "@type": "City",
                  "name": "İzmit"
                }
              ],
              "hasMap": "https://maps.google.com/maps?q=Merve+Mahallesi+Sait+Sokak+No:18/A+Sancaktepe+İstanbul"
            })
          }}
        />
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

