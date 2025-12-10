import React from "react";
import { FiHome, FiBox, FiUser, FiCreditCard } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const links = [
    { id: 1, label: "Home", path: "/home", icon: <FiHome size={22} /> },
    { id: 2, label: "Products", path: "/products", icon: <FiBox size={22} /> },
    { id: 3, label: "Payment", path: "/wallet", icon: <FiCreditCard size={22} /> },
    { id: 4, label: "Account", path: "/account", icon: <FiUser size={22} /> },
  ];

  return (
    <div
      className="
        fixed bottom-0 left-0 w-full 
        bg-white/70 backdrop-blur-lg 
        shadow-xl border-t border-gray-200
        flex justify-between px-6 py-3 
        z-50 lg:hidden
        animate-slideUp
      "
    >
      {links.map((item) => {
        const active = pathname === item.path;

        return (
          <div
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`
              relative flex flex-col items-center 
              text-xs cursor-pointer transition-all duration-300
              ${active ? "text-blue-600 scale-110 font-semibold" : "text-gray-600"}
            `}
          >
            {/* Glow/Highlight Background */}
            {active && (
              <span
                className="
                  absolute -top-2 w-10 h-10 
                  bg-blue-100/70 blur-xl rounded-full
                  animate-pulse
                "
              ></span>
            )}

            <div className="z-10">{item.icon}</div>
            <span className="mt-1 z-10">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MobileNavbar;
