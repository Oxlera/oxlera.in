import React from 'react';
import logo from './../assets/logo.png'; 

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-[0.02]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23346516' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v-4H4v4H0v2h4v4h2v-4h4v-2H6zM36 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-[1100px] mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          {/* Enhanced Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter text-gray-900 group cursor-pointer mb-6">
              <div className="relative">
                <img src={logo} alt="Oxlera" className="h-10 w-auto transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110" />
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 via-green-500/20 to-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="group-hover:text-green-800 transition-colors">OXLERA</span>
            </div>
            
            <p className="text-gray-600 text-base leading-relaxed max-w-md font-medium mb-8">
              A practical indoor landscaping company with a long-term direction:{' '}
              <span className="text-gray-900 font-bold">carbon markets</span> and{' '}
              <span className="text-gray-900 font-bold">measurable sustainability</span>.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="group h-10 w-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center hover:from-green-600 hover:to-green-700 hover:border-green-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              
              <a 
                href="#" 
                className="group h-10 w-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center hover:from-green-600 hover:to-green-700 hover:border-green-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              <a 
                href="#" 
                className="group h-10 w-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center hover:from-green-600 hover:to-green-700 hover:border-green-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Enhanced Navigation Column */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-6 flex items-center gap-2">
              <div className="h-px w-4 bg-green-600" />
              Solutions
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="group text-sm font-bold text-gray-600 hover:text-green-800 transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Modular Systems
                </a>
              </li>
              <li>
                <a href="#how" className="group text-sm font-bold text-gray-600 hover:text-green-800 transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  The Process
                </a>
              </li>
              <li>
                <a href="#contact" className="group text-sm font-bold text-gray-600 hover:text-green-800 transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  ESG Reporting Pack
                </a>
              </li>
              <li>
                <a href="#contact" className="group text-sm font-bold text-gray-600 hover:text-green-800 transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Site Visit
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Contact/Legal Column */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-6 flex items-center gap-2">
              <div className="h-px w-4 bg-green-600" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contact@oxlera.in" 
                  className="group text-sm font-bold text-gray-600 hover:text-green-800 flex items-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  contact@oxlera.in
                </a>
              </li>
              <li>
                <a href="#" className="group text-sm font-bold text-gray-600 hover:text-green-800 transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="group text-sm font-bold text-gray-600 hover:text-green-800 transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.25em]">
            © {year} Oxlera Private Limited. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {/* Enhanced Status Badge */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200 group-hover:border-green-400 transition-all duration-300 group-hover:shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600 shadow-lg shadow-green-600/50"></span>
                </span>
                <span className="text-[10px] font-black text-green-800 uppercase tracking-widest">
                  System Active • ESG Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;