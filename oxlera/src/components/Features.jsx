import React from 'react';

function Features() {
  const features = [
    {
      title: 'Carbon Accounting Engine',
      description: 'Automatically calculate Scope 1, 2, and 3 emissions using verified emission factors and real-time operational data inputs.',
      tags: ['Scope 1–3 Tracking', 'Verified Factors', 'Real-time Data'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l3-3 4 4 6-6" />
        </svg>
      ),
    },
    {
      title: 'Low-Carbon Optimization',
      description: "Identify emission hotspots and get actionable recommendations to reduce operational carbon footprint efficiently across your organization.",
      tags: ['Reduction Insights', 'Efficiency Boost', 'AI Suggestions'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
        </svg>
      ),
    },
    {
      title: 'ESG & Carbon Credit Ready',
      description: 'Generate audit-ready ESG reports and convert verified emissions reductions into tradable carbon credits for global markets.',
      tags: ['ESG Compliance', 'Carbon Credits', 'Audit Ready'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="relative max-w-[1100px] mx-auto py-28 px-6 overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-green-100/30 to-transparent blur-3xl" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200/50 mb-6">
            <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-green-800 font-extrabold tracking-[0.25em] uppercase text-[10px]">
              Carbon Intelligence System
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Carbon data that{' '}
            <br />
            <span className="relative inline-block">
              <span className="text-green-800 font-serif italic font-normal">drives decisions</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                <path d="M2 8C40 4 80 2 100 2C120 2 160 4 198 8" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" opacity="0.3"/>
              </svg>
            </span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            Oxlera helps enterprises measure emissions, optimize carbon output,
            and unlock value through verified carbon credits and ESG reporting.
          </p>

        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative p-10 rounded-[2.5rem] border-2 border-gray-100 bg-white hover:border-green-200 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 flex flex-col overflow-hidden"
          >

            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

            <div className="mb-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                {feature.icon}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-5 group-hover:text-green-900 transition-colors">
              {feature.title}
            </h3>

            <p className="text-gray-600 leading-relaxed font-medium mb-8 flex-grow">
              {feature.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100 group-hover:border-green-100 transition-colors">
              {feature.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider bg-gray-50 px-3 py-2 rounded-xl group-hover:text-green-700 group-hover:bg-white transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Trust Section */}
      <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <p className="text-sm font-bold text-gray-900">Built for ESG & Carbon Compliance</p>
            <p className="text-xs text-gray-500 font-medium">
              Trusted carbon accounting infrastructure for modern enterprises
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-green-900 text-white font-bold rounded-xl hover:bg-green-800 transition shadow-lg active:scale-95"
          >
            Get Started →
          </a>

        </div>
      </div>

    </section>
  );
}

export default Features;