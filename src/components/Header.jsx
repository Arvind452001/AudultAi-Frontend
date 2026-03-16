import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logos/logo.png";

const Header = () => {
  const [rightMargin, setRightMargin] = useState("100px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setRightMargin("100px");
      } else {
        setRightMargin("20px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header-style1 menu_area-light">
      <div className="navbar-default border-bottom border-color-light-white">
        <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
          <div className="row align-items-center">
            <div className="col-12 col-lg-12">
              <div className="menu_area alt-font">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  {/* Logo */}
                  <div className="navbar-header navbar-header-custom">
                    <Link to="/" className="navbar-brand">
                      <img id="logo" src={logo} alt="logo" />
                    </Link>
                  </div>

                  {/* Hamburger */}
                  <button
                    className="navbar-toggler bg-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  {/* Menu */}
                  <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNav"
                  >
                    <ul className="navbar-nav mx-auto" id="nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/about">
                          About Us
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact Us
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Login Button */}
                  <div
                    style={{
                    //   position: "fixed",
                      right: rightMargin,
                      top: "15px",
                      zIndex: 999,
                    }}
                  >
                    <Link
                      to="/login"
                      style={{
                        background: "#ff0000",
                        color: "#fff",
                        padding: "8px 18px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <i className="fa fa-user"></i>
                      Login
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
