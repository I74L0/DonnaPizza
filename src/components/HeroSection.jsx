import React from 'react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary-dark">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=2000')" }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight">
            A Melhor Pizza <br/> <span className="text-accent">da Cidade</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 font-light max-w-lg">
            Massa artesanal, ingredientes frescos selecionados a dedo e muito sabor. Peça agora e experimente a verdadeira paixão italiana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#cardapio" className="btn-secondary text-center text-lg py-3 px-8 shadow-[0_0_15px_rgba(255,91,103,0.5)]">
              Ver Cardápio
            </a>
            <a href="#contato" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full text-center transition-colors border border-white/30 backdrop-blur-sm">
              Nossa Localização
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
