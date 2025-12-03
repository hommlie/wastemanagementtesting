import React, { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "How does EcoSphere collect and process organic waste?",
    a: "We provide scheduled pickups using GPS-enabled vehicles. Collected organic waste is transported to our BSF-based processing facility, where it is converted into high-protein meal, oil and nutrient-rich compost.",
  },
  {
    q: "What type of waste can we give you?",
    a: "We accept segregated organic / food waste, certain dry recyclables, and select low-contamination mixed loads. Hazardous, biomedical, or e-waste streams are handled only under separate compliant arrangements.",
  },
  {
    q: "Do you support documentation and compliance for audits?",
    a: "Yes. We provide digital weight records, pickup logs, disposal certificates and monthly summary reports that help you stay compliant with local municipal and pollution control regulations.",
  },
  {
    q: "How is pricing structured for waste management services?",
    a: "Pricing is based on volume, frequency of pickup, waste category and location. We offer both fixed monthly plans and per-kg models, optimised to reduce your overall cost of waste disposal.",
  },
  {
    q: "Can you customize solutions for our site or multiple locations?",
    a: "Absolutely. We conduct a site assessment, design custom collection routes, provide the right bin infrastructure, and can roll out standardised reporting across multiple locations or branches.",
  },
];

const FaqSection = () => {
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
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
      className="relative bg-[#101010] text-white py-16 md:py-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="flex items-center gap-3 text-xs md:text-sm tracking-[0.3em] uppercase text-gray-500">
            <span className="w-8 h-px bg-gray-500" />
            FAQ
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Frequently Asked
            <br />
            Questions
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-400 max-w-xl">
            Everything you need to know about our BSF-based waste management and
            recycling solutions, in one place.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-10 md:mt-14 space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border border-gray-800/80 rounded-xl bg-gradient-to-r from-[#181818] to-[#141414] shadow-[0_18px_40px_rgba(0,0,0,0.55)]/40 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${220 + idx * 90}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 gap-4"
                >
                  <div className="flex items-start gap-3 md:gap-4 text-left">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/70 text-[11px] text-emerald-300">
                      Q
                    </span>
                    <span className="font-semibold text-sm md:text-base text-gray-100">
                      {item.q}
                    </span>
                  </div>

                  {/* plus/minus icon */}
                  <div className="relative h-5 w-5 flex items-center justify-center">
                    <span className="absolute h-[2px] w-4 bg-gray-300" />
                    <span
                      className={`absolute h-[2px] w-4 bg-gray-300 transition-transform duration-200 ${
                        isOpen ? "rotate-90 scale-0" : "rotate-90 scale-100"
                      }`}
                    />
                  </div>
                </button>

                {/* answer */}
                <div
                  className="px-5 md:px-6 overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
                  style={{
                    maxHeight: isOpen ? "260px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="pb-5 md:pb-6 flex gap-3 md:gap-4">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-500/60 text-[11px] text-gray-300">
                      A
                    </span>
                    <p className="text-xs md:text-sm leading-relaxed text-gray-300">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* soft gradients */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default FaqSection;
