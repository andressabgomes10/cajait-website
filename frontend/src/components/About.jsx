import React from 'react';
import { Heart, Target, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { companyInfo } from '../mock';

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Zap,
      title: 'Inovação com alma',
      description: 'Tecnologia de ponta com toque humano'
    },
    {
      icon: Heart,
      title: 'Qualidade artesanal',
      description: 'Cada detalhe cuidadosamente pensado'
    },
    {
      icon: Users,
      title: 'Proximidade humana',
      description: 'Parceria verdadeira em cada projeto'
    },
    {
      icon: Target,
      title: 'Simplicidade eficiente',
      description: 'Soluções claras e objetivas'
    }
  ];

  return (
    <section id="sobre" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Content */}
          <div>
            <h2 
              className="text-5xl lg:text-6xl font-normal mb-8 leading-tight"
              style={{ 
                fontFamily: 'Gilda Display, serif',
                color: '#111827'
              }}
            >
              Sobre a Cajá
            </h2>
            
            <p 
              className="text-xl leading-relaxed mb-8 font-medium"
              style={{ 
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#6B7280'
              }}
            >
              {companyInfo.mission}
            </p>
            
            <div className="space-y-3 mb-8">
              {[
                'Equipe especializada em MVPs e produtos digitais',
                'Metodologia ágil adaptada às suas necessidades',
                'Acompanhamento personalizado em cada etapa',
                'Foco em resultados mensuráveis e escaláveis'
              ].map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: '#F6D100' }} className="mt-1 flex-shrink-0" />
                  <span 
                    className="text-base"
                    style={{ 
                      fontFamily: 'Nunito Sans, sans-serif',
                      color: '#374151'
                    }}
                  >
                    {advantage}
                  </span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={scrollToContact}
              className="btn-gold text-lg px-8 py-4 rounded-xl"
            >
              Vamos conversar
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#F6D100' }}>
                    <IconComponent size={24} style={{ color: '#3E2F08' }} />
                  </div>
                  <h4 
                    className="font-bold text-base mb-2"
                    style={{ 
                      fontFamily: 'Nunito Sans, sans-serif',
                      color: '#111827'
                    }}
                  >
                    {value.title}
                  </h4>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ 
                      fontFamily: 'Nunito Sans, sans-serif',
                      color: '#6B7280'
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div 
              className="text-5xl font-bold mb-4"
              style={{ 
                fontFamily: 'Gilda Display, serif',
                color: '#111827'
              }}
            >
              12+
            </div>
            <h4 
              className="text-xl font-semibold mb-2"
              style={{ 
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#111827'
              }}
            >
              Anos de experiência
            </h4>
            <p 
              style={{ 
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#6B7280'
              }}
            >
              Desenvolvendo soluções digitais inovadoras
            </p>
          </div>
          
          <div>
            <div 
              className="text-5xl font-bold mb-4"
              style={{ 
                fontFamily: 'Gilda Display, serif',
                color: '#111827'
              }}
            >
              +100
            </div>
            <h4 
              className="text-xl font-semibold mb-2"
              style={{ 
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#111827'
              }}
            >
              Projetos entregues
            </h4>
            <p 
              style={{ 
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#6B7280'
              }}
            >
              MVPs, sistemas e treinamentos realizados
            </p>
          </div>
          
          <div>
            <div 
              className="text-5xl font-bold mb-4"
              style={{ 
                fontFamily: 'Gilda Display, serif',
                color: '#111827'
              }}
            >
              98%
            </div>
            <h4 
              className="text-xl font-semibold mb-2"
              style={{ 
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#111827'
              }}
            >
              Satisfação
            </h4>
            <p 
              style={{ 
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#6B7280'
              }}
            >
              Clientes satisfeitos com nossos serviços
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;