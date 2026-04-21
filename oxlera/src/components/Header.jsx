import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from './../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const serviceItems = [
    { name: 'Maintenance & Support', type: 'hash', target: 'maintenance' },
    { name: 'Carbon Analysis', type: 'route', target: '/carbon-analysis' },
  ];

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (item) => {
    setIsOpen(false);
    if (item.type === "hash") {
      goToSection(item.target);
    } else {
      navigate(item.target);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
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

      <header className={`transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-2xl py-4 shadow-md shadow-green-900/5'
          : 'bg-transparent py-8'
      }`}>

        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Logo"
              className="h-10 transition-all duration-500 group-hover:rotate-6"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 tracking-tighter">OXLERA</span>
              <span className="text-[8px] font-black text-green-700 tracking-[0.3em] uppercase leading-none">ESG Ready</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <button onClick={() => goToSection("features")} className="px-5 py-2 text-sm font-bold text-gray-600 hover:text-green-800 transition-colors">
              Features
            </button>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-5 py-2 text-sm font-bold text-gray-600 group-hover:text-green-800 transition-colors">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* The Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {/* Subtle Arrow */}
                <div className="ml-6 w-3 h-3 bg-white border-t border-l border-green-100 rotate-45 translate-y-1.5 z-10"></div>
                
                <div className="w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-green-900/10 border border-green-50 overflow-hidden p-2">
                  {serviceItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleServiceClick(item)}
                      className="w-full text-left px-4 py-3 text-sm font-bold text-gray-600 hover:bg-green-50 hover:text-green-800 rounded-xl transition-all"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => goToSection("metrics")} className="px-5 py-2 text-sm font-bold text-gray-600 hover:text-green-800 transition-colors">
              Reporting
            </button>

            <Link to="/blogs" className="px-5 py-2 text-sm font-bold text-gray-600 hover:text-green-800 transition-colors">
              Blogs
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:flex px-8 py-3 text-sm font-bold text-white bg-green-900 rounded-full hover:bg-black transition-all shadow-lg shadow-green-900/10 hover:shadow-none"
            >
              Contact Us
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-gray-50 border border-gray-200"
            >
              <span className={`w-5 h-0.5 bg-gray-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-900 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white/98 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`} style={{ top: scrolled ? '64px' : '88px', height: 'calc(100vh - 88px)' }}>

          <nav className="flex flex-col items-start px-10 pt-10 gap-8">
            <button className="text-3xl font-black text-gray-900" onClick={() => { goToSection("features"); setIsOpen(false); }}>Features</button>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-black text-green-700 uppercase tracking-widest">Our Services</span>
              <button className="text-2xl font-bold text-gray-600" onClick={() => handleServiceClick(serviceItems[0])}>Maintenance</button>
              <button className="text-2xl font-bold text-gray-600" onClick={() => handleServiceClick(serviceItems[1])}>Carbon Analysis</button>
            </div>
            <button className="text-3xl font-black text-gray-900" onClick={() => { goToSection("metrics"); setIsOpen(false); }}>Reporting</button>
            <Link className="text-3xl font-black text-gray-900" to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
          </nav>
        </div>

      </header>
    </div>
  );
}

export default Header;