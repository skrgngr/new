import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mesajınız gönderildi! Teşekkür ederiz.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark mb-4 text-center">İletişime Geçin</h1>
      <p className="text-gray-600 text-center mb-12">Sorularınız veya önerileriniz için bize ulaşın</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* İletişim Bilgileri */}
        <div className="space-y-8">
          <div className="bg-light p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-dark mb-2">📍 Adresimiz</h3>
            <p className="text-gray-600">
              AURA Parfüms Merkezi<br/>
              İstanbul, Türkiye<br/>
              Levent Mahallesi
            </p>
          </div>

          <div className="bg-light p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-dark mb-2">📱 Telefon</h3>
            <p className="text-gray-600">
              Hakkımızda Bilgi:<br/>
              +90 212 XXX XXXX<br/>
              <br/>
              Sipariş Desteği:<br/>
              +90 212 YYY YYYY
            </p>
          </div>

          <div className="bg-light p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-dark mb-2">📧 E-Mail</h3>
            <p className="text-gray-600">
              info@auraparfums.com<br/>
              support@auraparfums.com<br/>
              sales@auraparfums.com
            </p>
          </div>

          <div className="bg-light p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-dark mb-2">🕐 Çalışma Saatleri</h3>
            <p className="text-gray-600">
              Pazartesi - Cuma: 09:00 - 18:00<br/>
              Cumartesi: 10:00 - 16:00<br/>
              Pazar: Kapalı
            </p>
          </div>
        </div>

        {/* İletişim Formu */}
        <div className="bg-light p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-dark mb-6">Bize Mesaj Gönderin</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-dark font-semibold mb-2">Adınız</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                placeholder="Adınızı girin"
              />
            </div>

            <div>
              <label className="block text-dark font-semibold mb-2">E-Mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                placeholder="E-mail adresiniz"
              />
            </div>

            <div>
              <label className="block text-dark font-semibold mb-2">Konu</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                placeholder="Konuyu yazın"
              />
            </div>

            <div>
              <label className="block text-dark font-semibold mb-2">Mesaj</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                placeholder="Mesajınızı yazın"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-dark py-3 rounded-lg font-bold hover:bg-yellow-500 transition text-lg"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
