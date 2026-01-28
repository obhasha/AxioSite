import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Header from './components/Header';
import Hero from './components/Hero';
import FromIdeaToScale from './components/FromIdeaToScale';
import GrowthCovered from './components/GrowthCovered';
import WhatWeDoBest from './components/WhatWeDoBest';
import WhyAxio from './components/WhyAxio';
import CaseStudies from './components/CaseStudies';
import WhyClientsChooseUs from './components/WhyClientsChooseUs';
import EngagementModels from './components/EngagementModels';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      <BackgroundVideo />
      <Header />
      <Hero />
      <FromIdeaToScale />
      <GrowthCovered />
      <WhatWeDoBest />
      <WhyAxio />
      <CaseStudies />
      <WhyClientsChooseUs />
      <EngagementModels />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

