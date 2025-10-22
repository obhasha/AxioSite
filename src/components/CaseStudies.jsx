import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    },
    {
      title: 'ScreenPeace - Incident Reporting & Resolution Platform',
      description: 'A smart incident reporting and resolution platform that empowers cinema patrons',
      tags: 'Web, Mobile, UX',
      image: 'med.jpg'
    }
  ];

  const maxIndex = caseStudies.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getTranslateX = () => {
    if (isMobile) {
      // For mobile: 85% width + 16px gap
      const cardWidth = 85;
      const gap = 16;
      return `calc(-${currentIndex * cardWidth}% - ${currentIndex * gap}px)`;
    }
    // For desktop: 40% width + 32px gap
    const cardWidth = 40;
    const gap = 32;
    return `calc(-${currentIndex * cardWidth}% - ${currentIndex * gap}px)`;
  };

  return (
    <motion.section 
      className="py-20"
      style={{ backgroundColor: '#0c131f' }}
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-20 z-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-20 z-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-8"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeThreshold = 50;
                if (offset.x > swipeThreshold) {
                  prevSlide();
                } else if (offset.x < -swipeThreshold) {
                  nextSlide();
                }
              }}
              animate={{ 
                x: getTranslateX()
              }}
              transition={{ 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {caseStudies.map((study, index) => (
                <motion.div 
                  key={index}
                  className="rounded-2xl overflow-hidden transition-all cursor-pointer group flex-shrink-0 w-[85%] md:w-[40%]"
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
                  <div className="px-2 py-2">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-axio-pink transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-1 leading-relaxed">
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
            </motion.div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-axio-pink w-8' : 'bg-white/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;

