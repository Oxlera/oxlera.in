import React, { useState, useEffect } from 'react';
import logo from './../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 1. Background Change Logic (Glass effect trigger)
      setScrolled(currentScrollY > 50);

      // 2. Hide on Scroll Down, Show on Scroll Up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      
      <header 
        className={`transition-all duration-500 ${
          scrolled 
            // Removed border-b and shadow-black to eliminate the "dark line"
            ? 'bg-white/90 backdrop-blur-2xl py-3 shadow-md shadow-green-900/5' 
            : 'bg-white/50 backdrop-blur-md py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          
          {/* Enhanced Brand */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Oxlera Logo" 
                  className="h-11 w-auto transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 via-green-50/20 to-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tighter text-gray-900 leading-none group-hover:text-green-800 transition-colors">
                  OXLERA
                </span>
                <span className="text-[9px] font-extrabold text-green-700 tracking-[0.25em] uppercase mt-1 opacity-80">
                  ESG Ready
                </span>
              </div>
            </a>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-gradient-to-r from-gray-50 via-white to-gray-50 p-1.5 rounded-full border border-gray-200/80 backdrop-blur-xl shadow-sm">
            {[
              { name: 'Features', href: '#features' },
              { name: 'How it works', href: '#how' },
              { name: 'Reporting', href: '#metrics' }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="relative px-6 py-2.5 text-sm font-bold text-gray-600 rounded-full transition-all duration-300 hover:text-green-800 hover:bg-white hover:shadow-md group"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
              </a>
            ))}
          </nav>

          {/* Enhanced Action Area */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden sm:flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-green-900 via-green-800 to-green-900 rounded-full hover:from-black hover:via-gray-900 hover:to-black transition-all duration-300 hover:shadow-xl hover:shadow-green-900/30 active:scale-95 group"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-50 text-gray-900 focus:outline-none shadow-sm hover:shadow-md transition-all active:scale-95 border border-gray-200/50"
            >
              <div className="relative w-5 h-4">
                <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : 'top-0'}`} />
                <span className={`absolute h-0.5 w-5 bg-current top-2 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : 'top-4'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Overlay */}
        <div 
          className={`fixed inset-0 bg-gradient-to-br from-white via-green-50/30 to-white backdrop-blur-3xl transition-all duration-500 md:hidden ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
          style={{ top: scrolled ? '60px' : '88px' }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-10 pb-32">
            {['Features', 'How it works', 'Reporting'].map((item, i) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                onClick={() => setIsOpen(false)}
                className="relative text-4xl font-black text-gray-900 hover:text-green-700 transition-all duration-300 group"
                style={{ 
                  transitionDelay: `${i * 100}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-20px)'
                }}
              >
                {item}
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-500 rounded-full" />
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;