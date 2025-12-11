import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
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
    title: `${service.title} - Etkili Servis`,
    description: service.description,
  }
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = allServices.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-bg-light">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
              {service.title}
            </h1>

            {/* Product Image in White Box */}
            <div className="bg-white rounded-xl shadow-lg p-4 w-auto h-64">
              <div className="h-full w-full flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {service.fullDescription}
            </p>

            {/* CTA Section */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h2 className="text-xl font-semibold text-primary-dark mb-4">
                Hizmetimizden Yararlanmak İster misiniz?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim"
                  className="bg-primary-lightest text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-lightest/90 transition-colors shadow-md text-center"
                >
                  İletişime Geç
                </Link>
                <a
                  href="tel:05354182431"
                  className="bg-primary-lightest text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-lightest/90 transition-colors shadow-md text-center"
                >
                  0535 418 24 31
                </a>
                <a
                  href="tel:05051915357"
                  className="bg-primary-lightest text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-lightest/90 transition-colors shadow-md text-center"
                >
                  0505 191 53 57
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

