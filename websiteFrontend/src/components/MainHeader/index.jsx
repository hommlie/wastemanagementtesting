import React, { useEffect, useState } from "react";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = {
    Segments: {
      image: "/hero-bg.png",
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
          head: "Scrap Buyers",
          items: ["Paper Scrap", "Plastic Scrap", "Metal Scrap", "E-waste"],
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
      image: "/hero-bg.png",
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
      image: "/hero-bg.png",
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
      image: "/hero-bg.png",
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

    Blogs: {
      image: "/hero-bg.png",
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
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        left: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? "white" : "transparent",
        boxShadow: isScrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.4s ease-in-out",
      }}

      /* ⭐ FIX: CLOSE ONLY WHEN LEAVING ENTIRE HEADER */
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* TOP BAR */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "20 auto",
          padding: isMobile ? "8px 20px" : "8px 40px",
          display: "flex",
          justifyContent: isMobile ? "space-between" : "center",
          gap: "14px",
          fontSize: isMobile ? "14px" : "15px",
          fontWeight: 700,
          color: isScrolled ? "#064e3b" : "white",
          alignItems: "center",
          transition: "color 0.3s",
          marginLeft: "20px",
        }}
      >
        {!isScrolled && !isMobile && (
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "flex-end",
              marginLeft: "500px",
              marginTop: "14px",
            }}
          >
            <a style={{ color: "white" }}>Support</a>
            <a style={{ color: "white" }}>Schedule & ETA</a>
            <a style={{ color: "white" }}>Make a Payment</a>
            <a style={{ color: "white" }}>Drop-off Locations</a>
            <a
              style={{
                color: isScrolled ? "#064e3b" : "white",
                padding: "6px 10px",
                borderRadius: 4,
                background: isScrolled ? "rgba(4, 120, 87, 0.06)" : "transparent",
              }}
            >
              Log In ▾
            </a>
          </div>
        )}
      </div>

      {/* MAIN NAV */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: isScrolled
            ? isMobile
              ? "14px 20px"
              : "12px 40px"
            : isMobile
            ? "12px 20px"
            : "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "padding 0.4s",
        }}
      >
        <img
          src={isScrolled ? "/ecospare-logo.png" : "/ecospherelogo.png"}
          style={{
            height: isScrolled ? "85px" : "120px",
            marginTop: isScrolled ? "-20px" : "-60px",
            transition: "0.4s ease",
            marginLeft: isScrolled ? "0px" : "-50px",
          }}
        />

        {!isMobile && (
          <nav
            style={{
              display: "flex",
              gap: "40px",
              fontSize: "16px",
              fontWeight: 800,
              flex: 1,
              justifyContent: "center",
            }}
          >
            {Object.keys(menus).map((menu) => (
              <span
                key={menu}
                style={{
                  color: isScrolled ? "#1f2937" : "white",
                  cursor: "pointer",
                  ...underlineStyle,
                }}

                /* ⭐ KEEP OPEN ON HOVER */
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
                marginLeft: "10px",
                whiteSpace: "nowrap",
                marginTop: "-10px",
              }}
            >
              Partner With Us
            </a>
          </nav>
        )}
      </div>

      {/* ====================== MEGA MENU ====================== */}
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

            /* ⭐ FIX GAP: KEEP POPUP OPEN */
            marginTop: "-4px",
          }}

          /* ⭐ IMPORTANT: KEEP MENU OPEN WHEN HOVERING POPUP */
          onMouseEnter={() => setActiveMenu(activeMenu)}
        >
          {/* LEFT COLUMNS */}
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

          {/* RIGHT IMAGE CARD */}
          <div style={{ width: "350px" }}>
            <img
              src={menus[activeMenu].image}
              style={{
                width: "100%",
                height: "180px",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
            <p style={{ marginTop: 10, color: "#444" }}>
              {menus[activeMenu].desc}
            </p>
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
