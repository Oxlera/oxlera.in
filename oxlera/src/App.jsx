import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Divisions from './components/Divisions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import NatureSection from "./components/NatureSection";
import CarbonCalculator from './components/CarbonCalculator';
import ResearchPapers from './components/ResearchPapers';
// import CaseStudies from './components/CaseStudies';
import Blogs from './components/Blogs';
import Careers from "./components/Careers";



function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Divisions />
      <NatureSection />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      {/* 🌍 GLOBAL CANVAS (applies to ALL routes) */}
      <div className="relative bg-[#f7fbf8] overflow-hidden">

        {/* 🌿 SHARED AMBIENT LIGHT SYSTEM */}
        <div className="fixed inset-0 pointer-events-none z-0">

          {/* primary glow */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-600/20 blur-[160px] rounded-full" />

          {/* secondary glow */}
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-700/15 blur-[180px] rounded-full" />

          {/* subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #d1fae5 1px, transparent 1px), linear-gradient(to bottom, #d1fae5 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />
        </div>

        {/* 🌐 ACTUAL APP CONTENT */}
        <div className="relative z-10">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carbon-emission-calculator" element={<CarbonCalculator />} />
            <Route
              path="/publications/research-papers"
              element={<ResearchPapers />}
            />
            <Route
              path="/publications/blogs"
              element={<Blogs />}
            />

            <Route path="/careers" element={<Careers />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;