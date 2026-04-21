import React from "react";

function About() {
  return (
    <section className="relative overflow-hidden bg-[#f0f7f2] py-20 sm:py-24 md:py-28 px-5 sm:px-8">

      {/* Green background accents */}
      <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full bg-gradient-to-l from-green-100/50 to-transparent -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-emerald-50/60 to-transparent -z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-green-200/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="h-px w-10 sm:w-12 bg-green-600/40"></div>
          <span className="text-[10px] sm:text-[11px] font-bold text-green-700 uppercase tracking-[0.2em] sm:tracking-[0.25em]">
            About Oxlera
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-10 sm:mb-12">
          Building the carbon{' '}
          <span className="text-green-800 font-serif italic font-normal">infrastructure</span>{' '}
          for a net-zero world.
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-6 sm:gap-y-8">

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Oxlera serves as a trusted partner in carbon emissions management, supporting organisations
            in measuring, reducing, and offsetting their environmental impact through intelligent,
            data-driven carbon solutions.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Our platform facilitates precise carbon accounting across Scope 1, 2, and 3 emissions,
            complemented by carbon credit generation, structured trading, and verified offsetting initiatives.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            By integrating carbon footprint calculation with tangible climate action, we assist enterprises
            in satisfying ESG and regulatory compliance obligations while actively advancing emissions reduction.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Our analytics tools and carbon calculator empower organisations to rigorously quantify their
            environmental impact and pursue data-informed pathways toward net-zero commitments.
          </p>

        </div>

        {/* Bottom accent */}
        <div className="mt-12 sm:mt-16 flex items-center gap-4">
          <div className="h-1 w-14 sm:w-16 bg-gradient-to-r from-green-600 to-emerald-400 rounded-full"></div>
          <div className="h-1 w-5 sm:w-6 bg-green-300 rounded-full"></div>
          <div className="h-1 w-2.5 sm:w-3 bg-green-200 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}

export default About;