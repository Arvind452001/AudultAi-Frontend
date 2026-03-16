import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logos/logo-inner.png";

const ContactHeader = () => {
  return (
    <header className="header-style1 menu_area-light">

      <div className="navbar-default border-bottom border-color-light-white">

        {/* TOP SEARCH */}

        <div className="top-search bg-primary">
          <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">

            <form className="search-form">

              <div className="input-group">

                <span className="input-group-addon cursor-pointer">
                  <button
                    className="search-form_submit fas fa-search text-white"
                    type="submit"
                  ></button>
                </span>

                <input
                  type="text"
                  className="search-form_input form-control"
                  placeholder="Type & hit enter..."
                />

                <span className="input-group-addon close-search mt-1">
                  <i className="fas fa-times"></i>
                </span>

              </div>

            </form>

          </div>
        </div>

        {/* NAVBAR */}

        <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">

          <div className="row align-items-center">

            <div className="col-12">

              <div className="menu_area alt-font">

                <nav className="navbar navbar-expand-lg navbar-light p-0">

                  {/* LOGO */}

                  <div className="navbar-header navbar-header-custom">

                    <Link to="/" className="navbar-brand">
                      <img id="logo" src={logo} alt="logo" />
                    </Link>

                  </div>

                  <button
                    className="navbar-toggler bg-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  {/* MENU */}

                  <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto" id="nav">

                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>

                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#">
                          Pages
                        </a>

                        <ul className="dropdown-menu">

                          <li>
                            <Link className="dropdown-item" to="/about">
                              About Us
                            </Link>
                          </li>

                          <li>
                            <Link className="dropdown-item" to="/faq">
                              FAQ
                            </Link>
                          </li>

                          <li>
                            <Link className="dropdown-item" to="/pricing">
                              Pricing
                            </Link>
                          </li>

                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/services">
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">
                          Portfolio
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/blog">
                          Blog
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>

                    </ul>

                  </div>

                  {/* RIGHT SIDE BUTTONS */}

                  <div className="attr-nav align-items-xl-center ms-xl-auto main-font">

                    <ul className="d-flex align-items-center gap-3">

                      <li>
                        <a href="#">
                          <i className="fas fa-search"></i>
                        </a>
                      </li>

                      <li className="d-none d-xl-inline-block">
                        <Link
                          to="/contact"
                          className="btn-style1 white-hover medium"
                        >
                          <span>Free Quote</span>
                        </Link>
                      </li>

                    </ul>

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

export default ContactHeader;