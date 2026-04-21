import React from "react";

function Divisions() {
  const divisions = [
    {
      title: "Carbon Measurement & Accounting",
      subtitle:
        "Accurately track your organization's emissions across Scope 1, 2, and 3 with automated data inputs and verified emission factors.",
      points: [
        "Scope-wise emissions tracking",
        "Automated data collection pipelines",
        "Verified carbon calculation models",
        "Real-time emissions dashboard",
      ],
      cta: "Start carbon assessment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 3v18h18M7 14l3-3 4 4 6-6" />
        </svg>
      ),
    },
    {
      title: "Carbon Reduction & Optimization",
      subtitle:
        "Identify emission hotspots and optimize operations with actionable insights to reduce your overall carbon footprint effectively.",
      points: [
        "Emission hotspot detection",
        "Operational efficiency insights",
        "Reduction strategy recommendations",
        "AI-assisted sustainability planning",
      ],
      cta: "Optimize emissions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-[#f7fbf8] py-28 px-6 overflow-hidden border-t border-emerald-100/40">

      {/* 🌿 SECTION SEPARATOR GLOW */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[120px] bg-emerald-100/20 blur-3xl" />

      {/* 🌿 BACKGROUND SYSTEM (MATCH FEATURES) */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-200/35 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] bg-emerald-300/20 blur-[160px] rounded-full" />

        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-emerald-200/30 via-emerald-100/10 to-transparent" />

        <div className="absolute top-0 left-0 w-[60%] h-full bg-[radial-gradient(circle_at_left,#10b98112,transparent_70%)]" />
      </div>

      <div className="relative max-w-[1100px] mx-auto">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-emerald-300/60" />
            <span className="text-emerald-800 font-bold tracking-[0.25em] uppercase text-[10px]">
              Carbon Intelligence Divisions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Build a carbon strategy that{" "}
            <span className="text-emerald-800 font-serif italic font-normal">
              actually performs.
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {divisions.map((div, i) => (
            <div
              key={i}
              className="group relative p-8 md:p-10 rounded-3xl bg-white border border-emerald-100/60
                         shadow-sm hover:shadow-xl hover:shadow-emerald-900/10
                         transition-all duration-500 overflow-hidden"
            >

              {/* hover glow */}
              <div className="absolute inset-0 bg-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* icon */}
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6
                              group-hover:bg-emerald-200 transition-all duration-300">
                {div.icon}
              </div>

              {/* title */}
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-emerald-900 transition-colors">
                {div.title}
              </h3>

              {/* subtitle */}
              <p className="text-slate-600 font-medium leading-relaxed mb-8 text-sm md:text-base">
                {div.subtitle}
              </p>

              {/* points */}
              <ul className="space-y-3 mb-10">
                {div.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                {div.cta}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

            </div>
          ))}

        </div>

        {/* bottom insight */}
        <div className="mt-14 p-6 md:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-100">
          <p className="text-sm md:text-base text-slate-600">
            <span className="font-bold text-slate-900">Insight:</span>{" "}
            Carbon measurement directly feeds into reduction strategies and verified carbon credit generation.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Divisions;