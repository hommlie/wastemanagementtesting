import React, { useEffect, useState } from "react";
import {
  FiDownload,
  FiHeadphones,
  FiClock,
  FiCreditCard,
  FiFileText,
  FiUser,
  FiMenu,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

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
    background: "rgba(255, 255, 255, 0.55)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "all 0.35s ease",
  };

  const menus = [
    { name: "Segments", link: "/segments" },
    { name: "Environmental Solutions", link: "/environment" },
    { name: "Technology", link: "/infralogin" },
    { name: "Products", link: "/products" },
    { name: "Blogs", link: "/blogs" },
  ];

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
    <header style={isScrolled ? headerAfter : headerBefore}>
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
        {/* LOGO */}
        <img
          src={isScrolled ? "/ecospare-logo.png" : "/ecospherelogo.png"}
          style={{
            height: isScrolled ? "70px" : "105px",
            marginTop: isScrolled ? "-5px" : "-60px",
            transition: "0.4s ease",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />

        {/* DESKTOP NAV (CLICKABLE LINKS + UNDERLINE ANIMATION) */}
        {!isMobile && (
          <nav style={isScrolled ? navStyleAfter : navStyleBefore}>
            {menus.map((menu, i) => (
              <span
                key={i}
                onClick={() => navigate(menu.link)}
                style={{
                  color: isScrolled ? "#1f2937" : "white",
                  cursor: "pointer",
                  ...underlineStyle,
                }}
              >
                {menu.name}

                {/* Underline Animation */}
                <span
                  className="hover:w-full w-0 absolute left-0 bottom-0 h-[2px] transition-all duration-300"
                  style={{
                    background: isScrolled ? "#064e3b" : "white",
                  }}
                ></span>
              </span>
            ))}

            <a
              style={{
                padding: "10px 18px",
                background: "#84cc16",
                color: "black",
                borderRadius: "6px",
                fontWeight: 500,
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
    </header>
  );
};

export default MainHeader;
