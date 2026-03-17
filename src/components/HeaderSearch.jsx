import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logos/logo.png";
const HeaderSearch = () => {

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const wrapperRef = useRef(null);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSearchOpen(false);
  };

  const closeAll = () => {
    setSearchOpen(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

      {/* SEARCH BAR */}
      <div
        style={{
          width: "100%",
          background: "#8b0000",
          padding: searchOpen ? "12px 20px" : "0px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          overflow: "hidden",
          height: searchOpen ? "60px" : "0px",
          opacity: searchOpen ? 1 : 0,
          transform: searchOpen ? "translateY(0)" : "translateY(-10px)",
          transition: "all 0.35s ease"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, color: "#fff", }}>
          🔍︎
          <input
            type="text"
            placeholder="Type & hit enter..."
            style={{
              flex: 1,
              height: "36px",
              background: "transparent",
              border: "none",
              color: "#fff",
              outline: "none",
              fontSize: "15px"
            }}
          />
        </div>

        <div
          onClick={() => setSearchOpen(false)}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            marginLeft: "10px",
            color: "#fff"
          }}
        >
          ✕
        </div>
      </div>

      {/* HEADER */}
      <div
        style={{
          height: "70px",
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          color: "#fff"
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
              letterSpacing: "1px"
            }}
          >
            <Link to="/" style={navLink}>HOME</Link>
            <Link to="/about" style={navLink}>ABOUT US</Link>
            {/* <Link to="/blogs" style={navLink}>BLOGS</Link> */}
            <Link to="/contact" style={navLink}>CONTACT US</Link>
          </div>
        )}

        {/* RIGHT SIDE */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>

          {/* SEARCH ICON */}
          <div
            onClick={toggleSearch}
            style={{ cursor: "pointer", fontSize: "20px" }}
          >
            🔍︎
          </div>

          {/* HAMBURGER */}
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
                cursor: "pointer"
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

      {/* MOBILE MENU */}
     <div
  style={{
    position: "absolute",
    top: "70px",
    left: "0",
    width: "100%",
    background: "#fff",
    color: "#000",
    borderTop: "1px solid #ccc",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",

    transform: menuOpen && isMobile
      ? "translateY(0)"
      : "translateY(-20px)",

    opacity: menuOpen && isMobile ? 1 : 0,
    pointerEvents: menuOpen && isMobile ? "auto" : "none",

    transition: "all 0.35s ease",
    zIndex: 9999
  }}
>
  <Link to="/" style={mobileItem} onClick={()=>setMenuOpen(false)}>HOME</Link>
  <Link to="/about" style={mobileItem} onClick={()=>setMenuOpen(false)}>ABOUT US</Link>
  {/* <Link to="/blogs" style={mobileItem} onClick={()=>setMenuOpen(false)}>BLOGS</Link> */}
  <Link to="/contact" style={mobileItem} onClick={()=>setMenuOpen(false)}>CONTACT US</Link>
</div>

    </div>
  );
};

const navLink = {
  cursor: "pointer",
  textDecoration: "none",
  color: "#fff"
};

const mobileItem = {
  display: "block",
  padding: "18px 25px",
  borderBottom: "1px solid #ccc",
  fontWeight: "600",
  letterSpacing: "1px",
  cursor: "pointer",
  textDecoration: "none",
  color: "#000"
};

const bar = {
  width: "20px",
  height: "2px",
  background: "#fff",
  marginBottom: "4px"
};

export default HeaderSearch;