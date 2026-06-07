import React, { useState } from 'react'

const productImageSrc = `${import.meta.env.BASE_URL}ımg/ürün.png`

export default function Cart({ cartItems, setCartItems, setCurrentPage }) {
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = total > 0 ? 50 : 0
  const grandTotal = total + shipping

  return (
    <div className="min-h-screen bg-light-cream">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-4xl font-bold text-deep-navy mb-8">🛒 Alışveriş Sepeti</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛍️</div>
            <p className="text-2xl text-deep-navy mb-2 font-bold">Sepetiniz Boş</p>
            <p className="text-gray-600 mb-8">Harika ürünleri keşfetmek için ürünler sayfasını ziyaret edin</p>
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-aurelia-gold text-deep-navy px-8 py-3 rounded-lg font-bold hover:bg-deep-navy hover:text-aurelia-gold transition"
            >
              Alışverişe Devam Et
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Sepet Ürünleri */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg flex flex-col gap-4 transition hover:shadow-2xl sm:flex-row sm:items-center sm:gap-6">
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-light-cream flex items-center justify-center">
                      <img src={productImageSrc} alt={item.name} className="h-full object-contain" />
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-deep-navy break-words">{item.name}</h3>
                      <p className="text-aurelia-gold font-semibold text-lg">₺{item.price}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-light-cream text-deep-navy px-3 py-2 rounded-lg font-bold hover:bg-aurelia-gold hover:text-deep-navy transition"
                      >
                        −
                      </button>
                      <span className="text-lg font-bold text-deep-navy w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-light-cream text-deep-navy px-3 py-2 rounded-lg font-bold hover:bg-aurelia-gold hover:text-deep-navy transition"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-xl font-bold text-deep-navy">₺{item.price * item.quantity}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 font-semibold mt-2 text-sm"
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Özet */}
            <div className="bg-white rounded-xl shadow-lg p-6 h-fit border-2 border-aurelia-gold">
              <h3 className="text-2xl font-bold text-deep-navy mb-6">Sipariş Özeti</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ürün Toplamı:</span>
                  <span className="text-deep-navy font-semibold">₺{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kargo:</span>
                  <span className="text-deep-navy font-semibold">₺{shipping}</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between">
                  <span className="text-deep-navy font-bold text-lg">Toplam:</span>
                  <span className="text-aurelia-gold font-bold text-2xl">₺{grandTotal}</span>
                </div>
              </div>

              <button className="w-full bg-aurelia-gold text-deep-navy py-3 rounded-lg font-bold hover:bg-deep-navy hover:text-aurelia-gold transition text-lg mb-3">
                Ödemeye Geç
              </button>
              <button 
                onClick={() => setCurrentPage('products')}
                className="w-full bg-deep-navy text-aurelia-gold py-3 rounded-lg font-bold hover:bg-aurelia-gold hover:text-deep-navy transition"
              >
                Alışverişe Devam Et
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
