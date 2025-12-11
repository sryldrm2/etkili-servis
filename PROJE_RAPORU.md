# Etkili Servis - Proje Raporu

**Tarih:** 2024  
**Proje Adı:** Etkili Servis - Endüstriyel Mutfak Ekipmanları Tamir Servisi  
**Teknoloji:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS

---

## 📋 İçindekiler

1. [Proje Yapısı](#proje-yapısı)
2. [Dosya Yapısı](#dosya-yapısı)
3. [Kod Dosyaları](#kod-dosyaları)
4. [Renk Paleti](#renk-paleti)
5. [Sayfalar ve Bileşenler](#sayfalar-ve-bileşenler)
6. [Statik Dosyalar](#statik-dosyalar)

---

## 📁 Proje Yapısı

```
etkili-servis/
├── app/                    # Next.js App Router sayfaları
│   ├── globals.css         # Global CSS stilleri
│   ├── layout.tsx          # Ana layout bileşeni
│   ├── page.tsx            # Anasayfa
│   ├── not-found.tsx       # 404 sayfası
│   ├── actions/            # Server Actions
│   │   └── contact.ts      # İletişim formu server action
│   ├── hizmetlerimiz/      # Hizmetlerimiz sayfası
│   ├── iletisim/           # İletişim sayfası
│   ├── referanslar/        # Referanslar sayfası
│   └── hizmetler/[slug]/   # Dinamik hizmet detay sayfaları
├── components/             # Yeniden kullanılabilir bileşenler
│   ├── Header.tsx          # Header bileşeni
│   ├── Footer.tsx          # Footer bileşeni
│   ├── ServiceCard.tsx     # Hizmet kartı bileşeni
│   ├── BrandCard.tsx       # Marka kartı bileşeni
│   ├── ReferenceCard.tsx   # Referans kartı bileşeni
│   └── StickyCallButton.tsx # Mobil sabit arama butonu
├── data/                   # Merkezi veri dosyaları
│   ├── services.ts         # Tüm hizmet verileri
│   ├── brands.ts           # Marka verileri
│   └── references.ts       # Referans verileri
├── types/                  # TypeScript tip tanımları
│   └── index.ts            # Service, Brand, Reference interface'leri
├── public/                 # Statik dosyalar
│   ├── logo.svg            # Logo dosyası
│   ├── hero-bg.jpg         # Hero arka plan görseli
│   ├── urunler/            # Ürün görselleri (18 adet)
│   ├── referanslar/        # Referans logoları (5 adet)
│   └── [marka-logoları]    # Marka logoları (18 adet)
├── package.json            # Proje bağımlılıkları
├── tailwind.config.js      # Tailwind CSS yapılandırması
├── tsconfig.json           # TypeScript yapılandırması
├── next.config.js          # Next.js yapılandırması
└── postcss.config.js       # PostCSS yapılandırması
```

---

## 🎨 Renk Paleti

Proje, monokromatik mavi/lacivert renk paleti kullanmaktadır:

- **Primary Lightest:** `#3E92CC` - En açık mavi (Buz mavisi/Vurgu)
- **Primary Light:** `#2A628F` - Orta mavi
- **Primary Dark:** `#16324F` - Koyu lacivert (Ana kurumsal renk)
- **Primary Darkest:** `#13293D` - En koyu lacivert/Antrasit
- **Background Light:** `#F7F7F7` - Temiz beyaz/Çok hafif gri
- **Text Light:** `#FFFFFF` - Beyaz metin
- **Text Dark:** `#16324F` - Koyu metin

---

## 📄 Kod Dosyaları

### 1. `package.json`

```json
{
  "name": "etkili-servis",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "next": "^14.2.5"
  },
  "devDependencies": {
    "@types/node": "^20.14.12",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.5.4"
  }
}
```

### 2. `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: '#3E92CC', // En Açık Mavi - Buz Mavisi/Vurgu
          light: '#2A628F',    // Orta Mavi
          dark: '#16324F',     // Koyu Lacivert - Ana Kurumsal Renk
          darkest: '#13293D',  // En Koyu Lacivert/Antrasit
          DEFAULT: '#16324F',  // Default olarak dark kullan
        },
        bg: {
          light: '#F7F7F7',    // Temiz Beyaz/Çok Hafif Gri
        },
      },
    },
  },
  plugins: [],
}
```

### 3. `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 4. `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```

### 5. `postcss.config.js`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 6. `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary-lightest: #3E92CC;
  --color-primary-light: #2A628F;
  --color-primary-dark: #16324F;
  --color-primary-darkest: #13293D;
  --color-bg-light: #F7F7F7;
  --color-text-light: #FFFFFF;
  --color-text-dark: #16324F; /* Using primary-dark for default dark text */
}

