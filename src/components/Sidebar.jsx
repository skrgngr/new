import React, { useState } from 'react'

const logoSrc = `${import.meta.env.BASE_URL}ımg/logo-transparent.png`

export default function Sidebar({ currentPage, setCurrentPage }) {
  const [mobileMenu, setMobileMenu] = useState(false)

  const navItems = [
    { name: 'Ana Sayfa', id: 'home' },
    { name: 'Ürünlerimiz', id: 'products' },
    { name: 'Hakkımızda', id: 'about' },
    { name: 'İletişim', id: 'contact' },
    { name: 'Sepetim', id: 'cart' },
  ]

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setMobileMenu(false)
  }

  return (
    <aside className="relative z-50 w-full flex-shrink-0 bg-deep-navy text-aurelia-gold border-b border-black/20 md:sticky md:top-0 md:h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="flex h-full flex-col">
        <div className="flex w-full items-center justify-between bg-deep-navy px-3 py-2 md:hidden">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex min-w-0 items-center gap-2"
          >
            <img src={logoSrc} alt="AURA" className="h-10 w-10 flex-shrink-0 object-contain" />
            <span className="truncate font-serif text-lg font-bold text-aurelia-gold">AURA</span>
          </button>

          <button
            type="button"
            aria-label="Menüyü aç veya kapat"
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu(open => !open)}
            className="flex h-10 w-10 items-center justify-center text-2xl text-aurelia-gold"
          >
            ☰
          </button>
        </div>

        {mobileMenu && (
          <nav className="absolute left-0 right-0 top-full z-50 bg-deep-navy md:hidden border-t border-white/10 px-3 py-3 shadow-xl">
            <div className="flex flex-col gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full rounded-md px-3 py-3 text-left font-semibold transition ${
                    currentPage === item.id
                      ? 'bg-black/20 text-aurelia-gold'
                      : 'text-white/90 hover:bg-black/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}

        <div className="hidden items-center px-4 py-6 md:flex">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3"
          >
            <img src={logoSrc} alt="AURA" className="h-14 w-14 flex-shrink-0 object-contain" />
            <span className="font-serif text-2xl font-bold text-aurelia-gold">AURA</span>
          </button>
        </div>

        <nav className="hidden flex-1 px-2 py-4 md:block">
          {navItems.map(item => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`my-1 flex w-full items-center gap-3 rounded-md px-4 py-3 text-left transition ${
                currentPage === item.id
                  ? 'bg-black/20 text-aurelia-gold'
                  : 'text-white/90 hover:bg-black/10'
              }`}
            >
              <span className="ml-1">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="hidden px-4 py-6 md:block">
          <div className="rounded-md bg-gradient-to-b from-black/10 to-transparent p-3 text-sm text-white/70">
            <div className="font-semibold">Koleksiyonu Keşfet</div>
            <div className="mt-2 text-xs">Yeni sezon ürünlerimizi inceleyin</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
