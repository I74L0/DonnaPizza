import React, { useState } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutModal from './CheckoutModal';

const CartSidebar = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, cartTotal } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[60]" onClick={toggleCart}></div>
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col transform transition-transform duration-300">
        
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-display font-bold flex items-center gap-2">
            <ShoppingBag /> Seu Pedido
          </h2>
          <button onClick={toggleCart} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p>Seu carrinho está vazio.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                  <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{item.product.name}</h4>
                    <p className="text-xs text-gray-500 mb-2">
                      {item.size?.name && `Tamanho: ${item.size.name}`}
                      {item.crust?.name && ` | Borda: ${item.crust.name}`}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary">R$ {item.finalPrice.toFixed(2)}</span>
                      <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded">Qtd: {item.quantity}</span>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(index)} className="text-red-400 hover:text-red-600 transition-colors self-start">
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4 text-lg font-bold">
              <span>Subtotal:</span>
              <span>R$ {cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full btn-primary py-3 text-lg"
            >
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>

      {isCheckoutOpen && (
        <CheckoutModal onClose={() => setIsCheckoutOpen(false)} onComplete={toggleCart} />
      )}
    </>
  );
};

export default CartSidebar;
