/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: '#3E92CC', // En Açık Mavi - Buz Mavisi/Vurgu
          light: '#2A628F', // Orta Mavi
          dark: '#16324F', // Koyu Lacivert - Ana Kurumsal Renk
          darkest: '#13293D', // En Koyu Lacivert/Antrasit
          DEFAULT: '#16324F', // Default olarak dark kullan
        },
        bg: {
          light: '#F7F7F7', // Temiz Beyaz/Çok Hafif Gri
        },
      },
    },
  },
  plugins: [],
}

