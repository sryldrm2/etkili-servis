'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-primary-darkest border-b border-primary-darkest/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary-darkest font-bold text-xl">ES</span>
            </div>
            <span className="text-white font-bold text-xl">Etkili Servis</span>
          </Link>

          {/* Kendi logolarını isterlerse burayı aç*/}
          {/*
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <img 
              src="/logo.png" 
              alt="Etkili Servis" 
              className="h-10 w-auto"
            />
          </Link>
          */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              Anasayfa
            </Link>
            <Link 
              href="/hizmetlerimiz" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              Hizmetlerimiz
            </Link>
            <Link 
              href="/referanslar" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              Referanslar
            </Link>
            <Link 
              href="/iletisim" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              İletişim
            </Link>
          </nav>

          {/* Desktop Phone Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="tel:05354182431" 
              className="bg-primary-lightest text-white font-semibold px-4 py-2 rounded-lg transition-colors items-center space-x-2 shadow-md hover:shadow-lg hover:bg-primary-lightest/90 text-sm"
            >
              <span>0535 418 24 31</span>
            </a>
            <a 
              href="tel:05051915357" 
              className="bg-primary-lightest text-white font-semibold px-4 py-2 rounded-lg transition-colors items-center space-x-2 shadow-md hover:shadow-lg hover:bg-primary-lightest/90 text-sm"
            >
              <span>0505 191 53 57</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-200 hover:text-white transition-colors py-2"
                onClick={closeMenu}
              >
                Anasayfa
              </Link>
              <Link 
                href="/hizmetlerimiz" 
                className="text-gray-200 hover:text-white transition-colors py-2"
                onClick={closeMenu}
              >
                Hizmetlerimiz
              </Link>
              <Link 
                href="/referanslar" 
                className="text-gray-200 hover:text-white transition-colors py-2"
                onClick={closeMenu}
              >
                Referanslar
              </Link>
              <Link 
                href="/iletisim" 
                className="text-gray-200 hover:text-white transition-colors py-2"
                onClick={closeMenu}
              >
                İletişim
              </Link>
              <a 
                href="tel:05354182431" 
                className="bg-primary-lightest text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 mt-2 shadow-md hover:bg-primary-lightest/90"
                onClick={closeMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0535 418 24 31</span>
              </a>
              <a 
                href="tel:05051915357" 
                className="bg-primary-lightest text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 mt-2 shadow-md hover:bg-primary-lightest/90"
                onClick={closeMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0505 191 53 57</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

