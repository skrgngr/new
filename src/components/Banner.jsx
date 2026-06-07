import React from 'react'

const productImageSrc = `${import.meta.env.BASE_URL}ımg/ürün.png`

export default function Banner({ setCurrentPage }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-deep-navy via-black to-black text-white min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep-navy to-black opacity-98"></div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Ortadaki boş alan ve başlık */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left relative -top-10 sm:-top-8 md:-top-20 px-4 sm:px-0 w-full md:w-1/2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-aurelia-gold tracking-tight">AURA PARFÜMS</h1>
          <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-md">Her koku bir imza taşır. Kalıcılığı ve karakteriyle öne çıkan özel koleksiyonlar.</p>
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setCurrentPage('products')}
              className="bg-aurelia-gold text-deep-navy px-6 py-2 rounded-full font-semibold"
            >
              Daha Fazla
            </button>
          </div>
        </div>

        {/* Sağda tek büyük ürün - mobilde de görünür */}
        <div className="flex items-center justify-center md:justify-end px-4 sm:px-0 w-full md:w-1/2 mt-6 md:mt-0">
          <img src={productImageSrc} alt="Ürün" className="w-48 sm:w-[17rem] md:w-96 rounded-lg drop-shadow-2xl animate-sway" />
        </div>
      </div>

      {/* Extra floating images removed — only the right bottle remains with sway animation */}
    </section>
  )
}
