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
    },
  ];

  return (
    <section id="metrics" className="relative py-28 px-6">

  {/* subtle section blend (NOT a divider, just continuity) */}
  <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

  <div className="max-w-[1100px] mx-auto">

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
          className="group relative p-8 md:p-10 rounded-3xl
                     bg-white/60 backdrop-blur-lg
                     border border-emerald-100/50
                     shadow-sm hover:shadow-xl hover:shadow-emerald-900/10
                     transition-all duration-500"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-emerald-900 transition-colors">
            {div.title}
          </h3>

          <p className="text-slate-600 font-medium leading-relaxed mb-8 text-sm md:text-base">
            {div.subtitle}
          </p>

          <ul className="space-y-3 mb-10">
            {div.points.map((point, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {point}
              </li>
            ))}
          </ul>

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

    {/* INSIGHT */}
    <div className="mt-14 p-6 md:p-8 rounded-2xl bg-white/50 backdrop-blur-lg border border-emerald-100/50">
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