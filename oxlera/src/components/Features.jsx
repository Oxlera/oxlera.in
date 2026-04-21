import React from 'react';

function Features() {
  const features = [
    {
      title: 'Carbon Accounting Engine',
      description: 'Automatically calculate Scope 1, 2, and 3 emissions using verified emission factors and real-time operational data inputs.',
      tags: ['Scope 1–3 Tracking', 'Verified Factors', 'Real-time Data'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50/60 to-cyan-50/60',
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
      bgGradient: 'from-purple-50/60 to-pink-50/60',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
        </svg>
      ),
    },
    {
      title: 'ESG & Carbon Credit Ready',
      description: 'Generate audit-ready ESG reports and convert verified emissions reductions into tradable carbon credits for global markets.',
      tags: ['ESG Compliance', 'Carbon Credits', 'Audit Ready'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50/60 to-emerald-50/60',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="relative bg-[#fafaf9] py-28 px-6 overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-green-100/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-50/30 to-transparent blur-3xl" />

      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="mb-20 max-w-2xl">

          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200/40 mb-8">
            <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-green-800 font-bold tracking-[0.2em] uppercase text-[10px]">
              Carbon Intelligence System
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Carbon data that{' '}
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="text-green-800 font-serif italic font-normal">drives decisions</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C40 3 80 1.5 100 1.5C120 1.5 160 3 198 6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" opacity="0.25"/>
              </svg>
            </span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Oxlera helps enterprises measure emissions, optimize carbon output,
            and unlock value through verified carbon credits and ESG reporting.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 rounded-3xl border border-gray-200/80 bg-white hover:border-green-200/60 hover:shadow-2xl hover:shadow-green-900/8 transition-all duration-500 flex flex-col overflow-hidden"
            >

              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              <div className="mb-7">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-900 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed font-medium text-[15px] mb-8 flex-grow">
                {feature.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100 group-hover:border-green-100/60 transition-colors">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 px-3 py-1.5 rounded-lg group-hover:text-green-700 group-hover:bg-white/80 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-white border border-gray-200/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-sm font-bold text-gray-900">Built for ESG & Carbon Compliance</p>
              <p className="text-xs text-gray-400 font-medium mt-0.5">
                Trusted carbon accounting infrastructure for modern enterprises
              </p>
            </div>
            <a
              href="#contact"
              className="group px-7 py-3 bg-green-900 text-white font-bold rounded-xl hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-green-900/10 active:scale-[0.97]"
            >
              Get Started <span className="inline-block ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;