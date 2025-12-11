import Link from 'next/link'
import { featuredServices } from '@/data/services'
import { brands } from '@/data/brands'
import ServiceCard from '@/components/ServiceCard'
import BrandCard from '@/components/BrandCard'

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
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Endüstriyel Mutfağınız Emin Ellerde
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                Sektördeki 15 yıllık tecrübemizle; otel, restoran ve kafelerinizdeki endüstriyel mutfak ekipmanlarının bakım ve onarımını üstleniyoruz. İşletmenizin aksamaması için hızlı, güvenilir ve garantili çözümler üretiyoruz.
              </p>
            </div>

            {/* Right Column - Service Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Item 1: 15 Yıllık Tecrübe */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-lightest rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">15 Yıllık Tecrübe</h3>
                    <p className="text-sm text-gray-300">Sektörde güvenilir geçmiş</p>
                  </div>
                </div>
              </div>

              {/* Item 2: Geniş Marka Uzmanlığı */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-lightest rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Geniş Marka Uzmanlığı</h3>
                    <p className="text-sm text-gray-300">Tüm büyük markalara servis</p>
                  </div>
                </div>
              </div>

              {/* Item 3: Garantili İşçilik */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-lightest rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Garantili İşçilik</h3>
                    <p className="text-sm text-gray-300">Parça ve onarım garantisi</p>
                  </div>
                </div>
              </div>

              {/* Item 4: Hızlı & Yerinde Servis */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-lightest rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Hızlı & Yerinde Servis</h3>
                    <p className="text-sm text-gray-300">İstanbul geneli mobil ekip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 bg-bg-light">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
            Markalar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <BrandCard key={index} brand={brand} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
