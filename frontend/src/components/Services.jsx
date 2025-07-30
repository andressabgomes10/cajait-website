import React from 'react';
import { Monitor, Zap, Users, ArrowRight } from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      icon: Monitor,
      title: 'Nosso processo de desenvolvimento ágil',
      description: 'Metodologia comprovada que acelera a entrega de produtos digitais, priorizando qualidade e eficiência em cada etapa do desenvolvimento.',
      features: ['Sprints organizadas', 'Entregas frequentes', 'Feedback contínuo', 'Adaptação rápida']
    },
    {
      id: 2,
      icon: Zap,
      title: 'Foco em MVPs para validação rápida',
      description: 'Desenvolvemos produtos mínimos viáveis que permitem testar ideias rapidamente no mercado, minimizando riscos e maximizando aprendizados.',
      features: ['Prototipagem rápida', 'Testes de mercado', 'Iteração baseada em dados', 'Escalabilidade planejada']
    },
    {
      id: 3,
      icon: Users,
      title: 'Treinamentos práticos para sua equipe',
      description: 'Capacitação hands-on em tecnologias modernas e metodologias ágeis, preparando sua equipe para os desafios do desenvolvimento digital.',
      features: ['Workshops práticos', 'Tecnologias atuais', 'Metodologias ágeis', 'Suporte contínuo']
    }
  ];

  return (
    <section id="servicos" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* First Section - Services Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div key={service.id} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F6D100' }}>
                  <IconComponent size={32} style={{ color: '#3E2F08' }} />
                </div>
                
                <h3 
                  className="text-2xl font-normal mb-4 leading-tight"
                  style={{ 
                    fontFamily: 'Gilda Display, serif',
                    color: '#111827'
                  }}
                >
                  {service.title}
                </h3>
                
                <p 
                  className="text-lg leading-relaxed mb-6"
                  style={{ 
                    fontFamily: 'Nunito Sans, sans-serif',
                    color: '#6B7280'
                  }}
                >
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F6D100' }}></div>
                      <span 
                        className="text-gray-700 text-sm"
                        style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToContact}
                  className="text-sm font-semibold hover:underline transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
                  style={{ 
                    color: '#3E2F08',
                    fontFamily: 'Nunito Sans, sans-serif'
                  }}
                >
                  Saiba mais
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Second Section - Benefits */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-normal mb-6 leading-tight"
            style={{ 
              fontFamily: 'Gilda Display, serif',
              color: '#111827'
            }}
          >
            Descubra os benefícios de escolher
            <span className="block">a Cajá para suas soluções digitais.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {[
            {
              icon: '🚀',
              title: 'Transformar suas ideias em realidade com personalização e agilidade.',
              description: 'Desenvolvemos soluções sob medida que se adaptam perfeitamente às necessidades do seu negócio, garantindo resultados eficientes e inovadores.'
            },
            {
              icon: '⚡',
              title: 'Agilidade na entrega de MVPs para acelerar seu projeto.',
              description: 'Nossa metodologia ágil permite entregas rápidas e iterativas, colocando seu produto no mercado em tempo recorde sem comprometer a qualidade.'
            },
            {
              icon: '📚',
              title: 'Expertise na gestão do ciclo de vida de produtos digitais.',
              description: 'Acompanhamos seu produto desde a concepção até a evolução contínua, garantindo que ele se mantenha relevante e competitivo no mercado.'
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              
              <h3 
                className="text-xl font-normal mb-4 leading-tight"
                style={{ 
                  fontFamily: 'Gilda Display, serif',
                  color: '#111827'
                }}
              >
                {benefit.title}
              </h3>
              
              <p 
                className="text-lg leading-relaxed mb-6"
                style={{ 
                  fontFamily: 'Nunito Sans, sans-serif',
                  color: '#6B7280'
                }}
              >
                {benefit.description}
              </p>
              
              <button 
                onClick={scrollToContact}
                className="text-sm font-semibold hover:underline transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
                style={{ 
                  color: '#3E2F08',
                  fontFamily: 'Nunito Sans, sans-serif'
                }}
              >
                Saiba mais
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="btn-gold text-lg px-10 py-4 rounded-xl"
          >
            Fale conosco
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;