import React, { useState } from "react";
import {
  FiCheckCircle,
  FiSearch,
  FiFileText,
  FiClock,
  FiShield,
  FiFolder,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";

const Certifications = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  const tabs = [
    { id: "certifications", label: "Certifications", icon: <FiShield /> },
    { id: "documents", label: "Documents", icon: <FiFileText /> },
    { id: "updates", label: "Regulatory Updates", icon: <FiClock /> },
    { id: "timeline", label: "Compliance Timeline", icon: <FiClock /> },
    { id: "tools", label: "Compliance Tools", icon: <FiFolder /> },
  ];

  const certificates = [
    {
      title: "BBMP Waste Management Authorization",
      agency: "Bruhat Bengaluru Mahanagara Palike",
      valid: "14/03/2026",
      certno: "BBMP/WM/2023/1547",
      img: "/certificate1.jpg",
    },
    {
      title: "BSWML Registration Certificate",
      agency: "Biomedical & Solid Waste Management Ltd",
      valid: "22/08/2025",
      certno: "BSWML/REG/2023/0892",
      img: "/certificate2.jpg",
    },
    {
      title: "KSPCB Consent to Operate",
      agency: "Karnataka State Pollution Control Board",
      valid: "30/11/2025",
      certno: "KSPCB/CTO/2023/3421",
      img: "/certificate3.jpg",
    },
  ];

  const documents = [
    {
      name: "Annual Compliance Audit Report 2024",
      desc: "Comprehensive audit covering all regulatory requirements.",
      tag: "Audit Reports",
      size: "2.4 MB",
      updated: "15/11/2024",
    },
    {
      name: "Waste Management Process Documentation",
      desc: "Detailed documentation of collection & disposal.",
      tag: "Process Documents",
      size: "1.8 MB",
      updated: "08/11/2024",
    },
    {
      name: "Environmental Impact Assessment",
      desc: "Assessment of sustainability & environmental performance.",
      tag: "Impact Reports",
      size: "3.1 MB",
      updated: "01/11/2024",
    },
    {
      name: "Safety & Training Compliance Manual",
      desc: "Complete safety protocols for staff & operations.",
      tag: "Safety Documents",
      size: "1.5 MB",
      updated: "25/10/2024",
    },
  ];

  const updates = [
    {
      impact: "HIGH IMPACT",
      impactColor: "bg-red-600",
      category: "E-Waste Regulations",
      title: "New E-Waste Management Rules 2024",
      desc: "Updated guidelines for electronic waste collection & disposal.",
      date: "10/11/2024",
    },
    {
      impact: "MEDIUM IMPACT",
      impactColor: "bg-yellow-600",
      category: "Plastic Regulations",
      title: "Plastic Waste Management Amendment",
      desc: "Stricter segregation rules & new recycling targets.",
      date: "28/10/2024",
    },
    {
      impact: "HIGH IMPACT",
      impactColor: "bg-red-600",
      category: "Biomedical Waste",
      title: "Biomedical Waste Handling Protocol Update",
      desc: "Enhanced safety protocols for waste collection and transport.",
      date: "05/10/2024",
    },
    {
      impact: "LOW IMPACT",
      impactColor: "bg-green-600",
      category: "C&D Waste",
      title: "Construction & Demolition Waste Guidelines",
      desc: "Guidelines for recycling and reuse of construction materials.",
      date: "19/09/2024",
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Advanced Technology Integration",
      desc: "AI-powered waste tracking & IoT sensors. Achieved 99.2% compliance.",
      tags: ["ISO 14001:2015", "Green Building Certification", "Smart City Partner"],
    },
    {
      year: "2023",
      title: "Regulatory Excellence Achievement",
      desc: "Achieved full compliance across all operations.",
      tags: ["Zero Violations", "Top Compliance Rating"],
    },
    {
      year: "2022",
      title: "Safety & Quality Standards",
      desc: "Completed facility certifications & quality audits.",
      tags: ["Quality Audit Cleared"],
    },
  ];

  const tools = [
    {
      title: "Compliance Alert Subscription",
      desc: "Stay informed about regulatory updates relevant to your operations.",
      type: "subscription",
    },
    {
      title: "Digital Badge Verification",
      desc: "Verify authenticity of certification IDs & badges.",
      type: "verify",
    },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="w-full bg-green-800 text-white py-20 px-6 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 mt-20">
            Compliance & Certifications Center
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 mb-10 text-lg">
            Get centralized access to certifications, audit reports, compliance tools,
            and regulatory updates that keep your operations fully transparent.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-14 border-b">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          <div>
            <h2 className="text-4xl font-extrabold text-green-800">6+</h2>
            <p className="text-gray-600">Active Certifications</p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-green-800">99.2%</h2>
            <p className="text-gray-600">Compliance Rate</p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-green-800">0</h2>
            <p className="text-gray-600">Violations (2024)</p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-green-800">24/7</h2>
            <p className="text-gray-600">Documentation Access</p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center bg-white shadow-md rounded-xl px-5 py-3 border">
            <FiSearch className="text-gray-400 text-xl mr-3" />
            <input
              type="text"
              placeholder="Search certifications, documents, or regulations..."
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-medium border transition-all 
              ${
                activeTab === tab.id
                  ? "bg-green-800 text-white border-green-800 shadow-md"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* =============================================== */}
        {/* CERTIFICATIONS */}
        {/* =============================================== */}
        {activeTab === "certifications" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition"
              >
                <div className="relative">
                  <img
                    src={cert.img}
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-green-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow">
                    <FiCheckCircle /> Verified
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600">🏛 {cert.agency}</p>
                  <p className="text-sm text-gray-600">📅 Valid Until: {cert.valid}</p>
                  <p className="text-sm text-gray-600">🧾 Cert #: {cert.certno}</p>

                  <button className="mt-3 text-green-700 font-semibold hover:underline flex items-center gap-1">
                    Verify Certificate <FiArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =============================================== */}
        {/* DOCUMENTS */}
        {/* =============================================== */}
        {activeTab === "documents" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl shadow border hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{doc.name}</h3>
                <p className="text-gray-700 text-sm mb-3">{doc.desc}</p>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-5">
                  <span className="bg-gray-100 px-3 py-1 rounded-md">{doc.tag}</span>
                  <span>{doc.size}</span>
                  <span>Updated: {doc.updated}</span>
                </div>

                <button className="w-full py-3 bg-green-800 text-white rounded-xl font-medium hover:bg-green-900 flex justify-center items-center gap-2 transition">
                  <FiFileText /> Download Document
                </button>
              </div>
            ))}
          </div>
        )}

        {/* =============================================== */}
        {/* REGULATORY UPDATES */}
        {/* =============================================== */}
        {activeTab === "updates" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {updates.map((u, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border shadow hover:shadow-lg transition"
              >
                <span
                  className={`${u.impactColor} text-white text-xs font-semibold px-3 py-1 rounded-md`}
                >
                  {u.impact}
                </span>

                <p className="text-gray-500 text-sm mt-1">{u.category}</p>

                <h3 className="text-xl font-bold text-gray-900 mt-3">{u.title}</h3>

                <p className="text-gray-700 mt-2">{u.desc}</p>

                <div className="flex justify-between items-center mt-4 text-sm text-green-700 font-semibold">
                  <span className="flex items-center gap-1 text-gray-500">
                    <FiCalendar /> {u.date}
                  </span>
                  <button className="hover:underline flex items-center gap-1">
                    Read More <FiArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =============================================== */}
        {/* TIMELINE */}
        {/* =============================================== */}
        {activeTab === "timeline" && (
          <div className="relative border-l-4 border-green-700 pl-10 space-y-14">
            {timeline.map((t, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[14px] top-1 w-4 h-4 bg-green-700 rounded-full"></span>

                <h2 className="text-3xl font-bold text-green-800">{t.year}</h2>
                <h3 className="text-xl font-semibold text-gray-900 mt-2">{t.title}</h3>

                <p className="text-gray-700 mt-2">{t.desc}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {t.tags.map((tg, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-800 px-3 py-1 text-xs rounded-md"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =============================================== */}
        {/* TOOLS */}
        {/* =============================================== */}
        {activeTab === "tools" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* ALERT SUBSCRIPTION */}
            <div className="bg-white p-7 rounded-2xl shadow border hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Compliance Alert Subscription
              </h3>
              <p className="text-gray-600 mb-5">
                Stay informed about regulatory changes and compliance updates.
              </p>

              <input
                type="email"
                placeholder="your.email@company.com"
                className="w-full border px-4 py-3 rounded-xl mb-4 outline-none"
              />

              <button className="w-full py-3 bg-green-800 text-white rounded-xl hover:bg-green-900 transition">
                Subscribe
              </button>
            </div>

            {/* VERIFY BADGE */}
            <div className="bg-white p-7 rounded-2xl shadow border hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Digital Badge Verification
              </h3>
              <p className="text-gray-600 mb-5">
                Verify the authenticity of certification badge IDs.
              </p>

              <input
                type="text"
                placeholder="e.g. BBMP-2023-WM-1547"
                className="w-full border px-4 py-3 rounded-xl mb-4 outline-none"
              />

              <button className="w-full py-3 bg-green-800 text-white rounded-xl hover:bg-green-900 transition">
                Verify Badge
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certifications;
