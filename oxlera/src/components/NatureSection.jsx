import React from "react";
import worldMap from "../assets/world_map.png";

function NatureSection() {
  return (
    <section className="relative py-24 sm:py-28 md:py-32">

      {/* subtle transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-[140px] bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

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

            {[
              { value: "1M+", label: "CO₂ Tracked" },
              { value: "50+", label: "Enterprises" },
              { value: "120+", label: "Projects" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-4 bg-white/60 backdrop-blur-lg rounded-2xl border border-emerald-100/50"
              >
                <p className="text-xl font-bold text-emerald-900">{s.value}</p>
                <p className="text-[10px] uppercase text-slate-500 tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button className="px-7 py-3 bg-emerald-900 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-800 transition-all hover:-translate-y-1 active:scale-95">
              Explore Impact Map
            </button>

            <button className="px-7 py-3 bg-white/60 backdrop-blur-lg border border-emerald-200 text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 transition-all">
              View Climate Projects
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">

          {/* soft ambient (reduced intensity vs Hero) */}
          <div className="absolute w-[480px] h-[480px] bg-emerald-300/15 blur-3xl rounded-full" />

          <div className="relative z-10 group">
            <img
              src={worldMap}
              alt="World made of trees"
              className="w-[750px] max-w-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default NatureSection;