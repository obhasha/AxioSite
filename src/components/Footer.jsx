import React from 'react';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5" style={{ backgroundColor: '#111827' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-xl font-bold mb-2">
              Axio <span className="gradient-text">Tech</span>
            </div>
            <p className="text-white/60 text-sm">Transforming ideas into powerful software solutions</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm">© 2025 AXIO. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

