import React from 'react';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-axio-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold gradient-text">Axio Tech</span>
            <img 
              src={`${import.meta.env.BASE_URL}AXIO_logo.png`}
              alt="Axio Tech Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="text-white hover:text-axio-pink transition-colors">
              Home
            </a>
            <a href="#services" className="text-white/70 hover:text-white transition-colors">
              Services
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">
              Contact us
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Youtube size={18} />
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

