import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mx-auto rounded-3xl p-12" style={{ backgroundColor: '#111827' }}>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's get connect</h2>
            <p className="text-white/70 text-lg mb-12">
              Ready to start your next project? We'd love to hear from you. Get in touch and let's discuss how we can help bring your vision to life.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a href="mailto:hello@axio.tech" className="flex items-center gap-4 bg-[#101623]/80 border border-white/10 rounded-lg p-6 hover:border-axio-pink/50 transition-all group">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-axio-pink/20 transition-all">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/60 mb-1">Send us an email</div>
                <div className="font-medium">hello@axio.tech</div>
              </div>
            </a>

            <a href="tel:+61470735341" className="flex items-center gap-4 bg-[#101623]/80 border border-white/10 rounded-lg p-6 hover:border-axio-pink/50 transition-all group">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-axio-pink/20 transition-all">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/60 mb-1">Call us directly</div>
                <div className="font-medium">+61 470735341</div>
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

