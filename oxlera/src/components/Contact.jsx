import React from 'react';

function Contact() {
  return (
    <section id="contact" className="max-w-[1100px] mx-auto py-24 px-6">

      <div className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-[2.5rem] px-8 md:px-16 py-20 md:py-24">

        {/* Softer Background (reduced intensity) */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-green-600/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-green-700/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/15">
            <span className="h-2 w-2 rounded-full bg-green-300 animate-pulse" />
            <span className="text-green-200 font-bold tracking-[0.2em] uppercase text-[10px]">
              Carbon Platform Support
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Start your{' '}
            <span className="text-green-300 font-serif italic font-normal">
              carbon journey
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-base md:text-lg text-green-50/80 font-medium leading-relaxed max-w-2xl mx-auto">
            Share your organization details and we’ll help you build a complete
            carbon measurement, reduction, and ESG reporting roadmap.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Primary CTA */}
            <a
              href="mailto:contact@offsetgo.com?subject=Carbon Assessment Request"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-900 font-bold rounded-xl hover:bg-green-50 transition shadow-lg active:scale-95"
            >
              Request Carbon Assessment
              <span>→</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="mailto:contact@offsetgo.com?subject=ESG Reporting Inquiry"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition"
            >
              ESG Reporting Demo
            </a>

          </div>

          {/* Trust Strip (simplified) */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-6 text-green-200/70 text-xs font-semibold tracking-wide uppercase">

              <span>⚡ 24h Response</span>
              <span className="hidden sm:inline">•</span>
              <span>📊 Scope 1–3 Coverage</span>
              <span className="hidden sm:inline">•</span>
              <span>🌍 ESG Ready</span>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;