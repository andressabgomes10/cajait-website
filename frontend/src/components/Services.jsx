import React from 'react';
import { Rocket, Code, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { services } from '../mock';

const iconMap = {
  rocket: Rocket,
  code: Code,
  'trending-up': TrendingUp,
  users: Users
};

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="section bg-white/50 backdrop-blur-sm">
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Desenvolvemos soluções digitais sob medida, combinando agilidade tecnológica 
            com o cuidado artesanal em cada projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div 
                key={service.id} 
                className="card fade-in-up group cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors duration-300">
                    <IconComponent size={32} className="text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToContact}
                  className="text-gray-900 font-semibold hover:text-yellow-700 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Saiba mais
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="card-accent inline-block p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-gray-700 mb-6">
              Vamos conversar sobre como podemos ajudar você a transformar suas ideias em realidade.
            </p>
            <button 
              onClick={scrollToContact}
              className="btn-primary"
            >
              Iniciar projeto
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;