import React from 'react';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* 
        Subtle Background Glow: 
        This adds a soft green tint to the top right, 
        making the page feel less "flat." 
      */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-green-50/50 blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1100px] mx-auto pt-20 pb-24 px-6 md:pt-32 md:pb-40">
        
        {/* Badge - Refined with a tiny border */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs md:text-sm font-bold tracking-wide uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Minimal · Sustainable · Indoor
        </div>

        {/* Heading - Responsive sizes and tighter tracking */}
        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
          Indoor sustainability,<br className="hidden md:block" />
          <span className="text-green-800">without the noise.</span>
        </h1>

        {/* Sub text - Increased line height for readability */}
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
          Oxlera helps offices bring greenery indoors using a clean,
          minimal system focused on long-term sustainability and clarity.
        </p>

        {/* CTA Buttons - Added transitions and scale effects */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-green-800 text-white font-bold rounded-xl shadow-lg shadow-green-900/10 hover:bg-green-900 hover:-translate-y-0.5 transition-all active:scale-95 text-center"
          >
            Talk to us
          </a>

          <a
            href="#features"
            className="px-8 py-4 border border-gray-200 text-gray-900 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 text-center"
          >
            Learn more
          </a>
        </div>

        {/* Optional: Simple Trust Signal */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Trusted by modern workspaces
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;