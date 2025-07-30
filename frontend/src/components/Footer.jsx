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
    <footer className="bg-gray-900 text-white">
      <div className="section-content py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-400 px-3 py-2 rounded-lg">
                <span className="text-gray-900 font-bold text-xl font-serif">Cajá</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex gap-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-2 bg-gray-800 rounded-lg hover:bg-yellow-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Serviços</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">MVPs Rápidos</li>
              <li className="text-gray-300">Software Personalizado</li>
              <li className="text-gray-300">Gestão de Produtos</li>
              <li className="text-gray-300">Treinamentos</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Cajá - Tecnologia Artesanal. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>Feito com</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>e muito código</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;