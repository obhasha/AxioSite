import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    { name: 'Oshadi Wattuhewa', role: 'UX Lead' },
    { name: 'Oshadi Wattuhewa', role: 'UX Lead' },
    { name: 'Oshadi Wattuhewa', role: 'UX Lead' },
    { name: 'Oshadi Wattuhewa', role: 'UX Lead' },
    { name: 'Oshadi Wattuhewa', role: 'UX Lead' },
    { name: 'Oshadi Wattuhewa', role: 'UX Lead' },
  ];

  return (
    <motion.section 
      className="py-20 border-t border-blue-500/30" 
      style={{ borderStyle: 'dotted' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet our team</h2>
            <p className="text-white/70 text-lg mb-4">
              Tech is front-and-centre behind AXIO's success. Our diverse team of experts is dedicated to delivering exceptional software solutions and driving innovation in every project.
            </p>
            <p className="text-white/70 text-lg">
              A hybrid model: Melbourne HQ for proximity and Sri Lanka base hub for cost-effective delivery
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-axio-pink/20 to-axio-purple/20 rounded-full flex items-center justify-center border border-white/10">
                  <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="20" r="12" fill="white" opacity="0.3" />
                    <ellipse cx="30" cy="45" rx="18" ry="15" fill="white" opacity="0.3" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-1 text-sm">{member.name}</h4>
                <p className="text-white/60 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Team;

