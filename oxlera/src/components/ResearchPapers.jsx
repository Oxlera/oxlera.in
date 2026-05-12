import React from "react";

function ResearchPapers() {
  const papers = [
    {
      title: "AI-Driven Carbon Emission Forecasting Models",
      description:
        "Exploring how machine learning models can predict enterprise-level carbon emissions using operational and energy consumption data.",
      category: "Artificial Intelligence",
      year: "2026",
    },
    {
      title: "Blockchain-Based Carbon Credit Verification",
      description:
        "A study on decentralized systems for transparent validation and trading of carbon credits in global markets.",
      category: "Blockchain",
      year: "2025",
    },
    {
      title: "Automated ESG Reporting Using NLP Pipelines",
      description:
        "Research on extracting sustainability insights from invoices, reports, and enterprise documents using natural language processing.",
      category: "ESG Analytics",
      year: "2026",
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
            Research{" "}
            <span className="text-emerald-700 italic font-light">
              Papers
            </span>
          </h1>

          <p className="mt-5 text-slate-600 max-w-xl">
            Explore technical research, climate innovation studies,
            and sustainability-focused publications shaping the future.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {papers.map((paper, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                {paper.category}
              </span>

              {/* Year */}
              <p className="mt-5 text-sm font-semibold text-slate-500">
                Published • {paper.year}
              </p>

              {/* Title */}
              <h2 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                {paper.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {paper.description}
              </p>

              {/* CTA */}
              <button className="mt-6 text-sm font-bold text-emerald-700 hover:underline">
                Read paper →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchPapers;