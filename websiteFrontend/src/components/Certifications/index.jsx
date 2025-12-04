import React from "react";
import { useEffect, useState } from "react";

// Count-up animation hook
const useCountUp = (end, duration = 2000) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // 60fps approx

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setValue(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return value;
};

const useVisible = (options) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, ...options }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};


const Certifications = () => {
  const certs = [
    {
      img: "/service1.png",
      title: "BBMP Authorized",
      subtitle: "Bruhat Bengaluru Mahanagara Palike",
    },
    {
      img: "/service1.png",
      title: "BSWML Certified",
      subtitle: "Bangalore Solid Waste Management Ltd",
    },
    {
      img: "/service1.png",
      title: "KSPCB Approved",
      subtitle: "Karnataka State Pollution Control Board",
    },
    {
      img: "/service1.png",
      title: "ISO 14001:2015",
      subtitle: "Environmental Management System",
    },
  ];

  const logos = [
    "/ecospare-logo.png",
    "/ecospare-logo.png",
    "/ecospare-logo.png",
    "/ecospare-logo.png",
    "/ecospare-logo.png",
    "/ecospare-logo.png",
  ];

  const stats = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M16 8h4a2 2 0 0 1 2 2v6h-6" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      value: "250+",
      label: "Active Collection Vehicles",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 3v18" />
          <path d="M16 3v18" />
          <path d="M3 9h18" />
          <path d="M3 15h18" />
        </svg>
      ),
      value: "1,500+",
      label: "Commercial Clients Served",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      value: "99.8%",
      label: "On-Time Collection Rate",
    },
  ];

  return (
    <section className="py-8 px-6 bg-white">
      {/* Title */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-4xl font-bold text-[#1e293b]">
          Complete Transparency, Total Compliance
        </h2>
        <p className="text-gray-600 mt-3">
          Certified by leading regulatory bodies and trusted by businesses across
          industries for reliable, documented waste management solutions.
        </p>
      </div>

      {/* Certifications */}
      <h3 className="text-center text-xl font-semibold text-gray-700 mb-6">
        Our Certifications
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-14">
        {certs.map((c, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-md shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={c.img}
              alt={c.title}
              className="h-32 object-contain mb-4"
            />
            <h4 className="font-semibold text-gray-800">{c.title}</h4>
            <p className="text-sm text-gray-500 mt-1">{c.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Trusted by Brands */}
        <h3 className="text-center text-xl font-semibold text-gray-700 mb-8">
          Trusted By Leading Organizations
        </h3>

        {/* ⭐ SIMPLE NORMAL SCROLL — SQUARE LOGOS ⭐ */}
        <div className="w-full overflow-x-auto scrollbar-hide py-10">
          <div className="flex items-center gap-10 px-4 min-w-max">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="
                  w-40 h-40
                  bg-gray-50 
                  border border-gray-200 
                  rounded-2xl
                  shadow-md 
                  flex items-center justify-center
                  hover:shadow-xl hover:scale-105 
                  transition-transform duration-300
                "
              >
                <img
                  src={logo}
                  alt="brand"
                  className="w-28 h-28 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          /* Hide scrollbar for clean UI */
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        <div className="bg-[#ffffff] py-12 px-6 rounded-2xl max-w-7xl mx-auto mt-10">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl text-black font-extrabold text-center mb-14 tracking-tight">
            Real-Time Operational Excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {stats.map((s, i) => {
              const [ref, isVisible] = useVisible();
              const num = useCountUp(isVisible ? parseInt(s.value) : 0);

              return (
                <div
                  key={i}
                  ref={ref}
                  className={`
                    group relative w-full
                    bg-white/40 backdrop-blur-2xl
                    rounded-3xl p-12 text-center overflow-hidden

                    /* Elegant shadows */
                    shadow-[8px_8px_24px_#dbdbdb,-8px_-8px_24px_#ffffff]

                    /* smooth */
                    transition-all duration-700

                    /* fade-slide in */
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}

                    /* hover */
                    hover:scale-[1.04]
                    hover:shadow-[12px_12px_32px_#cfcfcf,-12px_-12px_32px_#ffffff]
                  `}
                >

                  {/* Shine Sweep */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="
                      absolute inset-0 w-[200%] h-[200%]
                      bg-gradient-to-r from-transparent via-white/40 to-transparent
                      transform rotate-12 -translate-x-[150%]
                      group-hover:translate-x-[150%]
                      transition-all duration-[1.8s] ease-out
                    "></div>
                  </div>

                  {/* Floating Glow Orbs */}
                  <div className="absolute -top-16 -left-10 w-40 h-40 bg-[#92B775]/20 blur-3xl rounded-full"></div>
                  <div className="absolute -bottom-20 -right-12 w-48 h-48 bg-[#92B775]/25 blur-3xl rounded-full"></div>

                  {/* Floating Particles */}
                  <span className="absolute top-6 left-8 w-3 h-3 bg-[#92B775] rounded-full opacity-70 animate-[floatParticle_4s_ease-in-out_infinite]"></span>
                  <span className="absolute bottom-6 right-10 w-2.5 h-2.5 bg-[#92B775] rounded-full opacity-60 animate-[floatParticle_5s_ease-in-out_infinite]"></span>
                  <span className="absolute top-12 right-20 w-2 h-2 bg-[#92B775] rounded-full opacity-60 animate-[floatParticle_3s_ease-in-out_infinite]"></span>

                  {/* Icon */}
                  <div
                    className={`
                      mb-6 transition-all duration-700
                      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                      group-hover:scale-[1.15]
                    `}
                  >
                    {s.icon}
                  </div>

                  {/* Number */}
                  <p className="text-5xl font-extrabold text-[#111] drop-shadow-md group-hover:tracking-wide transition-all duration-500">
                    {num}+
                  </p>

                  {/* Label */}
                  <p className="text-gray-700 mt-3 text-lg font-medium tracking-wide">
                    {s.label}
                  </p>

                </div>
              );
            })}
          </div>

          {/* FLOAT PARTICLE ANIMATION KEYFRAME */}
          <style>{`
            @keyframes floatParticle {
              0% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
              50% { transform: translateY(-12px) translateX(6px); opacity: 1; }
              100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
            }
          `}</style>
        </div>

    </section>
  );
};

export default Certifications;
