import React from "react";

const CaseStudies = () => {
  const cases = [
    {
      image: "/hero-bg.jpeg",
      tag: "Technology Campus",
      title: "TechHub IT Park",
      challenge:
        "Managing 15 tons of daily waste from 50+ companies with zero documentation and compliance issues.",
      solution:
        "Implemented segregated collection system with real-time tracking and monthly compliance reporting.",
      results: [
        "85% waste diverted from landfills",
        "100% compliance achieved",
        "₹2.5L annual cost savings",
      ],
    },
    {
      image: "/hero-bg.jpeg",
      tag: "Residential Complex",
      title: "Green Valley Apartments",
      challenge:
        "Inconsistent waste collection causing resident complaints and municipal violations.",
      solution:
        "Deployed GPS-tracked vehicles with scheduled pickups and resident education program.",
      results: [
        "Zero missed collections",
        "70% resident satisfaction increase",
        "Municipal compliance restored",
      ],
    },
    {
      image: "/hero-bg.jpeg",
      tag: "Healthcare Facility",
      title: "City Hospital Network",
      challenge:
        "Critical need for certified biomedical waste handling with complete audit trails.",
      solution:
        "Specialized biomedical waste management with color-coded segregation and digital documentation.",
      results: [
        "100% regulatory compliance",
        "Zero safety incidents",
        "Complete audit trail maintained",
      ],
    },
  ];

  return (
    <section
      className="
        py-10 sm:py-14 md:py-20 
        px-4 sm:px-6 md:px-6 
        bg-white 
        -mt-10 sm:-mt-20 
      "
    >
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 md:mb-14 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e293b]">
          Measurable Environmental Impact
        </h2>
        <p className="text-gray-500 mt-3 text-sm sm:text-base px-3 sm:px-0">
          Real success stories from businesses that transformed their waste management
          with EcoSphere's technology-driven solutions.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {cases.map((item, index) => (
          <div
            key={index}
            className="
              bg-white rounded-md 
              shadow-md overflow-hidden 
              border border-gray-100
            "
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full 
                  h-40 sm:h-48 md:h-52 
                  object-cover
                "
              />

              {/* TAG LABEL */}
              <span
                className="
                  absolute top-3 left-3 
                  bg-green-700 text-white 
                  px-3 py-1 rounded-md 
                  text-xs sm:text-sm font-medium shadow-md
                "
              >
                {item.tag}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5 sm:p-6 -mt-2 sm:-mt-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* CHALLENGE */}
              <div className="mt-3">
                <p className="text-red-500 font-semibold text-sm sm:text-base">
                  🔴 Challenge
                </p>
                <p className="text-gray-600 text-sm mt-1">{item.challenge}</p>
              </div>

              {/* SOLUTION */}
              <div className="mt-3">
                <p className="text-yellow-600 font-semibold text-sm sm:text-base">
                  💡 Solution
                </p>
                <p className="text-gray-600 text-sm mt-1">{item.solution}</p>
              </div>

              {/* DIVIDER */}
              <hr className="my-4" />

              {/* RESULTS */}
              <div>
                <p className="text-green-700 font-semibold mb-1 text-sm sm:text-base">
                  📊 Key Results
                </p>
                <ul className="space-y-1">
                  {item.results.map((r, i) => (
                    <li
                      key={i}
                      className="text-gray-700 text-sm flex items-center gap-2"
                    >
                      <span className="text-green-500 text-lg">✔</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
