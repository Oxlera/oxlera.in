  import React from 'react';

  function Hero() {
    return (
      <section className="relative overflow-hidden bg-[#fafaf9]">
        
        {/* Subtle Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.12]" 
          style={{ 
            backgroundImage: `radial-gradient(#1f6f3b 0.5px, transparent 0.5px)`, 
            backgroundSize: '26px 26px' 
          }}
        />

        {/* Soft Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#fafaf9_72%)]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-44 md:pb-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div className="flex flex-col items-start z-10">

              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                </span>
                <span className="text-stone-600 text-[11px] font-bold tracking-[0.25em] uppercase">
                  Carbon Intelligence System
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                
                Measure. Reduce. <br />
                Offset.{' '}
                <span className="relative inline-block">
                  <span className="text-green-800 font-serif italic font-normal">
                    Trade carbon.
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C60 5 110 2 150 2C210 2 255 5 298 10"
                      stroke="#15803d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.25"/>
                  </svg>
                </span>

              </h1>

              {/* Subtext */}
              <p className="mt-8 max-w-xl text-lg md:text-xl text-stone-600 leading-relaxed font-medium">
                A unified platform to calculate carbon emissions, generate verified carbon credits, and enable transparent carbon trading for businesses moving toward net-zero.
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#contact"
                  className="px-10 py-4 bg-green-900 text-white font-bold rounded-full shadow-lg hover:bg-black transition-all duration-300 text-center">
                  Calculate Emissions
                </a>

                <a href="#features"
                  className="px-10 py-4 border border-stone-300 text-stone-900 font-bold rounded-full hover:bg-stone-100 transition-all duration-300 text-center">
                  Explore Platform
                </a>
              </div>

              {/* Trust Metrics */}
              <div className="mt-12 flex items-center gap-6">
                <div>
                  <span className="text-2xl font-bold text-slate-900 italic">CO₂</span>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Tracked</div>
                </div>

                <div className="w-px h-8 bg-stone-200" />

                <div>
                  <span className="text-2xl font-bold text-slate-900 italic">ESG</span>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Aligned</div>
                </div>

                <div className="w-px h-8 bg-stone-200" />

                <div>
                  <span className="text-2xl font-bold text-slate-900 italic">CREDITS</span>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Generated</div>
                </div>
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end">

              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">

                {/* Glow */}
                <div className="absolute inset-0 bg-green-100/40 rounded-full blur-3xl" />

                {/* SVG (keep yours, slightly improved contrast) */}
                <svg viewBox="0 0 200 240" className="w-full h-auto relative z-10">

                  <path d="M75 190 L125 190 L120 220 L80 220 Z" fill="#1f1f1f" />
                  <rect x="72" y="185" width="56" height="6" rx="1" fill="#2f2f2f" />

                  <path 
                    d="M100 185 Q100 130 100 70"
                    stroke="#166534"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    className="animate-[draw_1.5s_ease-out_forwards]"
                    style={{ strokeDasharray: 120, strokeDashoffset: 120 }}
                  />

                  <g className="animate-[grow_1.2s_ease-out_0.6s_forwards] origin-[100px_150px] scale-0">
                    <path d="M100 150 C70 150 55 130 55 110 C55 140 85 150 100 150" fill="#65a30d" />
                  </g>

                  <g className="animate-[grow_1.2s_ease-out_1s_forwards] origin-[100px_120px] scale-0">
                    <path d="M100 120 C130 120 145 100 145 80 C145 110 115 120 100 120" fill="#4d7c0f" />
                  </g>

                  <g className="animate-[grow_1.2s_ease-out_1.4s_forwards] origin-[100px_70px] scale-0">
                    <path d="M100 70 C100 50 115 30 100 10 C85 30 100 50 100 70" fill="#3f6212" />
                  </g>

                </svg>

                <div className="absolute bottom-10 w-40 h-4 bg-stone-900/5 rounded-full blur-md" />

              </div>
            </div>

          </div>
        </div>

        <style jsx>{`
          @keyframes draw {
            to { stroke-dashoffset: 0; }
          }
          @keyframes grow {
            0% { transform: scale(0) rotate(-5deg); opacity: 0; }
            60% { transform: scale(1.05) rotate(2deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
        `}</style>

      </section>
    );
  }

  export default Hero;