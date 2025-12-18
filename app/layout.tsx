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
  metadataBase: new URL('https://etkiliendustriyelservisi.com'),
  title: {
    default: "Etkili Servis | İstanbul, Kocaeli, Gebze Endüstriyel Mutfak Servisi",
    template: "%s | Etkili Servis",
  },
  description:
    'Etkili Servis; İstanbul, Kocaeli ve Gebze bölgelerinde endüstriyel mutfak ekipmanları, bulaşık makinesi ve fırınlar için profesyonel tamir hizmeti sunar. Hemen arayın: 0535 418 24 31.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Etkili Servis | Endüstriyel Mutfak Teknik Servisi',
    description: 'İstanbul ve Kocaeli genelinde garantili endüstriyel mutfak tamir hizmetleri.',
    images: ['https://etkiliendustriyelservisi.com/hero-bg.jpg'], // Tam URL
  },
  openGraph: {
    title: 'Etkili Servis | Endüstriyel Mutfak Teknik Servisi',
    description:
      'İstanbul, Gebze ve Kocaeli genelinde hızlı ve garantili endüstriyel mutfak teknik servisi.',
    url: 'https://etkiliendustriyelservisi.com',
    siteName: 'Etkili Servis',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://etkiliendustriyelservisi.com/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Etkili Servis - Endüstriyel Mutfak Teknik Hizmetleri',
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
              "name": "Etkili Servis",
              "image": "https://etkiliendustriyelservisi.com/brands/logo.png",
              "url": "https://etkiliendustriyelservisi.com/",
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
              "priceRange": "₺₺",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:30",
                  "closes": "17:00"
                }
              ],
              "areaServed": [
                {"@type": "State", "name": "İstanbul"},
                {"@type": "City", "name": "Kocaeli"},
                {"@type": "City", "name": "Gebze"},
                {"@type": "City", "name": "İzmit"}
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

