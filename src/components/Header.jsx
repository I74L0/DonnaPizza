import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import OrdersHistoryModal from './OrdersHistoryModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const { cartItems, toggleCart } = useCart();

  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/donnapizza-logo.png" 
              alt="Donna Pizza Logo" 
              className="h-12 md:h-16 object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#inicio" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary font-medium transition-colors`}>Início</a>
            <a href="#cardapio" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary font-medium transition-colors`}>Cardápio</a>
            <a href="#contato" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary font-medium transition-colors`}>Contato</a>
            
            <button onClick={() => setIsHistoryOpen(true)} className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary font-medium transition-colors flex items-center gap-1`}>
              <Clock size={18} /> Meus Pedidos
            </button>
            <button onClick={toggleCart} className="btn-secondary flex items-center gap-2 relative">
              <ShoppingCart size={20} /> Carrinho
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleCart} className={`${isScrolled ? 'text-gray-800' : 'text-white'} relative`}>
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
          <button 
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full flex flex-col space-y-4 px-6 py-6 border-t border-gray-100">
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 text-lg font-medium">Início</a>
            <a href="#cardapio" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 text-lg font-medium">Cardápio</a>
            <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 text-lg font-medium">Contato</a>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsHistoryOpen(true); }} 
              className="text-gray-800 text-lg font-medium text-left flex items-center gap-2"
            >
              <Clock size={20} /> Meus Pedidos
            </button>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); toggleCart(); }} 
              className="btn-secondary text-center w-full"
            >
              Ver Carrinho
            </button>
          </div>
        )}
      </header>

      {isHistoryOpen && (
        <OrdersHistoryModal onClose={() => setIsHistoryOpen(false)} />
      )}
    </>
  );
};

export default Header;
