import React from 'react';

function Contact() {
  return (
    <section id="contact" className="max-w-[1100px] mx-auto py-24 px-6">
      <div className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-[3rem] px-8 md:px-16 py-20 md:py-28">
        
        {/* Enhanced Abstract Background with Grid Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-green-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-green-700/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px]"></div>
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v-4H4v4H0v2h4v4h2v-4h4v-2H6zM36 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
            }} 
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-green-200 font-bold tracking-[0.25em] uppercase text-[10px]">
              Ready to Start
            </span>
          </div>

          {/* Improved Typography Hierarchy */}
          <h2 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Let's plan your
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-200 to-green-300 font-serif italic font-normal">
                installation.
              </span>
              {/* Subtle underline accent */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent rounded-full"></div>
            </span>
          </h2>
          
          {/* Enhanced Description with Better Spacing */}
          <p className="mt-10 text-lg md:text-xl text-green-50/90 font-medium leading-relaxed max-w-2xl mx-auto">
            Share your{' '}
            <span className="text-white font-semibold relative inline-block group">
              space type
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-400/40 group-hover:bg-green-400/70 transition-all"></span>
            </span>
            ,{' '}
            <span className="text-white font-semibold relative inline-block group">
              location
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-400/40 group-hover:bg-green-400/70 transition-all"></span>
            </span>
            , and{' '}
            <span className="text-white font-semibold relative inline-block group">
              wall dimensions
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-400/40 group-hover:bg-green-400/70 transition-all"></span>
            </span>
            . We'll respond with a tailored concept and next steps.
          </p>

          {/* Improved CTA Buttons with Better Visual Weight */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Primary CTA - Enhanced */}
            <a
              href="mailto:contact@oxlera.in?subject=Installation Plan Request"
              className="group relative flex items-center gap-3 px-10 py-5 bg-white text-green-900 font-bold rounded-2xl hover:bg-green-50 transition-all duration-300 shadow-2xl shadow-black/30 hover:shadow-green-300/20 active:scale-95 w-full sm:w-auto justify-center overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Request Site Visit
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>

            {/* Secondary CTA - Enhanced */}
            <a 
              href="mailto:contact@oxlera.in?subject=ESG Reporting Pack Request"
              className="group relative flex items-center gap-2 text-white font-bold text-sm hover:text-green-200 transition-all duration-300 py-4 px-7 border-2 border-white/30 rounded-2xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm w-full sm:w-auto justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              Get ESG Reporting Pack
            </a>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="mt-12 pt-10 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-8 text-green-200/70">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider">24hr Response</span>
              </div>
              
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider">ESG Compliant</span>
              </div>
              
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider">Professional Install</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;