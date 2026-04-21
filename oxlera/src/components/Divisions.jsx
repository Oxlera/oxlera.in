import React from 'react';

function Divisions() {
  const divisions = [
    {
      title: "Carbon Measurement & Accounting",
      subtitle: "Accurately track your organization's emissions across Scope 1, 2, and 3 with automated data inputs and verified emission factors.",
      points: [
        'Scope-wise emissions tracking',
        'Automated data collection pipelines',
        'Verified carbon calculation models',
        'Real-time emissions dashboard'
      ],
      cta: "Start carbon assessment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l3-3 4 4 6-6" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50/50 to-cyan-50/50",
      dotColor: "bg-blue-500"
    },
    {
      title: "Carbon Reduction & Optimization",
      subtitle: "Identify emission hotspots and optimize operations with actionable insights to reduce your overall carbon footprint effectively.",
      points: [
        'Emission hotspot detection',
        'Operational efficiency insights',
        'Reduction strategy recommendations',
        'AI-assisted sustainability planning'
      ],
      cta: "Optimize emissions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50/50 to-emerald-50/50",
      dotColor: "bg-green-500"
    }
  ];

  return (
    <section className="relative bg-white py-28 px-6 overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-50/30 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-green-50/30 to-transparent blur-3xl" />

      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-gray-500 font-bold tracking-[0.2em] uppercase text-[10px]">
              Carbon Intelligence Divisions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Build a carbon strategy that{' '}
            <br className="hidden md:block" />
            <span className="text-green-800 font-serif italic font-normal">
              actually performs.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {divisions.map((div, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-8 md:p-10 border border-gray-200/80 hover:border-transparent hover:shadow-2xl hover:shadow-green-900/8 transition-all duration-500 flex flex-col overflow-hidden"
            >

              <div className={`absolute inset-0 bg-gradient-to-br ${div.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              <div className="mb-7">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${div.gradient} text-white shadow-lg group-hover:scale-110 transition-all duration-500`}>
                  {div.icon}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-900 transition-colors duration-300">
                {div.title}
              </h3>

              <p className="text-gray-500 font-medium leading-relaxed mb-8 text-[15px] md:text-base">
                {div.subtitle}
              </p>

              <ul className="space-y-3 mb-10 flex-grow">
                {div.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                    <div className={`h-1.5 w-1.5 rounded-full ${div.dotColor} shrink-0`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="group/link inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-gray-400 hover:text-green-800 transition-colors duration-300"
              >
                <span>{div.cta}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>

            </div>
          ))}
        </div>

        {/* Bottom Insight */}
        <div className="mt-14 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-green-50/60 via-emerald-50/40 to-green-50/60 border border-green-100/50">
          <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
            <span className="font-bold text-gray-900">Insight:</span>{' '}
            These two systems work together — accurate carbon measurement feeds directly into reduction strategies and carbon credit generation.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Divisions;