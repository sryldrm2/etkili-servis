# Etkili Servis (Etkili Endüstriyel Servis)

Next.js 14 (App Router) + TypeScript + Tailwind CSS ile geliştirilmiş, endüstriyel mutfak ekipmanları servis/tamir hizmeti tanıtım sitesi.

## Özellikler

- Modern, temiz arayüz (monokrom mavi/lacivert renk paleti)
- Tam responsive tasarım
- Merkezi veri yönetimi (`data/`): hizmetler, markalar, referanslar
- Dinamik hizmet detay sayfaları (`/hizmetlerimiz/[slug]`) + SSG (`generateStaticParams`)
- Hizmet bazlı SEO (`generateMetadata`)
- SEO altyapısı: JSON-LD Schema (LocalBusiness + Service), `public/sitemap.xml`, Google doğrulama dosyası
- Google Analytics (gtag.js)
- Mobil sabit arama barı (`StickyCallButton`) + 2 WhatsApp hızlı iletişim butonu (`WhatsAppButton`)

## Sayfalar

- **Anasayfa** (`/`): hero, hizmet bölgeleri bandı, öne çıkan hizmetler, markalar
- **Hizmetlerimiz** (`/hizmetlerimiz`): 18 hizmet listesi + CTA
- **Hizmet Detay** (`/hizmetlerimiz/[slug]`): görsel + detay açıklama + CTA + Service schema
- **Referanslar** (`/referanslar`): referans kartları + CTA
- **İletişim** (`/iletisim`): iletişim bilgileri + Google Maps iframe embed  
  - Not: `app/actions/contact.ts` içinde Server Action altyapısı vardır; mevcut UI’da form alanları render edilmemektedir.
- **404**: özel not-found sayfası

## Statik Dosyalar

- Ürün görselleri: `public/products/`
- Marka logoları + site logo: `public/brands/`
- Referans logoları: `public/references/`

## Kurulum & Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcı: `http://localhost:3000`

## Komutlar

- `npm run dev`: geliştirme
- `npm run build`: prod build
- `npm run start`: prod server
- `npm run lint`: lint

## Teknolojiler

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS










