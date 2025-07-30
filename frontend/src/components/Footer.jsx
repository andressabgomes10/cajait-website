import React from 'react';
import { Heart, Linkedin, Instagram, Mail } from 'lucide-react';
import { companyInfo, socialLinks, contactInfo } from '../mock';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_caja-tech/artifacts/haipaigv_Logo%20fundo%20transparente.png" 
                alt="Cajá" 
                className="h-12 w-auto"
              />
            </div>
            <p 
              className="text-gray-600 mb-6 leading-relaxed"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              {companyInfo.description}
            </p>
            <div className="flex gap-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-2 bg-gray-200 rounded-lg hover:text-white transition-all duration-200"
                style={{ '&:hover': { backgroundColor: '#F6D100', color: '#3E2F08' } }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg font-bold mb-6"
              style={{ 
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#3E2F08'
              }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 
              className="text-lg font-bold mb-6"
              style={{ 
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#3E2F08'
              }}
            >
              Serviços
            </h4>
            <ul className="space-y-3">
              <li 
                className="text-gray-600"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                MVPs Rápidos
              </li>
              <li 
                className="text-gray-600"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Software Personalizado
              </li>
              <li 
                className="text-gray-600"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Gestão de Produtos
              </li>
              <li 
                className="text-gray-600"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Treinamentos
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-gray-500 text-sm"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            © 2025 Cajá - Tecnologia Artesanal. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <span style={{ fontFamily: 'Nunito Sans, sans-serif' }}>Feito com</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span style={{ fontFamily: 'Nunito Sans, sans-serif' }}>e muito código</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;