body {
  color: var(--color-text-dark);
  background: var(--color-bg-light);
}
```

### 7. `app/layout.tsx`

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
      </body>
    </html>
  )
}
```

### 8. `app/page.tsx` (Anasayfa)

```typescript
import Link from 'next/link'

const services = [
  {
    id: 1,
    slug: 'endustriyel-bulasik-makinesi',
    title: 'Endüstriyel Bulaşık Makinesi',
    description: 'Endüstriyel bulaşık makinelerinizin tamir, bakım ve yedek parça değişim hizmetleri. Tüm marka ve modeller için profesyonel çözümler.',
    image: '/urunler/endustriyel-bulasik-makinesi.jpg',
  },
  {
    id: 2,
    slug: 'endustriyel-firin',
    title: 'Endüstriyel Fırın',
    description: 'Endüstriyel fırınlarınızın elektrik, mekanik ve elektronik arızalarının tamiri. Pişirme sorunları ve sıcaklık ayarları için uzman hizmet.',
    image: '/urunler/fırın.jpg',
  },
  {
    id: 3,
    slug: 'soguk-hava-deposu',
    title: 'Soğuk Hava Deposu',
    description: 'Soğuk hava depolarınızın bakım, onarım ve soğutma sistemlerinin servisi. Enerji tasarrufu için optimize edilmiş çözümler.',
    image: '/urunler/soguk-hava-deposu.jpg',
  },
  {
    id: 4,
    slug: 'endustriyel-fritoz',
    title: 'Endüstriyel Fritöz',
    description: 'Endüstriyel fritözlerinizin tamir, bakım ve yedek parça değişim hizmetleri. Yağ filtreleme sistemleri için profesyonel servis.',
    image: '/urunler/fritoz.jpg',
  },
  {
    id: 5,
    slug: 'endustriyel-izgara',
    title: 'Endüstriyel Izgara',
    description: 'Endüstriyel ızgaralarınızın tamir, bakım ve brülör sistemlerinin servisi. Güvenlik kontrolleri ve performans optimizasyonu.',
    image: '/urunler/ızgara.jpg',
  },
  {
    id: 6,
    slug: 'endustriyel-ocak',
    title: 'Endüstriyel Ocak',
    description: 'Endüstriyel ocaklarınızın tamir, bakım ve brülör sistemlerinin servisi. Elektrik ve gaz ocakları için uzman hizmet.',
    image: '/urunler/ocak.jpg',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-light">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 px-4 bg-primary-dark overflow-hidden min-h-[80vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary-dark/80" />
        
        {/* Content */}
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Endüstriyel Mutfak Ekipmanları
            <span className="block text-primary-lightest mt-2">Tamir Servisi</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Hızlı, güvenilir ve garantili tamir hizmeti ile işletmenizin mutfak ekipmanlarını 
            en kısa sürede çalışır hale getiriyoruz.
          </p>
        </div>
      </section>

      {/* Service Areas Band */}
      <section className="bg-primary-darkest py-6 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white">
            <span className="font-semibold text-lg">Hizmet Bölgelerimiz:</span>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>İstanbul Anadolu Yakası</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Gebze</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Kocaeli</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>İzmit</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards - Product Catalog */}
      <section className="py-16 px-4 bg-bg-light">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
            Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/hizmetler/${service.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image */}
                <div className="pt-6 px-6 flex justify-center">
                  <div className="h-40 w-40 bg-gray-50 border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col items-center text-center gap-2">
                  <h3 className="text-xl font-semibold text-primary-dark group-hover:text-primary-lightest transition-colors">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center text-primary-dark hover:text-primary-lightest font-medium text-sm transition-colors">
                    İncele →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="flex justify-center mt-12">
            <Link
              href="/hizmetlerimiz"
              className="bg-primary-lightest text-white font-bold px-10 py-4 rounded-lg hover:bg-primary-lightest/90 transition-colors shadow-md inline-flex items-center text-lg"
            >
              Daha Fazlasını Gör
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 bg-primary-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Hakkımızda
          </h2>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Sektörde uzman kadromuzla hizmetimiz 15 yıldır devam etmektedir.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 bg-bg-light">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
            Markalar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Öztiryakiler', logo: '/oztiryakiler-logo.svg' },
              { name: 'Kayalar', logo: '/kayalar.png' },
              { name: 'Empero', logo: '/empero.png' },
              { name: 'İnoksan', logo: '/inoksan.png' },
              { name: 'Portabianco', logo: '/portabianco.png' },
              { name: 'Hobart', logo: '/hobart.png' },
              { name: 'Fagor', logo: '/fagor.svg' },
              { name: 'Ottoman', logo: '/ottoman.png' },
              { name: 'Himaksan', logo: '/himaksan.png' },
              { name: 'Emeksan', logo: '/emeksan.png' },
              { name: 'Pimak', logo: '/pimak.png' },
              { name: 'Ndustrio', logo: '/ndustrio.png' },
              { name: 'Remta', logo: '/remta.webp' },
              { name: 'Meşale', logo: '/meşale.png' },
              { name: 'Atalay', logo: '/atalay.png' },
              { name: 'Bosfor', logo: '/bosfor.png' },
              { name: 'Senox', logo: '/senox.jpg' },
              { name: 'Winterhalter', logo: '/winterhalter.png' },
            ].map((brand, index) => (
              <a
                key={index}
                href="#"
                className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-md transition-all group h-32"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-20 h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
```

