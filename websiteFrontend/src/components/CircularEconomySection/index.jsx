import React, { useEffect, useRef, useState } from "react";

const CircularEconomySection = () => {
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const leftSteps = [
    {
      number: "1",
      title: "Waste Sources",
      text: "The food waste is sourced from factories, schools, supermarkets, agriculture fields and more.",
      icon: "🗑️",
    },
    {
      number: "4",
      title: "To Outlets",
      text: "BSFL meal & oil go to poultry, aquaculture, pet & cattle feeds. Compost and briquettes become alternative fuel.",
      icon: "🏭",
    },
  ];

  const rightSteps = [
    {
      number: "2",
      title: "Bio Conversion",
      text: "Waste is fed to BSF larvae and converted into rich organic biomass that can be processed further.",
      icon: "🪱",
    },
    {
      number: "3",
      title: "Process",
      text: "Larvae are processed into high-protein meal & oil, and remaining residue into compost & briquettes.",
      icon: "⚙️",
    },
  ];

  const stepBaseClasses =
    "relative flex gap-4 md:gap-5 items-start max-w-xs";

  return (
    <section
      ref={rootRef}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* subtle top wedge */}
      <div className="pointer-events-none absolute -top-20 left-0 right-0 h-24 rotate-1 bg-gradient-to-b from-emerald-900/70 to-transparent opacity-90" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-800">
            Circular Economy of{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
              Waste Management
            </span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-slate-500">
            Every kilogram of organic waste is transformed through a closed-loop
            BSF ecosystem into high-value outputs.
          </p>
        </div>

        {/* Layout: 3 columns on desktop, stacked on mobile */}
        <div className="grid lg:grid-cols-[1.1fr_auto_1.1fr] gap-8 md:gap-10 items-center">
          {/* LEFT STEPS */}
          <div className="flex flex-col items-start gap-10">
            {leftSteps.map((step, idx) => (
              <div
                key={step.number}
                className={`${stepBaseClasses} transition-all duration-700 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-7"
                }`}
                style={{ transitionDelay: `${200 + idx * 120}ms` }}
              >
                <div className="flex flex-col items-center mr-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-[2.5px] border-amber-500/80 bg-amber-50/70 shadow-sm">
                    <span className="text-xl">{step.icon}</span>
                  </div>
                  <span className="mt-3 text-4xl font-extrabold text-amber-700">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-lime-600 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs md:text-sm leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER CIRCLE / BSF ICON */}
          <div
            className={`relative flex items-center justify-center transition-all duration-700 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            {/* outer glow */}
            <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full bg-emerald-500/5 blur-3xl" />

            {/* rotating ring */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center bg-white shadow-[0_20px_45px_rgba(15,23,42,0.18)]">
              <div className="absolute inset-4 rounded-full border-[10px] border-transparent bg-[conic-gradient(from_220deg,_#facc15,_#4d7c0f,_#15803d,_#f59e0b,_#facc15)] animate-circle-spin" />

              {/* inner white circle */}
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center shadow-inner">
                {/* BSF / insect logo – replace with your actual image */}
                <img
                  src="/bsf-logo.png"
                  alt="BSF Circular Economy"
                  className="h-20 w-20 object-contain animate-float-slow"
                  onError={(e) => {
                    e.target.style.display = "none";
                    }}

                />
                {/* fallback simple icon if image hidden */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-6 h-10 bg-emerald-700 rounded-full opacity-80" />
                  <div className="absolute -top-1 flex gap-2">
                    <span className="w-3 h-3 bg-emerald-700 rounded-full" />
                    <span className="w-3 h-3 bg-emerald-700 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT STEPS */}
          <div className="flex flex-col items-start lg:items-end gap-10">
            {rightSteps.map((step, idx) => (
              <div
                key={step.number}
                className={`${stepBaseClasses} lg:flex-row-reverse transition-all duration-700 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-7"
                }`}
                style={{ transitionDelay: `${260 + idx * 120}ms` }}
              >
                <div className="flex flex-col items-center lg:ml-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-[2.5px] border-amber-500/80 bg-amber-50/70 shadow-sm">
                    <span className="text-xl">{step.icon}</span>
                  </div>
                  <span className="mt-3 text-4xl font-extrabold text-amber-700">
                    {step.number}
                  </span>
                </div>
                <div className="lg:text-right">
                  <h3 className="text-sm md:text-base font-semibold text-lime-600 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs md:text-sm leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* custom animations */}
      <style>
        {`
          @keyframes circle-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          .animate-circle-spin {
            animation: circle-spin 22s linear infinite;
          }

          .animate-float-slow {
            animation: float-slow 4.5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default CircularEconomySection;
