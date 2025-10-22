import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto rounded-3xl p-6 sm:p-8 md:p-16" style={{ backgroundColor: '#0c131f' }}>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to build what's next?</h2>
            <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-12 px-2">
              Whether you're validating an idea, scaling a product, or automating your business - we'll help you build, engage, and evolve.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <a href="mailto:sales@axiotechnologies.com.au" className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-black/30 border border-white/10 rounded-xl p-4 sm:p-6 hover:border-white/20 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-white/70" />
                </div>
                <div className="text-left">
                  <div className="gradient-text font-semibold mb-1 text-sm sm:text-base break-all">sales@axiotechnologies.com.au</div>
                  <div className="text-xs sm:text-sm text-white/60">Send us an email</div>
                </div>
              </a>

              <a href="tel:+61421576398" className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-black/30 border border-white/10 rounded-xl p-4 sm:p-6 hover:border-white/20 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white/70" />
                </div>
                <div className="text-left">
                  <div className="gradient-text font-semibold mb-1 text-sm sm:text-base">+61 421 576 398</div>
                  <div className="text-xs sm:text-sm text-white/60">Call us directly</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