### 9. `app/not-found.tsx`

```typescript
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-bg-light">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-dark mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Sayfa Bulunamadı</h2>
        <p className="text-gray-600 mb-8">Aradığınız sayfa mevcut değil.</p>
        <Link
          href="/"
          className="inline-block bg-primary-lightest hover:bg-primary-lightest/90 text-white font-bold px-8 py-3 rounded-lg transition-colors"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </div>
  )
}
```

### 10. `components/Header.tsx`

```typescript
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-primary-darkest border-b border-primary-darkest/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary-darkest font-bold text-xl">ES</span>
            </div>
            <span className="text-white font-bold text-xl">Etkili Servis</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              Anasayfa
            </Link>
            <Link 
              href="/hizmetlerimiz" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              Hizmetlerimiz
            </Link>
            <Link 
              href="/referanslar" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              Referanslar
            </Link>
            <Link 
              href="/iletisim" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              İletişim
            </Link>
          </nav>

          {/* Desktop Phone Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="tel:05354182431" 
              className="bg-primary-lightest text-white font-semibold px-4 py-2 rounded-lg transition-colors items-center space-x-2 shadow-md hover:shadow-lg hover:bg-primary-lightest/90 text-sm"
            >
              <span>0535 418 24 31</span>
            </a>
            <a 
              href="tel:05051915357" 
              className="bg-primary-lightest text-white font-semibold px-4 py-2 rounded-lg transition-colors items-center space-x-2 shadow-md hover:shadow-lg hover:bg-primary-lightest/90 text-sm"
            >
              <span>0505 191 53 57</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-200 hover:text-white transition-colors py-2"
                onClick={closeMenu}
              >
                Anasayfa
              </Link>
              <Link 
                href="/hizmetlerimiz" 
                className="text-gray-200 hover:text-white transition-colors py-2"
                onClick={closeMenu}
              >
                Hizmetlerimiz
              </Link>
              <Link 
                href="/referanslar" 
                className="text-gray-200 hover:text-white transition-colors py-2"
                onClick={closeMenu}
              >
                Referanslar
              </Link>
              <Link 
                href="/iletisim" 
                className="text-gray-200 hover:text-white transition-colors py-2"
                onClick={closeMenu}
              >
                İletişim
              </Link>
              <a 
                href="tel:05354182431" 
                className="bg-primary-lightest text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 mt-2 shadow-md hover:bg-primary-lightest/90"
                onClick={closeMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0535 418 24 31</span>
              </a>
              <a 
                href="tel:05051915357" 
                className="bg-primary-lightest text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 mt-2 shadow-md hover:bg-primary-lightest/90"
                onClick={closeMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0505 191 53 57</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
```

