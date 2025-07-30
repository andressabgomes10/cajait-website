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

  const advantages = [
    'Equipe especializada em MVPs e produtos digitais',
    'Metodologia ágil adaptada às suas necessidades',
    'Acompanhamento personalizado em cada etapa',
    'Foco em resultados mensuráveis e escaláveis'
  ];

  return (
    <section id="sobre" className="bg-gradient-to-br from-gray-50 via-white to-yellow-50 py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full text-sm font-semibold text-yellow-800 mb-8">
              <Heart size={16} />
              Sobre a Cajá
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-none">
              About
              <span className="block text-yellow-600">Cajá</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              {companyInfo.mission}
            </p>
            
            <div className="space-y-4 mb-10">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{advantage}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={scrollToContact}
              className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3"
            >
              Vamos conversar
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent size={28} className="text-gray-900" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Process Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-16 border border-gray-100 shadow-xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nosso Processo
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma metodologia testada e refinada para entregar resultados excepcionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Descoberta', desc: 'Entendemos profundamente seu negócio e necessidades' },
              { step: '02', title: 'Estratégia', desc: 'Definimos a melhor abordagem e tecnologias' },
              { step: '03', title: 'Desenvolvimento', desc: 'Criamos sua solução com qualidade artesanal' },
              { step: '04', title: 'Lançamento', desc: 'Colocamos seu produto no ar e acompanhamos os resultados' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h4>
                <p className="text-gray-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;