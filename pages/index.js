// pages/index.js
import React from 'react';

import Footer from '../components/Footer';
import HeroSection from '../components/herosection';
import ContentSection from '../components/ContentSection';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Home;
