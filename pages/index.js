import React from 'react';

import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import Navbar from '../components/Navbar';

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
