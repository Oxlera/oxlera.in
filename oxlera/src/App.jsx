import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
import BlogDetails from "./components/BlogDetails";



function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Divisions />
      <NatureSection />
      <Contact />
    </>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/carbon-emission-calculator" element={<CarbonCalculator />} />
          <Route path="/publications/research-papers" element={<ResearchPapers />} />
          <Route path="/publications/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>

      {/* GLOBAL CANVAS (applies to ALL routes) */}
      <div className="relative bg-[#f7fbf8] overflow-hidden">

        {/* SHARED AMBIENT LIGHT SYSTEM */}
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

        {/* ACTUAL APP CONTENT */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />

          <main className="flex-grow">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;