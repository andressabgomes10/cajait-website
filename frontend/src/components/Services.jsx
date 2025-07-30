import React from 'react';
import { Monitor, Settings, Wifi } from 'lucide-react';
import { services } from '../mock';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceIcons = [Monitor, Settings, Wifi];
  const serviceNames = ['Product One', 'Product Two', 'Product Three'];

  return (
    <section id="servicos" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Products
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = serviceIcons[index];
            const productName = serviceNames[index];
            
            return (
              <div 
                key={service.id} 
                className={`rounded-3xl p-12 text-center transition-all duration-300 hover:scale-105 cursor-pointer ${
                  index === 0 
                    ? 'bg-yellow-400 text-gray-900' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <div className="flex justify-center mb-8">
                  <IconComponent size={64} className={index === 0 ? 'text-gray-900' : 'text-gray-700'} />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">
                  {productName}
                </h3>
                
                <p className={`text-lg leading-relaxed ${
                  index === 0 ? 'text-gray-800' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <button 
            onClick={scrollToContact}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;