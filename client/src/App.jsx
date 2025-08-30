import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import AcRoyalSuite from './Pages/Rooms/AC_Royal_Suite';
import SuperDeluxe from './Pages/Rooms/Super_Deluxe';
import PremiumLake from './Pages/Rooms/Premium_Lake_View';
import NageenSuite from './Pages/Rooms/Nageen_Suite_Room';
import Tours from './Pages/Tours/Tours';
import Gulmarg from './Pages/Tours/Gulmarg';
import Pahalgam from './Pages/Tours/Pahalgam';
import Sonmarg from './Pages/Tours/Sonmarg';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,        // animation duration (ms)
      offset: 100,           // offset (px) from the trigger point
      easing: "ease-in-out", // easing
      once: false,           // 👈 allow repeat on scroll
      mirror: true,          // 👈 animate out while scrolling back up
    });
    AOS.refresh(); // 👈 helps when route/page changes
  }, []);
  return (
    <>
      <Navbar />
      {/* <Route path="/" element={<Navbar />} /> */}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Houseboats */}
        <Route path="/ac-royal-suite" element={<AcRoyalSuite />} />
        <Route path="/super-deluxe" element={<SuperDeluxe />} />
        <Route path="/premium-lake" element={<PremiumLake />} />
        <Route path="/nageen-suite" element={<NageenSuite />} />

        {/* Tours */}
        <Route path="/tour" element={<Tours />} />
        <Route path="/tour/gulmarg" element={<Gulmarg />} />
        <Route path="/tour/pahalgam" element={<Pahalgam />} />
        <Route path="/tour/sonmarg" element={<Sonmarg />} />

        {/* About */}
        <Route path="/about" element={<About />} />


        <Route path="/blog" element={<Blog />} />
        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App