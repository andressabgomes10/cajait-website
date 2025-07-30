import React, { useState } from 'react';
import { Send, Linkedin, Instagram, CheckCircle, AlertCircle } from 'lucide-react';
import { socialLinks } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Mock form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 lg:py-32 text-white" style={{ backgroundColor: '#3E2F08' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl lg:text-6xl font-normal mb-8 tracking-tight text-white"
            style={{ fontFamily: 'Gilda Display, serif' }}
          >
            Vamos conversar?
          </h2>
          
          <p 
            className="text-xl max-w-3xl mx-auto font-medium text-gray-300"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            Pronto para transformar sua ideia em realidade? Vamos construir algo incrível juntos.
          </p>
        </div>

        {/* Contact Form - Centered */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 max-w-2xl mx-auto">
          <h3 
            className="text-3xl font-normal text-white mb-8 text-center"
            style={{ fontFamily: 'Gilda Display, serif' }}
          >
            Envie sua mensagem
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-semibold text-gray-300 mb-3"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 transition-all duration-200 text-white placeholder-gray-400"
                  style={{ 
                    fontFamily: 'Nunito Sans, sans-serif',
                    '--tw-ring-color': '#F6D100'
                  }}
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold text-gray-300 mb-3"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 transition-all duration-200 text-white placeholder-gray-400"
                  style={{ 
                    fontFamily: 'Nunito Sans, sans-serif',
                    '--tw-ring-color': '#F6D100'
                  }}
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="company" 
                  className="block text-sm font-semibold text-gray-300 mb-3"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 transition-all duration-200 text-white placeholder-gray-400"
                  style={{ 
                    fontFamily: 'Nunito Sans, sans-serif',
                    '--tw-ring-color': '#F6D100'
                  }}
                  placeholder="Nome da sua empresa"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="service" 
                  className="block text-sm font-semibold text-gray-300 mb-3"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  Serviço de interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 transition-all duration-200 text-white"
                  style={{ 
                    fontFamily: 'Nunito Sans, sans-serif',
                    '--tw-ring-color': '#F6D100'
                  }}
                >
                  <option value="" className="bg-gray-800">Selecione um serviço</option>
                  <option value="mvp" className="bg-gray-800">MVP Rápido</option>
                  <option value="software" className="bg-gray-800">Software Personalizado</option>
                  <option value="gestao" className="bg-gray-800">Gestão de Produtos Digitais</option>
                  <option value="treinamento" className="bg-gray-800">Treinamentos Práticos</option>
                  <option value="consultoria" className="bg-gray-800">Consultoria</option>
                </select>
              </div>
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-semibold text-gray-300 mb-3"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 transition-all duration-200 resize-none text-white placeholder-gray-400"
                style={{ 
                  fontFamily: 'Nunito Sans, sans-serif',
                  '--tw-ring-color': '#F6D100'
                }}
                placeholder="Conte-nos sobre seu projeto ou necessidade..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:scale-[1.02] shadow-lg"
              style={{ 
                backgroundColor: '#F6D100',
                color: '#3E2F08',
                fontFamily: 'Nunito Sans, sans-serif'
              }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              <Send size={20} />
            </button>
            
            {submitStatus === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 text-green-400 rounded-2xl">
                <CheckCircle size={20} />
                <span style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 text-red-400 rounded-2xl">
                <AlertCircle size={20} />
                <span style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Erro ao enviar mensagem. Tente novamente ou entre em contato direto.
                </span>
              </div>
            )}
          </form>
        </div>
        
        {/* Social Links - Centered */}
        <div className="text-center mt-12">
          <p 
            className="text-gray-300 mb-6"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            Ou nos siga nas redes sociais
          </p>
          
          <div className="flex justify-center gap-4">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-pink-600 rounded-xl hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center"
            >
              <Instagram size={24} className="text-white" />
            </a>
          </div>
          
          <p 
            className="text-gray-400 text-sm mt-6"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            Resposta garantida em até 24 horas úteis
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;