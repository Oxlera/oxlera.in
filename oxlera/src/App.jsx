import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Divisions from './components/Divisions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

import CarbonCalculator from './components/CarbonCalculator';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Divisions />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Main landing page */}
        <Route path="/" element={<HomePage />} />

        {/* Carbon calculator page */}
        <Route path="/carbon-analysis" element={<CarbonCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;