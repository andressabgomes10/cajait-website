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
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_caja-tech/artifacts/0bnkll8q_image%20%281%29.png" 
              alt="Cajá" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200 text-lg"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200 text-lg"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200 text-lg"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200 text-lg"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
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
                className="block w-full text-left text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200 py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200 py-2"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200 py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200 py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;