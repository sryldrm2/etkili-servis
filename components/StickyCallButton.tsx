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

