import React, { useEffect, useRef } from "react";

// ===== DESKTOP SERVICES =====
const desktopServices = [
  {
    id: 1,
    title: "Collection of Biowaste",
    subtitle:
      "Biowaste generated from kitchens, food industries, and agricultural operations forms a major portion of organic waste that must be managed responsibly. At EcoSphere, we use an advanced biological process powered by Black Soldier Fly (BSF) larvae to convert this waste into high-value resources.",
    img: "/service1.png",
    points: ["Real-Time Tracking", "Certified Process", "Full Documentation"],
  },
  {
    id: 2,
    title:
      "Upcycling Process by BSF Bioconversion of Biowaste for Environmental Value",
    subtitle:
      "BSF larvae rapidly break down organic waste, transforming it into valuable products such as protein meal and organic fertilizer.",
    img: "/service2.png",
    points: [],
  },
  {
    id: 3,
    title: "Organic Compost Rejuvenate the Soil to Support the Ecosystem",
    subtitle:
      "BSF frass boosts soil health, fertility, and water retention, supporting resilient ecosystems.",
    img: "/service3.png",
    points: ["Eco-Friendly", "Organic", "Improves Soil"],
  },
  {
    id: 4,
    title:
      "Sustainable Insect Protein Nourishing Animals Naturally, Sustainably, and Responsibly",
    subtitle:
      "BSF Larvae are a high-quality, nutrient-rich sustainable protein source.",
    img: "/service4.png",
    points: ["High Protein", "Sustainable", "Eco-Friendly"],
  },
];

// ===== IMPORT ICONS (FIXED) =====
import { FiTrash2, FiAperture, FiDroplet } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

// ===== MOBILE SERVICES WITH ICONS =====
const mobileServices = [
  {
    id: 1,
    title: "Waste Collection",
    short: "Door-to-door pickup of wet, dry & food waste.",
    img: "/service1.png",
    icon: <FiTrash2 size={36} color="#A3E635" />,
  },
  {
    id: 2,
    title: "Rearing",
    short: "Larval growth, egg collection & pupation process.",
    img: "/service2.png",
    icon: <FiAperture size={36} color="#A3E635" />,
  },
  {
    id: 3,
    title: "Organic Compost",
    short: "Nutrient-rich soil booster for agriculture.",
    img: "/service3.png",
    icon: <FaLeaf size={36} color="#A3E635" />,
  },
  {
    id: 4,
    title: "BSF Protein",
    short: "High-quality sustainable insect protein.",
    img: "/service4.png",
    icon: <FiDroplet size={36} color="#A3E635" />,
  },
];

const ServicesGrid = () => {
  const sectionRefs = useRef([]);

  // ===== DESKTOP SCROLL ANIMATION =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-show");
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach(ref => ref && observer.observe(ref));
  }, []);

  return (
    <section className="w-full bg-black py-12 md:py-24 lg:py-32 px-4 md:px-6 -mt-40">

      {/* ========= MOBILE VIEW (UPDATED WITH BUTTON) ========= */}
<div
  className="grid grid-cols-1 gap-10 md:hidden relative px-3 py-10 min-h-screen w-full"
  style={{
    backgroundImage: "url('/mobile-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60 z-[1]"></div>

  <div className="relative z-[2] space-y-10">
    {mobileServices.map((s, idx) => (
      <div
        key={idx}
        className="relative w-full bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-4 shadow-lg"
      >
        {/* ==== FLIP CARD CONTAINER ==== */}
        <div className="relative w-full h-72 perspective mb-4">

          <div className="flip-card relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer">

            {/* FRONT SIDE */}
            <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl bg-black/70 text-white flex flex-col justify-center items-center p-6 border border-white/10">
              <div className="mb-3">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-center text-gray-300 text-sm leading-relaxed">
                {s.short}
              </p>
            </div>

            {/* BACK SIDE */}
            <div className="absolute w-full h-full rotateY-180 backface-hidden rounded-xl overflow-hidden shadow-xl">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* ==== READ MORE BUTTON (STATIC, DOES NOT FLIP) ==== */}
        <div className="flex justify-end">
          <button className="text-emerald-400 font-semibold text-sm tracking-wide hover:text-emerald-300 transition">
            Read More →
          </button>
        </div>
      </div>
    ))}
  </div>

  <style>{`
    .perspective { perspective: 1000px; }
    .flip-card:hover { transform: rotateY(180deg); }
    .transform-style-preserve-3d { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; }
    .rotateY-180 { transform: rotateY(180deg); }
  `}</style>
</div>


      {/* ========= DESKTOP VIEW (UNCHANGED) ========= */}
      <div className="hidden md:block max-w-6xl mx-auto">

        {desktopServices.map((service, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <article
              key={service.id}
              ref={el => (sectionRefs.current[idx] = el)}
              className={`opacity-0 translate-y-10 transition-all duration-[1200ms] ease-out
              grid grid-cols-1 lg:grid-cols-2 
              gap-0 md:gap-16 lg:gap-12 
              mb-4 md:mb-24 lg:mb-24
              ${isReversed ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"}`}
            >
              {/* IMAGE */}
              <div className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative rounded-xl overflow-hidden shadow-[0_10px_32px_rgba(0,0,0,0.1)]">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[440px] object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className={`${isReversed ? "lg:order-1" : "lg:order-2"} px-1`}>
                <div className="relative mb-6 sm:mb-8">
                  <div className="text-[70px] sm:text-[90px] md:text-[110px] font-extrabold text-emerald-100/20 leading-none">
                    {String(service.id).padStart(2, "0")}
                  </div>
                  <div className="absolute inset-0 flex items-center pl-1">
                    <span className="tracking-[0.3em] text-emerald-300 text-[14px] sm:text-[18px] font-medium">
                      STEP {service.id}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 -mt-4 sm:-mt-6">
                  {service.title}
                </h3>

                <div className="w-14 sm:w-16 h-[4px] bg-emerald-400 mb-4 sm:mb-5"></div>

                <p className="text-sm sm:text-base text-white leading-relaxed mb-5">
                  {service.subtitle}
                </p>

                {service.id === 1 && (
                  <ul className="flex flex-wrap gap-2">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 bg-emerald-50 text-emerald-900 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm border border-emerald-200"
                      >
                        ✔ <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <style>{`
        .animate-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;
