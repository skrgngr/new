import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-transparent text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div>
            <h3 className="text-2xl font-bold text-aurelia-gold mb-4">AURA</h3>
            <p className="text-white/70">
              Hayatını Tanımlayan Koku
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gold mb-4">Bağlantılar</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gold transition">Ana Sayfa</a></li>
              <li><a href="#" className="hover:text-gold transition">Ürünlerimiz</a></li>
              <li><a href="#" className="hover:text-gold transition">Hakkımızda</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gold mb-4">Hukuki</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gold transition">Gizlilik</a></li>
              <li><a href="#" className="hover:text-gold transition">Şartlar</a></li>
              <li><a href="#" className="hover:text-gold transition">Çerezler</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gold mb-4">İletişim</h4>
            <p className="text-gray-400 text-sm">
              📧 info@auraparfums.com<br/>
              📱 +90 212 XXX XXXX<br/>
              📍 İstanbul, Türkiye
            </p>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />
        
        <div className="text-center text-gray-400">
          <p>&copy; 2026 AURA Parfüms. Tüm Hakları Saklıdır. | ✨</p>
        </div>
      </div>
    </footer>
  )
}
