import React from 'react';
import logo from './../assets/logo.png';

function Footer() {
  const year = new Date().getFullYear();

  const platformLinks = [
    'Carbon Calculator', 'Emission Tracking', 'Scope 1–3 Analysis',
    'Carbon Dashboard', 'ESG Reporting Tools', 'Carbon Credit Registry'
  ];

  const solutionLinks = [
    'Enterprise Carbon Accounting', 'Net-Zero Roadmaps', 'Carbon Credit Trading',
    'Sustainability Consulting', 'Compliance Reporting (ESG/BRSR)', 'Climate Analytics'
  ];

  return (
    <footer className="bg-[#0d1210] text-white pt-14 sm:pt-20 pb-8 sm:pb-10 px-5 sm:px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">

          {/* Brand + Contact */}
          <div className="flex flex-col space-y-5 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Oxlera" className="h-8 sm:h-10 w-auto brightness-0 invert opacity-90" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tighter">OXLERA</span>
                <span className="text-[7px] sm:text-[8px] font-bold text-green-500/70 tracking-[0.25em] uppercase leading-none">Carbon Intelligence</span>
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
              <p>
                Carbon Intelligence Platform<br />
                India Operations Hub
              </p>
              <div className="space-y-1">
                <a href="mailto:Business@oxlera.com" className="block hover:text-green-400 transition-colors duration-300">
                  Business@oxlera.com
                </a>
                <p>+91 1800 572 xxxx</p>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div className="lg:pl-8">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-4 sm:mb-6">Platform</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {platformLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-4 sm:mb-6">Solutions</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col space-y-4 sm:space-y-5">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Receive insights on <span className="text-white font-semibold">carbon markets, ESG frameworks, and net-zero developments</span>
            </p>

            <div className="space-y-2 sm:space-y-2.5">
              <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-gray-600">
                Subscribe to Updates
              </label>

              <div className="flex items-center bg-white/5 rounded-xl p-1  focus-within:border-white/15 transition-all duration-300 focus-within:ring-0">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-transparent border-none focus:outline-none focus:ring-0 focus:shadow-none text-xs sm:text-sm pl-2.5 sm:pl-3 w-full text-gray-300 placeholder:text-gray-600"
                />
                <button className="bg-green-700 hover:bg-green-600 text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all duration-300 whitespace-nowrap active:scale-[0.97]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/6 w-full mb-6 sm:mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-gray-600 text-[10px] sm:text-xs">

          <p>© {year} Oxlera. All rights reserved.</p>

          {/* Socials */}
          <div className="flex items-center gap-4 sm:gap-6">
            {['LinkedIn', 'X', 'Instagram', 'GitHub'].map((social) => (
              <a key={social} href="#" className="hover:text-white transition-colors duration-300 font-medium">
                {social}
              </a>
            ))}
          </div>

          {/* Chat CTA */}
          <a
            href="#contact"
            className="group flex items-center gap-2 sm:gap-2.5 bg-white/5 border border-white/8 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-white/8 hover:border-white/12 transition-all duration-300"
          >
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-white/80 font-bold text-[10px] sm:text-xs group-hover:text-white transition-colors">Speak with Our Team</span>
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;