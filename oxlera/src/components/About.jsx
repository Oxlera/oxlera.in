import React from "react";

function About() {
  return (
    <section className="relative overflow-hidden bg-[#E2E2EB] py-20 px-6 md:py-24">

      {/* Background accents */}
      <div 
        className="absolute top-0 right-0 h-full w-1/3 bg-[#F0F0F5] -z-0"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />
      <div 
        className="absolute top-0 right-0 h-full w-[15%] bg-[#F8F8FA] -z-0"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-10 tracking-tight">
          About Us
        </h2>

        {/* Content */}
        <div className="space-y-6">

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            We are your trusted partner in carbon emissions management, helping organizations
            measure, reduce, and offset their environmental impact through intelligent carbon solutions.
          </p>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Our platform enables accurate carbon accounting across Scope 1, 2, and 3 emissions,
            along with carbon credit generation, trading, and verified offsetting initiatives
            that support global sustainability projects.
          </p>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            By combining carbon footprint calculation with real-world climate action, we help
            businesses meet ESG and compliance requirements while actively reducing emissions
            and investing in a low-carbon future.
          </p>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Our easy-to-use carbon calculator and analytics tools allow organizations to
            quantify their environmental impact and take clear, data-driven steps toward net-zero goals.
          </p>

        </div>

        {/* Divider */}
        <div className="mt-14 w-20 h-1 bg-green-600/20 mx-auto rounded-full"></div>

      </div>
    </section>
  );
}

export default About;