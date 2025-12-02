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


      <div className="bg-[#000000] py-16 px-6 rounded-md max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-12">
          Real-Time Operational Excellence
        </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {stats.map((s, i) => {
              const [ref, isVisible] = useVisible();
              const num = useCountUp(isVisible ? parseInt(s.value) : 0);

              return (
                <div
                  key={i}
                  ref={ref}
                  className={`
                    bg-white/10 backdrop-blur-xl 
                    border border-white/20
                    rounded-xl p-10 text-center text-white 
                    flex flex-col items-center 
                    shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                    transition-all duration-700
                    ${isVisible ? "animate-fadeInUp opacity-100" : "opacity-0 translate-y-6"}
                  `}
                >
                  {/* Icon Animation */}
                  <div
                    className={`
                      mb-4 transform transition-all duration-700
                      ${isVisible ? "animate-bounce-slow" : "scale-90 opacity-50"}
                    `}
                  >
                    {s.icon}
                  </div>

                  {/* Counting Number */}
                  <p className="text-4xl font-extrabold tracking-wide">
                    {num}+
                  </p>

                  <p className="text-gray-200 mt-2">{s.label}</p>
                </div>
              );
            })}
          </div>

      </div>
    </section>
  );
};

export default Certifications;
