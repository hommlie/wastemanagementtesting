import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiTrendingUp, FiSmartphone, FiShield } from "react-icons/fi";

const GpsSolutions = () => {
  return (
    <>

      {/* ===================================================================
          🟢 HERO — REAL-TIME FLEET INTELLIGENCE (Glass + Animated)
      =================================================================== */}
      <section className="relative w-full min-h-[650px] flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/gpssol.jpeg')" }}
        ></div>

        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

        {/* GLASS CONTENT */}
        <div className="relative z-10 px-8 lg:px-20 py-24 max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl"
          >
            Real-Time Fleet <br />
            Intelligence for <br />
            Zero-Waste <br />
            Operations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mb-12"
          >
            GPS-enabled tracking, AI-powered routing, and real-time analytics give you
            complete control of your waste management fleet. Reduce costs by 35% and
            increase operational efficiency instantly.
          </motion.p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-wrap gap-14 text-white"
          >
            <div>
              <h2 className="text-4xl font-extrabold">98.7%</h2>
              <p className="text-sm text-gray-300 mt-1">On-Time Performance</p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold">35%</h2>
              <p className="text-sm text-gray-300 mt-1">Cost Reduction</p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold">24/7</h2>
              <p className="text-sm text-gray-300 mt-1">Live Monitoring</p>
            </div>
          </motion.div>
        </div>
      </section>




      {/* ===================================================================
          🟢 FEATURES GRID — Complete Operational Visibility (Animated)
      =================================================================== */}
      <section className="w-full bg-[#f7f9f5] py-20 px-6 lg:px-20">

        {/* TITLE */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Complete Operational Visibility <br /> in Real-Time
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 mt-4 max-w-3xl mx-auto"
          >
            Advanced GPS technology combined with AI-powered analytics delivers
            unparalleled insight into your fleet operations.
          </motion.p>
        </div>

        {/* 4 FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-4">
              <FiMapPin className="w-12 h-12 p-3 bg-green-700 text-white rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Real-Time Location Tracking</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Monitor every vehicle with pinpoint accuracy. Live updates every
                  10 seconds ensure complete operational visibility.
                </p>
                <p className="text-green-700 font-semibold text-sm mt-4">99.9% Uptime</p>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-4">
              <FiTrendingUp className="w-12 h-12 p-3 bg-green-700 text-white rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Instant Route Optimization</h3>
                <p className="text-gray-600 text-sm mt-2">
                  AI continuously analyzes traffic, collection schedules and vehicle
                  capacity to deliver the fastest, most efficient routes.
                </p>
                <p className="text-green-700 font-semibold text-sm mt-4">28% Fuel Savings</p>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-4">
              <FiSmartphone className="w-12 h-12 p-3 bg-green-700 text-white rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Predictive ETA Calculations</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Machine learning accurately predicts arrival times, enabling
                  superior planning and customer communication.
                </p>
                <p className="text-green-700 font-semibold text-sm mt-4">95% Accuracy</p>
              </div>
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-4">
              <FiShield className="w-12 h-12 p-3 bg-green-700 text-white rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Geofencing & Alerts</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Real-time alerts for route deviations, unauthorized stops, and
                  sensitive geofenced areas.
                </p>
                <p className="text-green-700 font-semibold text-sm mt-4">100% Coverage</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
      {/* ===============================================================
    🌐 INTELLIGENT ROUTE PLANNING SECTION (Premium + Animated)
================================================================ */}
<section className="w-full bg-[#f7f9f5] py-24 px-6 lg:px-20">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

    {/* LEFT SIDE — TEXT + BEFORE/AFTER */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
        Transform Operations <br />
        with Intelligent Route <br />
        Planning
      </h2>

      <p className="text-gray-600 text-lg mb-10 max-w-xl">
        Our advanced AI algorithms analyze millions of data points—
        traffic patterns, collection schedules, vehicle capacity, weather
        conditions, and historical performance—to generate optimal
        routes that maximize efficiency while minimizing environmental
        impact.
      </p>

      {/* BEFORE / AFTER CARD */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 mb-10">
        <h3 className="text-lg font-bold mb-6 text-gray-900">Before/After Comparison</h3>

        <div className="space-y-6 text-gray-700">

          {/* Row 1 */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Route Efficiency</p>
              <p className="text-sm">Before: <span className="font-semibold">62%</span></p>
              <p className="text-sm">After: <span className="font-semibold">94%</span></p>
            </div>
            <p className="text-green-600 font-bold text-xl">+32%</p>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Fuel Consumption</p>
              <p className="text-sm">Before: <span className="font-semibold">8.2 L/100km</span></p>
              <p className="text-sm">After: <span className="font-semibold">5.3 L/100km</span></p>
            </div>
            <p className="text-green-600 font-bold text-xl">-35%</p>
          </div>

          {/* Row 3 */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Daily Collections</p>
              <p className="text-sm">Before: <span className="font-semibold">127</span></p>
              <p className="text-sm">After: <span className="font-semibold">189</span></p>
            </div>
            <p className="text-green-600 font-bold text-xl">+49%</p>
          </div>

          {/* Row 4 */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Carbon Emissions</p>
              <p className="text-sm">Before: <span className="font-semibold">2.4 tons/day</span></p>
              <p className="text-sm">After: <span className="font-semibold">1.5 tons/day</span></p>
            </div>
            <p className="text-green-600 font-bold text-xl">-38%</p>
          </div>

        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-green-800 text-white rounded-xl shadow hover:bg-green-900 transition">
          View Full Analysis
        </button>
        <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl shadow hover:bg-gray-100 transition">
          Download Report
        </button>
      </div>

    </motion.div>

    {/* RIGHT SIDE — IMAGE + STATS */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      {/* TOP IMAGE */}
      <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 mb-10">
        <img
          src="/route-map.jpeg"
          alt="Route Planning"
          className="w-full h-[320px] object-cover"
        />
      </div>

      {/* 2 STATS CARDS */}
      <div className="grid grid-cols-2 gap-6 mb-10">
        
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <p className="text-3xl font-extrabold text-gray-900">247</p>
          <p className="text-sm text-gray-500 mt-1">Active Vehicles</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <p className="text-3xl font-extrabold text-gray-900">1,847</p>
          <p className="text-sm text-gray-500 mt-1">Optimized Routes</p>
        </div>

      </div>

      {/* REAL-TIME ADAPTATION BOX */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Real-Time Adaptation</h3>
        <p className="text-gray-600">
          Routes automatically adjust based on traffic conditions, vehicle
          breakdowns, and priority collections.  
          <span className="font-semibold text-green-700">Average response time: 47 seconds.</span>
        </p>
      </div>

    </motion.div>
  </div>
</section>
{/* =========================================================================
   📱 COMPLETE FLEET MANAGEMENT – Premium Animated Section
========================================================================= */}
<section className="w-full bg-white py-24 px-6 lg:px-20">

  {/* TOP TITLE */}
  <div className="text-center mb-20">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold text-gray-900"
    >
      Complete Fleet Management at <br /> Your Fingertips
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-gray-600 mt-4 max-w-3xl mx-auto"
    >
      Secure, cloud-based portal providing 24/7 access to your fleet operations, 
      performance metrics, and management tools from any device, anywhere.
    </motion.p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT — MOBILE DASHBOARD IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative">
        {/* MAIN PHONE IMAGE */}
        <img
          src="/fleet-dashboard-mobile.png"
          alt="Fleet Mobile Dashboard"
          className="w-[350px] drop-shadow-2xl rounded-3xl"
        />

        {/* FLOATING BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -bottom-6 -right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-200 flex items-center gap-3"
        >
          <div className="bg-green-700 text-white p-3 rounded-xl">
            <FiShield className="text-xl" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Security Status</p>
            <p className="font-bold text-gray-800">Enterprise-Grade</p>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* RIGHT — FEATURES LIST */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >

      {/* 1 — Real-Time Analytics Dashboard */}
      <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-all flex gap-4">
        <div className="bg-green-700 text-white p-3 rounded-xl">
          <FiTrendingUp className="text-xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Real-Time Analytics Dashboard</h3>
          <p className="text-sm text-gray-600 mt-1">
            View fleet performance, fuel consumption, route efficiency, and driver
            behavior with live data widgets.
          </p>
        </div>
      </div>

      {/* 2 — Automated Reporting */}
      <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-all flex gap-4">
        <div className="bg-green-700 text-white p-3 rounded-xl">
          <FiSmartphone className="text-xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Automated Reporting</h3>
          <p className="text-sm text-gray-600 mt-1">
            Schedule daily or weekly reports delivered directly to your inbox in multiple formats.
          </p>
        </div>
      </div>

      {/* 3 — Smart Alert System */}
      <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-all flex gap-4">
        <div className="bg-green-700 text-white p-3 rounded-xl">
          <FiShield className="text-xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Smart Alert System</h3>
          <p className="text-sm text-gray-600 mt-1">
            Instant alerts for route deviations, fuel anomalies, maintenance schedules, 
            and threshold violations via email/SMS.
          </p>
        </div>
      </div>

      {/* 4 — Multi-User Access Control */}
      <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-all flex gap-4">
        <div className="bg-green-700 text-white p-3 rounded-xl">
          <FiMapPin className="text-xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Multi-User Access Control</h3>
          <p className="text-sm text-gray-600 mt-1">
            Role-based permissions ensure the correct access levels for admins, supervisors, and dispatchers.
          </p>
        </div>
      </div>

      {/* 6 — Mobile App Integration */}
      <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-all flex gap-4">
        <div className="bg-green-700 text-white p-3 rounded-xl">
          <FiSmartphone className="text-xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Mobile App Integration</h3>
          <p className="text-sm text-gray-600 mt-1">
            iOS & Android apps with offline capability, digital forms, photo logs, and instant communication.
          </p>
        </div>
      </div>

    </motion.div>
  </div>
</section>


    </>
  );
};

export default GpsSolutions;
