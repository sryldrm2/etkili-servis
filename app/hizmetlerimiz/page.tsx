import Link from 'next/link'
import { allServices } from '@/data/services'
import ServiceCard from '@/components/ServiceCard'

export default function Hizmetlerimiz() {
  return (
    <div className="min-h-screen py-12 px-4 bg-bg-light">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Endüstriyel mutfak ekipmanlarınız için kapsamlı tamir ve bakım hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary-dark rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Hizmetlerimiz Hakkında Daha Fazla Bilgi Alın
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Sorularınız için bize ulaşın, size en uygun çözümü sunalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-primary-lightest text-white font-bold px-8 py-3 rounded-lg hover:bg-primary-lightest/90 transition-colors shadow-md"
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
