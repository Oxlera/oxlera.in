import React from "react";

function About() {
  return (
    <section className="relative overflow-hidden bg-white py-28 px-6">

      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50/40 to-transparent -z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-slate-50 to-transparent -z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-green-600/30"></div>
          <span className="text-[11px] font-bold text-green-700 uppercase tracking-[0.25em]">
            About Oxlera
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-12">
          Building the carbon{' '}
          <span className="text-green-800 font-serif italic font-normal">infrastructure</span>{' '}
          for a net-zero world.
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">

          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            We are your trusted partner in carbon emissions management, helping organizations
            measure, reduce, and offset their environmental impact through intelligent carbon solutions.
          </p>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Our platform enables accurate carbon accounting across Scope 1, 2, and 3 emissions,
            along with carbon credit generation, trading, and verified offsetting initiatives.
          </p>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            By combining carbon footprint calculation with real-world climate action, we help
            businesses meet ESG and compliance requirements while actively reducing emissions.
          </p>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Our easy-to-use carbon calculator and analytics tools allow organizations to
            quantify their environmental impact and take data-driven steps toward net-zero goals.
          </p>

        </div>

        {/* Bottom accent */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-1 w-16 bg-gradient-to-r from-green-600 to-emerald-400 rounded-full"></div>
          <div className="h-1 w-6 bg-green-200 rounded-full"></div>
          <div className="h-1 w-3 bg-green-100 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}

export default About;