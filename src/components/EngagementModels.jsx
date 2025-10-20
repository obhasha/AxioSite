import React from 'react';
import { FileText, RefreshCw, GitMerge } from 'lucide-react';
import { motion } from 'framer-motion';

const EngagementModels = () => {
  const models = [
    {
      icon: FileText,
      title: 'Project-Based',
      items: [
        'Fixed and focused.',
        'Fixed scope, fixed price.',
        'Best for websites, MVPs, and one-off builds.',
        'Clear deliverables with milestone checkpoints.'
      ]
    },
    {
      icon: GitMerge,
      title: 'Hybrid',
      items: [
        'Scale as you go.',
        'Start with a project → continue on retainer.',
        'Keeps momentum with long-term support and scalable growth.',
        'The best of both worlds.'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Retainer',
      items: [
        'Always-on partnership.',
        'Ongoing monthly partnership.',
        'Ideal for content, maintenance, and continuous improvements.'
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Flexible ways to work with us</h2>
          <p className="text-white/70 text-lg">Whether you're testing an idea or scaling an entire platform, we've got a model that fits.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div key={index} className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-axio-pink/50 transition-all backdrop-blur-sm">
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

