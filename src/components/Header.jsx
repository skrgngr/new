import React, { useState } from 'react'

export default function Header({ currentPage, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Ana Sayfa', id: 'home' },
    { name: 'Ürünlerimiz', id: 'products' },
    { name: 'Hakkımızda', id: 'about' },
    { name: 'İletişim', id: 'contact' },
    { name: '🛒 Sepetim', id: 'cart' },
  ]

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div 
            className="text-3xl font-bold text-gold cursor-pointer hover:opacity-80 transition"
            onClick={() => handleNavClick('home')}
          >
            ✨ AURA
          </div>
          
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition font-semibold ${
                  currentPage === item.id 
                    ? 'text-gold border-b-2 border-gold' 
                    : 'text-white hover:text-gold'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button 
            className="md:hidden text-gold text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition font-semibold text-left ${
                  currentPage === item.id 
                    ? 'text-gold' 
                    : 'text-white hover:text-gold'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
