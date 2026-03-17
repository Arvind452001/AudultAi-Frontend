import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logos/logo.png";

const Header = () => {
  return (
    <header className="header-style1 menu_area-light">
      <div className="navbar-default border-bottom border-color-light-white">
        <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            {/* Logo */}
            <Link to="/" className="navbar-brand">
              <img id="logo" src={logo} alt="logo" />
            </Link>

            {/* Right side buttons */}
            <div className="d-flex align-items-center ms-auto">
              {/* Hamburger */}
              <button
                className="navbar-toggler bg-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

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

                {/* Login for Mobile */}
                <li className="nav-item d-lg-none ">
                  <Link className="nav-link btn btn-danger m-1" to="/login">
                    <i className="fa fa-user me-1"></i>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            {/* Login button (Desktop only) */}
            <Link
              to="/login"
              className="btn btn-danger me-2 d-none d-lg-flex align-items-center"
            >
              <i className="fa fa-user me-1"></i>
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
