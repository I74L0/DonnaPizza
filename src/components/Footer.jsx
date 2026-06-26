import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <img 
          src="/donnapizza-logo.png" 
          alt="Donna Pizza Logo" 
          className="h-16 mx-auto mb-6 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
        />
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          A paixão por pizza levada a sério. Ingredientes de qualidade e muito sabor em cada pedaço.
        </p>
        <div className="flex justify-center space-x-6 mb-8 text-sm text-gray-400">
          <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
          <a href="#cardapio" className="hover:text-primary transition-colors">Cardápio</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </div>
        <div className="border-t border-gray-800 pt-6 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Donna Pizza. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
