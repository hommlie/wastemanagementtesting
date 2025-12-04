import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import HomeScreen from "./components/HomeScreen";
import ServicesGrid from "./components/ServicesGrid";
import WasteStreams from "./components/WasteStreams";
import Footer from "./components/Footer";
import Advertisement from "./components/Advertisement";
import CaseStudies from "./components/CaseStudies";
import Certifications from "./components/Certifications";
import BannerSlider from "./components/BannerSlider";
import WasteStreamss from "./components/WasteStreamss";
import CircularEconomySection from "./components/CircularEconomySection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";

import InfraLoginSection from "./Pages/InfraLoginSection";

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        {/* ⭐ HOME PAGE (your full homepage layout) */}
        <Route
          path="/"
          element={
            <>
              <HomeScreen />
              <BannerSlider />
              <Advertisement />
              <WasteStreamss />
              <ServicesGrid />
              <WasteStreams />
              <CircularEconomySection />
              <CaseStudies />
              <Certifications />
              <TestimonialsSection />
              <FaqSection />
              <Footer />
            </>
          }
        />
        <Route path="/infralogin" element={<InfraLoginSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