### 11. `components/ServiceCard.tsx`

```typescript
import Link from 'next/link'
import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
    >
      {/* Image */}
      <div className="pt-6 px-6 flex justify-center">
        <div className="h-40 w-40 bg-gray-50 border border-gray-200 rounded-lg p-2 flex items-center justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* Content */}
      <div className="p-6 flex flex-col items-center text-center gap-2">
        <h3 className="text-xl font-semibold text-primary-dark group-hover:text-primary-lightest transition-colors">
          {service.title}
        </h3>
        <span className="inline-flex items-center text-primary-dark hover:text-primary-lightest font-medium text-sm transition-colors">
          İncele →
        </span>
      </div>
    </Link>
  )
}
```

### 12. `components/BrandCard.tsx`

```typescript
import { Brand } from '@/types'

interface BrandCardProps {
  brand: Brand
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <a
      href="#"
      className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-md transition-all group h-32"
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="max-w-full max-h-20 h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
      />
    </a>
  )
}
```

### 13. `components/ReferenceCard.tsx`

```typescript
import { Reference } from '@/types'

interface ReferenceCardProps {
  reference: Reference
}

export default function ReferenceCard({ reference }: ReferenceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300">
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <div className="h-20 w-full flex items-center justify-center">
          <img
            src={reference.logo}
            alt={reference.name}
            className="h-full w-auto max-w-full object-contain"
          />
        </div>
      </div>

      {/* Client Name */}
      <h3 className="text-xl font-bold text-primary-dark mb-3">{reference.name}</h3>

      {/* Location */}
      {reference.location && (
        <div className="flex items-center justify-center text-gray-600 text-sm mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{reference.location}, İstanbul</span>
        </div>
      )}

      {/* Badge */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="inline-flex items-center text-xs font-semibold text-primary-dark bg-primary-lightest/10 px-3 py-1 rounded-full">
          <svg className="w-3 h-3 mr-1 text-primary-lightest" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Kurumsal Referans
        </span>
      </div>
    </div>
  )
}
```

### 14. `components/StickyCallButton.tsx`

```typescript
'use client'

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary-lightest shadow-lg border-t border-primary-light/20">
      <div className="container mx-auto px-4 py-3">
        <a
          href="tel:05354182431"
          className="w-full bg-white text-primary-lightest font-bold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-md flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Hemen Ara: 0535 418 24 31</span>
        </a>
      </div>
    </div>
  )
}
```

### 15. `components/Footer.tsx`

```typescript
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-darkest border-t border-white/20 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Etkili Servis</h3>
            <p className="text-gray-200 text-sm mb-6">
              Endüstriyel mutfak ekipmanları tamir ve bakım hizmetleri.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-lightest transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/905354182431"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-lightest transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-lightest transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="uppercase tracking-wider text-sm font-semibold text-gray-400 mb-4">Hızlı Menü</h4>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="hover:text-white transition-colors">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="uppercase tracking-wider text-sm font-semibold text-gray-400 mb-4">Hizmet Bölgeleri</h4>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li className="hover:text-white transition-colors">İstanbul Anadolu Yakası</li>
              <li className="hover:text-white transition-colors">Gebze</li>
              <li className="hover:text-white transition-colors">Kocaeli</li>
              <li className="hover:text-white transition-colors">İzmit</li>
            </ul>
          </div>

          {/* Col 4: Contact - Enhanced */}
          <div>
            <h4 className="uppercase tracking-wider text-sm font-semibold text-gray-400 mb-4">İletişim</h4>
            <ul className="space-y-4 text-gray-200 text-sm">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="flex flex-col space-y-2">
                <a
                  href="tel:05354182431"
                  className="flex items-center space-x-2 hover:text-white transition-colors group"
                >
                  <svg className="w-5 h-5 flex-shrink-0 text-primary-lightest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg font-bold text-white">0535 418 24 31</span>
                </a>
                <a
                  href="tel:05051915357"
                  className="flex items-center space-x-2 hover:text-white transition-colors group"
                >
                  <svg className="w-5 h-5 flex-shrink-0 text-primary-lightest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg font-bold text-white">0505 191 53 57</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@etkiliservis.com" className="hover:text-white transition-colors">
                  info@etkiliservis.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Pazartesi - Cumartesi: 8:30 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Etkili Servis. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
```

