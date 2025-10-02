import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center pt-20">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">
              Get to know us
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-axio-pink to-axio-purple hover:opacity-90 rounded-lg transition-all font-medium">
              Start your project
            </button>
          </div>
        </div>

        {/* Wave Visual */}
        <div className="relative h-80 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="600" height="300" viewBox="0 0 600 300" className="opacity-80">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#ff4d8f', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#b64dff', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {[...Array(40)].map((_, i) => {
                const x = i * 15;
                const baseY = 150;
                const amplitude = 100 + Math.sin(i * 0.3) * 50;
                const offset = Math.sin(i * 0.2) * 30;
                return (
                  <line
                    key={i}
                    x1={x}
                    y1={baseY - amplitude + offset}
                    x2={x}
                    y2={baseY + offset}
                    stroke="url(#waveGradient)"
                    strokeWidth="3"
                    opacity={0.6 + Math.sin(i * 0.15) * 0.4}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

