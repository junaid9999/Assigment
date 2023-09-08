import React from 'react';

const ContentSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">Mind</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Text 1</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Text 2</h3>
              <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">Body</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Text 1</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Text 2</h3>
              <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">Spirit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Text 1</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Text 2</h3>
              <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">ZeroTier Enterprise</h2>
          <div className="bg-blue-100 p-6 rounded-lg">
            <p className="text-xl sm:text-2xl font-semibold mb-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="text-blue-500 hover:underline">
              Contact Sales
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">Service Providers</h2>
          <div className="bg-blue-100 p-6 rounded-lg">
            <p className="text-xl sm:text-2xl font-semibold mb-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="text-blue-500 hover:underline">
              Contact SP Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
