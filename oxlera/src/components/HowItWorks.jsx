import React from 'react';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Site check',
      description: 'We evaluate light levels, wall strength, access points, and safe routing for water and drainage to ensure a long-term fit.',
      tags: ['Light Analysis', 'Wall Audit'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Design & plant plan',
      description: 'Custom layout and plant selection optimized specifically for indoor conditions and low-light environments.',
      tags: ['Custom Layout', 'Species Selection'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Install modular grid',
      description: "Secure mounting with our expandable grid system. We ensure a tidy finish that matches your space's aesthetic.",
      tags: ['Minimal Disruption', 'Modular Build'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.25 2.25 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Auto irrigation setup',
      description: 'Water-efficient scheduling paired with practical maintenance routines. No manual watering required.',
      tags: ['Smart Irrigation', 'Water-Saving'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Maintenance & reporting',
      description: 'Regular checkups and health logs. We provide optional monthly metrics export for your sustainability teams.',
      tags: ['ESG Logs', 'Expert Care'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
        </svg>
      )
    }
  ];

  return (
    <section id="how" className="relative bg-white py-28 px-6 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-full w-px bg-gradient-to-b from-transparent via-green-200 to-transparent" />
      <div className="absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-green-50 to-transparent blur-3xl" />
      
      <div className="max-w-[1100px] mx-auto">
        
        {/* Enhanced Section Header */}
        <div className="mb-24 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200/50 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 10.5 6.75m0 0L17.25 13.5M10.5 6.75V21" />
            </svg>
            <span className="text-green-800 font-extrabold tracking-[0.25em] uppercase text-[10px]">The Process</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
            Simple steps.{' '}
            <span className="relative inline-block">
              <span className="text-gray-400 font-serif italic font-normal">No drama.</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-gray-300 to-transparent rounded-full opacity-30" />
            </span>
          </h2>
          
          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl font-medium leading-relaxed">
            You get a clean, working installation. We handle the design, 
            plumbing, and ongoing care.
          </p>
        </div>

        {/* Enhanced Timeline Layout */}
        <div className="relative">
          {/* Enhanced vertical line with gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-green-300 to-green-200 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-20 md:space-y-28">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className={`relative flex flex-col md:flex-row items-start md:items-center group ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                
                {/* Enhanced Step Number Bubble with Icon */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="relative">
                    {/* Outer ring */}
                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-20 group-hover:opacity-40 transition-opacity blur-md" />
                    
                    {/* Main bubble */}
                    <div className="relative w-16 h-16 rounded-full bg-white border-4 border-green-100 flex flex-col items-center justify-center shadow-lg group-hover:border-green-600 group-hover:scale-110 transition-all duration-500">
                      <span className="text-xs font-black text-green-700 group-hover:text-green-900">{step.number}</span>
                      <div className="text-green-600 mt-0.5">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content Card */}
                <div className={`w-full md:w-[44%] ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12 text-left' : 'md:ml-auto md:pl-12 text-left'}`}>
                  <div className="relative p-8 md:p-10 rounded-[2rem] border-2 border-gray-100 bg-white hover:border-green-200 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 overflow-hidden group/card">
                    
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    {/* Number badge in corner */}
                    <div className="absolute top-6 right-6 text-6xl font-black text-green-50 group-hover/card:text-green-100 transition-colors">
                      {step.number}
                    </div>
                    
                    <h3 className="relative text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover/card:text-green-900 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="relative text-gray-600 text-sm md:text-base leading-relaxed font-medium mb-6">
                      {step.description}
                    </p>
                    
                    {/* Enhanced Tags */}
                    <div className="relative flex flex-wrap gap-2">
                      {step.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-4 py-2 bg-white border border-gray-200 text-[10px] font-extrabold text-gray-600 uppercase tracking-wider rounded-xl group-hover/card:border-green-200 group-hover/card:bg-green-50 group-hover/card:text-green-700 transition-all duration-300 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline balance */}
                <div className="hidden md:block md:w-[44%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="mt-24 text-center p-10 rounded-3xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200">
          <p className="text-gray-600 text-base md:text-lg font-semibold mb-6">
            Ready to transform your space with measurable green infrastructure?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-900 to-green-800 text-white font-bold rounded-xl hover:from-black hover:to-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 group"
          >
            Schedule Your Site Check
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;