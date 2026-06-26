import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, sizes, crusts, onClose }) => {
  const { addToCart } = useCart();
  
  // Para produtos que não são pizzas, talvez não tenha tamanho nem borda
  const isPizza = product.category_name === 'Pizzas';
  
  const [selectedSize, setSelectedSize] = useState(isPizza && sizes.length > 0 ? sizes[1] : null); // Default Média
  const [selectedCrust, setSelectedCrust] = useState(isPizza && crusts.length > 0 ? crusts[0] : null); // Default Tradicional

  const calculateFinalPrice = () => {
    let price = parseFloat(product.base_price);
    if (selectedSize) price += parseFloat(selectedSize.price_modifier);
    if (selectedCrust) price += parseFloat(selectedCrust.price_modifier);
    return price;
  };

  const handleAddToCart = () => {
    addToCart({
      product,
      size: selectedSize,
      crust: selectedCrust,
      finalPrice: calculateFinalPrice(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[80] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 bg-white/50 hover:bg-white rounded-full p-2 transition-colors z-10">
          <X />
        </button>
        
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        
        <div className="p-6">
          <h2 className="text-3xl font-display font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          {isPizza && (
            <>
              {/* Tamanhos */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Escolha o Tamanho</h3>
                <div className="grid grid-cols-3 gap-3">
                  {sizes.map((size) => (
                    <button 
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 rounded-lg border text-sm font-semibold transition-all ${
                        selectedSize?.id === size.id 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bordas */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Borda</h3>
                <div className="flex flex-col gap-2">
                  {crusts.map((crust) => (
                    <button 
                      key={crust.id}
                      onClick={() => setSelectedCrust(crust)}
                      className={`py-3 px-4 rounded-lg border flex justify-between items-center transition-all ${
                        selectedCrust?.id === crust.id 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-semibold">{crust.name}</span>
                      <span className="text-sm">
                        {parseFloat(crust.price_modifier) > 0 ? `+ R$ ${crust.price_modifier}` : 'Grátis'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100">
            <div>
              <p className="text-sm text-gray-500">Total a pagar</p>
              <p className="text-2xl font-bold text-gray-900">R$ {calculateFinalPrice().toFixed(2)}</p>
            </div>
            <button onClick={handleAddToCart} className="btn-secondary px-8">
              Adicionar ao Carrinho
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;
