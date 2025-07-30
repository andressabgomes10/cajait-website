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
    <section id="inicio" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Artisanal Technology
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            {companyInfo.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => scrollToSection('servicos')}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-3"
            >
              Learn More
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;