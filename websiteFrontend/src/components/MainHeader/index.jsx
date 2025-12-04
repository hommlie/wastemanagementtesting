import React, { useEffect, useState } from "react";
import {
  FiDownload,
  FiHeadphones,
  FiClock,
  FiCreditCard,
  FiFileText,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const menus = {
    Segments: {
      cols: [
        { head: "Living Spaces", items: ["Apartments", "Gated Communities"] },
        {
          head: "Commercial",
          items: [
            "Restaurants",
            "Hotels",
            "Retail Stores",
            "Malls",
            "Office Spaces",
            "Co-working Spaces",
          ],
        },
        {
          head: "Industrial",
          items: [
            "Manufacturing Units",
            "Warehouses",
            "Logistics & Distribution Centers",
          ],
        },
      ],
    },
    Technology: {
      cols: [
        {
          head: "Biomedical Waste",
          items: ["BMW Pickup", "Color Segregation", "Audit Trail"],
        },
        { head: "Industries", items: ["Hospitals", "Clinics", "Labs"] },
      ],
    },
    Products: {
      cols: [
        {
          head: "Products",
          items: ["Eco Bins", "Smart Bins", "Composters"],
        },
      ],
    },
    Blogs: {
      cols: [
        { head: "Sustainability", items: ["Reports", "Impact", "Recycling"] },
      ],
    },
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* ====== TOP BAR (Desktop Only) ====== */}
        {!isMobile && !isScrolled && (
          <div className="max-w-[1350px] mx-auto px-6 py-2 flex justify-end gap-6 text-white font-semibold">
            <span className="flex items-center gap-2 cursor-pointer">
              <FiDownload size={15} /> Get App
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <FiHeadphones size={15} /> Support
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <FiClock size={15} /> Schedule & ETA
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <FiCreditCard size={15} /> Payment
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <FiFileText size={15} /> Certifications
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <FiUser size={15} /> Login
            </span>
          </div>
        )}

        {/* ====== MAIN NAV BAR ====== */}
        <div className="max-w-[1450px] mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <img
            src={isScrolled ? "/ecospare-logo.png" : "/ecospherelogo.png"}
            className={`transition-all ${
              isScrolled ? "h-[55px]" : "h-[80px]"
            }`}
          />

          {/* ===== DESKTOP NAV ===== */}
          {!isMobile && (
            <nav className="flex items-center gap-10 font-semibold text-[16px]">
              {Object.keys(menus).map((menu) => (
                <span
                  key={menu}
                  onMouseEnter={() => setActiveMenu(menu)}
                  className={`relative cursor-pointer pb-1 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {menu}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] transition-all ${
                      activeMenu === menu ? "w-full" : "w-0"
                    } ${isScrolled ? "bg-green-800" : "bg-white"}`}
                  ></span>
                </span>
              ))}
            </nav>
          )}

          {/* ===== MOBILE HAMBURGER ===== */}
          {isMobile && (
            <button
              className={`text-3xl ${
                isScrolled ? "text-green-800" : "text-white"
              }`}
              onClick={() => setMobileOpen(true)}
            >
              <FiMenu />
            </button>
          )}
        </div>

        {/* ======= DESKTOP DROPDOWN ======= */}
        {!isMobile && activeMenu && (
          <div
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute w-full bg-white shadow-xl py-10 px-20 flex gap-20 animate-fadeDown"
          >
            {menus[activeMenu].cols.map((col, i) => (
              <div key={i}>
                <h3 className="font-bold mb-3">{col.head}</h3>
                {col.items.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-gray-600 py-1 cursor-pointer hover:text-black"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* ================= MOBILE SLIDE-IN MENU ================= */}
      <div
        className={`fixed top-0 left-0 h-screen w-[75%] bg-white shadow-xl z-[999] p-6 transition-all duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="text-3xl text-green-800 text-right mb-6">
          <FiX onClick={() => setMobileOpen(false)} />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 text-[20px] font-bold text-green-800">
          {Object.keys(menus).map((menu) => (
            <span key={menu} className="cursor-pointer">
              {menu}
            </span>
          ))}

          <button className="mt-6 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold">
            Partner With Us
          </button>
        </div>
      </div>
    </>
  );
}
