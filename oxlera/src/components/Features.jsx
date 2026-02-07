import React from 'react';

function Features() {
  const features = [
    {
      title: 'Modular Hardware',
      description: 'An expandable grid system designed for active environments. Featuring tidy plumbing, auto-irrigation, and standardized parts for easy operations.',
      tags: ['Expandable Grid', 'Tidy Plumbing', 'Auto-Irrigated'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
      ),
    },
    {
      title: 'Low-Ops Burden',
      description: "Designed for minimal disruption. We handle the predictable maintenance, replacement-friendly pots, and regular health checkups so you don't have to.",
      tags: ['No Mess', 'Predictable Upkeep', 'Proactive Care'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.673 2.673 0 0 1 13.5 21.75l-7.5-7.5a2.673 2.673 0 0 1 .75-3.75l5.83-5.83M11.42 15.17l4.66-4.66m-4.66 4.66 5.83 5.83M11.42 15.17 6.17 9.92M16.08 10.51l5.83-5.83a2.673 2.673 0 0 0-3.75-.75l-5.83 5.83m9.58 12.01-5.83-5.83m-4.66 4.66-5.83-5.83" />
        </svg>
      ),
    },
    {
      title: 'ESG & BRSR Ready',
      description: 'Not vague "green talk." Clean inputs for your reporting: Area coverage, water-use efficiency, and documentation kits for compliance teams.',
      tags: ['BRSR India Fit', 'Carbon Ready', 'Quantifiable Data'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="relative max-w-[1100px] mx-auto py-28 px-6 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-green-100/30 to-transparent blur-3xl" />
      
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200/50 mb-6">
            <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-green-800 font-extrabold tracking-[0.25em] uppercase text-[10px]">System Specs</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Green interiors that{' '}
            <br />
            <span className="relative inline-block">
              <span className="text-green-800 font-serif italic font-normal">measure</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                <path d="M2 8C40 4 80 2 100 2C120 2 160 4 198 8" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" opacity="0.3"/>
              </svg>
            </span>
            {' '}real impact.
          </h2>
          
          <p className="mt-8 text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            Oxlera rethinks indoor nature for busy spaces. We handle the design, 
            installation, and data—so you can focus on your business.
          </p>
        </div>
      </div>

      {/* Enhanced Grid with Gradient Accents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group relative p-10 rounded-[2.5rem] border-2 border-gray-100 bg-white hover:border-green-200 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 flex flex-col overflow-hidden"
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
            
            {/* Enhanced Icon with Gradient */}
            <div className="relative mb-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center shadow-lg shadow-green-900/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {feature.icon}
              </div>
              <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight group-hover:text-green-900 transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed font-medium mb-8 flex-grow">
              {feature.description}
            </p>

            {/* Enhanced Tags with Gradient Hover */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100 group-hover:border-green-100 transition-colors">
              {feature.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider bg-gray-50 px-3 py-2 rounded-xl group-hover:text-green-700 group-hover:bg-white group-hover:shadow-md transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100/0 via-green-100/20 to-green-100/0 rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>

      {/* Additional Trust Section */}
      <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Industry Standard Compliance</p>
              <p className="text-xs text-gray-500 font-medium">Built for real-world ESG & BRSR requirements</p>
            </div>
          </div>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-green-900 text-white font-bold rounded-xl hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl active:scale-95"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;