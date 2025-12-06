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
        className="relative w-full h-[595px] bg-cover bg-center flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-lime-400/10 blur-[120px] animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-12 gap-12 mt-28">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center text-white animate-fadeUp">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              World-Class <br />
              <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-lg mb-10">
              State-of-the-art facilities and cutting-edge technology powering
              sustainable waste management
            </p>

            {/* STAT CARDS */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-xl text-white p-5 rounded-xl border border-white/20 w-40 animate-cardUp">
                <h3 className="text-3xl font-extrabold">50+</h3>
                <p className="text-sm text-gray-200">Acers Facility</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl text-white p-5 rounded-xl border border-white/20 w-40 animate-cardUp delay-150">
                <h3 className="text-3xl font-extrabold">200+</h3>
                <p className="text-sm text-gray-200">Compliance</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl text-white p-5 rounded-xl border border-white/20 w-40 animate-cardUp delay-300">
                <h3 className="text-3xl font-extrabold">24/7</h3>
                <p className="text-sm text-gray-200">Operations</p>
              </div>
            </div>
          </div>

          {/* RIGHT LOGIN CARD */}
          <div className="flex justify-center items-center -mr-32">
            <div
              className="bg-white/10 backdrop-blur-2xl p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20 
            animate-slideIn hover:shadow-2xl hover:scale-[1.02] transition-all"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Sign In
              </h2>

              <form className="flex flex-col gap-5">
                <div className="animate-fadeUp delay-200">
                  <label className="text-gray-200 text-sm">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-lime-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="animate-fadeUp delay-300">
                  <label className="text-gray-200 text-sm">Password</label>
                  <input
                    type="password"
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-lime-400"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-lime-500 hover:bg-lime-600 transition rounded-lg font-semibold text-black shadow-lg 
                animate-fadeUp delay-500"
                >
                  Login
                </button>
              </form>

              <p className="text-center text-gray-300 text-sm mt-5 animate-fadeUp delay-600">
                Forgot Password?{" "}
                <span className="text-lime-300 cursor-pointer">Contact Admin</span>
              </p>
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
            Explore our world-class infrastructure through interactive virtual tours.
          </p>
        </div>

        {/* GRID */}
        {/* GRID */}
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

  {/* CARD 1 - BSF */}
  <div
    onClick={() => goTo("/bsfinnovation")}
    className="group relative p-8 bg-white rounded-2xl border border-emerald-600 shadow-md cursor-pointer 
    hover:shadow-xl hover:-translate-y-2 hover:border-emerald-700 transition-all duration-300 overflow-hidden animate-cardUp"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-emerald-300/40 blur-2xl transition-all"></div>

    <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">
      BSF Innovation
    </h3>

    <p className="text-slate-600 text-sm relative z-10 mb-5">
      🏭 4,00,000 Sq. Ft.
    </p>

    {/* READ MORE BUTTON */}
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

  {/* CARD 2 - GPS SOLUTIONS */}
  <div
    onClick={() => goTo("/gpssolutions")}
    className="group relative p-8 bg-white rounded-2xl border border-gray-300 shadow-md cursor-pointer 
    hover:shadow-xl hover:-translate-y-2 hover:border-emerald-600 transition-all duration-300 overflow-hidden animate-cardUp delay-150"
  >
    <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">
      GPS Solutions
    </h3>

    <p className="text-slate-600 text-sm relative z-10 mb-5">
      Live Tracking
    </p>

    {/* READ MORE BUTTON */}
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

  {/* CARD 3 - CERTIFICATIONS */}
  <div
    onClick={() => goTo("/certifications")}
    className="group relative p-8 bg-white rounded-2xl border border-gray-300 shadow-md cursor-pointer 
    hover:shadow-xl hover:-translate-y-2 hover:border-emerald-600 transition-all duration-300 overflow-hidden animate-cardUp delay-300"
  >
    <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">
      Compliance
    </h3>

    <p className="text-slate-600 text-sm relative z-10 mb-5">
      Certifications
    </p>

    {/* READ MORE BUTTON */}
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
