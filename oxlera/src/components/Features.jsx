import React from "react";

function Features() {
  const features = [
    {
      title: "Carbon Accounting Engine",
      description:
        "Systematically calculate Scope 1, 2, and 3 emissions using verified emission factors and real-time operational data inputs, ensuring full GHG Protocol alignment.",
      tags: ["Scope 1–3 Tracking", "Verified Factors", "Real-time Data"],
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
      title: "Low-Carbon Optimisation",
      description:
        "Identify emission hotspots and receive AI-assisted recommendations to reduce your organisation's carbon footprint efficiently.",
      tags: ["Reduction Insights", "Efficiency Analysis", "AI Recommendations"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
        </svg>
      ),
    },
    {
      title: "ESG & Carbon Credit Ready",
      description:
        "Generate audit-ready ESG reports and convert verified reductions into tradable carbon credits aligned with global standards.",
      tags: ["ESG Compliance", "Carbon Credits", "Audit Ready"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-28 px-5 sm:px-8">

      {/* subtle continuity fade (ONLY ONE, not full system) */}
      <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[#f7fbf8] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-emerald-300/60" />
            <span className="text-emerald-800 font-bold tracking-[0.25em] uppercase text-[10px]">
              Platform Features
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.05] tracking-[-0.03em]">
            Carbon data that{" "}
            <span className="text-emerald-800 italic font-light">
              drives decisions
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
            A unified carbon intelligence system for measurement, optimisation, and ESG reporting —
            built for real enterprise compliance and carbon credit generation.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl
                         bg-white/60 backdrop-blur-xl
                         border border-emerald-100/40
                         shadow-sm hover:shadow-xl hover:shadow-emerald-900/10
                         transition-all duration-500"
            >

              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6
                              group-hover:bg-emerald-200 transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-900 transition-colors">
                {feature.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                {feature.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-emerald-100/40">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider
                               bg-emerald-50/70 px-3 py-1 rounded-lg
                               group-hover:text-emerald-800 group-hover:bg-emerald-100 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;