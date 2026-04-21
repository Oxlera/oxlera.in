import React from "react";

function Blogs() {
  const posts = [
    {
      title: "Understanding Carbon Accounting in 2026",
      description:
        "A deep dive into Scope 1, 2, and 3 emissions and how enterprises can track them in real time.",
      tag: "Carbon",
    },
    {
      title: "Why ESG Reporting is Becoming Mandatory",
      description:
        "Regulations are tightening globally. Here's what businesses need to prepare for.",
      tag: "ESG",
    },
    {
      title: "The Future of Carbon Markets",
      description:
        "Tokenization of carbon credits and how blockchain is reshaping sustainability finance.",
      tag: "Markets",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#fbfdfc] pt-32 pb-20 px-6 overflow-hidden">

      {/* Background (same style as Hero) */}
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
            Insights &{" "}
            <span className="text-emerald-700 italic font-light">
              Articles
            </span>
          </h1>
          <p className="mt-5 text-slate-600 max-w-xl">
            Explore sustainability, carbon intelligence, ESG reporting, and the
            future of climate technology.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Tag */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                {post.tag}
              </span>

              {/* Title */}
              <h2 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                {post.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {post.description}
              </p>

              {/* Read more */}
              <button className="mt-6 text-sm font-bold text-emerald-700 hover:underline">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;