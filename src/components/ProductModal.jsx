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
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col max-h-[90vh] relative">
        <button onClick={onClose} className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 transition-colors z-10 shadow-sm">
          <X />
        </button>
        
        <div className="overflow-y-auto flex-1 rounded-t-2xl">
          <img src={product.image} alt={product.name} className="w-full h-48 sm:h-64 object-cover shrink-0" />
          
          <div className="p-4 sm:p-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">{product.description}</p>
            
            {isPizza && (
              <>
                {/* Tamanhos */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">Escolha o Tamanho</h3>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {sizes.map((size) => (
                      <button 
                        key={size.id}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-1 sm:px-3 rounded-lg border text-xs sm:text-sm font-semibold transition-all ${
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
                        className={`py-3 px-3 sm:px-4 rounded-lg border flex justify-between items-center transition-all ${
                          selectedCrust?.id === crust.id 
                            ? 'border-primary bg-primary/10 text-primary' 
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <span className="font-semibold text-sm sm:text-base">{crust.name}</span>
                        <span className="text-xs sm:text-sm">
                          {parseFloat(crust.price_modifier) > 0 ? `+ R$ ${crust.price_modifier}` : 'Grátis'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="p-4 sm:p-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between shrink-0 bg-white rounded-b-2xl gap-4 sm:gap-0">
          <div className="w-full sm:w-auto text-left">
            <p className="text-sm text-gray-500">Total a pagar</p>
            <p className="text-2xl font-bold text-gray-900">R$ {calculateFinalPrice().toFixed(2)}</p>
          </div>
          <button onClick={handleAddToCart} className="btn-secondary px-8 w-full sm:w-auto py-3 sm:py-2">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
