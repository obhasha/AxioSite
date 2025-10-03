import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const FromIdeaToScale = () => {
  const pillars = [
    {
      title: '.build',
      subtitle: 'Turning ideas into reality',
      items: [
        'Product strategy & roadmap',
        'UX/UI design & prototyping',
        'MVP & website development',
        'Integration with essential tools'
      ]
    },
    {
      title: '.engage',
      subtitle: 'Connecting with users & markets',
      items: [
        'Digital presence (websites, SEO, content strategy)',
        'Marketing site optimization',
        'Investor-ready product demos',
        'Analytics & insights'
      ]
    },
    {
      title: '.evolve',
      subtitle: 'Scaling & unlocking efficiency',
      items: [
        'Process automation & AI integration',
        'Scalable SaaS platforms with remote engineering teams',
        'Continuous delivery & DevOps'
      ]
    }
  ];

  return (
    <motion.section 
      id="services" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#101623] border border-white/5 rounded-3xl p-8 md:p-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">From Idea to Scale</h2>
            <p className="text-white/70 text-lg">
              We're a boutique AI & Digital Services Agency helping ambitious startups, SMEs and growing business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                  {pillar.title}
                </h3>
                <p className="text-white/70 italic text-base mb-6">{pillar.subtitle}</p>
                <div className="border-b border-white/10 mb-6"></div>
                <ul className="space-y-3">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FromIdeaToScale;

