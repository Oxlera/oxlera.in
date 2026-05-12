import React from "react";

function CaseStudies() {
  const studies = [
    {
      company: "GreenGrid Energy",
      title: "Reducing Enterprise Emissions by 38%",
      description:
        "How a renewable energy company leveraged AI-driven carbon tracking to optimize operations and reduce emissions across multiple facilities.",
      category: "Energy",
    },
    {
      company: "EcoChain Logistics",
      title: "Real-Time Supply Chain Carbon Visibility",
      description:
        "Building a centralized sustainability dashboard to monitor Scope 3 emissions across international logistics partners.",
      category: "Logistics",
    },
    {
      company: "Nova Manufacturing",
      title: "Automating ESG Reporting Pipelines",
      description:
        "A digital transformation initiative that streamlined ESG compliance and reduced reporting time by 70%.",
      category: "Manufacturing",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#fbfdfc] pt-32 pb-20 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-100/40 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/30 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-950 tracking-tight">
            Success{" "}
            <span className="text-emerald-700 italic font-light">
              Stories
            </span>
          </h1>

          <p className="mt-5 text-slate-600 max-w-xl">
            Explore how organizations are using carbon intelligence,
            automation, and ESG analytics to drive measurable sustainability impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((study, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                {study.category}
              </span>

              {/* Company */}
              <p className="mt-5 text-sm font-semibold text-slate-500">
                {study.company}
              </p>

              {/* Title */}
              <h2 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                {study.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {study.description}
              </p>

              {/* CTA */}
              <button className="mt-6 text-sm font-bold text-emerald-700 hover:underline">
                View case study →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;