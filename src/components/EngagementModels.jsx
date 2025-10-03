import React from 'react';
import { FileText, RefreshCw, GitMerge } from 'lucide-react';
import { motion } from 'framer-motion';

const EngagementModels = () => {
  const models = [
    {
      icon: FileText,
      title: 'Project-Based',
      items: [
        'Fixed scope & Fixed price',
        'Ideal for websites, MVPs and on-off builds',
        'Clear deliverables, milestone-based'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Retainer',
      items: [
        'Ongoing monthly partnership',
        'Perfect for content, maintenance, and continuous improvement',
        'Dedicated Axio team member from AUD 2,000/month'
      ]
    },
    {
      icon: GitMerge,
      title: 'Hybrid',
      items: [
        'Start with a project → Continue as a retainer',
        'Ensures long-term support and scalable growth',
        'Best of both worlds'
      ]
    }
  ];

  return (
    <motion.section 
      className="py-20" 
      style={{ backgroundColor: '#111827' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Engagement Models</h2>
          <p className="text-white/70 text-lg">Flexible engagement, built around your goals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div key={index} className="bg-[#0a0e1a] border border-white/10 rounded-xl p-8 hover:border-axio-pink/50 transition-all">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">{model.title}</h3>
                <ul className="space-y-3">
                  {model.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-sm">✓</span>
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default EngagementModels;

