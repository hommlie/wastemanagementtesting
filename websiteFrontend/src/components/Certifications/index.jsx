import React from "react";
import { useEffect, useState } from "react";

/* COUNT UP HOOK */
const useCountUp = (end, duration = 2000) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

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

/* VISIBILITY HOOK */
const useVisible = (options) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3, ...options }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
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
      value: "250",
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
      value: "1500",
      label: "Commercial Clients Served",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      value: "99",
      label: "On-Time Collection Rate",
    },
  ];

  return (
    <section className="py-0 px-4 sm:px-6 md:px-8 bg-white">

      {/* TITLE */}
      <div className="text-center max-w-4xl mx-auto mb-10 px-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b]">
          Complete Transparency, Total Compliance
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Certified by leading regulatory bodies and trusted across industries.
        </p>
      </div>

      {/* CERTIFICATIONS GRID */}
      <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-700 mb-6">
        Our Certifications
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mb-14">
        {certs.map((c, i) => (
          <div
            key={i}
            className="
              bg-white p-6 rounded-md shadow-md 
              border border-gray-100 text-center 
              hover:shadow-lg transition
            "
          >
            <img src={c.img} alt={c.title} className="h-24 sm:h-28 object-contain mx-auto mb-4" />
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{c.title}</h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{c.subtitle}</p>
          </div>
        ))}
      </div>

      {/* TRUSTED BY LOGOS */}
      <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-700 mb-8">
        Trusted By Leading Organizations
      </h3>

      <div className="w-full overflow-x-auto scrollbar-hide py-8">
        <div className="flex items-center gap-6 sm:gap-10 px-3 min-w-max">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="
                w-28 h-28 sm:w-36 sm:h-36 
                bg-gray-50 border border-gray-200 
                rounded-2xl shadow-md 
                flex items-center justify-center 
                hover:scale-105 transition
              "
            >
              <img src={logo} className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* STATS SECTION */}
      <div className="bg-white mb-10 px-4 sm:px-6 md:px-8 rounded-2xl max-w-7xl mx-auto mt-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-black font-extrabold text-center mb-14">
          Real-Time Operational Excellence
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {stats.map((s, i) => {
            const [ref, isVisible] = useVisible();
            const num = useCountUp(isVisible ? s.value : 0);

            return (
              <div
                key={i}
                ref={ref}
                className="
                  group relative w-full text-center
                  bg-white/40 backdrop-blur-2xl
                  rounded-3xl p-10 sm:p-12
                  shadow-[8px_8px_24px_#dbdbdb,-8px_-8px_24px_#ffffff]
                  transition-all duration-700
                  opacity-0 translate-y-6
                "
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(12px)",
                }}
              >
                {/* ICON */}
                <div className="mb-4">{s.icon}</div>

                <p className="text-4xl sm:text-5xl font-extrabold text-[#111]">
                  {num}+
                </p>

                <p className="text-gray-700 mt-3 text-base sm:text-lg">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Certifications;
