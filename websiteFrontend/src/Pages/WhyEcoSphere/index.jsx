import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaClock,
  FaArrowsAlt,
  FaDollarSign,
  FaRecycle,
  FaChartLine,
  FaShieldAlt,
  FaTools,
  FaMedal,
} from "react-icons/fa";

const comparisonData = [
  {
    icon: <FaLeaf className="text-green-600 text-xl" />,
    title: "Environmental Impact",
    traditional: "❌ High carbon emissions, methane from landfills",
    eco: "✔ 95% waste diversion, 50% CO₂ reduction, zero landfill",
  },
  {
    icon: <FaClock className="text-green-600 text-xl" />,
    title: "Processing Time",
    traditional: "❌ Weeks to months for decomposition",
    eco: "✔ 10–14 days complete bioconversion cycle",
  },
  {
    icon: <FaArrowsAlt className="text-green-600 text-xl" />,
    title: "Space Requirements",
    traditional: "❌ Large land areas required",
    eco: "✔ Compact modular systems, 70% less space",
  },
  {
    icon: <FaDollarSign className="text-green-600 text-xl" />,
    title: "Operating Costs",
    traditional: "❌ High transportation & disposal fees",
    eco: "✔ 65% cost reduction + revenue generation",
  },
  {
    icon: <FaRecycle className="text-green-600 text-xl" />,
    title: "Resource Recovery",
    traditional: "❌ Minimal to no resource recovery",
    eco: "✔ High-quality fertilizer & protein production",
  },
  {
    icon: <FaChartLine className="text-green-600 text-xl" />,
    title: "Scalability",
    traditional: "❌ Limited by infrastructure",
    eco: "✔ Modular design, easily scalable systems",
  },
  {
    icon: <FaShieldAlt className="text-green-600 text-xl" />,
    title: "Regulatory Compliance",
    traditional: "❌ Complex permits & environmental risks",
    eco: "✔ ISO 14001 certified, exceeds standards",
  },
  {
    icon: <FaTools className="text-green-600 text-xl" />,
    title: "Maintenance",
    traditional: "❌ Heavy equipment, frequent repairs",
    eco: "✔ IoT monitoring, predictive maintenance",
  },
];

export default function WhyEcoSphere() {
  return (
    <section className="py-20 px-4 md:px-12 bg-gray-50">
      {/* HEADER */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Why Choose EcoSphere?
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Compare traditional waste management methods with our innovative BSF
          bioconversion technology
        </p>
      </motion.div>

      {/* CARD */}
      <motion.div
        className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* TITLE */}
        <div className="p-6 border-b bg-white">
          <h3 className="text-xl font-bold text-gray-800">
            Traditional vs EcoSphere Solutions
          </h3>
          <p className="text-gray-500 text-sm">
            Comprehensive comparison of waste management approaches
          </p>
        </div>

        {/* TABLE HEADER */}
        <div className="grid grid-cols-12 bg-gray-100 px-6 py-3 font-semibold text-gray-700 text-sm">
          <div className="col-span-4">Feature</div>
          <div className="col-span-4 text-center">Traditional Methods</div>
          <div className="col-span-4 text-center">EcoSphere Technology</div>
        </div>

        {/* TABLE ITEMS */}
        {comparisonData.map((item, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-12 px-6 py-5 border-t hover:bg-gray-50 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* FEATURE */}
            <div className="col-span-4 flex items-center gap-3 font-medium text-gray-800">
              {item.icon}
              {item.title}
            </div>

            {/* TRADITIONAL METHODS */}
            <div className="col-span-4 flex items-center text-red-600 font-medium">
              {item.traditional}
            </div>

            {/* ECOSPHERE */}
            <div className="col-span-4 flex items-center text-green-600 font-medium">
              {item.eco}
            </div>
          </motion.div>
        ))}

        {/* FOOTER ROW */}
        <motion.div
          className="px-6 py-5 border-t bg-gray-50 flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <FaMedal className="text-green-600 text-2xl" />
          <div>
            <p className="font-bold text-green-700">
              Overall Advantage: 85% Better Performance
            </p>
            <p className="text-gray-600 text-sm -mt-1">
              Based on comprehensive environmental and operational metrics
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
