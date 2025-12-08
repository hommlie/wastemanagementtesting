import React from "react";

const Footer = () => {
  // helper to check screen width
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#f5f5f8ff",
        color: "#e5e7eb",
        padding: "52px 16px 40px",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* --------------------------------------
                TOP ROW
        ---------------------------------------- */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            justifyContent: "space-between",
          }}
        >
          {/* BRAND */}
          <div style={{ flex: "1 1 260px", maxWidth: "420px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <img
                src="/ecospare-logo.png"
                alt="EcoSphere"
                style={{
                  height: "70px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#000",
                marginBottom: "20px",
              }}
            >
              Technology-driven waste management solutions that combine regulatory
              compliance, environmental responsibility, and transparency.
            </p>

            {/* SOCIAL ICONS */}
            <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
              {[
                { title: "Website", icon: "🔗" },
                { title: "Instagram", icon: "📸" },
                { title: "Community", icon: "👥" },
                { title: "Gallery", icon: "📷" },
              ].map((item) => (
                <button
                  key={item.title}
                  title={item.title}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "999px",
                    backgroundColor: "#020617",
                    border: "1px solid #1f2937",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          {/* --------------------------------------
                MIDDLE THREE COLUMN LINKS
          ---------------------------------------- */}
          <div
            style={{
              flex: "2 1 420px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "28px",
            }}
          >
            {/* Services */}
            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#16a34a",
                  marginBottom: "10px",
                }}
              >
                Services
              </h4>
              <ul style={{ color: "#000", lineHeight: 1.8, padding: 0 }}>
                <li>Dry Waste Management</li>
                <li>Wet Waste Processing</li>
                <li>E-Waste Disposal</li>
                <li>Biomedical Waste</li>
                <li>Construction Debris</li>
                <li>Hazardous Waste</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#16a34a",
                  marginBottom: "10px",
                }}
              >
                Company
              </h4>
              <ul style={{ color: "#000", lineHeight: 1.8, padding: 0 }}>
                <li>About Us</li>
                <li>Technology</li>
                <li>Infrastructure</li>
                <li>Compliance</li>
                <li>Client Portal</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#16a34a",
                  marginBottom: "10px",
                }}
              >
                Resources
              </h4>
              <ul style={{ color: "#000", lineHeight: 1.8, padding: 0 }}>
                <li>Waste Management Guide</li>
                <li>Compliance Checklist</li>
                <li>Sustainability Reports</li>
                <li>Case Studies</li>
                <li>Industry Insights</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid #cbd5e1",
            margin: "30px 0",
          }}
        />

        {/* --------------------------------------
                BOTTOM ROW — DESKTOP = 4 COLUMNS
        ---------------------------------------- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop
              ? "1fr 1fr 1fr 1fr" // DESKTOP → All 4 in one row
              : "repeat(auto-fit, minmax(260px, 1fr))", // MOBILE → stack
            gap: "28px",
            color: "#000",
          }}
        >
          {/* Head Office */}
          <div>
            <h4 style={{ color: "#16a34a", fontWeight: 600, marginBottom: "6px" }}>
              Head Office
            </h4>
            <p style={{ lineHeight: 1.6 }}>
              No 201, Dhammanagi Zeus Apartment, Millers Tank Bund Rd,  
              Vasanth Nagar, Bangalore, Karnataka 560034
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#16a34a", fontWeight: 600, marginBottom: "6px" }}>
              Contact
            </h4>
            <p style={{ lineHeight: 1.6 }}>
              +91 63638 65658 <br />
              info@ecospherewm.com
            </p>
          </div>

          {/* Business Hours */}
          <div>
            <h4 style={{ color: "#16a34a", fontWeight: 600, marginBottom: "6px" }}>
              Business Hours
            </h4>
            <p style={{ lineHeight: 1.6 }}>
              Mon–Sat: 8:00 AM – 8:00 PM <br />
              24/7 Emergency Support
            </p>
          </div>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <img
              src="/mukka-logo.png"
              alt="Mukka Proteins Logo"
              style={{
                height: "60px",
                width: "auto",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
