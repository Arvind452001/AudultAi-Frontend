import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logos/logo.png";

const Header = () => {
  return (
    <header style={{ background: "#000", borderBottom: "1px solid #111" }}>
      <div className="container-fluid px-4 py-4">

        <nav className="navbar navbar-expand-lg navbar-dark">

          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={logo} alt="logo" style={{ height: "40px" }} />
            {/* <span style={{ fontSize: "24px", fontWeight: "600", color: "#fff" }}>
              XynthraAI
            </span> */}
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-lg-4">

              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/">
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/about">
                  ABOUT US
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/blogs">
                  BLOGS
                </Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/contact">
                  CONTACT US
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/video-ai">
                  Video-AI
                </Link>
              </li>

            </ul>
          </div>

          {/* Login Button */}
          <div className="d-none d-lg-block">
            <Link
              to="/login"
              style={{
                background: "#ff1a1a",
                padding: "10px 20px",
                borderRadius: "8px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600"
              }}
            >
              <i className="fa fa-user me-2"></i>
              LOGIN
            </Link>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;