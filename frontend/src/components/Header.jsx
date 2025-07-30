import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Using Official Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_caja-tech/artifacts/haipaigv_Logo%20fundo%20transparente.png" 
              alt="Cajá" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-900 hover:text-amber-600 font-medium transition-colors duration-200 text-lg"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-900 hover:text-amber-600 font-medium transition-colors duration-200 text-lg"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-900 hover:text-amber-600 font-medium transition-colors duration-200 text-lg"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-900 hover:text-amber-600 font-medium transition-colors duration-200 text-lg"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contato')}
              className="btn-gold"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-amber-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left text-gray-900 hover:text-amber-600 font-medium transition-colors duration-200 py-2"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left text-gray-900 hover:text-amber-600 font-medium transition-colors duration-200 py-2"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-gray-900 hover:text-amber-600 font-medium transition-colors duration-200 py-2"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-gray-900 hover:text-amber-600 font-medium transition-colors duration-200 py-2"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Contato
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="btn-gold w-full justify-center mt-4"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;