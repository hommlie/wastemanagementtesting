import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceGridTch from "../servicegridtech";

const InfraLoginSection = () => {
  const navigate = useNavigate();
  const goTo = (path) => navigate(path);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-[590px] bg-cover bg-center flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/technology-bg.jpeg')",
        }}
      >
        {/* Darker overlay, strongest on the RIGHT side where text is */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/70 to-black/30"></div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-lime-400/10 blur-[120px] animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-12 gap-12 mt-28">
          {/* LEFT SIDE – empty on desktop to push content to right */}
          <div className="hidden lg:block" />

          {/* RIGHT CONTENT (mobile: full width + centered, desktop: right side) */}
          <div className="flex flex-col justify-center text-white animate-fadeUp items-center lg:items-start lg:ml-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-center lg:text-left">
              World-Class <br />
              <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-200 max-w-lg mb-10 text-center lg:text-left">
              State-of-the-art facilities and cutting-edge technology powering
              sustainable waste management.
            </p>

            {/* ⭐ Responsive STAT CARDS ⭐ */}
            <div className="grid grid-cols-3 gap-3 md:flex md:flex-wrap md:gap-4 justify-center lg:justify-start">
              <div
                className="bg-white/10 backdrop-blur-xl text-white p-4 md:p-5 rounded-xl 
                border border-white/20 flex flex-col items-center justify-center 
                h-24 md:h-auto w-full md:w-40 animate-cardUp"
              >
                <h3 className="text-xl md:text-3xl font-extrabold">50+</h3>
                <p className="text-[11px] md:text-sm text-gray-200 -mt-1">
                  Acres Facility
                </p>
              </div>

              <div
                className="bg-white/10 backdrop-blur-xl text-white p-4 md:p-5 rounded-xl 
                border border-white/20 flex flex-col items-center justify-center 
                h-24 md:h-auto w-full md:w-40 animate-cardUp delay-150"
              >
                <h3 className="text-xl md:text-3xl font-extrabold">200+</h3>
                <p className="text-[11px] md:text-sm text-gray-200 -mt-1">
                  Compliances
                </p>
              </div>

              <div
                className="bg-white/10 backdrop-blur-xl text-white p-4 md:p-5 rounded-xl 
                border border-white/20 flex flex-col items-center justify-center 
                h-24 md:h-auto w-full md:w-40 animate-cardUp delay-300"
              >
                <h3 className="text-xl md:text-3xl font-extrabold">24/7</h3>
                <p className="text-[11px] md:text-sm text-gray-200 -mt-1">
                  Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIRTUAL FACILITY TOURS ================= */}
      <section className="bg-[#f7f9fa] py-6 -mt-2 relative">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 animate-fadeUp">
            Virtual Facility Tours
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto animate-fadeUp delay-150">
            Explore our world-class infrastructure through interactive virtual
            tours.
          </p>
        </div>

        {/* GRID */}
        <div
          className="max-w-7xl mx-auto px-6 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* CARD 1 */}
          <div
            onClick={() => goTo("/bsfinnovation")}
            className="group relative p-8 bg-white rounded-2xl border border-emerald-600 
            shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-2 
            hover:border-emerald-700 transition-all duration-300 overflow-hidden animate-cardUp"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">
              BSF Innovation
            </h3>
            <p className="text-slate-600 text-sm relative z-10 mb-5">
              🏭 4,00,000 Sq. Ft.
            </p>

            <div
              onClick={(e) => {
                e.stopPropagation();
                goTo("/bsfinnovation");
              }}
              className="absolute bottom-5 right-5 bg-[#84cc16] text-black w-40 h-10 rounded-md
              flex items-center justify-center shadow-md transition-all duration-300 
              cursor-pointer group-hover:scale-110 group-hover:bg-emerald-700 z-20"
            >
              <span className="text-xl">Read More ➜</span>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            onClick={() => goTo("/gpssolutions")}
            className="group relative p-8 bg-white rounded-2xl border border-gray-300 
            shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-2 
            hover:border-emerald-600 transition-all duration-300 overflow-hidden 
            animate-cardUp delay-150"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">
              GPS Solutions
            </h3>
            <p className="text-slate-600 text-sm relative z-10 mb-5">
              Live Tracking
            </p>

            <div
              onClick={(e) => {
                e.stopPropagation();
                goTo("/gpssolutions");
              }}
              className="absolute bottom-5 right-5 bg-[#84cc16] text-black w-40 h-10 rounded-md
              flex items-center justify-center shadow-md transition-all duration-300 
              cursor-pointer group-hover:scale-110 group-hover:bg-emerald-700 z-20"
            >
              <span className="text-xl">Read More ➜</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            onClick={() => goTo("/certifications")}
            className="group relative p-8 bg-white rounded-2xl border border-gray-300 
            shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-2 
            hover:border-emerald-600 transition-all duration-300 overflow-hidden 
            animate-cardUp delay-300"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">
              Compliance
            </h3>
            <p className="text-slate-600 text-sm relative z-10 mb-5">
              Certifications
            </p>

            <div
              onClick={(e) => {
                e.stopPropagation();
                goTo("/certifications");
              }}
              className="absolute bottom-5 right-5 bg-[#84cc16] text-black w-40 h-10 rounded-md
              flex items-center justify-center shadow-md transition-all duration-300 
              cursor-pointer group-hover:scale-110 group-hover:bg-emerald-700 z-20"
            >
              <span className="text-xl">Read More ➜</span>
            </div>
          </div>
        </div>
      </section>

      <ServiceGridTch />
    </>
  );
};

export default InfraLoginSection;
