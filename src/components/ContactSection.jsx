import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Fale <span className="text-primary">Conosco</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Venha nos visitar ou faça seu pedido sem sair de casa.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="md:w-1/2 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Endereço</h3>
                <p className="text-gray-600">R. José Alves Pereira, 58-62<br/>Farolândia, Aracaju - SE</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">WhatsApp / Telefone</h3>
                <p className="text-gray-600">(79) 99999-7796</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Horário de Funcionamento</h3>
                <p className="text-gray-600">Terça a Domingo: 18:00 às 23:30<br/>Segunda: Fechado</p>
              </div>
            </div>
            
            <div className="pt-4 flex space-x-4">
              <a href="https://www.instagram.com/donnapizza1/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full text-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full text-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="md:w-1/2 h-80 bg-gray-200 rounded-2xl overflow-hidden relative border border-gray-100">
            {/* Imagem de placeholder para mapa usando iframe mockado ou imagem */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1500!2d-37.0!3d-10.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
