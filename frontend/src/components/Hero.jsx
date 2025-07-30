import React from 'react';
import { ArrowRight } from 'lucide-react';
import { companyInfo } from '../mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: '#F6D100' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: '#3E2F08' }}></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#3E2F08' }}></div>
        <div className="absolute top-1/3 left-3/4 w-24 h-24 rounded-full opacity-15" style={{ backgroundColor: '#3E2F08' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 
          className="text-6xl lg:text-8xl font-normal leading-[0.9] mb-8 tracking-tight"
          style={{ 
            fontFamily: 'Gilda Display, serif',
            color: '#3E2F08'
          }}
        >
          Cajá.
          <span className="block">Tecnologia Artesanal.</span>
        </h1>
        
        <p 
          className="text-xl lg:text-2xl leading-relaxed mb-16 max-w-4xl mx-auto font-medium"
          style={{ 
            fontFamily: 'Nunito Sans, sans-serif',
            color: '#3E2F08'
          }}
        >
          Na Cajá, oferecemos soluções digitais personalizadas que atendem às necessidades do seu negócio com agilidade, personalização e inteligência.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => scrollToSection('servicos')}
            className="btn-primary text-lg px-10 py-5 rounded-xl"
          >
            Conheça nossos serviços
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;