import React from 'react';

function Divisions() {
  const divisions = [
    {
      title: "Carbon Measurement & Accounting",
      subtitle: "Accurately track your organization’s emissions across Scope 1, 2, and 3 with automated data inputs and verified emission factors.",
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
      bgGradient: "from-blue-50 to-cyan-50",
      accentColor: "blue"
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      accentColor: "green"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50/50 to-white py-28 px-6 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-100/20 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-green-100/20 to-transparent blur-3xl" />

      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-white rounded-full border border-gray-200 mb-6">
            <span className="text-gray-600 font-extrabold tracking-[0.25em] uppercase text-[10px]">
              Carbon Intelligence Divisions
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Build a carbon strategy that{' '}
            <br />
            <span className="text-green-800 font-serif italic font-normal">
              actually performs.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((div, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[2.5rem] p-10 md:p-12 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
            >

              <div className={`absolute inset-0 bg-gradient-to-br ${div.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              <div className="mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${div.gradient} text-white shadow-lg group-hover:scale-110 transition-all duration-500`}>
                  {div.icon}
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                {div.title}
              </h3>

              <p className="text-gray-600 font-medium leading-relaxed mb-10 text-base md:text-lg">
                {div.subtitle}
              </p>

              <ul className="space-y-4 mb-12">
                {div.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base font-semibold text-gray-700">
                    <div className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${div.gradient}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center gap-3 font-black uppercase tracking-wider bg-gradient-to-r ${div.gradient} bg-clip-text text-transparent`}
              >
                <span>{div.cta}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>

            </div>
          ))}
        </div>

        {/* Bottom Insight */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border-l-4 border-green-600 max-w-3xl">
          <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
            <span className="font-bold text-gray-900">Insight:</span> These two systems work together—accurate carbon measurement feeds directly into reduction strategies and carbon credit generation.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Divisions;