import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Script from 'next/script'
import { allServices } from '@/data/services'

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = allServices.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
      description: 'Aradığınız hizmet bulunamadı.',
    }
  }

  return {
    title: service.seo.metaTitle,
    description: service.seo.metaDescription,
    alternates: {
      canonical: `/hizmetlerimiz/${service.slug}`,
    },
    openGraph: {
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      images: [`https://etkiliendustriyelservisi.com${service.image}`],
    },
  }
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = allServices.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-bg-light">
      <Script
        id={`breadcrumb-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://etkiliendustriyelservisi.com" },
              { "@type": "ListItem", "position": 2, "name": "Hizmetlerimiz", "item": "https://etkiliendustriyelservisi.com/hizmetlerimiz" },
              { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://etkiliendustriyelservisi.com/hizmetlerimiz/${service.slug}` }
            ]
          })
        }}
      />
      {/* Service Schema Markup */}
      <Script
        id={`service-schema-${service.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "url": `https://etkiliendustriyelservisi.com/hizmetlerimiz/${service.slug}`,
            "serviceType": `${service.title} Servisi`,
            "description": service.seo.metaDescription,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Etkili Servis", // 4. Marka adı sadeleştirildi
              "image": "https://etkiliendustriyelservisi.com/brands/logo.png",
              "telephone": "+905354182431",
              "priceRange": "₺₺",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sancaktepe",
                "addressRegion": "İstanbul",
                "addressCountry": "TR"
              }
            },
            "areaServed": ["İstanbul", "Kocaeli", "Gebze", "İzmit"]
          })
        }}
      />

      {/* Back Button */}
      <div className="container mx-auto max-w-4xl px-4 pt-8">
        <Link
          href="/hizmetlerimiz"
          className="inline-flex items-center text-primary-dark hover:text-primary-lightest transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Hizmetlere Dön
        </Link>
      </div>

      {/* Hero Section - Centered */}
      <section className="bg-primary-dark py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center justify-center">
            {/* Product Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center leading-tight">
              {service.seo.h1} <span className='block text-primary-lightest text-2xl mt-2'>Etkili Servis Güvencesiyle</span>
            </h1>

            {/* Product Image in White Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm aspect-square relative">
              <Image
                src={service.image}
                alt={`${service.title} Tamiri ve Teknik Servisi - Etkili Servis`}
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            {/* 7. Metin içindeki marka vurguları artırıldı */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed font-medium text-primary-dark">
                {service.seo.intro}
              </p>
              <p className="mb-8 leading-relaxed">
                <strong>Etkili Servis</strong> olarak, {service.title} konusunda uzman teknisyenlerimizle İstanbul Anadolu yakası ve Gebze bölgesinde yerinde hizmet sunuyoruz. {service.fullDescription}
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                {service.seo.problemsTitle}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0 mb-8">
                {service.seo.problems.map((problem) => (
                  <li key={problem} className="flex items-center space-x-2">
                    <span className="text-primary-lightest">✔</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                Neden Etkili Servis'i Tercih Etmelisiniz?
              </h2>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start italic">"Endüstriyel mutfağınızdaki arızalara etkili çözümler."</li>
                <li>✅ <strong>Hızlı Müdahale:</strong> İşletmenizin aksamaması için aynı gün servis.</li>
                <li>✅ <strong>Garantili İşçilik:</strong> Yapılan tüm onarımlarda Etkili Servis garantisi.</li>
                <li>✅ <strong>Uzman Kadro:</strong> 15 yıllık sektörel deneyim.</li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="border-t border-gray-100 pt-8 mt-8 text-center md:text-left">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">
                Hemen Teknik Destek Alın
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:05354182431"
                  className="bg-primary-lightest text-white font-bold px-6 py-4 rounded-xl hover:bg-primary-dark transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>0535 418 24 31</span>
                </a>
                <Link
                  href="/iletisim"
                  className="bg-primary-dark text-white font-bold px-6 py-4 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center"
                >
                  İletişim Formu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

