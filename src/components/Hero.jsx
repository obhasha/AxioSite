import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background Wave Image - Large Scale Behind Everything */}
      <div className="absolute flex items-center justify-center pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}wave-bg.png`}
          alt="Wave background" 
          className="w-full h-full object-cover opacity-60"
          style={{ transform: 'scale(1)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center pt-20 pb-12">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Your partner to
            <br />
            <span className="gradient-text">build.engage.evolve</span>
            <br />
            in the digital era
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            We transform ideas into powerful software solutions that drive your business forward.
            Experience the future of technology today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">
              Get to know us
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-axio-pink to-axio-purple hover:opacity-90 rounded-lg transition-all font-medium">
              Start your project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

