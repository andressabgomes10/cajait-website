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
    <section id="sobre" className="section artisanal-bg">
      <div className="section-content">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Sobre a {companyInfo.name}
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {companyInfo.mission}
            </p>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                Nossos Valores
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {companyInfo.values.map((value, index) => {
                  const IconComponent = valueIcons[value];
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <IconComponent size={20} className="text-yellow-700" />
                      </div>
                      <span className="text-gray-800 font-medium">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-yellow-100/50 rounded-2xl p-6 border-l-4 border-yellow-600">
              <p className="text-gray-800 italic">
                "Na Cajá, cada linha de código é pensada, cada interface é cuidadosamente desenhada, 
                e cada solução é desenvolvida com o mesmo carinho de um artesão moldando sua obra."
              </p>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                    <Heart size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Paixão por tecnologia</h4>
                    <p className="text-gray-600 text-sm">Amor genuíno pelo que fazemos</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                    <Target size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Foco no resultado</h4>
                    <p className="text-gray-600 text-sm">Soluções que geram valor real</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Parceria verdadeira</h4>
                    <p className="text-gray-600 text-sm">Construímos juntos o seu sucesso</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-200 rounded-full opacity-40"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-300 rounded-full opacity-30"></div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">5+</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Anos de experiência</h4>
            <p className="text-gray-600">Desenvolvendo soluções digitais inovadoras</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">50+</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Projetos entregues</h4>
            <p className="text-gray-600">MVPs, sistemas e treinamentos realizados</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">98%</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Satisfação</h4>
            <p className="text-gray-600">Clientes satisfeitos com nossos serviços</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;