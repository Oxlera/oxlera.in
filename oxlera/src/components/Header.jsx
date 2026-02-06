import React, { useState, useEffect } from 'react';
import logo from './../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-white py-5'
      } border-b border-gray-100`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        
        {/* Brand/Logo - Subtle Scale on Hover */}
        <a href="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="Oxlera Logo" 
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-green-800 transition-colors">
            Oxlera
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { name: 'Features', href: '#features' },
            { name: 'How it works', href: '#how' }
          ].map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative text-sm font-semibold text-gray-500 transition-colors hover:text-green-800 group"
            >
              {link.name}
              {/* Animated Underline Effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Premium CTA Button */}
          <a 
            href="#contact" 
            className="px-5 py-2.5 text-sm font-bold text-white bg-green-800 rounded-xl 
                       hover:bg-green-900 hover:-translate-y-0.5 hover:shadow-lg 
                       hover:shadow-green-900/20 active:scale-95 transition-all duration-300"
          >
            Request a Visit
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none text-gray-600"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Slide-down logic */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-50`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          <a href="#features" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-600 hover:text-green-800">Features</a>
          <a href="#how" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-600 hover:text-green-800">How it works</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-bold text-green-800 border-t pt-4 border-gray-100">Request a Visit</a>
        </div>
      </div>
    </header>
  );
}

export default Header;