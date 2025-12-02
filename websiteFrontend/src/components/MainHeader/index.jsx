import React, { useEffect, useState } from "react";
import {
  FiDownload,
  FiHeadphones,
  FiClock,
  FiCreditCard,
  FiFileText,
  FiUser,
} from "react-icons/fi";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [activeMenu, setActiveMenu] = useState(null);
  const navStyleBefore = {
  display: "flex",
  gap: "40px",
  fontSize: "16px",
  fontWeight: 600,
  flex: 1,
  justifyContent: "center",
  color: "white",
  transition: "all 0.3s ease",
};

const navStyleAfter = {
  display: "flex",
  gap: "32px",
  fontSize: "16px",
  fontWeight: 600,
  flex: 1,
  justifyContent: "center",
  transition: "all 0.3s ease",
  marginLeft: "100px",
};

const headerBefore = {
  position: "fixed",
  top: 10,
  width: "1350px",
  left: 0,
  zIndex: 50,
  marginLeft: "-20px",
  background: "transparent",
  backdropFilter: "none",
  borderBottom: "none",
  boxShadow: "none",
  transition: "all 0.35s ease",
};

const headerAfter = {
  position: "fixed",
  top: 0,
  width: "100%",
  left: 0,
  zIndex: 50,
  marginLeft: "0px",

  // GLASS EFFECT
  background: "rgba(255, 255, 255, 0.55)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(255,255,255,0.3)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",

  transition: "all 0.35s ease",
};

  const menus = {
    Segments: {
      desc: "Reliable waste & recycling services across all segments.",
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
        {
          head: "Bulk Buyers",
          items: [
            "Scrap Aggregators",
            "Recyclable Material Buyers",
            "Food Waste Processing Units",
          ],
        },
        {
          head: "B2B Services",
          items: [
            "FM Companies",
            "Housekeeping Agencies",
            "Facility Management Partners",
          ],
        },
      ],
    },

    "Environmental Solutions": {
      desc: "EcoSpare supports sustainability and environmental compliance.",
      cols: [
        {
          head: "Environmental Services",
          items: [
            "Disposal Services",
            "Hazardous Waste",
            "Transportation",
            "Onsite Services",
          ],
        },
        {
          head: "Specialized",
          items: ["Organics", "Wet Waste", "Recycling Programs", "Consulting"],
        },
      ],
    },

    Technology: {
      desc: "Fully compliant biomedical waste collection and reporting.",
      cols: [
        {
          head: "Biomedical Waste",
          items: [
            "BMW Pickup",
            "Color Segregation",
            "Audit Trail",
            "Safety Compliance",
          ],
        },
        {
          head: "Industries",
          items: ["Hospitals", "Clinics", "Labs", "Diagnostics", "Pharma"],
        },
      ],
    },

    Products: {
      desc: "EcoSpare product solutions for all industries.",
      cols: [
        {
          head: "Product Lines",
          items: ["Eco Bins", "Segregation Tools", "Smart IOT Bins", "Composters"],
        },
        {
          head: "Industries",
          items: ["Hospitals", "Clinics", "Labs", "Diagnostics", "Pharma"],
        },
      ],
    },

    Blogs: {
      desc: "EcoSpare’s sustainability programs help reduce ecological impact.",
      cols: [
        {
          head: "Sustainability",
          items: ["Reports", "Impact", "Recycling 101", "Awareness Programs"],
        },
        {
          head: "Recycling",
          items: [
            "Residential Recycling",
            "Commercial Recycling",
            "Recycle Right",
            "How Recycling Works",
          ],
        },
      ],
    },
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const underlineStyle = {
    position: "relative",
    paddingBottom: "4px",
  };

  return (
    <header
      style={isScrolled ? headerAfter : headerBefore}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* TOP BAR */}
      {!isScrolled && !isMobile && (
        <div
          style={{
            maxWidth: "1350px",
            margin: "0 auto",
            marginLeft: "-80px",
            padding: "6px 40px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "28px",
            fontSize: "14px",
            fontWeight: 600,
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          <a style={{ color: "white", display: "flex", alignItems: "center", gap: 6 }}>
            <FiDownload size={15} /> GetApp
          </a>

          <a style={{ color: "white", display: "flex", alignItems: "center", gap: 6 }}>
            <FiHeadphones size={15} /> Support
          </a>

          <a style={{ color: "white", display: "flex", alignItems: "center", gap: 6 }}>
            <FiClock size={15} /> Schedule & ETA
          </a>

          <a style={{ color: "white", display: "flex", alignItems: "center", gap: 6 }}>
            <FiCreditCard size={15} /> Make a Payment
          </a>

          <a style={{ color: "white", display: "flex", alignItems: "center", gap: 6 }}>
            <FiFileText size={15} /> Certifications
          </a>

          <a style={{ color: "white", display: "flex", alignItems: "center", gap: 6 }}>
            <FiUser size={15} /> Log In ▾
          </a>
        </div>
      )}

      {/* MAIN NAV */}
      <div
        style={{
          maxWidth: "1450px",
          margin: "0 auto",
          marginRight: "-100px",
          padding: isScrolled ? "10px 40px" : "16px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "padding 0.4s",
        }}
      >
        <img
          src={isScrolled ? "/ecospare-logo.png" : "/ecospherelogo.png"}
          style={{
            height: isScrolled ? "70px" : "105px",
            marginTop: isScrolled ? "-5px" : "-60px",
            transition: "0.4s ease",
          }}
        />

        {!isMobile && (
          <nav style={isScrolled ? navStyleAfter : navStyleBefore}>
            {Object.keys(menus).map((menu) => (
              <span
                key={menu}
                style={{
                  color: isScrolled ? "#1f2937" : "white",
                  cursor: "pointer",
                  ...underlineStyle,
                }}
                onMouseEnter={() => setActiveMenu(menu)}
              >
                {menu}
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: "2px",
                    width: activeMenu === menu ? "100%" : "0%",
                    background: isScrolled ? "#064e3b" : "white",
                    transition: "0.3s",
                  }}
                ></span>
              </span>
            ))}

            <a
              style={{
                padding: "10px 18px",
                background: "#16a34a",
                color: "white",
                borderRadius: "6px",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                marginTop: "-10px",
              }}
            >
              Partner With Us
            </a>
          </nav>
        )}
      </div>

      {/* DROPDOWN */}
      {!isMobile && activeMenu && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "white",
            padding: "40px 80px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            display: "flex",
            gap: "60px",
            animation: "fadeDown 0.3s ease-out",
          }}
          onMouseEnter={() => setActiveMenu(activeMenu)}
        >
          <div style={{ display: "flex", gap: "60px" }}>
            {menus[activeMenu].cols.map((col, i) => (
              <div key={i}>
                <h3 style={{ fontWeight: 700, marginBottom: 10 }}>{col.head}</h3>
                {col.items.map((txt, idx) => (
                  <p
                    key={idx}
                    style={{
                      margin: "6px 0",
                      cursor: "pointer",
                      color: "#444",
                    }}
                  >
                    {txt}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeDown {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </header>
  );
};

export default MainHeader;
