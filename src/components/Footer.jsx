import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="position-relative bg-light-dark pt-6 pt-lg-8">
      <div className="container">
        <div className="row mt-n1-9 pb-6 pb-lg-8">
          <div className="col-sm-6 col-lg-4 mt-1-9">
            <div className="pe-sm-5">
              <div className="footer-section-title footer mb-1-6">
                <span>About</span>
              </div>

              <p className="text-white opacity9">
                Our AI platform helps creators, marketers, and businesses
                generate powerful AI content effortlessly.
              </p>

              <ul className="social-icon-style3">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* QUICK LINKS */}

          <div className="col-sm-6 col-lg-2 mt-1-9">
            <div className="ps-sm-5 ps-lg-0">
              <div className="footer-section-title footer mb-1-6">
                <span>Quick Links</span>
              </div>

              <ul className="list-unstyled mb-0 list-style3">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* LEGAL LINKS */}

          <div className="col-sm-6 col-lg-3 mt-1-9">
            <div className="ps-lg-4 ps-xl-0 pe-sm-1-6 pe-xl-5">
              <div className="footer-section-title footer mb-1-6">
                <span>Legal Links</span>
              </div>

              <ul className="list-unstyled mb-0 list-style3">
                <li>
                  <Link to="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 mt-1-9">
            <div className="ps-sm-5 ps-lg-0">
              <div className="footer-section-title footer mb-1-6">
                <span>Newsletter</span>
              </div>

              <form
                className="quform"
                action="#"
                method="post"
                encType="multipart/form-data"
              >
                <div className="quform-elements">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="quform-element">
                        <div className="quform-input">
                          <input
                            className="form-control"
                            id="email_address"
                            type="text"
                            name="email_address"
                            placeholder="Subscribe with us"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="quform-submit-inner">
                        <button
                          className="btn-style1 white-hover medium md border-0 w-100"
                          type="submit"
                        >
                          <span>Subscribe</span>
                        </button>
                      </div>
                      <div className="quform-loading-wrap text-center">
                        <span className="quform-loading"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 border-top border-color-light-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <p className="d-inline-block text-white mb-0">
                © <span className="current-year">2026</span> XynthraAI. All
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
