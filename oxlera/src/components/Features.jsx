import React from 'react';

function Features() {
  const features = [
    {
      title: 'Minimal design',
      description: 'We eliminate visual clutter. Our systems use solid palettes and clean geometric layouts that disappear into your architecture.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
    {
      title: 'Office-first',
      description: 'Engineered specifically for corporate environments. We select species that thrive in HVAC-controlled air and low-light conditions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>
      ),
    },
    {
      title: 'Measurable',
      description: 'Oxlera provides the data you need for ESG reporting. Track your carbon footprint reduction and indoor air quality improvements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="max-w-[1100px] mx-auto py-24 px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Why Oxlera
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-md font-medium">
            We rethink indoor nature for the modern professional world.
          </p>
        </div>
        <div className="h-px flex-1 bg-gray-100 hidden md:block mb-4 mx-8"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="p-8 rounded-3xl border border-gray-100 bg-white hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 group"
          >
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>
            
            <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;