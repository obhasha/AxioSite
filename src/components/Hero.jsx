import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex flex-col overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Wave Image - Positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden" style={{ height: '30vh' }}>
        <img 
          src={`${import.meta.env.BASE_URL}wave-bg.png`}
          alt="Wave background" 
          className="absolute bottom-0 right-0 w-full h-full object-cover object-bottom-right"
          style={{ transform: 'scale(0.7)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Your partner to
            <br />
            <span className="gradient-text">build.engage.evolve</span>
            <br />
            in the digital era
          </h1>
          
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-3 max-w-4xl mx-auto">
            You have an idea, or a business that needs levelling up.
          </p>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-12 mx-auto leading-relaxed whitespace-nowrap px-4">
            We partner with you to build smart platforms, engage users meaningfully, and evolve digital systems that scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">
              Let's get started
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

