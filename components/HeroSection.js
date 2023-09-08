import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">Welcome to Our Website</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">Discover our amazing services and products.</p>
        <a
          href="#"
          className="bg-white text-blue-500 hover:bg-blue-200 text-lg sm:text-xl px-6 py-3 rounded-full inline-block transition duration-300 ease-in-out"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
