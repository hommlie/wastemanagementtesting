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
        className="
          relative w-full 
          h-[450px] md:h-[595px]              /* mobile auto-height FIX */
          bg-cover bg-center flex items-start md:items-center overflow-hidden
          pt-24 md:pt-0  rounded-3xl sm:rounded-sm              /* push content down on mobile */
        "
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-lime-400/10 blur-[100px] md:blur-[120px] animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 
                        px-4 md:px-6 lg:px-12 gap-8 md:gap-12 mt-10 md:mt-28">

          {/* LEFT CONTENT (DESKTOP SAME) */}
          <div className="flex flex-col justify-center text-white animate-fadeUp">
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              World-Class <br />
              <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-200 max-w-lg mb-6 md:mb-10">
              State-of-the-art facilities and cutting-edge technology powering
              sustainable waste management
            </p>

            {/* ⭐ MOBILE GRID – DESKTOP FLEX SAME ⭐ */}
            <div className="
              grid grid-cols-3 gap-3 
              md:flex md:flex-wrap md:gap-4
            ">
              {/* CARD 1 */}
              <div className="bg-white/10 backdrop-blur-xl text-white p-4 md:p-5 
                              rounded-xl border border-white/20 
                              flex flex-col items-center justify-center
                              h-20 md:h-auto w-full md:w-40 animate-cardUp">
                <h3 className="text-lg md:text-3xl font-extrabold">50+</h3>
                <p className="text-[11px] md:text-sm text-gray-200 -mt-1">Acers Facility</p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white/10 backdrop-blur-xl text-white p-4 md:p-5 
                              rounded-xl border border-white/20 
                              flex flex-col items-center justify-center
                              h-20 md:h-auto w-full md:w-40 animate-cardUp delay-150">
                <h3 className="text-lg md:text-3xl font-extrabold">200+</h3>
                <p className="text-[11px] md:text-sm text-gray-200 -mt-1">Compliance</p>
              </div>

              {/* CARD 3 */}
              <div className="bg-white/10 backdrop-blur-xl text-white p-4 md:p-5 
                              rounded-xl border border-white/20 
                              flex flex-col items-center justify-center
                              h-20 md:h-auto w-full md:w-40 animate-cardUp delay-300">
                <h3 className="text-lg md:text-3xl font-extrabold">24/7</h3>
                <p className="text-[11px] md:text-sm text-gray-200 -mt-1">Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceGridTch />
    </>
  );
};

export default InfraLoginSection;
