import React from "react";

function About() {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 px-5 sm:px-8">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="flex flex-col">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.05] tracking-[-0.03em]">
            Carbon Intelligence
            <br />
            for a Sustainable Future
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-emerald-900 font-medium italic">
            Precision meets verified carbon accounting.
          </p>

          <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-md">
            We help organisations measure emissions, generate verified carbon credits,
            and transform sustainability data into actionable climate impact.
          </p>

          {/* STATS (MATCH FEATURES CARD SYSTEM) */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">

            {[
              { value: "1B+", label: "CO₂ Measured" },
              { value: "100+", label: "Companies" },
              { value: "300+", label: "Projects" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 bg-white/60 backdrop-blur-xl rounded-2xl
                           border border-emerald-100/40 shadow-sm"
              >
                <p className="text-xl font-bold text-emerald-900">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase text-slate-500 tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button className="px-7 py-3 bg-emerald-900 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-800 transition-all hover:-translate-y-1 active:scale-95">
              Explore Platform
            </button>

            <button className="px-7 py-3 bg-white/60 backdrop-blur-xl border border-emerald-100/40 text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 transition-all">
              Learn More
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* keep ONE consistent ambient blob (same system as Features) */}
          <div className="absolute w-[480px] h-[480px] bg-emerald-300/20 blur-3xl rounded-full" />

          <div className="relative z-10 w-full max-w-[420px] p-10
                          bg-white/60 backdrop-blur-xl
                          rounded-3xl border border-emerald-100/40
                          shadow-sm hover:shadow-xl hover:shadow-emerald-900/10
                          transition-all duration-500">

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