import React from "react";

function Careers() {
    const openings = [
        // {
        //     role: "Full Stack Developer Intern",
        //     type: "Internship",
        //     location: "Remote",
        //     description:
        //         "Work on scalable sustainability platforms using React, Node.js, and cloud technologies.",
        // },
        // {
        //     role: "AI/ML Engineer",
        //     type: "Full Time",
        //     location: "Hybrid",
        //     description:
        //         "Build intelligent systems for carbon accounting, emissions forecasting, and ESG analytics.",
        // },
        // {
        //     role: "Frontend Engineer",
        //     type: "Full Time",
        //     location: "Remote",
        //     description:
        //         "Design and develop elegant user experiences for climate-tech dashboards and analytics products.",
        // },
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
                        Build the{" "}
                        <span className="text-emerald-700 italic font-light">
                            Future
                        </span>
                    </h1>

                    <p className="mt-5 text-slate-600 max-w-2xl">
                        Join Oxlera and help shape the next generation of climate-tech,
                        sustainability intelligence, and AI-driven carbon management systems.
                    </p>
                </div>

                {/* Openings */}
                <div className="grid md:grid-cols-3 gap-6">
                    {openings.map((job, i) => (
                        <div
                            key={i}
                            className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Type */}
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                                {job.type}
                            </span>

                            {/* Location */}
                            <p className="mt-5 text-sm font-semibold text-slate-500">
                                {job.location}
                            </p>

                            {/* Role */}
                            <h2 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                                {job.role}
                            </h2>

                            {/* Description */}
                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                {job.description}
                            </p>

                            {/* CTA */}
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=Business@oxlera.com&su=Application%20for%20Career%20Opportunity&body=Hello%20Oxlera%20Team,%0A%0AI%20am%20interested%20in%20applying%20for%20this%20role."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-6 text-sm font-bold text-emerald-700 hover:underline"
                            >
                                Apply now →
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <h3 className="text-3xl font-bold text-slate-900">
                        Don’t see the perfect role?
                    </h3>

                    <p className="mt-4 text-slate-600">
                        We’re always looking for exceptional people passionate about
                        sustainability, AI, and climate innovation.
                    </p>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=Business@oxlera.com&su=General%20Application&body=Hello%20Oxlera%20Team,%0A%0AI%20would%20like%20to%20submit%20an%20open%20application."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex mt-8 px-8 py-4 rounded-full bg-emerald-900 text-white font-semibold hover:bg-black transition-all shadow-lg"
                    >
                        Send Open Application
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Careers;