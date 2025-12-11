import { Reference } from '@/types'

interface ReferenceCardProps {
  reference: Reference
}

export default function ReferenceCard({ reference }: ReferenceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300">
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <div className="h-20 w-full flex items-center justify-center">
          <img
            src={reference.logo}
            alt={reference.name}
            className="h-full w-auto max-w-full object-contain"
          />
        </div>
      </div>

      {/* Client Name */}
      <h3 className="text-xl font-bold text-primary-dark mb-3">{reference.name}</h3>

      {/* Location */}
      {reference.location && (
        <div className="flex items-center justify-center text-gray-600 text-sm mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{reference.location}, İstanbul</span>
        </div>
      )}

      {/* Badge */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="inline-flex items-center text-xs font-semibold text-primary-dark bg-primary-lightest/10 px-3 py-1 rounded-full">
          <svg className="w-3 h-3 mr-1 text-primary-lightest" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Kurumsal Referans
        </span>
      </div>
    </div>
  )
}

