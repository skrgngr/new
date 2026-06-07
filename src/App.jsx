import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity }])
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'products':
        return <Products addToCart={addToCart} />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'cart':
        return <Cart cartItems={cartItems} setCartItems={setCartItems} setCurrentPage={setCurrentPage} />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-deep-navy text-white overflow-x-hidden">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="flex-1 min-w-0 flex flex-col">
        {currentPage === 'home' && <Banner setCurrentPage={setCurrentPage} />}

        <main className="flex-1">
          {renderPage()}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
