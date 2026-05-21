import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureBar from './components/FeatureBar';
import About from './components/About';
import ProductGrid from './components/ProductGrid';
import DealSection from './components/DealSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import NewsSection from './components/NewsSection';
import BrandLogos from './components/BrandLogos';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-neutral-warm text-neutral-dark selection:bg-accent selection:text-white flex flex-col justify-between dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      {/* Top Navbar */}
      <Header
        cartCount={totalItemsCount}
        onCartClick={() => setCartSidebarOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <FeatureBar />
        <About />
        <ProductGrid onAddToCart={handleAddToCart} />
        <DealSection />
        <TestimonialCarousel />
        <NewsSection />
        <BrandLogos />
      </main>

      {/* Footer & Contact */}
      <Footer />

      {/* Cart Sidebar Panel */}
      <CartSidebar
        isOpen={cartSidebarOpen}
        onClose={() => setCartSidebarOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
