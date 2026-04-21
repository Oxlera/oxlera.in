import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fbfdfc] pt-[140px] pb-24">
      
      {/* 1. THE "HIGH-END" CANVAS (Grain + Mesh) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Grain Overlay */}
        <div
          className="absolute inset-0 opacity-[0.2] mix-blend-multiply"
          style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}
        />

        {/* Mesh Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-emerald-100/40 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-blue-100/30 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] rounded-full bg-yellow-50/40 blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
            opacity: 0.2,
          }}
        />
      </div>

      {/* 2. LEFT GREEN BACKGROUND (FIXED LAYERING) */}
      <div className="absolute inset-0 z-[1] pointer-events-none">

  {/* Soft base wash (much lighter) */}
  <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#14532d]/10 via-[#14532d]/5 to-transparent" />

  {/* Very subtle radial glow */}
  <div className="absolute top-0 left-0 w-[60%] h-full bg-[radial-gradient(circle_at_left,#14532d08,transparent_70%)]" />

  {/* Ultra soft floating highlight */}
  <div className="absolute top-[20%] left-[10%] w-[45%] h-[45%] bg-[#14532d]/5 blur-[140px] rounded-full" />

  {/* Divider line (barely visible) */}
  <div className="absolute left-[55%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#14532d]/10 to-transparent" />

</div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10 lg:pl-6 xl:pl-2">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col max-w-[520px]">
  
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl xl:text-[72px] font-bold text-slate-950 leading-[0.95] tracking-[-0.04em]">
            Precision <br />
            <span className="text-emerald-950/20 italic font-light">meets</span> <br />
            <span className="relative inline-block">
              Sustainability.
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 400 8" fill="none">
                <path d="M1 5.5C50 2 150 2 399 5.5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-10 max-w-md text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            The world’s most advanced carbon ledger. Engineered for enterprises to{' '}
            <span className="text-slate-950 font-bold">measure, tokenize, and trade</span>{' '}
            environmental impact with 100% transparency.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <button className="px-10 py-5 bg-slate-950 text-white font-bold rounded-2xl shadow-2xl hover:bg-emerald-900 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center">
              Enter Platform
              <div className="ml-3 w-6 h-px bg-emerald-400"></div>
            </button>
            <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:border-emerald-300 transition-all shadow-sm">
              View Framework
            </button>
          </div>

          {/* Logos */}
          <div className="mt-20">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
              Infrastructure for industry leaders
            </p>
            <div className="flex gap-8 items-center opacity-40 grayscale">
              <div className="h-6 w-24 bg-slate-400 rounded-sm" />
              <div className="h-6 w-20 bg-slate-400 rounded-sm" />
              <div className="h-6 w-28 bg-slate-400 rounded-sm" />
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative lg:scale-110">
          <div className="relative w-full aspect-[4/5] max-w-[550px] mx-auto">
            
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-blue-50/20 rounded-[3rem] border border-white shadow-2xl rotate-3"></div>

            <div className="absolute top-10 left-0 right-0 bottom-10 bg-white/80 backdrop-blur-3xl rounded-[2.5rem] border border-white shadow-2xl p-8 overflow-hidden z-10 animate-float">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Global Emissions</h3>
                  <p className="text-3xl font-bold text-slate-900 mt-1">
                    42,840.00 <span className="text-emerald-500 text-sm">tCO₂e</span>
                  </p>
                </div>
                <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black border border-emerald-100">
                  REAL-TIME
                </div>
              </div>

              <div className="space-y-4">
                {[70, 40, 90].map((w, i) => (
                  <div key={i} className="h-2 bg-slate-50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Carbon Price</p>
                  <p className="text-xl font-bold text-slate-900">$84.12</p>
                </div>
                <div className="p-4 bg-emerald-900 text-white rounded-2xl">
                  <p className="text-[9px] font-bold text-emerald-300 uppercase tracking-tighter">Inventory</p>
                  <p className="text-xl font-bold">12.4k</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-20 w-64 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white z-20 animate-float-delayed">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-blue-600"></div>
                <div>
                  <p className="text-xs font-bold text-slate-950 leading-none">Amazonia Reforest</p>
                  <p className="text-[10px] text-slate-400 mt-1">Serial: #8291-X</p>
                </div>
              </div>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[80%] bg-emerald-500"></div>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400">Verified by Verra</span>
                <span className="text-[10px] font-bold text-emerald-600">CERTIFIED</span>
              </div>
            </div>

            <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-1/2 right-[-20%] w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;