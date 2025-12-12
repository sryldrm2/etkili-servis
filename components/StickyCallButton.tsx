'use client'

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary-lightest shadow-lg border-t border-primary-light/20">
      <div className="container mx-auto px-4 py-2">
        <div className="w-full bg-white text-primary-lightest font-semibold text-sm px-4 py-2 rounded-lg shadow-md flex items-center justify-center space-x-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a
            href="tel:05354182431"
            className="hover:text-primary-dark transition-colors"
          >
            0535 418 24 31
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="tel:05051915357"
            className="hover:text-primary-dark transition-colors"
          >
            0505 191 53 57
          </a>
        </div>
      </div>
    </div>
  )
}

