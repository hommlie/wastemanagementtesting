import React from "react";

const HomeScreen = () => {
  return (
    <>
      <section
        id="residential"
        className="relative h-[600px] md:h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-28"
      >
        {/* ⭐ Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
        />

        {/* ⭐ Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(15,23,42,0.6)]" />

        {/* ⭐ HERO CONTENT */}
        <div className="relative w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

          {/* ⭐ HERO TITLE */}
          <h1 className="text-white text-[2.5rem] md:text-[3.5rem] leading-[1.15] font-extrabold mb-10">
            Waste Management That
            <br />
            Works For Your Business{" "}
            <span className="text-[#22c55e]">And</span>
            <br />
            <span className="text-[#22c55e]">The Environment</span>
          </h1>

          {/* ⭐ BUTTON */}
          <button
            className="px-8 z-40 py-3 rounded-md text-white font-semibold text-lg shadow-lg bg-[#22c55e] hover:opacity-90 transition mb-8"
          >
            Request a Callback
          </button>

          {/* ⭐ FORM CARD */}
          <div className="-mt-14 z-20 bg-white/10 backdrop-blur-lg w-full max-w-4xl rounded-[28px] p-6 md:p-10 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">

            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="p-3 rounded-xl bg-white border border-gray-300 text-sm focus:border-[#7ee22f] focus:ring-4 focus:ring-[#7ee22f]/20 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  className="p-3 rounded-xl bg-white border border-gray-300 text-sm focus:border-[#7ee22f] focus:ring-4 focus:ring-[#7ee22f]/20 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your E-mail"
                  className="p-3 rounded-xl bg-white border border-gray-300 text-sm focus:border-[#7ee22f] focus:ring-4 focus:ring-[#7ee22f]/20 outline-none"
                />

                <button
                  type="submit"
                  className="p-3 rounded-xl font-semibold text-[16px] bg-[#22c55e] text-white hover:bg-[#6bc626] shadow-sm hover:shadow-lg active:scale-95 transition-all whitespace-nowrap"
                >
                  Send
                </button>

              </div>
            </form>

          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
