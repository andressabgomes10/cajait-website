import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, Linkedin, Instagram } from 'lucide-react';
import { contactInfo, socialLinks } from '../mock';

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
    <section id="contato" className="section bg-white/50 backdrop-blur-sm">
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos conversar?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Estamos prontos para transformar sua ideia em realidade. Entre em contato 
            e vamos construir algo incrível juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Envie sua mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    Serviço de interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="mvp">MVP Rápido</option>
                    <option value="software">Software Personalizado</option>
                    <option value="gestao">Gestão de Produtos Digitais</option>
                    <option value="treinamento">Treinamentos Práticos</option>
                    <option value="consultoria">Consultoria</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                <Send size={20} />
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Erro ao enviar mensagem. Tente novamente ou entre em contato direto.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-accent">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                Outras formas de contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-600 rounded-lg">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-700">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-700">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-400 rounded-lg">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horário de atendimento</h4>
                    <p className="text-gray-700">{contactInfo.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="card">
              <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                Siga-nos nas redes sociais
              </h4>
              
              <div className="flex gap-4">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
                
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors duration-200"
                >
                  <Instagram size={24} className="text-white" />
                </a>
              </div>
            </div>
            
            {/* CTA Box */}
            <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl p-6 border border-yellow-300">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Resposta rápida garantida
              </h4>
              <p className="text-gray-700">
                Respondemos todas as mensagens em até 24 horas úteis. 
                Sua ideia não pode esperar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;