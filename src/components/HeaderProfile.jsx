import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logos/logo.png";

const HeaderProfile = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const wrapperRef = useRef(null);

  // Toggle Profile
  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    setMenuOpen(false);
  };

  // Toggle Hamburger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setProfileOpen(false);
  };

  // Close all dropdowns
  const closeAll = () => {
    setProfileOpen(false);
    setMenuOpen(false);
  };

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      closeAll();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={wrapperRef} style={{ width: "100%", fontFamily: "Arial" }}>
      {/* HEADER */}
      <div
        style={{
          height: "70px",
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          color: "#fff",
          position: "relative",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            height: "",
          }}
        >
          <img src={logo} alt="" />
          {/* <h2 style={{ margin: 0, fontWeight: "700" }}>XynthraAI</h2> */}
        </div>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "40px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            <Link
              to="/"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              HOME
            </Link>

            <Link
              to="/about"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              ABOUT US
            </Link>

            {/* <Link
              to="/blogs"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              BLOGS
            </Link> */}

            <Link
              to="/contact"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              CONTACT US
            </Link>
          </div>
        )}

        {/* RIGHT SIDE */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {/* PROFILE */}
          <div
            onClick={toggleProfile}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              position: "relative",
              padding: "6px 10px",
              borderRadius: "6px",
              border: profileOpen ? "2px solid #720606" : "none",
            }}
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
              }}
            />

            <span>John</span>

            {/* PROFILE DROPDOWN */}
            {profileOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "55px",
                  right: "0",
                  width: "190px",
                  background: "#f1f1f1",
                  color: "#000",
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                }}
              >
                <div style={menuItem}>👤 My Profile</div>
                <div style={menuItem}>💳 My Credits</div>
                <div style={menuItem}>⚙ Settings</div>

                <div
                  style={{
                    ...menuItem,
                    color: "red",
                    borderBottom: "none",
                  }}
                >
                  🚪 Logout
                </div>
              </div>
            )}
          </div>

          {/* HAMBURGER BUTTON */}
          {isMobile && (
            <div
              onClick={toggleMenu}
              style={{
                width: "45px",
                height: "45px",
                background: "#7c0000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div>
                <div style={bar}></div>
                <div style={bar}></div>
                <div style={bar}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE NAVIGATION */}

      {menuOpen && isMobile && (
        <div
          style={{
            background: "#fff",
            color: "#000",
            borderTop: "1px solid #ccc",
          }}
        >
          <Link
            to="/"
            style={{
              ...mobileItem,
              textDecoration: "none",
              color: "#000",
              display: "block",
            }}
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>

          <Link
            to="/about"
            style={{
              ...mobileItem,
              textDecoration: "none",
              color: "#000",
              display: "block",
            }}
            onClick={() => setMenuOpen(false)}
          >
            ABOUT US
          </Link>

          <Link
            to="/blogs"
            style={{
              ...mobileItem,
              textDecoration: "none",
              color: "#000",
              display: "block",
            }}
            onClick={() => setMenuOpen(false)}
          >
            BLOGS
          </Link>

          <Link
            to="/contact"
            style={{
              ...mobileItem,
              textDecoration: "none",
              color: "#000",
              display: "block",
            }}
            onClick={() => setMenuOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </div>
  );
};

// Styles
const menuItem = {
  padding: "12px 16px",
  borderBottom: "1px solid #ddd",
  cursor: "pointer",
  fontSize: "14px",
};

const mobileItem = {
  padding: "18px 25px",
  borderBottom: "1px solid #ccc",
  fontWeight: "600",
  letterSpacing: "1px",
  cursor: "pointer",
};

const bar = {
  width: "20px",
  height: "2px",
  background: "#fff",
  marginBottom: "4px",
};

export default HeaderProfile;
