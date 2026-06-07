import React from 'react'

export default function Home() {
  const collections = [
    { name: 'Summer 2024', image: '☀️', desc: 'Yazın Taze Kokularını Keşfet' },
    { name: 'Luxury Gold', image: '👑', desc: 'Lüks Kokular Koleksiyonu' },
    { name: 'Night Dreams', image: '🌙', desc: 'Gece Rüyalarının Kokularını' },
  ]

  return (
    <div className="space-y-16 py-20">
      
      {/* Koleksiyonlar ve ürün görünümleri kaldırıldı isteğe göre */}

      {/* Neden AURA */}
      <section className="bg-dark text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold mb-12 text-center">Neden AURA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gold mb-2">Saf İçerik</h3>
              <p className="text-gray-300">%100 Saf Parfüm Özü</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gold mb-2">Dünyaca Ünlü</h3>
              <p className="text-gray-300">Uluslararası Kalite Standartları</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-gold mb-2">Uzun Süre</h3>
              <p className="text-gray-300">12+ Saat Kalıcılık</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-gold mb-2">Hediye Paketi</h3>
              <p className="text-gray-300">Lüks Ambalajda Sunulur</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
