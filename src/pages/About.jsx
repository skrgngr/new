import React from 'react'

const logoSrc = `${import.meta.env.BASE_URL}ımg/logo-transparent.png`

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark mb-8">Hakkımızda</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="bg-deep-navy rounded-xl p-8 h-64 flex items-center justify-center">
            <img src={logoSrc} alt="AURA Logo" className="h-full max-h-52 w-auto object-contain md:max-h-[15rem]" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-dark mb-4">AURA'nın Hikayesi</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bazı izler görülmez, yalnızca hissedilir.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            AURA, bu düşünceden ilham alarak; karakteri, zarafeti ve kalıcılığı
            tek bir şişede buluşturmak amacıyla doğdu. Her koleksiyon, alanında
            uzman koku tasarımcıları tarafından özenle geliştirilir ve modern
            parfüm sanatının seçkin notalarıyla şekillendirilir.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bizim için bir parfüm yalnızca bir koku değildir; kişinin bıraktığı
            etkiyi tamamlayan görünmez bir imzadır. Bu nedenle AURA, her
            ayrıntısında kaliteyi, dengeyi ve zamansız şıklığı ön planda tutar.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Özel anlardan günlük yaşama kadar her kullanımda, unutulmaz bir iz
            bırakmak için tasarlandı. ✨
          </p>
        </div>
      </div>

      {/* Misyon Vizyon */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-dark text-white p-8 rounded-xl">
          <div className="text-5xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold text-gold mb-4">Misyonumuz</h3>
          <p className="text-gray-300">
            Hayatın güzelliklerini kokular üzerinden hissettirmek
          </p>
        </div>
        <div className="bg-dark text-white p-8 rounded-xl">
          <div className="text-5xl mb-4">🌟</div>
          <h3 className="text-2xl font-bold text-gold mb-4">Vizyonumuz</h3>
          <p className="text-gray-300">
            Dünyaca ünlü ve güvenilir bir parfüm markası olmak
          </p>
        </div>
        <div className="bg-dark text-white p-8 rounded-xl">
          <div className="text-5xl mb-4">♻️</div>
          <h3 className="text-2xl font-bold text-gold mb-4">Değerlerimiz</h3>
          <p className="text-gray-300">
            Doğa, kalite ve müşteri memnuniyeti önceliğimizdir
          </p>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="bg-light p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-dark mb-8 text-center">Biz Tarafından Güvenilir</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gold">50K+</div>
            <p className="text-gray-600 mt-2">Mutlu Müşteri</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold">15+</div>
            <p className="text-gray-600 mt-2">Ülkede Satış</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold">100%</div>
            <p className="text-gray-600 mt-2">Saf İçerik</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold">24/7</div>
            <p className="text-gray-600 mt-2">Müşteri Desteği</p>
          </div>
        </div>
      </div>
    </div>
  )
}
