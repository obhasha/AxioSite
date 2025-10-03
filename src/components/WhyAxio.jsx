import React from 'react';
import { Rocket, Users, TrendingUp, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyAxio = () => {
  const clients = [
    {
      icon: Rocket,
      title: 'Tech Startups',
      description: 'Looking to rapidly validate and scale'
    },
    {
      icon: Users,
      title: 'Solopreneurs and SMEs',
      description: 'Building their first digital presence'
    },
    {
      icon: TrendingUp,
      title: 'Scale-ups & Enterprises',
      description: 'Evolving product and infrastructure'
    },
    {
      icon: Briefcase,
      title: 'Agencies',
      description: 'Needing offshore engineering support'
    }
  ];

  return (
    <motion.section 
      className="py-20 border-t border-b border-blue-500/30" 
      style={{ borderStyle: 'dotted' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - All Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why AXIO Tech</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-12">
              We're more than just a development partner — we're your extended product and tech team. Whether you're a startup chasing funding, an SME growing your digital presence, or a scaling company battling inefficiencies, we help you move faster and smarter.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Who we work with...</h3>
              <p className="text-white/60 text-lg">From startups to scale-ups, we partner for growth</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {clients.map((client, index) => {
                const Icon = client.icon;
                return (
                  <div key={index} className="bg-transparent border border-white/20 rounded-xl p-6 hover:border-axio-pink/50 transition-all">
                    <h4 className="text-lg md:text-xl font-semibold mb-2 gradient-text">{client.title}</h4>
                    <p className="text-white/60 text-sm">{client.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Graphic */}
          <div className="relative flex items-center justify-center" >
            <img 
              src={`${import.meta.env.BASE_URL}graphic.png`}
              alt="Technology illustration" 
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyAxio;

