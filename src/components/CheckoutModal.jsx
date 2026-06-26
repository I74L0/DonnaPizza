import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MapPin, CreditCard, Loader } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutModal = ({ onClose, onComplete }) => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [orderId, setOrderId] = useState(null);

  // Simula o cálculo da taxa de entrega baseado no endereço inserido
  const handleCalculateFee = () => {
    if (address.length > 5) {
      // Simulação: gera um valor aleatório entre R$ 5 e R$ 15
      const mockFee = Math.floor(Math.random() * 10) + 5;
      setDeliveryFee(mockFee);
      setStep(2);
    } else {
      alert("Por favor, insira um endereço válido.");
    }
  };

  const handleSimulatePayment = async () => {
    setLoading(true);
    
    try {
      const itemsPayload = cartItems.map(item => ({
        product: item.product.id,
        size: item.size?.id,
        crust: item.crust?.id,
        quantity: item.quantity,
        price: item.finalPrice
      }));

      const payload = {
        customer_name: name,
        customer_address: address,
        total_price: cartTotal + deliveryFee,
        delivery_fee: deliveryFee,
        status: 'PAID', // Simulando pagamento direto no Stripe
        items: itemsPayload
      };

      const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
      const response = await fetch(`${API_URL}/api/orders/checkout/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.status === 'success') {
        setOrderId(data.order_id);
        clearCart();
        setStep(3);
      } else {
        alert("Erro ao processar pedido.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[80] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative">
        
        {step < 3 && (
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10">
            <X />
          </button>
        )}

        <div className="p-6">
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MapPin className="text-primary"/> Dados de Entrega</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Ex: João da Silva"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Endereço Completo</label>
                  <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none h-24" placeholder="Rua, Número, Bairro, Ponto de Referência..."/>
                </div>
              </div>

              <button 
                onClick={handleCalculateFee}
                disabled={!name || !address}
                className="w-full btn-primary disabled:opacity-50"
              >
                Continuar para Pagamento
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><CreditCard className="text-primary"/> Resumo e Pagamento</h2>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>R$ {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxa de Entrega:</span>
                  <span>R$ {deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-200 mt-2">
                  <span>Total:</span>
                  <span>R$ {(cartTotal + deliveryFee).toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Simulação (Stripe)</strong>: Ao clicar abaixo, iremos simular um pagamento com cartão via Stripe e o pedido será gravado no banco de dados.
                </p>
              </div>

              <button 
                onClick={handleSimulatePayment}
                disabled={loading}
                className="w-full bg-[#635BFF] hover:bg-[#4d46cf] text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                {loading ? <Loader className="animate-spin" /> : "Pagar via Stripe (Mock)"}
              </button>
              
              <button onClick={() => setStep(1)} className="w-full mt-3 text-gray-500 text-sm hover:text-gray-800">
                Voltar
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8 animate-fade-in">
              <div className="flex justify-center mb-6">
                <CheckCircle size={80} className="text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Pedido Confirmado!</h2>
              <p className="text-gray-600 mb-6">Seu pagamento foi aprovado e o pedido #{orderId} já está sendo preparado.</p>
              
              <button 
                onClick={() => {
                  onClose();
                  onComplete();
                }}
                className="btn-primary"
              >
                Voltar para a loja
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CheckoutModal;
