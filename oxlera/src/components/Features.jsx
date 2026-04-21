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
    <section className="relative bg-[#fbfdfc] py-24 sm:py-28 px-5 sm:px-8 overflow-hidden">

      {/* HERO-STYLE BACKGROUND (soft emerald only) */}
      <div className="absolute inset-0 pointer-events-none z-0">

        {/* soft emerald glow (primary brand tone) */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-100/40 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-emerald-200/25 blur-[160px]" />

        {/* subtle neutral grid (very light like hero) */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 leading-[1.05] tracking-[-0.03em]">
            Carbon data that{" "}
            <span className="text-emerald-900 italic font-light">
              drives decisions
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
            Oxlera equips enterprises with precise carbon measurement,
            optimisation, and ESG reporting capabilities built for real-world compliance.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm
                         hover:shadow-xl hover:border-emerald-200 transition-all duration-500 overflow-hidden"
            >

              {/* soft emerald hover wash */}
              <div className="absolute inset-0 bg-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* ICON (hero-consistent green) */}
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6
                              group-hover:bg-emerald-200 transition-all duration-300">
                {feature.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-900 transition-colors">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                {feature.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider
                               bg-slate-50 px-3 py-1 rounded-lg
                               group-hover:text-emerald-700 group-hover:bg-emerald-50 transition-all"
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