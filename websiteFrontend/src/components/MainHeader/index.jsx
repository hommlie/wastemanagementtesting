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
import { useNavigate } from "react-router-dom";
import HelpModal from "../../Pages/HelpModal";

const MainHeader = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isGetAppModalOpen, setIsGetAppModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = [
    { name: "Technology", link: "/technology" },
    { name: "Segments", link: "/segments" },
    { name: "Environmental Solutions", link: "/environment" },
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

  return (
    <>
      {/* BACKDROP FOR MOBILE MENU */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[40]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* HEADER */}
      <header
        className={
          isScrolled
            ? "fixed top-0 left-0 w-full z-[50] bg-[rgba(255,255,255,0.55)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.3)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-[350ms]"
            : "fixed top-0 lg:top-[10px] left-0 z-[50] w-full lg:w-[1350px] lg:ml-[-20px] bg-transparent shadow-none transition-all duration-[350ms]"
        }
      >
        {/* TOP BAR - DESKTOP ONLY */}
        {!isScrolled && !isMobile && (
          <div className="max-w-[1350px] mx-auto ml-[-80px] py-[6px] px-[40px] flex justify-end items-center gap-[28px] text-[14px] font-semibold text-white whitespace-nowrap">
            <button
              onClick={() => setIsGetAppModalOpen(true)}
              className="flex items-center gap-1"
            >
              <FiDownload /> Get App
            </button>

            <button
              onClick={() => setIsHelpModalOpen(true)}
              className="flex items-center gap-1"
            >
              <FiHeadphones /> Help
            </button>

            <a className="flex items-center gap-[6px] text-white">
              <FiFileText size={15} /> Certifications
            </a>
            <a className="flex items-center gap-[6px] text-white">
              <FiClock size={15} /> Schedule & ETA
            </a>
            <a className="flex items-center gap-[6px] text-white">
              <FiCreditCard size={15} /> Make a Payment
            </a>
            <a className="flex items-center gap-[6px] text-white">
              <FiUser size={15} /> Log In ▾
            </a>
          </div>
        )}

        {/* NAVIGATION ROW */}
        <div
          className={
            "max-w-[1450px] mx-auto flex justify-between items-center transition-all lg:mr-[-100px] " +
            (isScrolled ? "py-[10px] px-[40px]" : "py-[16px] px-[30px]")
          }
        >
          {/* LOGO */}
          <img
            src={isScrolled ? "/ecospare-logo.png" : "/ecospherelogo.png"}
            className={
              (isScrolled
                ? "h-[65px] lg:h-[70px] mt-[-0px] -ml-4 lg:ml-10"
                : "h-[85px] lg:h-[105px] mt-[-10px] lg:mt-[-60px] -ml-10 lg:-ml-0") +
              " transition-all duration-[400ms] cursor-pointer"
            }
            onClick={() => navigate("/")}
          />

          {/* MOBILE HAMBURGER ICON */}
          {isMobile && (
            <button onClick={() => setIsMenuOpen(true)} className="mr-2">
              <FiMenu
                size={32}
                className={isScrolled ? "text-[#1f2937]" : "text-white"}
              />
            </button>
          )}

          {/* DESKTOP NAVIGATION */}
          {!isMobile && (
            <nav
              className={
                isScrolled
                  ? "flex gap-[32px] text-[16px] font-semibold flex-1 justify-center ml-[100px]"
                  : "flex gap-[40px] text-[16px] font-semibold flex-1 justify-center text-white"
              }
            >
              {menus.map((menu, i) => (
                <span
                  key={i}
                  onClick={() => navigate(menu.link)}
                  className={
                    "relative pb-[4px] cursor-pointer " +
                    (isScrolled ? "text-[#1f2937]" : "text-white")
                  }
                >
                  {menu.name}
                  <span
                    className={
                      "absolute left-0 bottom-0 h-[2px] w-0 hover:w-full transition-all " +
                      (isScrolled ? "bg-[#064e3b]" : "bg-white")
                    }
                  />
                </span>
              ))}

              <a className="py-[10px] px-[18px] bg-[#84cc16] text-black rounded-[6px] font-medium cursor-pointer whitespace-nowrap mt-[-10px]">
                Partner With Us
              </a>
            </nav>
          )}
        </div>
      </header>

      <div
        className={
          "fixed top-0 left-0 h-full w-[70%] sm:w-[55%] max-w-[320px] bg-white z-[60] shadow-2xl p-7 transform transition-all duration-500 ease-out " +
          (isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0")
        }
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-5 right-5 text-gray-600 hover:text-black transition"
          onClick={() => setIsMenuOpen(false)}
        >
          <FiX size={28} />
        </button>

        {/* LOGO */}
        <img
          src="/ecospare-logo.png"
          className="h-[55px] mb-10 mt-4 ml-1"
          onClick={() => {
            navigate("/");
            setIsMenuOpen(false);
          }}
        />

        {/* MENU ITEMS */}
        <div className="flex flex-col gap-7 text-[18px] font-semibold text-gray-800 tracking-wide ml-1">
          {menus.map((menu, i) => (
            <span
              key={i}
              onClick={() => {
                navigate(menu.link);
                setIsMenuOpen(false);
              }}
              className="cursor-pointer hover:text-emerald-700 transition-colors"
            >
              {menu.name}
            </span>
          ))}

          {/* PARTNER BUTTON */}
          <button
            onClick={() => {
              navigate("/partner");
              setIsMenuOpen(false);
            }}
            className="
              mt-6 py-3 px-6 
              bg-[#84cc16] 
              rounded-lg 
              font-semibold 
              text-black 
              text-left 
              w-fit
              hover:bg-[#76b814]
              transition-all 
              shadow-md
            "
          >
            Partner With Us
          </button>
        </div>
      </div>

      {isGetAppModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[90]">
          <div className="bg-white p-6 rounded-xl relative max-w-sm shadow-xl">
            <button
              onClick={() => setIsGetAppModalOpen(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-600"
            >
              ×
            </button>

            <h2 className="text-xl font-bold text-center mb-4 text-emerald-700">
              Download the Ecosphere App
            </h2>

            <p className="text-gray-700 text-sm text-center mb-5">
              Book services faster, track orders, and earn rewards.
            </p>

            <div className="flex justify-center gap-4">
              <img src="/playstore.svg" className="h-10" />
              <img src="/appstore.svg" className="h-10" />
            </div>
          </div>
        </div>
      )}

      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />
    </>
  );
};

export default MainHeader;
