import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      `Consultation Request from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Hello Oxlera Team,

Full Name: ${formData.name}

Business Email: ${formData.email}

Company Name: ${formData.company}

Requirements:
${formData.message}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=Business@oxlera.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative bg-[#f4f8f5] py-24 px-5 sm:px-8 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-emerald-200/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-green-200/25 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT: TEXT */}
        <div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Start your{" "}
            <span className="text-emerald-800 font-serif italic font-normal">
              carbon transformation
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-md">
            Talk to our team to design a tailored carbon accounting,
            ESG reporting, and emissions reduction system for your
            organisation.
          </p>

          {/* Info Cards */}
          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium">
                Response within 24 hours
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium">
                Scope 1–3 carbon coverage
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium">
                ESG & compliance ready reporting
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT: FORM CARD */}
        <div className="bg-white/80 backdrop-blur-xl border border-green-100 shadow-xl rounded-3xl p-6 sm:p-10">

          <div className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none text-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none text-sm"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none text-sm"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none text-sm resize-none"
            />

            <button
              onClick={handleSubmit}
              className="w-full py-3.5 bg-emerald-900 text-white font-bold rounded-xl hover:bg-slate-900 transition-all shadow-lg"
            >
              Request Consultation →
            </button>

          </div>

          {/* Footer note */}
          <p className="text-xs text-slate-400 text-center mt-5">
            We never share your information. Secure & confidential.
          </p>

        </div>
      </div>
    </section>
  );
}

export default Contact;