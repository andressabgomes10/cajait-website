import React from 'react';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import { companyInfo } from '../mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-gray-50 via-white to-yellow-50 py-32 lg:py-40 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-normal opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-200 rounded-full mix-blend-normal opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-100 rounded-full mix-blend-normal opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-yellow-200 px-6 py-3 rounded-full text-sm font-semibold text-gray-700 mb-8 shadow-sm">
            <Sparkles size={16} className="text-yellow-600" />
            Tecnologia Artesanal
            <Code size={16} className="text-gray-600" />
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[0.9] mb-8 tracking-tight">
            Artisanal
            <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto font-medium">
            Desenvolvemos <span className="text-gray-900 font-semibold">soluções digitais personalizadas</span> com o cuidado e a qualidade do trabalho artesanal, 
            unindo <span className="text-yellow-600 font-semibold">inovação tecnológica</span> com proximidade humana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('servicos')}
              className="group bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Conheça nossos produtos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => scrollToSection('contato')}
              className="group bg-white border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 shadow-lg"
            >
              Fale conosco
              <Zap size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-black text-gray-900 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Anos criando soluções</div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-black text-yellow-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projetos entregues</div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-4xl font-black text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;