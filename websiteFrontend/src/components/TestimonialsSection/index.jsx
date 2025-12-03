import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Ecospere has consistently managed our biodegradable waste without disruptions. We commend their professional approach and strongly recommend their services to other municipalities and businesses.",
    name: "Krishnakumar G",
    role: "Senior Public Health Inspector",
    org: "GR:1 Kalamassery Municipality",
  },
  {
    quote:
      "The quality of service and responsibility in waste management is highly commendable. We are delighted with their services and will definitely recommend them to others.",
    name: "SHAHADEVAN E.K",
    role: "Health Supervisor / Clean City",
    org: "Manager Thrikkakara Municipality",
  },
  {
    quote:
      "Ecospere has consistently delivered reliable waste management with clear communication and documentation. Their team is proactive, professional and easy to work with.",
    name: "Krishnakumar G",
    role: "Senior Public Health Inspector",
    org: "GR:1 Kalamassery Municipality",
  },
];

const TestimonialsSection = () => {
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

  return (
    <section
      ref={rootRef}
      className="relative bg-[#181818] text-white py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="flex items-center gap-3 text-xs md:text-sm tracking-[0.3em] uppercase text-gray-400">
            <span className="w-8 h-px bg-gray-500" />
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Hear What Our
            <br />
            Customers Have To Say
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-10">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className={`
                relative flex flex-col justify-between
                md:border-l md:border-gray-700/80 md:pl-8
                md:first:border-l-0 md:first:pl-0
                transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
              `}
              style={{ transitionDelay: `${220 + idx * 140}ms` }}
            >
              {/* top quote & text */}
              <div>
                <div className="text-4xl text-gray-500 mb-4 leading-none">
                  &ldquo;
                </div>
                <p className="text-sm md:text-[15px] leading-relaxed text-gray-200">
                  {t.quote}
                </p>
                <div className="mt-4 text-2xl text-gray-500 text-right leading-none">
                  &rdquo;
                </div>
              </div>

              {/* bottom avatar + name */}
              <div className="mt-6 flex items-center gap-4 md:gap-5">
                {/* avatar circle */}
                <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-gray-400/80 bg-transparent">
                  {/* simple user icon */}
                  <div className="w-8 h-8 rounded-full bg-gray-400/70 mb-1" />
                  <div className="absolute bottom-3 w-9 h-3 rounded-full bg-gray-400/60" />
                </div>

                {/* details */}
                <div>
                  <div className="text-sm md:text-base font-semibold tracking-tight">
                    {t.name}
                  </div>
                  <div className="text-[11px] md:text-xs text-gray-400 mt-1 leading-snug">
                    {t.role}
                    <br />
                    {t.org}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* subtle gradient top & bottom to make it premium */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

      {/* extra micro hover animation for cards */}
      <style>
        {`
          @media (min-width: 768px) {
            article:hover {
              transform: translateY(-4px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialsSection;
