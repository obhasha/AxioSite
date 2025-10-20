import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      id="home" 
      className="relative min-h-[600px] md:min-h-screen pt-24 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Wave Image - Large Scale Behind Everything */}
      <div className="absolute inset-0 md:inset-auto flex items-center justify-center pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}wave-bg.png`}
          alt="Wave background" 
          className="w-full h-full object-cover opacity-60 scale-150 md:scale-100"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center pt-8 md:pt-20 pb-8 md:pb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
            Your partner to
            <br />
            <span className="gradient-text">build.engage.evolve</span>
            <br />
            in the digital era
          </h1>
          
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl mb-3 md:mb-4 max-w-3xl mx-auto px-2">
            You have an idea, or a business that needs levelling up.
          </p>
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-10 max-w-3xl mx-auto px-2">
            We partner with you to build smart platforms, engage users meaningfully, and evolve digital systems that scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">
              Let's get started
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

