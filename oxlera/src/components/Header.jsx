import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "./../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState({
    section: null,
    child: null,
    subchild: null,
  });
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const whatWeDoItems = [
    {
      name: "Carbon Emission Calculator",
      type: "route",
      target: "/carbon-emission-calculator",
    },
    {
      name: "Carbon Capture Utilization and Storage",
      children: [
        {
          name: "Cement",
          type: "hash",
          target: "/CCUS/cement",
        },
        {
          name: "Steel",
          type: "hash",
          target: "/CCUS/steel",
        },
        {
          name: "Textile",
          type: "hash",
          target: "/CCUS/textile",
        },
      ],
    },
  ];

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
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
      const y = window.scrollY;

      setScrolled(y > 40);

      if (y > lastScrollY && y > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(y);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${visible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <header
        className={`transition-all duration-500 ${scrolled
          ? "bg-white/70 backdrop-blur-xl py-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 sm:px-8 md:px-10">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Logo"
              className="h-9 sm:h-10 transition-transform duration-500 group-hover:rotate-6"
            />

            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950">
              OXLERA
            </span>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-2">

            {/* Features */}
            <button
              onClick={() => goToSection("features")}
              className="px-5 py-2 text-[16px] font-semibold text-slate-600 hover:text-emerald-900 hover:bg-emerald-50/60 rounded-xl transition-all"
            >
              Features
            </button>

            {/* What We Do */}
            <div className="relative group">
              <button
                className="px-5 py-2 text-[16px] font-semibold text-slate-600 hover:text-emerald-900 hover:bg-emerald-50/60 rounded-xl transition-all flex items-center gap-1"
              >
                What We Do

                <span className="text-xs group-hover:translate-y-[2px] transition-transform">
                  ▾
                </span>
              </button>

              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="w-72 bg-white/80 backdrop-blur-xl rounded-2xl border border-emerald-100/40 shadow-xl p-2">

                  {whatWeDoItems.map((item) => (
                    <div
                      key={item.name}
                      className="relative group/sub"
                    >
                      {!item.children ? (
                        <button
                          onClick={() => handleServiceClick(item)}
                          className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-all"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <>
                          {/* Parent */}
                          <div
                            className="flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-600 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-all cursor-pointer"
                          >
                            <span>{item.name}</span>
                            <span>›</span>
                          </div>

                          {/* Submenu */}
                          <div className="absolute top-0 left-full ml-2 w-56 bg-white/90 backdrop-blur-xl rounded-2xl border border-emerald-100/40 shadow-xl p-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">

                            {item.children.map((child) => (
                              <button
                                key={child.name}
                                onClick={() => handleServiceClick(child)}
                                className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-all"
                              >
                                {child.name}
                              </button>
                            ))}

                          </div>
                        </>
                      )}
                    </div>
                  ))}

                </div>
              </div>
            </div>

            {/* Reporting */}
            <button
              onClick={() => goToSection("metrics")}
              className="px-5 py-2 text-[16px] font-semibold text-slate-600 hover:text-emerald-900 hover:bg-emerald-50/60 rounded-xl transition-all"
            >
              Reporting
            </button>

            {/* Publications */}
            <div className="relative group">
              <button
                className="px-5 py-2 text-[16px] font-semibold text-slate-600 hover:text-emerald-900 hover:bg-emerald-50/60 rounded-xl transition-all flex items-center gap-1"
              >
                Publications

                <span className="text-xs group-hover:translate-y-[2px] transition-transform">
                  ▾
                </span>
              </button>

              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="w-60 bg-white/80 backdrop-blur-xl rounded-2xl border border-emerald-100/40 shadow-xl p-2">

                  <Link
                    to="/publications/research-papers"
                    className="block px-4 py-3 text-sm font-medium text-slate-600 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-all"
                  >
                    Research Papers
                  </Link>

                  <Link
                    to="/publications/case-studies"
                    className="block px-4 py-3 text-sm font-medium text-slate-600 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-all"
                  >
                    Case Studies
                  </Link>

                  <Link
                    to="/publications/blogs"
                    className="block px-4 py-3 text-sm font-medium text-slate-600 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-all"
                  >
                    Blogs
                  </Link>

                </div>
              </div>
            </div>

            {/* Careers */}
            <Link
              to="/careers"
              className="px-5 py-2 text-[16px] font-semibold text-slate-600 hover:text-emerald-900 hover:bg-emerald-50/60 rounded-xl transition-all"
            >
              Careers
            </Link>

          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">

            {/* Desktop CTA */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Business@oxlera.com&su=Inquiry%20about%20Oxlera%20Services&body=Hello%20Oxlera%20Team,%0A%0AI%20would%20like%20to%20learn%20more%20about..."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex px-6 py-3 text-sm font-bold text-white bg-emerald-900 rounded-full hover:bg-black transition-all shadow-lg"
            >
              Contact Us
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1 rounded-full bg-white/60 backdrop-blur-xl border border-emerald-100"
            >
              <span
                className={`w-5 h-[2px] bg-slate-900 transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
              />

              <span
                className={`w-5 h-[2px] bg-slate-900 transition-all ${isOpen ? "opacity-0" : ""
                  }`}
              />

              <span
                className={`w-5 h-[2px] bg-slate-900 transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
              />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-emerald-100 shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-2">

            {/* Features */}
            <button
              onClick={() => {
                goToSection("features");
                setIsOpen(false);
              }}
              className="py-3 text-left font-medium text-slate-700"
            >
              Features
            </button>

            {/* What We Do */}
            <div className="flex flex-col">

              <button
                onClick={() =>
                  setOpenMobileMenu((prev) => ({
                    ...prev,
                    section:
                      prev.section === "whatwedo"
                        ? null
                        : "whatwedo",
                  }))
                }
                className="py-3 flex items-center justify-between font-semibold text-slate-800"
              >
                <span>What We Do</span>

                <span
                  className={`transition-transform duration-300 ${openMobileMenu.section === "whatwedo"
                      ? "rotate-180"
                      : ""
                    }`}
                >
                  ▾
                </span>
              </button>

              {openMobileMenu.section === "whatwedo" && (
                <div className="flex flex-col pb-2">

                  {whatWeDoItems.map((item) => (
                    <div key={item.name} className="flex flex-col">

                      {!item.children ? (
                        <button
                          onClick={() => handleServiceClick(item)}
                          className="pl-4 py-2 text-sm text-left text-slate-600"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <>
                          {/* LEVEL 1 */}
                          <button
                            onClick={() =>
                              setOpenMobileMenu((prev) => ({
                                ...prev,
                                child:
                                  prev.child === item.name
                                    ? null
                                    : item.name,
                              }))
                            }
                            className="pl-4 py-2 text-sm font-medium text-left text-slate-700 flex items-center justify-between"
                          >
                            <span>{item.name}</span>

                            <span
                              className={`transition-transform duration-300 ${openMobileMenu.child === item.name
                                  ? "rotate-90"
                                  : ""
                                }`}
                            >
                              ›
                            </span>
                          </button>

                          {openMobileMenu.child === item.name && (
                            <div className="flex flex-col pl-4">

                              {item.children.map((child) => (
                                <div
                                  key={child.name}
                                  className="flex flex-col"
                                >

                                  {!child.children ? (
                                    <button
                                      onClick={() => handleServiceClick(child)}
                                      className="pl-4 py-2 text-sm text-left text-slate-500 hover:text-emerald-700 transition-all"
                                    >
                                      {child.name}
                                    </button>
                                  ) : (
                                    <>
                                      {/* LEVEL 2 */}
                                      <button
                                        onClick={() =>
                                          setOpenMobileMenu((prev) => ({
                                            ...prev,
                                            subchild:
                                              prev.subchild === child.name
                                                ? null
                                                : child.name,
                                          }))
                                        }
                                        className="pl-4 py-2 text-sm text-left text-slate-600 flex items-center justify-between"
                                      >
                                        <span>{child.name}</span>

                                        <span
                                          className={`transition-transform duration-300 ${openMobileMenu.subchild === child.name
                                              ? "rotate-90"
                                              : ""
                                            }`}
                                        >
                                          ›
                                        </span>
                                      </button>

                                      {openMobileMenu.subchild === child.name && (
                                        <div className="flex flex-col pl-4">

                                          {child.children.map((subchild) => (
                                            <button
                                              key={subchild.name}
                                              onClick={() =>
                                                handleServiceClick(subchild)
                                              }
                                              className="pl-4 py-2 text-sm text-left text-slate-500 hover:text-emerald-700 transition-all"
                                            >
                                              {subchild.name}
                                            </button>
                                          ))}

                                        </div>
                                      )}
                                    </>
                                  )}

                                </div>
                              ))}

                            </div>
                          )}
                        </>
                      )}

                    </div>
                  ))}

                </div>
              )}

            </div>

            {/* Reporting */}
            <button
              onClick={() => {
                goToSection("metrics");
                setIsOpen(false);
              }}
              className="py-3 text-left font-medium text-slate-700"
            >
              Reporting
            </button>

            {/* Publications */}
            <div className="flex flex-col">

              <button
                onClick={() =>
                  setOpenMobileMenu(
                    openMobileMenu === "publications"
                      ? null
                      : "publications"
                  )
                }
                className="py-3 flex items-center justify-between font-semibold text-slate-800"
              >
                <span>Publications</span>

                <span
                  className={`transition-transform duration-300 ${openMobileMenu === "publications"
                    ? "rotate-180"
                    : ""
                    }`}
                >
                  ▾
                </span>
              </button>

              {openMobileMenu === "publications" && (
                <div className="flex flex-col pb-2">

                  <Link
                    to="/publications/research-papers"
                    onClick={() => setIsOpen(false)}
                    className="pl-4 py-2 text-sm text-slate-600 hover:text-emerald-700 transition-all"
                  >
                    Research Papers
                  </Link>
                  <Link
                    to="/publications/blogs"
                    onClick={() => setIsOpen(false)}
                    className="pl-4 py-2 text-sm text-slate-600 hover:text-emerald-700 transition-all"
                  >
                    Blogs
                  </Link>

                </div>
              )}

            </div>

            {/* Careers */}
            <Link
              to="/careers"
              onClick={() => setIsOpen(false)}
              className="py-3 text-left font-medium text-slate-700"
            >
              Careers
            </Link>

            {/* Mobile CTA */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Business@oxlera.com&su=Inquiry&body=Hello%20Oxlera%20Team,"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-3 text-center text-white bg-emerald-900 rounded-xl font-semibold"
            >
              Contact Us
            </a>

          </div>
        </div>
      )}
    </div>
  );
}

export default Header;