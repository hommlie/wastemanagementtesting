import React from "react";
import ServicesGrid from "../../components/ServicesGrid";

const InfraLoginSection = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-[595px] bg-cover bg-center flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* GLOW ANIMATION */}
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
                <h3 className="text-3xl font-extrabold">50,000+</h3>
                <p className="text-sm text-gray-200">Sq. Ft. Facility</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl text-white p-5 rounded-xl border border-white/20 w-40 animate-cardUp delay-150">
                <h3 className="text-3xl font-extrabold">200+</h3>
                <p className="text-sm text-gray-200">Fleet Vehicles</p>
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

        {/* ANIMATIONS */}
        <style>
          {`
            @keyframes fadeUp {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideIn {
              0% { opacity: 0; transform: translateX(60px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes cardUp {
              0% { opacity: 0; transform: translateY(30px) scale(0.95); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            .animate-fadeUp { animation: fadeUp 0.9s ease forwards; }
            .animate-slideIn { animation: slideIn 1s ease forwards; }
            .animate-cardUp { animation: cardUp 1s ease forwards; }
            .delay-150 { animation-delay: 150ms !important; }
            .delay-200 { animation-delay: 200ms !important; }
            .delay-300 { animation-delay: 300ms !important; }
            .delay-500 { animation-delay: 500ms !important; }
            .delay-600 { animation-delay: 600ms !important; }
          `}
        </style>
      </section>

      <section className="bg-[#f7f9fa] py-20 -mt-16 mb-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 animate-fadeUp">
            Virtual Facility Tours
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto mb-12 animate-fadeUp delay-150">
            Explore our world-class infrastructure through interactive virtual
            tours showcasing our commitment to operational excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-4">
            <div className="p-6 bg-white rounded-2xl border border-emerald-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer animate-cardUp">
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                Central Processing Plant
              </h3>
              <p className="text-slate-500 text-sm flex items-center gap-2">
                🏭 30,000 Sq. Ft.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer animate-cardUp delay-150">
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                Composting Facility
              </h3>
              <p className="text-slate-500 text-sm flex items-center gap-2">
                🏭 15,000 Sq. Ft.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer animate-cardUp delay-300">
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                E-Waste Processing Center
              </h3>
              <p className="text-slate-500 text-sm flex items-center gap-2">
                🏭 10,000 Sq. Ft.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer animate-cardUp delay-450">
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                Fleet Maintenance Hub
              </h3>
              <p className="text-slate-500 text-sm flex items-center gap-2">
                🏭 8,000 Sq. Ft.
              </p>
            </div>
          </div>
        </div>
        {/* Animations */}
        <style>
          {`
            @keyframes fadeUp {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes cardUp {
              0% { opacity: 0; transform: translateY(25px) scale(.97); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            .animate-fadeUp { animation: fadeUp 0.9s ease forwards; }
            .animate-cardUp { animation: cardUp 1s ease forwards; }
            .delay-150 { animation-delay: 150ms !important; }
            .delay-300 { animation-delay: 300ms !important; }
            .delay-450 { animation-delay: 450ms !important; }
          `}
        </style>
      </section>
      <ServicesGrid />
    </>
  );
};

export default InfraLoginSection;
