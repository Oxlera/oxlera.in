import React from 'react';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Assess',
      description: 'We analyze your workspace lighting, airflow, and layout to determine the ideal plant species for your environment.'
    },
    {
      number: '02',
      title: 'Install',
      description: 'Clean, professional installation with zero friction. We work around your schedule to ensure zero office disruption.'
    },
    {
      number: '03',
      title: 'Maintain',
      description: 'Our team handles regular upkeep and monitoring, ensuring your indoor ecosystem remains vibrant and healthy.'
    }
  ];

  return (
    <section id="how" className="max-w-[1100px] mx-auto py-24 px-6 border-t border-gray-100">
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          How it works
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-xl">
          From initial assessment to long-term care, we handle the complexity so you can enjoy the greenery.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {steps.map((step) => (
          <div key={step.number} className="group relative">
            {/* Large Background Number - Subtle Watermark effect */}
            <div className="absolute -top-10 -left-4 text-7xl md:text-8xl font-black text-gray-100/60 select-none group-hover:text-green-100/50 transition-colors duration-500">
              {step.number}
            </div>

            {/* Content */}
            <div className="relative pt-6">
              <div className="flex items-center gap-2 mb-4">
                {/* Small indicator dot */}
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
            
            {/* Optional: Hover line animation */}
            <div className="mt-6 h-1 w-0 bg-green-800 transition-all duration-500 group-hover:w-full opacity-20"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;