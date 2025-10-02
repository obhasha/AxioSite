import React from 'react';
import { Rocket, Users, TrendingUp, Briefcase } from 'lucide-react';

const WhyAxio = () => {
  const clients = [
    {
      icon: Rocket,
      title: 'Tech Startups',
      description: 'Launch and rapidly validate your ideas'
    },
    {
      icon: Users,
      title: 'Solopreneurs and SMEs',
      description: 'Maximize impact, minimize digital presence'
    },
    {
      icon: TrendingUp,
      title: 'Scale-ups & Enterprises',
      description: 'Evolving product and infrastructure'
    },
    {
      icon: Briefcase,
      title: 'Agencies',
      description: 'Handling offshore engineering support'
    }
  ];

  return (
    <section className="py-20 border-t border-b border-blue-500/30" style={{ borderStyle: 'dotted' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why AXIO Tech</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We're a boutique agency with <span className="text-white font-medium">laser-focused product</span> and{' '}
              <span className="text-white font-medium">tech teams</span>. Whether you're a first-time founder, an SME growing your digital presence, or a scaling company seeking methodologies, we help you <span className="text-white font-medium">build faster and smarter</span>.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Who we work with...</h3>
              <p className="text-white/60">From startups to scale-ups, we partner for growth</p>
            </div>
          </div>

          <div className="relative">
            <svg viewBox="0 0 400 300" className="w-full max-w-md mx-auto">
              <defs>
                <linearGradient id="laptopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ff4d8f', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#b64dff', stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>
              
              {/* Laptop */}
              <rect x="50" y="80" width="300" height="180" rx="8" fill="url(#laptopGradient)" stroke="white" strokeWidth="2" />
              <rect x="40" y="260" width="320" height="8" rx="4" fill="white" opacity="0.3" />
              
              {/* Screen content - gears and person */}
              <circle cx="280" cy="140" r="30" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
              <circle cx="280" cy="140" r="20" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
              
              <circle cx="320" cy="200" r="25" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
              <circle cx="320" cy="200" r="15" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
              
              {/* Person icon */}
              <circle cx="140" cy="140" r="20" fill="white" opacity="0.2" />
              <ellipse cx="140" cy="200" rx="30" ry="40" fill="white" opacity="0.2" />
              
              {/* Chart */}
              <polyline points="180,200 200,180 220,190 240,160" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div key={index} className="bg-[#101623]/50 border border-white/10 rounded-lg p-6 hover:border-axio-pink/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-axio-pink to-axio-purple rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">{client.title}</h4>
                <p className="text-white/60 text-sm">{client.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAxio;