### 21. `components/ServiceCard.tsx`

Yeniden kullanılabilir hizmet kartı bileşeni. Service tipinde prop kabul eder ve hizmet detay sayfasına yönlendirir.

### 22. `components/BrandCard.tsx`

Yeniden kullanılabilir marka kartı bileşeni. Brand tipinde prop kabul eder, grayscale hover efekti içerir.

### 23. `components/ReferenceCard.tsx`

Yeniden kullanılabilir referans kartı bileşeni. Reference tipinde prop kabul eder, logo, müşteri adı, konum ve rozet gösterir.

### 24. `components/StickyCallButton.tsx`

Mobil cihazlarda sabit alt çubuk. Sadece mobil görünümde görünür (md:hidden), tüm sayfalarda aktif.

### 25. `app/hizmetlerimiz/page.tsx`

Bu dosya 18 hizmeti içeren tam liste sayfasıdır. Her hizmet için:
- ID
- Slug (URL için)
- Başlık
- Açıklama
- Görsel yolu

Grid layout ile 3 sütun halinde gösterilir. Her kart tıklanabilir ve `/hizmetler/[slug]` sayfasına yönlendirir.

**Önemli Özellikler:**
- 18 hizmet tam listesi
- Responsive grid (1/2/3 sütun)
- Her kart için ürün görseli
- "İncele" butonu
- Alt kısımda CTA bölümü

### 26. `app/iletisim/page.tsx`

İletişim sayfası iki bölümden oluşur:
1. **İletişim Formu:** Ad Soyad, E-posta, Telefon, Mesaj alanları
2. **İletişim Bilgileri:** Adres, Telefon, E-posta, Çalışma Saatleri

**Özellikler:**
- Client Component (`'use client'`)
- Form state yönetimi (useState)
- Form validasyonu
- Server Action entegrasyonu (`submitContactForm`)
- Loading state (isSubmitting)
- Success/Error mesaj gösterimi
- Google Maps placeholder

### 27. `app/referanslar/page.tsx`

Referanslar sayfası 5 müşteriyi kart formatında gösterir:
- Anadolu Mutfak
- Ramada Otel
- EmirTimes Otel
- Millenium Otel
- Grand Harilton Otel

Her kart için:
- Logo görseli
- Müşteri adı
- Konum bilgisi
- "Kurumsal Referans" rozeti

### 28. `app/hizmetler/[slug]/page.tsx`

Dinamik hizmet detay sayfası. Her hizmet için özel sayfa oluşturur.

**Özellikler:**
- Static Site Generation (generateStaticParams)
- Dynamic Metadata (generateMetadata) - Her hizmet için özel SEO
- 18 hizmetin tam açıklamaları
- Hero section (başlık + görsel)
- Detaylı açıklama bölümü
- CTA butonları (İletişim, Telefon)
- Veriler `data/services.ts` dosyasından alınır

### 16. `types/index.ts`

TypeScript tip tanımları.

**Interface'ler:**
- `Service`: Hizmet verisi için (id, slug, title, description, fullDescription?, image)
- `Brand`: Marka verisi için (name, logo)
- `Reference`: Referans verisi için (name, location, logo)

### 17. `data/services.ts`

Tüm hizmet verilerinin merkezi kaynağı.

**Export'lar:**
- `allServices`: 18 hizmetin tam listesi (Service[] tipinde)
- `featuredServices`: Anasayfa için öne çıkan 6 hizmet

### 18. `data/brands.ts`

Tüm marka verilerinin merkezi kaynağı.

**Export:**
- `brands`: 18 marka logosu ve isimleri (Brand[] tipinde)

### 19. `data/references.ts`

Tüm referans verilerinin merkezi kaynağı.

**Export:**
- `references`: 5 müşteri referansı (Reference[] tipinde)

### 20. `app/actions/contact.ts`

İletişim formu için Server Action.

**Fonksiyonlar:**
- `submitContactForm`: Form verilerini alır, sunucuda loglar ve başarı mesajı döner
- Şu anda console.log ile veri kaydı yapılıyor
- E-posta gönderme veya veritabanı kaydı için genişletilebilir

**Tip Tanımları:**
- `ContactFormData`: Form verisi interface'i
- `ContactFormResponse`: Server response interface'i

