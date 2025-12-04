import React from "react";
import MainHeader from "./components/MainHeader";
import HomeScreen from "./components/HomeScreen";
import ServicesGrid from "./components/ServicesGrid";
import WasteStreams from "./components/WasteStreams";
import Footer from "./components/Footer";
import Advertisement from "./components/Advertisement"
import CaseStudies from "./components/CaseStudies";
import Certifications from "./components/Certifications";
import BannerSlider from "./components/BannerSlider";
import WasteStreamss from "./components/WasteStreamss";
import CircularEconomySection from "./components/CircularEconomySection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
function App() {
  return (
    <div className="relative min-h-screen">
      <MainHeader />
      <main style={{ paddingTop: "0px" }}>
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
      </main>
    </div>
  );
}

export default App;
