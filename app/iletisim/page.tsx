import { Metadata } from 'next'
import ContactContent from './ContactContent' // Mevcut formun olduğu dosya

export const metadata: Metadata = {
  title: 'İletişim | Etkili Servis Endüstriyel Mutfak Teknik Destek Hattı',
  description: 'İstanbul Anadolu Yakası, Gebze ve Kocaeli bölgeleri için endüstriyel mutfak servis talebi oluşturun. 7/24 teknik destek ve hızlı onarım için bize ulaşın.',
  alternates: {
    canonical: '/iletisim',
  },
}

export default function IletisimPage() {
  return <ContactContent />
}