**Hizmetler:**
1. Endüstriyel Bulaşık Makinesi
2. Endüstriyel Dolap
3. Endüstriyel Fritöz
4. Endüstriyel Izgara
5. Endüstriyel Ocak
6. Endüstriyel Kuzineli Ocak
7. Endüstriyel Blender
8. Endüstriyel Bar Blender
9. Endüstriyel Pasta Dolap
10. Soğuk Hava Deposu
11. Endüstriyel Patates Soyma
12. Endüstriyel Fırın
13. Endüstriyel Difriz
14. Endüstriyel Soğan Doğrama
15. Konveksiyonel Fırın
16. Buz Makinesi
17. Ayran Makinesi
18. Tost Makinesi

---

## 📦 Statik Dosyalar

### Public Klasörü Yapısı

```
public/
├── logo.svg                    # Ana logo
├── logo.png                    # Logo (alternatif)
├── hero-bg.jpg                 # Hero section arka plan
├── urunler/                    # Ürün görselleri (18 adet)
│   ├── endustriyel-bulasik-makinesi.jpg
│   ├── dolap.jpg
│   ├── fritoz.jpg
│   ├── ızgara.jpg
│   ├── ocak.jpg
│   ├── kuzineli-ocak.jpg
│   ├── blender.jpg
│   ├── bar-blender.jpg
│   ├── pasta-dolap.jpg
│   ├── soguk-hava-deposu.jpg
│   ├── patates-soyma.jpg
│   ├── fırın.jpg
│   ├── difriz.jpg
│   ├── sogan-dograma.jpg
│   ├── konveksiyonel-fırın.jpg
│   ├── buz-makinesi.jpg
│   ├── ayran-makinesi.jpg
│   └── tost-makinesi.jpg
├── referanslar/                # Referans logoları (5 adet)
│   ├── anadolu-mutfak.png
│   ├── ramada.png
│   ├── emirtimes.png
│   ├── milenyum.png
│   └── grand-harilton.jpg
└── [marka-logoları]            # Marka logoları (18 adet)
    ├── oztiryakiler-logo.svg
    ├── kayalar.png
    ├── empero.png
    ├── inoksan.png
    ├── portabianco.png
    ├── hobart.png
    ├── fagor.svg
    ├── ottoman.png
    ├── himaksan.png
    ├── emeksan.png
    ├── pimak.png
    ├── ndustrio.png
    ├── remta.webp
    ├── meşale.png
    ├── atalay.png
    ├── bosfor.png
    ├── senox.jpg
    └── winterhalter.png
```

---

## 🎯 Sayfalar ve Bileşenler Özeti

### Sayfalar

1. **Anasayfa (`/`)**
   - Hero Section (arka plan görseli ile)
   - Hizmet Bölgeleri Bandı
   - Hizmetlerimiz (6 ürün kartı)
   - "Daha Fazlasını Gör" butonu
   - Hakkımızda bölümü
   - Markalar bölümü (18 marka logosu)

2. **Hizmetlerimiz (`/hizmetlerimiz`)**
   - 18 hizmetin tam listesi
   - Grid layout (3 sütun)
   - Her hizmet için kart
   - CTA bölümü

3. **Hizmet Detay (`/hizmetler/[slug]`)**
   - Dinamik route
   - Hero section (başlık + görsel)
   - Detaylı açıklama
   - CTA butonları

4. **Referanslar (`/referanslar`)**
   - 5 müşteri referansı
   - Kart layout
   - CTA bölümü

5. **İletişim (`/iletisim`)**
   - İletişim formu
   - İletişim bilgileri
   - Google Maps placeholder

6. **404 Sayfası (`/not-found`)**
   - Özel 404 sayfası
   - Ana sayfaya dönüş butonu

### Bileşenler

1. **Header (`components/Header.tsx`)**
   - Responsive navigation
   - Mobil menü (hamburger)
   - Logo
   - Telefon butonları (2 adet)
   - Sticky header

2. **Footer (`components/Footer.tsx`)**
   - 4 kolonlu layout
   - Marka bilgisi + Sosyal medya
   - Hızlı menü linkleri
   - Hizmet bölgeleri
   - İletişim bilgileri (vurgulu telefon numaraları)
   - Copyright

