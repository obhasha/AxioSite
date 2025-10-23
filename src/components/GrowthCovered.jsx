import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const GrowthCovered = () => {
  const sections = [
    {
      title: 'Challenge',
      items: [
        'Startups stuck turning ideas into MVPs.',
        'Non-tech founders without a trusted partner.',
        'SMEs limited by weak digital presence.'
      ]
    },
    {
      title: 'Solution',
      icon: '/solutionIcon.png',
      items: [
        'Launch-ready websites & MVPs that attract investors.',
        'Digital strategy & content that win customers.',
        'AI-powered solutions that streamline & scale.'
      ]
    },
    {
      title: 'Axio Advantage',
      icon: '/challengeIcon.png',
      items: [
        'Ideas transformed into investor-ready products.',
        'Customers engaged through smart design & strategy.',
        'Teams free to focus on growth, not bottlenecks.'
      ]
    }
  ];

  return (
    <motion.section 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From idea to scale, <span className="text-3xl md:text-4xl font-light gradient-text" >we've got your growth covered</span>
          </h2>
          <p className="text-white/70 text-base">
            We're a boutique AI & Digital Services Agency helping ambitious startups, SMEs and growing business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  {section.icon ? (
                    <img 
                      src={section.icon} 
                      alt={`${section.title} icon`} 
                      className="w-6 h-6 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-axio-pink flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-axio-pink"></div>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                <div className="h-px bg-gradient-to-r from-axio-pink to-transparent"></div>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-white/70 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GrowthCovered;

