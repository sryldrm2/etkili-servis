import Link from 'next/link'
import { Metadata } from 'next'
import { allServices } from '@/data/services'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Etkili Servis Endüstriyel Mutfak Teknik Desteği',
  description: 'Bulaşık makinesi, fırın, buz makinesi ve tüm endüstriyel mutfak ekipmanları için sunduğumuz profesyonel tamir hizmetleri. İstanbul ve Kocaeli geneli hızlı servis.',
  alternates: {
    canonical: '/hizmetlerimiz',
  },
}

export default function Hizmetlerimiz() {
  return (
    <div className="min-h-screen py-12 px-4 bg-bg-light">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          {/* 2. H1 başlığı marka ve hizmet odaklı güncellendi */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Endüstriyel Servis Hizmetlerimiz
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            <strong>Etkili Servis</strong> güvencesiyle, endüstriyel mutfak ekipmanlarınız için aynı gün tamir ve periyodik bakım çözümleri sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {allServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* 3. Sayfa altına bilgilendirici bir SEO metni eklendi (Keyword density için) */}
        <section className="mb-12 p-8 bg-white rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">İstanbul ve Kocaeli Endüstriyel Teknik Servis</h2>
          <p className="text-gray-700 leading-relaxed">
            İşletmenizin mutfağındaki aksaklıklar üretiminizi durdurmasın. <strong>Etkili Servis</strong> olarak; profesyonel fırınlar, endüstriyel bulaşık makineleri, soğutma grupları ve hazırlık ekipmanları konusunda uzmanız. İstanbul Anadolu Yakası, Gebze, İzmit ve tüm Kocaeli bölgesine yayılmış mobil ekiplerimizle en kısa sürede yanınızdayız.
          </p>
        </section>

        {/* CTA Section */}
        <div className="bg-primary-dark rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Teknik Destek Hattı
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
            Arızalı cihazınız için hemen randevu oluşturun, <strong>Etkili Servis</strong> farkıyla cihazınızı yerinde tamir edelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05354182431"
              className="bg-primary-lightest text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-primary-dark transition-all shadow-md text-lg flex items-center justify-center"
            >
              0535 418 24 31
            </a>
            <a
              href="tel:05051915357"
              className="bg-white text-primary-dark font-bold px-8 py-4 rounded-xl hover:bg-primary-lightest hover:text-white transition-all shadow-md text-lg flex items-center justify-center"
            >
              0505 191 53 57
            </a>
            <Link
              href="/iletisim"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-primary-dark transition-all text-lg flex items-center justify-center"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
