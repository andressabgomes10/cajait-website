import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, Linkedin, Instagram, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
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
    <section id="contato" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32 lg:py-40 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full text-sm font-semibold text-yellow-400 mb-8">
            <Send size={16} />
            Entre em Contato
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            Contact
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Pronto para transformar sua ideia em realidade? Vamos construir algo incrível juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-8">
              Envie sua mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-3">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-3">
                    Serviço de interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 text-white"
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
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400"
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-gray-900 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:scale-[1.02] shadow-lg"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                <Send size={20} />
              </button>
              
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 text-green-400 rounded-2xl">
                  <CheckCircle size={20} />
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 text-red-400 rounded-2xl">
                  <AlertCircle size={20} />
                  Erro ao enviar mensagem. Tente novamente ou entre em contato direto.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8">
                Outras formas de contato
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">Email</h4>
                    <p className="text-gray-300 text-lg">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">Telefone</h4>
                    <p className="text-gray-300 text-lg">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">Horário</h4>
                    <p className="text-gray-300 text-lg">{contactInfo.businessHours}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">Localização</h4>
                    <p className="text-gray-300 text-lg">Brasil - Atendimento remoto</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-3xl p-10 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-white mb-6">
                Siga-nos nas redes sociais
              </h4>
              
              <div className="flex gap-4 mb-6">
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
              
              <p className="text-yellow-200 font-medium">
                Resposta garantida em até 24 horas úteis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;