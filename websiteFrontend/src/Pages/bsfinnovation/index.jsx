import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTrashAlt,
  FaFlask,
  FaLeaf,
  FaCube,
  FaStar,
  FaCheckCircle,
  FaCloud,
  FaTemperatureLow,
} from "react-icons/fa";

/* ================================================================
   STEP 1 — YOUR EXISTING HERO SECTION
================================================================ */

const BsfInnovation = () => {
  const steps = [
    {
      day: "Day 0",
      title: "Organic Waste Input",
      desc: "Pre-sorted organic waste materials including food scraps, agricultural residue, and biodegradable materials enter the processing facility.",
      output: "1000 kg waste",
      icon: <FaTrashAlt className="text-white text-3xl" />,
    },
    {
      day: "Day 1–2",
      title: "BSF Larvae Introduction",
      desc: "Black Soldier Fly larvae are introduced into the organic substrate in climate-controlled chambers optimized for rapid consumption.",
      output: "50,000 larvae",
      icon: <FaFlask className="text-white text-3xl" />,
    },
    {
      day: "Day 3–10",
      title: "Active Decomposition",
      desc: "Larvae actively consume organic matter, converting it through biological processes into protein-rich biomass and valuable byproducts.",
      output: "95% conversion",
      icon: <FaLeaf className="text-white text-3xl" />,
    },
    {
      day: "Day 11–12",
      title: "Protein & Oil Extraction",
      desc: "Mature larvae are harvested and processed to extract high-quality protein meal and oil for animal feed and industrial applications.",
      output: "200 kg protein",
      icon: <FaCube className="text-white text-3xl" />,
    },
    {
      day: "Day 13–14",
      title: "Frass Collection",
      desc: "Nutrient-rich frass (larvae excrement) is collected and processed into premium organic fertilizer with superior soil amendment properties.",
      output: "300 kg fertilizer",
      icon: <FaStar className="text-white text-3xl" />,
    },
  ];

  const facilityTabs = [
    {
      title: "Larvae Chambers",
      description:
        "Climate-controlled breeding and growth chambers where Black Soldier Fly larvae thrive in optimal conditions.",
      img: "/facility1.jpg",
      temp: "27–30°C",
      humidity: "60–70%",
      features: [
        "Automated climate control",
        "Optimal growth conditions",
        "Real-time monitoring",
        "Biosecurity protocols",
      ],
    },
    {
      title: "Feeding Systems",
      description:
        "Automated feeding trays distribute pre-processed organic waste to larvae chambers efficiently.",
      img: "/facility2.jpg",
      temp: "27–30°C",
      humidity: "55–65%",
      features: [
        "Automated feeding",
        "Even waste distribution",
        "Zero manual handling",
      ],
    },
    {
      title: "Processing Units",
      description:
        "State-of-the-art extraction units separate larvae biomass into protein, oil, and fertilizer.",
      img: "/facility3.jpg",
      temp: "25–28°C",
      humidity: "50–60%",
      features: [
        "High-yield extraction",
        "Low energy consumption",
        "Advanced separation",
      ],
    },
    {
      title: "Quality Control Lab",
      description:
        "Advanced laboratory units conduct continuous testing on protein, oil quality, and microbial safety.",
      img: "/facility4.jpg",
      temp: "22–25°C",
      humidity: "45–55%",
      features: [
        "Microbial safety testing",
        "Nutritional quality analysis",
        "Regulatory compliance",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative w-full min-h-[650px] bg-black flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/bsfhome.jpeg')" }}
        ></div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between px-8 lg:px-20 py-20">
          <div className="w-full lg:w-2/3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-green-200 px-4 py-1 rounded-full text-sm font-medium w-fit mb-6">
              <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
              Biotechnology Innovation
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Black Soldier Fly <br />
              Processing <br />
              Technology
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12">
              Revolutionary biotechnology that transforms organic waste into
              valuable protein, oil, and organic fertilizer through nature's most
              efficient decomposer.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="bg-white/10 border border-white/20 backdrop-blur-xl text-white p-6 rounded-xl w-40 text-center">
                <h3 className="text-3xl font-extrabold text-lime-300">95%</h3>
                <p className="text-sm mt-2">Waste Conversion</p>
              </div>

              <div className="bg-white/10 border border-white/20 backdrop-blur-xl text-white p-6 rounded-xl w-40 text-center">
                <h3 className="text-3xl font-extrabold text-lime-300">14 Days</h3>
                <p className="text-sm mt-2">Processing Cycle</p>
              </div>

              <div className="bg-white/10 border border-white/20 backdrop-blur-xl text-white p-6 rounded-xl w-40 text-center">
                <h3 className="text-3xl font-extrabold text-lime-300">Zero</h3>
                <p className="text-sm mt-2">Landfill Waste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPLETE LIFECYCLE TRANSFORMATION (ANIMATED)
      ====================================================== */}
      <section className="w-full bg-[#f5f8f3] py-20 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-2 text-green-700 font-semibold mb-3">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            Circular Process
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Complete Lifecycle Transformation
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            From organic waste to valuable resources in just 14 days through nature's most efficient biological process.
          </p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 w-full lg:w-1/5 relative hover:scale-105 transition duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-b from-green-600 to-green-400 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                {step.icon}
              </div>

              <p className="text-green-700 font-semibold text-sm">{step.day}</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">{step.title}</h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{step.desc}</p>

              <div className="mt-4 w-full border-t border-gray-200"></div>

              <p className="text-green-700 font-semibold mt-4 text-sm">
                Output: <span className="font-bold">{step.output}</span>
              </p>

              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-1 bg-green-400 rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          INSIDE OUR PROCESSING FACILITY (NEW + ANIMATED)
      ====================================================== */}

      <section className="w-full bg-white py-20 px-6 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Inside Our Processing Facility
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Explore our state-of-the-art biotechnology facility with transparent cutaway views of each processing zone
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT TABS */}
          <div className="space-y-6">
            {facilityTabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer p-6 rounded-xl shadow-md border transition ${
                  activeTab === index
                    ? "bg-green-800 text-white border-green-900"
                    : "bg-white border-gray-200 hover:bg-gray-50"
                }`}
              >
                <h3 className="text-xl font-bold">{tab.title}</h3>
                <p className="text-sm mt-2 opacity-80 line-clamp-2">
                  {tab.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={facilityTabs[activeTab].img}
                alt="facility"
                className="w-full h-80 object-cover"
              />

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-gray-900">
                  {facilityTabs[activeTab].title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {facilityTabs[activeTab].description}
                </p>

                {/* Temperature + Humidity */}
                <div className="grid grid-cols-2 mt-8 gap-4">
                  <div className="bg-gray-100 p-4 rounded-xl border">
                    <FaTemperatureLow className="text-red-500 text-xl mb-1" />
                    <p className="text-sm text-gray-500">Temperature</p>
                    <p className="font-bold text-gray-900">
                      {facilityTabs[activeTab].temp}
                    </p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl border">
                    <FaCloud className="text-green-600 text-xl mb-1" />
                    <p className="text-sm text-gray-500">Humidity</p>
                    <p className="font-bold text-gray-900">
                      {facilityTabs[activeTab].humidity}
                    </p>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="mt-8">
                  <h4 className="font-bold text-lg mb-3">Key Features</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {facilityTabs[activeTab].features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-600" />
                        <p className="text-gray-700 text-sm">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default BsfInnovation;
