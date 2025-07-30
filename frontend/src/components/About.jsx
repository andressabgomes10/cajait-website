import React from 'react';
import { Heart, Target, Users, Zap } from 'lucide-react';
import { companyInfo } from '../mock';

const About = () => {
  const valueIcons = {
    'Inovação com alma': Zap,
    'Qualidade artesanal': Heart,
    'Proximidade humana': Users,
    'Simplicidade eficiente': Target
  };

  return (
    <section id="sobre" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              About Cajá
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              {companyInfo.mission}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {companyInfo.values.map((value, index) => {
                const IconComponent = valueIcons[value];
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-4">
                      <IconComponent size={28} className="text-gray-900" />
                    </div>
                    <span className="text-gray-800 font-semibold text-lg">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-12 shadow-lg">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                    <Heart size={28} className="text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl">Paixão por tecnologia</h4>
                    <p className="text-gray-600">Amor genuíno pelo que fazemos</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <Target size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl">Foco no resultado</h4>
                    <p className="text-gray-600">Soluções que geram valor real</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                    <Users size={28} className="text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl">Parceria verdadeira</h4>
                    <p className="text-gray-600">Construímos juntos o seu sucesso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-bold text-gray-900 mb-4">5+</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Anos de experiência</h4>
            <p className="text-gray-600">Desenvolvendo soluções digitais inovadoras</p>
          </div>
          
          <div>
            <div className="text-5xl font-bold text-gray-900 mb-4">50+</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Projetos entregues</h4>
            <p className="text-gray-600">MVPs, sistemas e treinamentos realizados</p>
          </div>
          
          <div>
            <div className="text-5xl font-bold text-gray-900 mb-4">98%</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Satisfação</h4>
            <p className="text-gray-600">Clientes satisfeitos com nossos serviços</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;