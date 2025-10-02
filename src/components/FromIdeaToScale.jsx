import React from 'react';
import { Check } from 'lucide-react';

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
    <section id="services" className="py-20 bg-axio-navy/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">From Idea to Scale</h2>
          <p className="text-white/70 text-lg">
            We're a boutique AI & Digital Services Agency helping ambitious startups, SMEs and growing business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                {pillar.title}
              </h3>
              <p className="text-white/70 italic mb-6">{pillar.subtitle}</p>
              <ul className="space-y-3">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-axio-pink mt-1 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FromIdeaToScale;

