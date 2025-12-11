import Link from 'next/link'
import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/hizmetlerimiz/${service.slug}`}
      className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
    >
      {/* Image */}
      <div className="pt-6 px-6 flex justify-center">
        <div className="h-40 w-40 bg-gray-50 border border-gray-200 rounded-lg p-2 flex items-center justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* Content */}
      <div className="p-6 flex flex-col items-center text-center gap-2">
        <h3 className="text-xl font-semibold text-primary-dark group-hover:text-primary-lightest transition-colors">
          {service.title}
        </h3>
        <span className="inline-flex items-center text-primary-dark hover:text-primary-lightest font-medium text-sm transition-colors">
          İncele →
        </span>
      </div>
    </Link>
  )
}

