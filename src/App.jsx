import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="font-sans text-gray-900 bg-gray-50 min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <MenuSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}

export default App;
