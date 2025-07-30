import React from 'react';
import { Linkedin, Instagram, Twitter } from 'lucide-react';
import { socialLinks, contactInfo } from '../mock';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-8 md:mb-0">
            <p className="text-gray-600 text-lg">
              © 2024 Cajá. All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            
            <a
              href="https://twitter.com/cajatecnologia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Twitter size={28} />
            </a>
            
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;