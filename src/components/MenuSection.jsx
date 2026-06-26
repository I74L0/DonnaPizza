import React, { useState, useEffect } from 'react';
import ProductModal from './ProductModal';

const MenuSection = () => {
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [crusts, setCrusts] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca dados do backend
    const fetchData = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
        const [catRes, sizesRes, crustsRes] = await Promise.all([
          fetch(`${API_URL}/api/categories/`),
          fetch(`${API_URL}/api/sizes/`),
          fetch(`${API_URL}/api/crusts/`)
        ]);
        
        const catData = await catRes.json();
        const sizesData = await sizesRes.json();
        const crustsData = await crustsRes.json();
        
        setCategories(catData);
        setSizes(sizesData);
        setCrusts(crustsData);
        
        if (catData.length > 0) {
          setActiveTab(catData[0].id);
        }
      } catch (error) {
        console.error("Erro ao buscar cardápio", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="py-20 text-center font-bold text-gray-500">Carregando cardápio...</div>;
  }

  const activeCategory = categories.find(c => c.id === activeTab);

  return (
    <section id="cardapio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Nosso <span className="text-primary">Cardápio</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Escolha o seu prato e monte do seu jeito!</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-2 md:space-x-4 flex-wrap gap-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === cat.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCategory?.products.map((item) => (
            <div key={item.id} className="card group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-bold shadow-sm">
                  A partir de R$ {parseFloat(item.base_price).toFixed(2)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{item.name}</h3>
                <p className="text-gray-600 mb-6 min-h-[48px] line-clamp-2">{item.description}</p>
                <button 
                  onClick={() => setSelectedProduct(item)}
                  className="w-full btn-secondary flex justify-center items-center gap-2"
                >
                  Adicionar ao Pedido
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          sizes={sizes}
          crusts={crusts}
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default MenuSection;
