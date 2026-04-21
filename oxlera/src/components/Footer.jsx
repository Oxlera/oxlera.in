import React from 'react';
import logo from './../assets/logo.png';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand + Contact */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="oxlera" className="h-12 w-auto brightness-0 invert" />
              <span className="text-2xl font-bold tracking-tighter">oxlera</span>
            </div>

            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
              <h4 className="text-white font-bold text-base">Contact Us</h4>

              <p>
                Carbon Intelligence Platform<br />
                India Operations Hub
              </p>

              <div className="space-y-1">
                <p className="hover:text-green-400 transition-colors cursor-pointer">
                  support@oxlera.com
                </p>
                <p>+91 1800 572 xxxx</p>
              </div>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="lg:pl-10">
            <h4 className="text-white font-bold mb-6 text-base">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Carbon Calculator</li>
              <li className="hover:text-white transition-colors cursor-pointer">Emission Tracking</li>
              <li className="hover:text-white transition-colors cursor-pointer">Scope 1–3 Analysis</li>
              <li className="hover:text-white transition-colors cursor-pointer">Carbon Dashboard</li>
              <li className="hover:text-white transition-colors cursor-pointer">ESG Reporting Tools</li>
              <li className="hover:text-white transition-colors cursor-pointer">Carbon Credit Registry</li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="lg:text-center">
            <h4 className="text-white font-bold mb-6 text-base">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Enterprise Carbon Accounting</li>
              <li className="hover:text-white transition-colors cursor-pointer">Net-Zero Roadmaps</li>
              <li className="hover:text-white transition-colors cursor-pointer">Carbon Credit Trading</li>
              <li className="hover:text-white transition-colors cursor-pointer">oxlera Project Access</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sustainability Consulting</li>
              <li className="hover:text-white transition-colors cursor-pointer">Compliance Reporting (ESG/BRSR)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Climate Analytics</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col space-y-6">
            <p className="text-sm text-gray-400 leading-snug">
              Get insights on <span className="text-white font-bold">carbon markets, ESG, and net-zero trends</span>
            </p>

            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                Subscribe to updates *
              </label>

              <div className="relative flex items-center bg-[#2a2a2a] rounded-full p-1 border border-gray-800 focus-within:border-gray-600 transition-all">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="bg-transparent border-none focus:ring-0 text-sm pl-4 w-full text-gray-200 placeholder:text-gray-600"
                />
                <button className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 w-full mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-xs">

          <p>© {year} oxlera. All rights reserved.</p>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>

          {/* Chat */}
          <div className="bg-black border border-gray-800 px-5 py-3 rounded-2xl flex items-center gap-3 cursor-pointer hover:bg-[#111] transition-all group">
            <span className="text-white font-bold text-sm">Let's Talk Carbon</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;