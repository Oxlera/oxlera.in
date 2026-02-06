import React from 'react';

function Contact() {
  return (
    <section id="contact" className="max-w-[1100px] mx-auto py-24 px-6">
      <div className="relative overflow-hidden bg-green-900 rounded-[2.5rem] px-8 py-16 md:py-24 text-center">
        
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-800 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-700 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative z-10">
          {/* Subtle Label */}
          <span className="text-green-300 font-bold tracking-widest uppercase text-xs">
            Start a conversation
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Let’s grow <span className="text-green-400 font-serif italic font-normal">together.</span>
          </h2>
          
          <p className="mt-6 text-lg md:text-xl text-green-100/80 max-w-xl mx-auto font-medium leading-relaxed">
            Ready to transform your workspace? Reach out today for a consultation or a custom quote.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@oxlera.in"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-green-900 font-bold rounded-2xl hover:bg-green-50 transition-all duration-300 shadow-xl shadow-black/10 active:scale-95"
            >
              <span>Email our team</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Quick response badge */}
          <p className="mt-8 text-green-300/60 text-sm font-medium">
            Typically responds within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;