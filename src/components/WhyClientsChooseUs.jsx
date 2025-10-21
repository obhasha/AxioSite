import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyClientsChooseUs = () => {
  const reasons = [
    'Global hybrid model - Melbourne HQ + Sri Lanka talent hub',
    '15+ years of experience in building digital content, platforms, and AI solutions',
    'Transparent processes and milestone-based delivery',
    'Clear roadmap: Build → Engage → Evolve',
    'Partnership-first mindset. We work as an extension of your team'
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
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why clients choose us</h2>
            <p className="text-white/70 text-lg mb-10">
              We're not just your tech vendor. We're your long-term partner for growth.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={20} className="text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-base leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-center justify-center">
            <img 
              src={`${import.meta.env.BASE_URL}workimg.png`}
              alt="Team collaboration" 
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyClientsChooseUs;

