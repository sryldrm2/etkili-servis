'use client'

import { useState } from 'react'
import { submitContactForm, type ContactFormData } from '@/app/actions/contact'

// Fonksiyon ismini page.tsx ile uyumlu hale getirdik
export default function ContactContent() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitMessage({ type: 'success', text: result.message })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitMessage({ type: 'error', text: 'Bir hata oluştu. Lütfen tekrar deneyin.' })
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Bir hata oluştu. Lütfen tekrar deneyin.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-bg-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Etkili Servis İletişim Hattı
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            İstanbul, Gebze ve Kocaeli bölgelerinde endüstriyel mutfak ekipmanlarınız için <strong>aynı gün teknik servis</strong> randevusu alın.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-12 max-w-6xl mx-auto">
          {/* İletişim Bilgileri */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm h-full">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-primary-dark font-bold mb-1 text-lg">Adres</h3>
                    <p className="text-gray-600">
                      Merve Mah. Sait Sok. No:18/A <br /> Sancaktepe / İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-primary-dark font-bold mb-1 text-lg">Telefon</h3>
                    <div className="flex flex-col space-y-2">
                      <a href="tel:05354182431" className="text-primary-dark font-semibold text-xl hover:text-primary-lightest transition-colors">
                        0535 418 24 31
                      </a>
                      <a href="tel:05051915357" className="text-primary-dark font-semibold text-xl hover:text-primary-lightest transition-colors">
                        0505 191 53 57
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                   <h3 className="text-primary-dark font-bold mb-2">Hizmet Bölgelerimiz:</h3>
                   <p className="text-sm text-gray-600">
                     Sancaktepe, Ümraniye, Ataşehir, Tuzla, Pendik, Kartal, Gebze, Çayırova, Dilovası, İzmit ve tüm Kocaeli ilçeleri.
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Harita */}
          <div className="w-full lg:w-1/2 h-[450px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.3396791678125!2d29.255855!3d40.973341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU4JzI0LjAiTiAyOcKwMTUnMjEuMSJF!5e0!3m2!1str!2str!4v1710000000000"
              title="Etkili Servis Sancaktepe Konumu"
              aria-label="Etkili Servis Konum"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}