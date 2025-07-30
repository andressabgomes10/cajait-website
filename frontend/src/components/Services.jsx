import React, { useState } from 'react';
import { Monitor, Settings, Wifi, ArrowRight, Rocket, Code, TrendingUp, Users } from 'lucide-react';
import { services } from '../mock';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceIcons = [Rocket, Code, TrendingUp];
  const serviceNames = ['MVPs Rápidos', 'Software Personalizado', 'Gestão de Produtos'];
  const serviceDescriptions = [
    'Desenvolvimento ágil de produtos mínimos viáveis para validar suas ideias no mercado rapidamente.',
    'Sistemas e aplicações sob medida, desenvolvidos especificamente para seu negócio.',
    'Acompanhamento completo do ciclo de vida dos seus produtos digitais.'
  ];

  return (
    <section id="servicos" className="bg-white py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full text-sm font-semibold text-yellow-800 mb-8">
            <Settings size={16} />
            Nossos Produtos
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            Products
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Soluções digitais pensadas para acelerar seu negócio com a qualidade artesanal que você merece.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = serviceIcons[index];
            const productName = serviceNames[index];
            const description = serviceDescriptions[index];
            
            return (
              <div 
                key={service.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-3xl p-10 text-center transition-all duration-500 cursor-pointer overflow-hidden ${
                  index === 0 
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 shadow-xl' 
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl'
                } ${hoveredCard === index ? 'scale-105' : ''}`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-current rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-current rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    index === 0 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-white shadow-md group-hover:shadow-lg'
                  }`}>
                    <IconComponent size={40} className={index === 0 ? 'text-gray-900' : 'text-gray-700'} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6">
                    {productName}
                  </h3>
                  
                  <p className={`text-lg leading-relaxed mb-8 ${
                    index === 0 ? 'text-gray-800' : 'text-gray-600'
                  }`}>
                    {description}
                  </p>
                  
                  <button 
                    onClick={scrollToContact}
                    className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 ${
                      index === 0 
                        ? 'text-gray-900 hover:text-gray-700' 
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    Saiba mais
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional service - Treinamentos */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Users size={40} className="text-gray-900" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Treinamentos Práticos
            </h3>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Capacitação prática para equipes e profissionais que desejam dominar tecnologias modernas 
              e metodologias ágeis com nossa abordagem hands-on.
            </p>
            
            <button 
              onClick={scrollToContact}
              className="bg-yellow-400 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
            >
              Converse conosco
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;