3. **ServiceCard (`components/ServiceCard.tsx`)**
   - Yeniden kullanılabilir hizmet kartı bileşeni
   - Service tipinde prop kabul eder
   - Ürün görseli, başlık ve "İncele" butonu içerir
   - Hover efektleri ve animasyonlar

4. **BrandCard (`components/BrandCard.tsx`)**
   - Yeniden kullanılabilir marka kartı bileşeni
   - Brand tipinde prop kabul eder
   - Grayscale hover efekti
   - Logo görseli gösterimi

5. **ReferenceCard (`components/ReferenceCard.tsx`)**
   - Yeniden kullanılabilir referans kartı bileşeni
   - Reference tipinde prop kabul eder
   - Logo, müşteri adı, konum ve rozet içerir

6. **StickyCallButton (`components/StickyCallButton.tsx`)**
   - Mobil cihazlarda sabit alt çubuk
   - "Hemen Ara" butonu
   - Sadece mobil görünümde aktif (md:hidden)
   - Tüm sayfalarda görünür

---

## 📊 İstatistikler

- **Toplam Sayfa:** 6
- **Toplam Bileşen:** 6
- **Toplam Hizmet:** 18
- **Toplam Marka:** 18
- **Toplam Referans:** 5
- **Toplam Ürün Görseli:** 18
- **Toplam Referans Logosu:** 5
- **Toplam Marka Logosu:** 18
- **Data Dosyaları:** 3 (services, brands, references)
- **Type Definitions:** 3 (Service, Brand, Reference)
- **Server Actions:** 1 (contact form)

---

## 🚀 Özellikler

### Teknik Özellikler
- ✅ Next.js 14 App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Responsive Design
- ✅ SEO Optimizasyonu (Dynamic Metadata)
- ✅ Static Site Generation (SSG)
- ✅ Client Components (interaktif öğeler için)
- ✅ Server Components (performans için)
- ✅ Server Actions (Contact Form)
- ✅ Centralized Data Management
- ✅ Type-Safe Data Structures

### Tasarım Özellikleri
- ✅ Monokromatik mavi/lacivert renk paleti
- ✅ Modern ve temiz arayüz
- ✅ Hover efektleri
- ✅ Smooth transitions
- ✅ Grayscale logo efektleri
- ✅ Card-based layout

### İşlevsel Özellikler
- ✅ Mobil uyumlu navigasyon
- ✅ Tıklanabilir telefon numaraları (`tel:` links)
- ✅ Mobil sabit arama butonu (StickyCallButton)
- ✅ Form validasyonu ve Server Action entegrasyonu
- ✅ Dinamik routing
- ✅ Dinamik SEO metadata (her hizmet için özel)
- ✅ 404 sayfası
- ✅ Sosyal medya linkleri
- ✅ Yeniden kullanılabilir bileşenler (ServiceCard, BrandCard, ReferenceCard)

---

## 📝 Notlar

1. **Logo:** Header'da şu anda placeholder logo (ES) kullanılıyor. `public/logo.svg` dosyası mevcut ancak yorum satırında.

2. **Form:** İletişim formu artık Server Actions kullanıyor (`app/actions/contact.ts`). Form verileri sunucu tarafında loglanıyor. E-posta gönderme veya veritabanı kaydı için backend entegrasyonu eklenebilir.

3. **Google Maps:** İletişim sayfasında placeholder var. Gerçek Google Maps API entegrasyonu yapılabilir.

4. **Sosyal Medya:** Footer'daki sosyal medya linkleri placeholder. Gerçek hesaplar eklendiğinde güncellenmeli.

5. **Çalışma Saatleri:** Footer'da "Pazartesi - Cumartesi" yazıyor, ancak İletişim sayfasında "Pazartesi - Cuma" yazıyor. Tutarlılık için kontrol edilmeli.

6. **Data Management:** Tüm veriler merkezi `data/` klasöründe yönetiliyor. Hizmetler, markalar ve referanslar için ayrı dosyalar mevcut.

7. **Type Safety:** Tüm veri yapıları TypeScript interface'leri ile tip güvenliği sağlanıyor (`types/index.ts`).

8. **Component Reusability:** UI bileşenleri yeniden kullanılabilir şekilde ayrıştırılmış (ServiceCard, BrandCard, ReferenceCard).

---
