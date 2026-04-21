import React from 'react';

function Contact() {
  return (
    <section id="contact" className="max-w-[1100px] mx-auto py-24 px-6">

      <div className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-slate-900 rounded-3xl px-8 md:px-16 py-20 md:py-24">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-green-500/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-emerald-600/8 rounded-full blur-[100px]" />
        </div>

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-md rounded-full border border-white/10">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-200/80 font-bold tracking-[0.2em] uppercase text-[10px]">
              Carbon Platform Support
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-10 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Start your{' '}
            <span className="text-green-300 font-serif italic font-normal">
              carbon journey
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-base md:text-lg text-green-100/60 font-medium leading-relaxed max-w-2xl mx-auto">
            Share your organization details and we'll help you build a complete
            carbon measurement, reduction, and ESG reporting roadmap.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">

            <a
              href="mailto:contact@oxlera.com?subject=Carbon Assessment Request"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-900 font-bold rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg shadow-black/10 active:scale-[0.97]"
            >
              Request Carbon Assessment
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>

            <a
              href="mailto:contact@oxlera.com?subject=ESG Reporting Inquiry"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-white/15 text-white/90 font-semibold rounded-xl hover:bg-white/8 hover:border-white/25 transition-all duration-300"
            >
              ESG Reporting Demo
            </a>

          </div>

          {/* Trust Strip */}
          <div className="mt-14 pt-8 border-t border-white/8">
            <div className="flex flex-wrap justify-center gap-8 text-green-200/50 text-xs font-semibold tracking-wide uppercase">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
                24h Response
              </span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l3-3 4 4 6-6" />
                </svg>
                Scope 1–3 Coverage
              </span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                ESG Ready
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;