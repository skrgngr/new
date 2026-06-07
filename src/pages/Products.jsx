import React, { useState } from 'react'

const productImageSrc = `${import.meta.env.BASE_URL}ımg/ürün.png`

export default function Products({ addToCart }) {
  const [filter, setFilter] = useState('all')
  const [quantities, setQuantities] = useState({})

  const products = [
    // Kadın Ürünleri (6)
    { id: 1, name: 'Mystique', price: '₺299', category: 'women' },
    { id: 2, name: 'Elegance', price: '₺349', category: 'women' },
    { id: 3, name: 'Eternal', price: '₺399', category: 'women' },
    { id: 4, name: 'Rose Garden', price: '₺329', category: 'women' },
    { id: 5, name: 'Jasmine Dream', price: '₺379', category: 'women' },
    { id: 6, name: 'Enchanted Bloom', price: '₺359', category: 'women' },
    
    // Erkek Ürünleri (6)
    { id: 7, name: 'Gentleman', price: '₺379', category: 'men' },
    { id: 8, name: 'Mystic Wood', price: '₺359', category: 'men' },
    { id: 9, name: 'Midnight Storm', price: '₺389', category: 'men' },
    { id: 10, name: 'Ocean Breeze', price: '₺369', category: 'men' },
    { id: 11, name: 'Leather Edge', price: '₺399', category: 'men' },
    { id: 12, name: 'Woody Spirit', price: '₺349', category: 'men' },
    
    // Unisex Ürünleri (4)
    { id: 13, name: 'Twilight', price: '₺329', category: 'unisex' },
    { id: 14, name: 'Amber Musk', price: '₺359', category: 'unisex' },
    { id: 15, name: 'Vanilla Noir', price: '₺379', category: 'unisex' },
    { id: 16, name: 'Sensual Blend', price: '₺389', category: 'unisex' },
  ]

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter)

  const handleQuantityChange = (productId, value) => {
    const quantity = Math.max(1, parseInt(value) || 1)
    setQuantities({ ...quantities, [productId]: quantity })
  }

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1
    const price = parseInt(product.price.replace('₺', ''))
    addToCart({ ...product, price }, quantity)
    // Adet sıfırla
    setQuantities({ ...quantities, [product.id]: 1 })
    alert(`${product.name} sepete eklendi!`)
  }

  return (
    <div className="min-h-screen bg-light-cream">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-4xl font-bold text-deep-navy mb-8">Ürünlerimiz</h1>

        {/* Filtreler */}
        <div className="grid grid-cols-2 gap-3 mb-8 sm:flex sm:flex-wrap sm:gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`min-h-10 px-3 py-2 text-sm sm:px-6 sm:text-base rounded-md sm:rounded-lg font-bold transition ${
              filter === 'all' 
                ? 'bg-aurelia-gold text-deep-navy' 
                : 'bg-gray-300 text-deep-navy hover:bg-gray-400'
            }`}
          >
            Tüm Ürünler
          </button>
          <button
            onClick={() => setFilter('women')}
            className={`min-h-10 px-3 py-2 text-sm sm:px-6 sm:text-base rounded-md sm:rounded-lg font-bold transition ${
              filter === 'women' 
                ? 'bg-aurelia-gold text-deep-navy' 
                : 'bg-gray-300 text-deep-navy hover:bg-gray-400'
            }`}
          >
            👩 Kadın
          </button>
          <button
            onClick={() => setFilter('men')}
            className={`min-h-10 px-3 py-2 text-sm sm:px-6 sm:text-base rounded-md sm:rounded-lg font-bold transition ${
              filter === 'men' 
                ? 'bg-aurelia-gold text-deep-navy' 
                : 'bg-gray-300 text-deep-navy hover:bg-gray-400'
            }`}
          >
            👨 Erkek
          </button>
          <button
            onClick={() => setFilter('unisex')}
            className={`min-h-10 px-3 py-2 text-sm sm:px-6 sm:text-base rounded-md sm:rounded-lg font-bold transition ${
              filter === 'unisex' 
                ? 'bg-aurelia-gold text-deep-navy' 
                : 'bg-gray-300 text-deep-navy hover:bg-gray-400'
            }`}
          >
            ♾️ Unisex
          </button>
        </div>

        {/* Ürün Listesi */}
        <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden transition md:hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="w-full h-48 sm:h-56 bg-light-cream flex items-center justify-center overflow-hidden">
                <img src={productImageSrc} alt={product.name} className="h-full object-contain" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-deep-navy mb-4 break-words">{product.name}</h3>
                
                {/* Adet Seçmesi */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-deep-navy mb-2">
                    Adet:
                  </label>
                  <input 
                    type="number" 
                    min="1" 
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    className="w-full px-3 py-2 border-2 border-aurelia-gold rounded-lg text-center font-bold text-deep-navy focus:outline-none focus:border-deep-navy"
                  />
                </div>

                {/* Fiyat ve Sepete Ekle */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-2xl font-bold text-aurelia-gold">{product.price}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full sm:w-auto bg-deep-navy text-aurelia-gold px-4 py-2 rounded-lg hover:bg-aurelia-gold hover:text-deep-navy transition font-bold"
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
