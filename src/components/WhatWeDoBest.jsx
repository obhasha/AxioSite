import React from 'react';
import { Code, Palette, FileText, Sparkles, MousePointerClick, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatWeDoBest = () => {
  const services = [
    {
      icon: Code,
      title: 'AI Powered Website & MVP Development',
      description: 'Launch fast with AI-assisted websites and minimum viable products built for scale.'
    },
    {
      icon: Palette,
      title: 'UX Design',
      description: 'User research, prototyping, and intuitive design for seamless digital user experiences.'
    },
    {
      icon: FileText,
      title: 'Content, SEO & Digital Marketing',
      description: 'Data-driven content strategies and AI-powered SEO to rank higher and convert better.'
    },
    {
      icon: Sparkles,
      title: 'AI Systems & Intelligent Software',
      description: 'Computer Vision, Generative AI, and advanced analytics solutions that power smarter business decisions.'
    },
    {
      icon: MousePointerClick,
      title: 'Conversion Design',
      description: 'Design driven by AI insights to maximize engagement and conversions.'
    },
    {
      icon: Award,
      title: 'Brand Identity',
      description: 'Branding that connect with your audience and build trust.'
    }
  ];

  return (
    <motion.section 
      id="services"
      className="py-20"
      style={{ backgroundColor: '#111827' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What we do best</h2>
          <p className="text-white/70 text-lg">
            We bring strategy, design, and engineering together to build digital ecosystems that grow with you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-[#0f1629] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <IconComponent size={32} className="text-axio-pink" />
                </div>
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default WhatWeDoBest;

