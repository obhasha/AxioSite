import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FromIdeaToScale from './components/FromIdeaToScale';
import WhyAxio from './components/WhyAxio';
import EngagementModels from './components/EngagementModels';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FromIdeaToScale />
      <WhyAxio />
      <EngagementModels />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

