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
