import React from 'react';

function Divisions() {
  const divisions = [
    {
      title: "Cafes & Restaurants",
      subtitle: "Create a signature ambience that makes customers stay longer, click photos, and come back.",
      points: [
        'Ambience upgrade that looks premium',
        'Improves perceived air freshness',
        'Photo-friendly "feature walls"',
        'Low-light indoor plant species'
      ],
      cta: "Get a concept layout",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      accentColor: "orange"
    },
    {
      title: "Corporate ESG & BRSR",
      subtitle: "Designed to support internal workplace initiatives and make reporting easier with measurable inputs.",
      points: [
        'Employee well-being & biophilic design',
        'Resource-efficient irrigation logs',
        'Quantifiable area coverage data',
        'Documentation kit for compliance'
      ],
      cta: "See ESG-ready metrics",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6.223h4c.007 0 .014 0 .02.001a2.396 2.396 0 0 0 4.582 1.17 2.464 2.464 0 0 0-.415-.499 2.478 2.478 0 0 0-.475-.367l-.383-.231a5.046 5.046 0 0 1-2.453-4.41V2.25h3.375c.621 0 1.125.504 1.125 1.125V5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V3.375c0-.621-.504-1.125-1.125-1.125H16.5M9 2.25v1.125a3.375 3.375 0 0 1-3.375 3.375h-1.5a1.125 1.125 0 0 0-1.125 1.125v7.875c0 .621.504 1.125 1.125 1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
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
      <div className="absolute top-1/4 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-orange-100/20 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-green-100/20 to-transparent blur-3xl" />
      
      <div className="max-w-[1100px] mx-auto">
        
        {/* Enhanced Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-white rounded-full border border-gray-200 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span className="text-gray-600 font-extrabold tracking-[0.25em] uppercase text-[10px]">Two Focused Divisions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Pick the outcome{' '}
            <br />
            <span className="relative inline-block">
              <span className="text-green-800 font-serif italic font-normal">you care about.</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-transparent rounded-full opacity-30" />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((div, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-[2.5rem] p-10 md:p-12 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${div.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              {/* Decorative Corner Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${div.gradient} rounded-bl-[3rem] opacity-10`} />
              </div>

              <div>
                {/* Enhanced Badge Icon with Gradient */}
                <div className="relative mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 bg-gradient-to-br ${div.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {div.icon}
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${div.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 group-hover:text-gray-800 transition-colors">
                  {div.title}
                </h3>
                
                <p className="text-gray-600 font-medium leading-relaxed mb-10 text-base md:text-lg">
                  {div.subtitle}
                </p>

                {/* Enhanced Outcome List */}
                <ul className="space-y-4 mb-12">
                  {div.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base font-semibold text-gray-700 group/item">
                      <div className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${div.gradient} flex-shrink-0 group-hover/item:scale-150 transition-transform`} />
                      <span className="group-hover/item:text-gray-900 transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced CTA Link */}
              <a 
                href="#contact" 
                className={`group/cta inline-flex items-center gap-3 text-sm md:text-base font-black uppercase tracking-wider bg-gradient-to-r ${div.gradient} bg-clip-text text-transparent hover:gap-5 transition-all duration-300`}
              >
                <span>{div.cta}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-5 h-5 text-${div.accentColor}-600 group-hover/cta:translate-x-1 transition-transform`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Enhanced Proactive Tip */}
        <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border-l-4 border-green-600 max-w-3xl shadow-lg shadow-green-900/5">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div>
              <p className="text-sm md:text-base text-gray-700 font-semibold leading-relaxed">
                <span className="font-extrabold text-gray-900">Pro Tip:</span> If you already have an office sustainability program, we can integrate our metrics into your existing reporting workflow—making compliance seamless.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Divisions;