import React from 'react';
import { motion } from 'framer-motion';
import graphicImg from '/graphic.png';

const WhyAxio = () => {
  const clients = [
    {
      title: 'Tech Startups',
      description: 'Looking to rapidly validate and scale'
    },
    {
      title: 'Solopreneurs and SMEs',
      description: 'Building their first digital presence'
    },
    {
      title: 'Scale-ups & Enterprises',
      description: 'Evolving product and infrastructure'
    },
    {
      title: 'Agencies',
      description: 'Needing offshore engineering support'
    }
  ];

  return (
    <motion.section 
      className="py-20 relative"
      style={{ backgroundColor: '#030712' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - All Content */}
          <div>
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Who we work with</h2>
              <p className="text-white/60 text-lg">From startups to scale-ups, we partner for growth</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {clients.map((client, index) => (
                <div key={index} className="bg-transparent border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
                  <h4 className="text-lg md:text-xl font-semibold mb-2 gradient-text">{client.title}</h4>
                  <p className="text-white/60 text-sm">{client.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Graphic */}
          <div className="relative flex items-center justify-center">
            <img 
              src={graphicImg}
              alt="Technology illustration"
              loading="lazy"
              decoding="async"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyAxio;

