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
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-6xl mx-auto rounded-3xl p-12 md:p-16" style={{ backgroundColor: '#1e293b' }}>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build what's next?</h2>
            <p className="text-white/70 text-lg mb-12">
              Whether you're validating an idea, scaling a product, or automating your business - we'll help you build, engage, and evolve.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <a href="mailto:sales@axiotechnologies.com.au" className="flex items-center gap-4 bg-black/30 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-white/70" />
                </div>
                <div className="text-left">
                  <div className="gradient-text font-semibold mb-1">sales@axiotechnologies.com.au</div>
                  <div className="text-sm text-white/60">Send us an email</div>
                </div>
              </a>

              <a href="tel:+61421576398" className="flex items-center gap-4 bg-black/30 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-white/70" />
                </div>
                <div className="text-left">
                  <div className="gradient-text font-semibold mb-1">+61 421 576 398</div>
                  <div className="text-sm text-white/60">Call us directly</div>
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

