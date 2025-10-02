import React from 'react';
import { FileText, RefreshCw, GitMerge } from 'lucide-react';

const EngagementModels = () => {
  const models = [
    {
      icon: FileText,
      title: 'Project-Based',
      items: [
        'Fixed scope & fixed price',
        'Ideal for websites, MVPs and off-shelf builds',
        'Clear deliverables, milestone-based'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Retainer',
      items: [
        'Ongoing monthly partnership',
        'Perfect for ongoing maintenance, and growth-focused work',
        'Dedicated development team from 4 to 2,000+/month'
      ]
    },
    {
      icon: GitMerge,
      title: 'Hybrid',
      items: [
        'Start with a project -> Continue as a retainer',
        'Extended long-term support and scalable growth',
        'Best of both worlds'
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Engagement Models</h2>
          <p className="text-white/70 text-lg">Flexible engagement, built around your goals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div key={index} className="bg-[#101623]/50 border border-white/10 rounded-xl p-8 hover:border-axio-pink/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-axio-pink to-axio-purple rounded-lg flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6">{model.title}</h3>
                <ul className="space-y-4">
                  {model.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-axio-pink mt-1">✓</span>
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;

