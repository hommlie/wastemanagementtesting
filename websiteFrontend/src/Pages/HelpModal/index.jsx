import React from "react";
import { FaTimes, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const topics = [
    { title: "Raise a Complaint", icon: "📢" },
    { title: "Request a Call", icon: "📞" },
    { title: "Book Services", icon: "🛠️" },
    { title: "Give Feedback", icon: "⭐" },
    { title: "Account", icon: "👤" },
    { title: "Payments", icon: "💳" },
  ];

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-green-500 text-xl" />,
      title: "WhatsApp",
      detail: "+91 74838-60408",
    },
    {
      icon: <FaPhoneAlt className="text-blue-500 text-xl" />,
      title: "Call Us",
      detail: "+91 63638-65658",
    },
    {
      icon: <MdEmail className="text-red-500 text-xl" />,
      title: "Email",
      detail: "info@ecospherewm.com",
    },
    {
      icon: <MdLocationOn className="text-amber-500 text-xl" />,
      title: "Visit Us",
      detail: "No 201, Dhammanagi Zeus Apartment, Millers Tank Bund Rd, Vasanth Nagar, Bangalore, Karnataka 560034",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start py-10 z-50">
      <div className="bg-white w-full max-w-3xl mx-auto rounded-2xl shadow-xl flex flex-col max-h-[90vh] overflow-hidden">

        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Help Center</h2>
            <p className="text-gray-600">How can we help you today?</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* User Row */}
        <div className="flex items-center justify-between border px-4 py-3 bg-emerald-50 border-emerald-100 
        rounded-lg mx-6 mt-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg
                className="w-6 h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-1.5A4.5 4.5 0 019 14.25h6a4.5 4.5 0 014.5 4.5v1.5"
                />
              </svg>
              <span className="absolute -bottom-1 -right-1 text-white text-[10px] bg-[#92B775] rounded-full px-[3px] py-[1px] font-bold leading-none">
                H
              </span>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-emerald-800">Hello, User</h2>
              <p className="text-sm text-emerald-600">How can we help you today?</p>
            </div>
          </div>

          <button className="px-3 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg text-sm">
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div className="overflow-y-auto flex-1 px-6 py-5">

          {/* TOPICS → NOW 2 CARDS PER ROW */}
          <div className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {topics.map((t, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-4 cursor-pointer
                    w-full bg-white border border-gray-300 
                    rounded-xl shadow-sm hover:shadow-md transition-all
                    px-4 py-4
                  "
                >
                  <div className="text-3xl">{t.icon}</div>
                  <p className="text-base font-semibold text-gray-800">
                    {t.title}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Contact Options */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Options</h3>

            <div className="grid grid-cols-1 gap-4">

              {contactMethods.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border border-gray-300 
                  rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <div>{m.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-800">{m.title}</p>
                    <p className="text-sm text-gray-600">{m.detail}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 text-center text-sm text-gray-500 border-t">
          Need more help? Contact our support team 24/7
        </div>

      </div>
    </div>
  );
};

export default HelpModal;
