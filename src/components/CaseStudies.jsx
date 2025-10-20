import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Melbourne-based Sports Tech Startup - AFL Player Tracking',
      description: 'Revolutionizing AFL analytics with computer vision and AI',
      tags: 'MVP, AI Systems, UX',
      image: 'icoach.jpg'
    },
    {
      title: 'Melbourne-based Healthcare Clinic - Digital Growth',
      description: 'A conversion-focused website, to drive patient bookings',
      tags: 'UX, Web, Branding',
      image: 'med.jpg'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Real impact.Real results</h2>
          <p className="text-white/70 text-lg">Checkout our case studies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              className="bg-[#1f2937] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}${study.image}`}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                {/* Mockup overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-axio-pink transition-colors">
                  {study.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.split(', ').map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold gradient-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        {/* <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-axio-pink"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
        </div> */}
      </div>
    </motion.section>
  );
};

export default CaseStudies;

