import React, { useState, useEffect } from 'react';
import { X, Clock, Package } from 'lucide-react';

const OrdersHistoryModal = ({ onClose }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/orders/');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Erro ao buscar pedidos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/60 z-[80] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl h-[80vh] flex flex-col relative overflow-hidden">
        
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Clock className="text-primary"/> Histórico de Pedidos
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="text-center text-gray-500 py-10">Carregando histórico...</div>
          ) : orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
              <Package size={48} className="opacity-20" />
              <p>Nenhum pedido encontrado.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow bg-white">
                  <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Pedido #{order.id}</h3>
                      <p className="text-sm text-gray-500">{new Date(order.created_at).toLocaleString('pt-BR')}</p>
                      <p className="text-sm text-gray-600 mt-1"><strong>Cliente:</strong> {order.customer_name || 'Anônimo'}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm mb-2">
                        {order.status}
                      </span>
                      <p className="font-bold text-xl text-gray-900">R$ {parseFloat(order.total_price).toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Itens do Pedido:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {order.items.map((item, idx) => (
                        <li key={idx} className="flex justify-between">
                          <span>
                            {item.quantity}x {item.product} 
                            <span className="text-xs text-gray-400 ml-1">
                              (Tamanho: {item.size || 'N/A'}, Borda: {item.crust || 'N/A'})
                            </span>
                          </span>
                          <span>R$ {parseFloat(item.price).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default OrdersHistoryModal;
