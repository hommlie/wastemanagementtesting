import React, { useState } from "react";
import {
  Trash2,
  Sprout,
  Flame,
  TrendingUp,
  TrendingDown,
  Minus,
  BarChart3,
  Leaf,
  CheckCircle2,
  AlertTriangle,
  Recycle
} from "lucide-react";

/* ICON MAP */
const ICONS = {
  Trash2,
  Sprout,
  Flame,
  TrendingUp,
  TrendingDown,
  Minus,
  BarChart3,
  Leaf,
  CheckCircle2,
  AlertTriangle,
  Recycle
};
import WhyEcoSphere from "../WhyEcoSphere";
import ExperienceFuture from "../ExperienceFuture";
const LucideIcon = ({ name, size = 24, color, className = "" }) => {
  const C = ICONS[name] || Minus;
  return <C size={size} color={color} className={className} />;
};

const ComparisonTool = () => {
  const [selectedMethod, setSelectedMethod] = useState("landfill");

  /* ------------------------ COMPARISON DATA ------------------------ */
  const comparisonData = {
    landfill: {
      name: "Traditional Landfill",
      icon: "Trash2",
      color: "#dc2626",
      metrics: [
        { label: "Waste Reduction", value: "0%", impact: "negative" },
        { label: "CO₂ Emissions", value: "+4,200 tons/year", impact: "negative" },
        { label: "Resource Recovery", value: "0%", impact: "negative" },
        { label: "Processing Time", value: "Decades", impact: "negative" },
        { label: "Land Usage", value: "High", impact: "negative" },
        { label: "Environmental Impact", value: "Severe", impact: "negative" }
      ]
    },

    composting: {
      name: "Traditional Composting",
      icon: "Sprout",
      color: "#ca8a04",
      metrics: [
        { label: "Waste Reduction", value: "40%", impact: "neutral" },
        { label: "CO₂ Emissions", value: "+1,800 tons/year", impact: "neutral" },
        { label: "Resource Recovery", value: "30%", impact: "neutral" },
        { label: "Processing Time", value: "6–12 months", impact: "neutral" },
        { label: "Land Usage", value: "Medium", impact: "neutral" },
        { label: "Environmental Impact", value: "Moderate", impact: "neutral" }
      ]
    },

    incineration: {
      name: "Waste Incineration",
      icon: "Flame",
      color: "#dc2626",
      metrics: [
        { label: "Waste Reduction", value: "70%", impact: "positive" },
        { label: "CO₂ Emissions", value: "+5,600 tons/year", impact: "negative" },
        { label: "Resource Recovery", value: "15%", impact: "negative" },
        { label: "Processing Time", value: "Hours", impact: "positive" },
        { label: "Land Usage", value: "Low", impact: "positive" },
        { label: "Environmental Impact", value: "High pollution", impact: "negative" }
      ]
    }
  };

  /* ------------------------ ECOSPHERE METRICS ------------------------ */
  const ecosphereMetrics = [
    { label: "Waste Reduction", value: "95%", impact: "positive" },
    { label: "CO₂ Emissions", value: "-3,120 tons/year", impact: "positive" },
    { label: "Resource Recovery", value: "100%", impact: "positive" },
    { label: "Processing Time", value: "14–21 days", impact: "positive" },
    { label: "Land Usage", value: "Minimal", impact: "positive" },
    { label: "Environmental Impact", value: "Net Positive", impact: "positive" }
  ];

  /* ------------------------ COLOR + ICON HANDLERS ------------------------ */
  const getImpactColor = (impact) => {
    switch (impact) {
      case "positive":
        return "text-green-600";
      case "negative":
        return "text-red-600";
      default:
        return "text-yellow-600";
    }
  };

  const getImpactIcon = (impact) => {
    switch (impact) {
      case "positive":
        return "TrendingUp";
      case "negative":
        return "TrendingDown";
      default:
        return "Minus";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full border mb-6">
            <LucideIcon name="BarChart3" size={18} color="#059669" />
            <span className="text-sm font-semibold text-emerald-700">
              Performance Comparison
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            EcoSphere vs Traditional Methods
          </h2>

          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Our BSF technology outperforms all traditional waste processing methods across every sustainability metric.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(comparisonData).map(([key, method]) => (
            <button
              key={key}
              onClick={() => setSelectedMethod(key)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all border 
                ${
                  selectedMethod === key
                    ? "bg-white border-emerald-500 shadow-lg"
                    : "bg-white border-slate-300 hover:border-emerald-400"
                }`}
            >
              <LucideIcon name={method.icon} size={20} color={method.color} />
              {method.name}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT — ECOSPHERE */}
          <div className="bg-white rounded-2xl border-2 border-emerald-500 p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-emerald-100 flex items-center justify-center">
                <LucideIcon name="Leaf" size={32} color="#059669" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  EcoSphere Technology
                </h3>
                <p className="text-slate-500">Advanced BSF Bioconversion</p>
              </div>
            </div>

            <div className="space-y-4">
              {ecosphereMetrics.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border"
                >
                  <div className="flex items-center gap-3">
                    <LucideIcon
                      name={getImpactIcon(m.impact)}
                      size={20}
                      className={getImpactColor(m.impact)}
                    />
                    <span className="font-medium">{m.label}</span>
                  </div>

                  <span className={`text-lg font-bold ${getImpactColor(m.impact)}`}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-xl">
              <div className="flex items-center gap-2">
                <LucideIcon name="CheckCircle2" size={20} color="#059669" />
                <span className="text-sm font-bold text-green-700">
                  100% Circular Economy Certified
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — SELECTED METHOD */}
          <div className="bg-white rounded-2xl border p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center">
                <LucideIcon
                  name={comparisonData[selectedMethod].icon}
                  size={32}
                  color={comparisonData[selectedMethod].color}
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {comparisonData[selectedMethod].name}
                </h3>
                <p className="text-slate-500">Traditional Method</p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisonData[selectedMethod].metrics.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border"
                >
                  <div className="flex items-center gap-3">
                    <LucideIcon
                      name={getImpactIcon(m.impact)}
                      size={20}
                      className={getImpactColor(m.impact)}
                    />
                    <span className="font-medium">{m.label}</span>
                  </div>

                  <span className={`text-lg font-bold ${getImpactColor(m.impact)}`}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-xl">
              <div className="flex items-center gap-2">
                <LucideIcon name="AlertTriangle" size={20} color="#dc2626" />
                <span className="text-sm font-bold text-red-700">
                  Significant Environmental Impact
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER CARDS */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-16 h-16 rounded-xl bg-green-100 mx-auto flex items-center justify-center mb-4">
              <LucideIcon name="TrendingUp" size={32} color="#059669" />
            </div>
            <p className="text-3xl font-bold text-green-700 mb-2">380%</p>
            <p className="text-slate-500 text-sm">
              More efficient than composting
            </p>
          </div>

          <div>
            <div className="w-16 h-16 rounded-xl bg-green-100 mx-auto flex items-center justify-center mb-4">
              <LucideIcon name="Leaf" size={32} color="#059669" />
            </div>
            <p className="text-3xl font-bold text-green-700 mb-2">-174%</p>
            <p className="text-slate-500 text-sm">
              CO₂ reduction vs landfill
            </p>
          </div>

          <div>
            <div className="w-16 h-16 rounded-xl bg-green-100 mx-auto flex items-center justify-center mb-4">
              <LucideIcon name="Recycle" size={32} color="#059669" />
            </div>
            <p className="text-3xl font-bold text-green-700 mb-2">100%</p>
            <p className="text-slate-500 text-sm">Complete resource recovery</p>
          </div>
        </div>
      </div>
      <WhyEcoSphere />
      <ExperienceFuture />
    </section>
  );
};

export default ComparisonTool;
