import React from "react";

function About() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbf8] py-24 sm:py-28 md:py-32 px-5 sm:px-8">

      {/* 🌿 SAME GREEN GLOW SYSTEM AS NATURE SECTION */}
      <div className="absolute inset-0 pointer-events-none">

        {/* main glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-200/40 blur-[140px] rounded-full animate-pulse" />

        {/* secondary glow */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[55%] h-[55%] bg-emerald-300/20 blur-[160px] rounded-full" />

        {/* left wash */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-emerald-200/40 via-emerald-100/20 to-transparent" />

        {/* radial highlight */}
        <div className="absolute top-0 left-0 w-[60%] h-full bg-[radial-gradient(circle_at_left,#10b98115,transparent_70%)]" />

        {/* divider */}
        <div className="absolute left-[55%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-200/30 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
            Carbon Intelligence
            <br />
            for a Sustainable Future
          </h2>

          <p className="mt-3 text-lg sm:text-xl text-emerald-900 font-medium italic">
            Precision meets verified carbon accounting.
          </p>

          <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-md">
            We help organisations measure emissions, generate verified carbon credits,
            and transform sustainability data into actionable climate impact.
          </p>

          {/* STATS (same style as NatureSection) */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">

            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100">
              <p className="text-xl font-bold text-emerald-900">1B+</p>
              <p className="text-[10px] uppercase text-slate-500 tracking-wider">CO₂ Measured</p>
            </div>

            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100">
              <p className="text-xl font-bold text-emerald-900">100+</p>
              <p className="text-[10px] uppercase text-slate-500 tracking-wider">Companies</p>
            </div>

            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100">
              <p className="text-xl font-bold text-emerald-900">300+</p>
              <p className="text-[10px] uppercase text-slate-500 tracking-wider">Projects</p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button className="px-7 py-3 bg-emerald-900 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-800 transition-all hover:-translate-y-1 active:scale-95">
              Explore Platform
            </button>

            <button className="px-7 py-3 bg-white border border-emerald-200 text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 transition-all">
              Learn More
            </button>

          </div>

        </div>

        {/* RIGHT VISUAL (optional abstract carbon block instead of text-heavy grid) */}
        <div className="relative flex justify-center">

          <div className="absolute w-[500px] h-[500px] bg-emerald-300/25 blur-3xl rounded-full animate-pulse" />

          <div className="relative z-10 w-full max-w-[420px] p-10 bg-white/60 backdrop-blur-2xl rounded-3xl border border-emerald-100 shadow-xl">

            <p className="text-sm text-slate-600 leading-relaxed">
              Oxlera builds the infrastructure for carbon credit generation,
              enabling transparent emissions tracking and global climate accountability.
            </p>

            <div className="mt-6 h-1 w-full bg-emerald-100 rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-emerald-500" />
            </div>

            <p className="mt-4 text-xs text-emerald-800 font-semibold">
              Verified Carbon Infrastructure
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;