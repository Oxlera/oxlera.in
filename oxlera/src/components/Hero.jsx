import React from 'react';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50/20 to-white">
      {/* Enhanced Organic Background Accents */}
      <div className="absolute top-0 right-0 -z-10 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-green-100/60 via-green-50/40 to-transparent blur-3xl opacity-70 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-green-50/50 to-transparent blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4" />
      
      {/* Enhanced Grid Pattern with Animation */}
      <div 
        className="absolute top-0 left-0 -z-10 h-full w-full opacity-[0.04] pointer-events-none animate-pulse" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23346516' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v-4H4v4H0v2h4v4h2v-4h4v-2H6zM36 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animationDuration: '20s'
        }} 
      />

      <div className="max-w-[1100px] mx-auto pt-28 pb-24 px-6 md:pt-40 md:pb-36">
        
        {/* Enhanced Badge with Gradient Border */}
        <div className="relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-50 to-green-100/50 border-2 border-green-200/50 text-green-800 text-xs md:text-sm font-bold tracking-wide uppercase shadow-lg shadow-green-900/5 backdrop-blur-sm">
          <span className="flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600 shadow-lg shadow-green-600/50"></span>
          </span>
          <span className="bg-gradient-to-r from-green-800 to-green-700 bg-clip-text text-transparent font-extrabold">
            Indoor Landscaping • Low Maintenance • Modular Systems
          </span>
        </div>

        {/* Enhanced Heading with Better Typography */}
        <h1 className="mt-10 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900 leading-[1.08]">
          Green interiors that look{' '}
          <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="text-green-800 font-serif italic font-normal">premium</span>
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C50 5 100 2 150 2C200 2 250 5 298 10" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
            </svg>
          </span>
          <br />
          and measure impact.
        </h1>

        {/* Enhanced Sub text with Better Highlights */}
        <p className="mt-10 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
          Oxlera designs and installs wall-mounted plant systems for{' '}
          <span className="relative inline-block">
            <span className="text-gray-900 font-bold">cafes & restaurants</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-200/40 -z-10"></span>
          </span>
          {' '}and{' '}
          <span className="relative inline-block">
            <span className="text-gray-900 font-bold">corporate offices</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200/40 -z-10"></span>
          </span>
          . Beautiful, practical, and fully aligned with ESG and BRSR reporting needs.
        </p>

        {/* Enhanced CTA Buttons with Better Shadows and Gradients */}
        <div className="mt-14 flex flex-col sm:flex-row gap-5">
          <a
            href="#contact"
            className="group relative px-10 py-5 bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white font-bold rounded-2xl shadow-2xl shadow-green-900/30 hover:shadow-green-900/40 hover:-translate-y-1 transition-all duration-300 active:scale-95 text-center flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Request a site visit
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>

          <a
            href="#features"
            className="group px-10 py-5 border-2 border-gray-200 bg-white/50 backdrop-blur-sm text-gray-900 font-bold rounded-2xl hover:bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 active:scale-95 text-center flex items-center justify-center gap-2"
          >
            Explore solutions
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>

        {/* Enhanced Target Segments with Cards */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-200">
          <div className="group p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100/50 hover:shadow-lg hover:shadow-orange-900/5 transition-all duration-300">
            <p className="text-[9px] font-extrabold text-orange-700 uppercase tracking-[0.25em] mb-3">Focus 01</p>
            <p className="text-sm font-bold text-gray-900">Cafes & Restaurants</p>
          </div>
          
          <div className="group p-5 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100/50 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300">
            <p className="text-[9px] font-extrabold text-green-700 uppercase tracking-[0.25em] mb-3">Focus 02</p>
            <p className="text-sm font-bold text-gray-900">Corporate Offices</p>
          </div>
          
          <div className="col-span-2 md:col-span-2 md:text-right p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100/50">
            <p className="text-[9px] font-extrabold text-gray-500 uppercase tracking-[0.25em] mb-3">Sustainability</p>
            <p className="text-sm font-bold text-gray-600 italic flex items-center justify-end gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              ESG / BRSR / Carbon Ready
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;