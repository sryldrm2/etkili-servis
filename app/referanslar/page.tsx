import Link from 'next/link'
import { references } from '@/data/references'
import ReferenceCard from '@/components/ReferenceCard'

export default function Referanslar() {
  return (
    <div className="min-h-screen py-12 px-4 bg-bg-light">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Referanslar
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Güvenilir hizmet anlayışımızla çalıştığımız değerli müşterilerimiz.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {references.map((reference, index) => (
            <ReferenceCard key={index} reference={reference} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary-dark rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bizimle Çalışmak İster misiniz?
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Siz de referanslarımız arasında yer almak için bize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-primary-lightest text-white font-bold px-8 py-3 rounded-lg hover:bg-primary-lightest/90 transition-colors shadow-md text-center"
            >
              İletişime Geç
            </Link>
            <a
              href="tel:05354182431"
              className="bg-primary-lightest text-white font-bold px-8 py-3 rounded-lg hover:bg-primary-lightest/90 transition-colors shadow-md"
            >
              0535 418 24 31
            </a>
            <a
              href="tel:05051915357"
              className="bg-primary-lightest text-white font-bold px-8 py-3 rounded-lg hover:bg-primary-lightest/90 transition-colors shadow-md"
            >
              0505 191 53 57
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

