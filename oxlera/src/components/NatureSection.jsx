import React from "react";
import worldMap from "../assets/world_map.png";

function NatureSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbf8] py-24 sm:py-28 md:py-32">

      {/* 🌿 Clean Green Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Main emerald glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-200/40 blur-[140px] rounded-full animate-pulse" />

        {/* Secondary soft green glow */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[55%] h-[55%] bg-emerald-300/20 blur-[160px] rounded-full" />

        {/* Left-side hero-style wash (like your Hero section) */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-emerald-200/40 via-emerald-100/20 to-transparent" />

        {/* Subtle radial highlight */}
        <div className="absolute top-0 left-0 w-[60%] h-full bg-[radial-gradient(circle_at_left,#10b98115,transparent_70%)]" />

        {/* Divider line */}
        <div className="absolute left-[55%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-200/30 to-transparent" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="flex flex-col">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
            Nature Without Borders
          </h2>

          <p className="mt-2 text-lg sm:text-xl text-emerald-900 font-medium italic">
            For the Planet, From the Planet.
          </p>

          <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-md">
            We help organisations quantify their carbon footprint and convert it into verified carbon credits that support real-world climate impact
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">

            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100">
              <p className="text-xl font-bold text-emerald-900">1M+</p>
              <p className="text-[10px] uppercase text-slate-500 tracking-wider">CO₂ Tracked</p>
            </div>

            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100">
              <p className="text-xl font-bold text-emerald-900">50+</p>
              <p className="text-[10px] uppercase text-slate-500 tracking-wider">Enterprises</p>
            </div>

            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100">
              <p className="text-xl font-bold text-emerald-900">120+</p>
              <p className="text-[10px] uppercase text-slate-500 tracking-wider">Projects</p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button className="px-7 py-3 bg-emerald-900 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-800 transition-all hover:-translate-y-1 active:scale-95">
              Explore Impact Map
            </button>

            <button className="px-7 py-3 bg-white border border-emerald-200 text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 transition-all">
              View Climate Projects
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">

          {/* glow behind map */}
          <div className="absolute w-[520px] h-[520px] bg-emerald-300/25 blur-3xl rounded-full animate-pulse" />

          <div className="relative z-10 group">

            <img
              src={worldMap}
              alt="World made of trees"
              className="w-[800px] max-w-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default NatureSection;