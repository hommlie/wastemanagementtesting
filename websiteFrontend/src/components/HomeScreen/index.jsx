import React from "react";

const HomeScreen = () => {
  return (
    <>
      <section
        id="residential"
        className="
          relative 
          h-[650px] 
          md:h-screen 
          flex items-center justify-center 
          overflow-hidden
          pt-32 md:pt-28 rounded-2xl
        "
      >
        {/* ⭐ Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero1.mp4"
        />

        {/* ⭐ Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(15,23,42,0.6)]" />

        {/* ⭐ HERO CONTENT */}
        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">

          {/* ⭐ HERO TITLE */}
          <h1
            className="
              text-white -mt-20 lg:-mt-0
              text-[1.6rem] sm:text-[2.3rem] md:text-[3.5rem] 
              leading-[1.2] md:leading-[1.15]
              font-extrabold 
              mb-8 sm:mb-10
            "
          >
            Waste Management That
            <br />
            Works For Your Business{" "}
            <span className="text-[#22c55e]">And</span>
            <br />
            <span className="
              font-extrabold 
              bg-gradient-to-r 
              from-lime-400 
              to-emerald-500 
              bg-clip-text 
              text-transparent
              leading-tight
            ">
              The Environment
            </span>
          </h1>

          {/* ⭐ BUTTON */}
          <button
            className="
              px-6 sm:px-8 
              py-3 
              rounded-md 
              text-black 
              font-semibold 
              text-base sm:text-lg 
              shadow-lg 
              bg-[#84cc16] 
              hover:opacity-90 
              transition 
              mb-8 sm:mb-8
              z-40
            "
          >
            Request a Callback
          </button>

          {/* ⭐ FORM CARD */}
          <div
            className="
              -mt-10 sm:-mt-14 
              z-20 
              bg-white/10 
              backdrop-blur-lg 
              w-full max-w-4xl 
              rounded-[22px] sm:rounded-[28px] 
              p-5 sm:p-6 md:p-10 
              shadow-[0_4px_12px_rgba(0,0,0,0.15)]
            "
          >
            <form className="flex flex-col gap-4 sm:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="
                    p-3 
                    rounded-xl 
                    bg-white 
                    border border-gray-300 
                    text-sm 
                    focus:border-[#7ee22f] 
                    focus:ring-4 
                    focus:ring-[#7ee22f]/20 
                    outline-none
                  "
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  className="
                    p-3 
                    rounded-xl 
                    bg-white 
                    border border-gray-300 
                    text-sm 
                    focus:border-[#7ee22f] 
                    focus:ring-4 
                    focus:ring-[#7ee22f]/20 
                    outline-none
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your E-mail"
                  className="
                    p-3 
                    rounded-xl 
                    bg-white 
                    border border-gray-300 
                    text-sm 
                    focus:border-[#7ee22f] 
                    focus:ring-4 
                    focus:ring-[#7ee22f]/20 
                    outline-none
                  "
                />

                <button
                  type="submit"
                  className="
                    p-3 
                    rounded-xl 
                    font-semibold 
                    text-[16px] 
                    bg-[#84cc16] 
                    text-black 
                    hover:bg-[#6bc626] 
                    shadow-sm 
                    hover:shadow-lg 
                    active:scale-95 
                    transition-all 
                    whitespace-nowrap
                  "
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
