import { Brand } from '@/types'

interface BrandCardProps {
  brand: Brand
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <a
      href="#"
      className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-md transition-all group h-32"
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="max-w-full max-h-20 h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
      />
    </a>
  )
}

