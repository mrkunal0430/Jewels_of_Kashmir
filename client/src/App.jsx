import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy load the page components
const Home = lazy(() => import('./Pages/Home'));
const AcRoyalSuite = lazy(() => import('./Pages/Rooms/AC_Royal_Suite'));
const SuperDeluxe = lazy(() => import('./Pages/Rooms/Super_Deluxe'));
const PremiumLake = lazy(() => import('./Pages/Rooms/Premium_Lake_View'));
const NageenSuite = lazy(() => import('./Pages/Rooms/Nageen_Suite_Room'));
const Tours = lazy(() => import('./Pages/Tours/Tours'));
const Gulmarg = lazy(() => import('./Pages/Tours/Gulmarg'));
const Pahalgam = lazy(() => import('./Pages/Tours/Pahalgam'));
const Sonmarg = lazy(() => import('./Pages/Tours/Sonmarg'));
const About = lazy(() => import('./Pages/About'));
const Blog = lazy(() => import('./Pages/Blog/Blog'));
const Contact = lazy(() => import('./Pages/Contact'));
const NageenLake = lazy(() => import('./Pages/Blog/NigeenLake'));
const ThingsToDo = lazy(() => import('./Pages/Blog/ThingsToDo'));
const KashmiriCuisine = lazy(() => import('./Pages/Blog/KashmiriCuisine'));
const KashmirGems = lazy(() => import('./Pages/Blog/KashmirGems'));
const KashmirGardens = lazy(() => import('./Pages/Blog/KashmirGarden'));


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
      <Suspense fallback={<div>Loading...</div>}>
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

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/nigeen-lake" element={<NageenLake />} />
          <Route path="/blog/things-to-do-in-a-houseboat-stay" element={<ThingsToDo />} />
          <Route path="/blog/kashmiri-cuisine" element={<KashmiriCuisine />} />
          <Route path="/blog/kashmir-gems" element={<KashmirGems />} />
          <Route path="/blog/kashmir-gardens" element={<KashmirGardens />} />


          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App