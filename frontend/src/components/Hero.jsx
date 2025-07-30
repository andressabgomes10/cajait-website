import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { companyInfo } from '../mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="section artisanal-bg min-h-screen flex items-center">
      <div className="section-content w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
              <Sparkles size={16} className="text-yellow-600" />
              {companyInfo.tagline}
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Inovação com
              <span className="block text-yellow-600">alma artesanal</span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
              {companyInfo.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('servicos')}
                className="btn-primary text-lg px-8 py-4"
              >
                Conheça nossos serviços
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="btn-secondary text-lg px-8 py-4"
              >
                Fale conosco
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-300/50">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-serif">50+</h3>
                <p className="text-gray-600">Projetos entregues</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-serif">98%</h3>
                <p className="text-gray-600">Satisfação do cliente</p>
              </div>
            </div>
          </div>
          
          {/* Visual Column */}
          <div className="relative">
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-yellow-200/50 rounded-xl p-6 h-32 flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
                </div>
                <div className="bg-white/80 rounded-xl p-6 h-32 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
                </div>
                <div className="bg-white/80 rounded-xl p-6 h-32 flex items-center justify-center col-span-2">
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-900 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;