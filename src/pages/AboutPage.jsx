import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import bannerImg from "../assets/img/banner/page-title.jpg";
import bgImg from "../assets/img/banner/page-title.jpg";
import TestimonialSlider from "../components/TestimonialSlider";

function AboutPage() {
  return (
    <div className="main-wrapper">
      <Header />

      <section
        style={{
          backgroundImage: `linear-gradient(rgba(42, 2, 2, 0.85), rgba(58, 2, 2, 0.85)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              color: "#fff",
              fontSize: "56px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "15px",
              textTransform: "uppercase",
            }}
          >
            ABOUT US
          </h1>

          <div
            className="d-flex justify-content-center align-items-center"
            style={{ gap: "12px", fontSize: "18px" }}
          >
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Home
            </Link>

            <span
              style={{
                color: "#ff2c2c",
                fontWeight: "700",
              }}
            >
              —
            </span>

            <span
              style={{
                color: "#cfcfcf",
                fontWeight: "600",
              }}
            >
              About Us
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        className="about-style-01"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <div className="container">
          <div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-xl-5 mt-1-9">
                <div className="about-us-section position-relative">
                  <div className="about-image one image-hover">
                    <img
                      src="/img/about.jpg"
                      alt="..."
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-7 mt-1-9">
                <div className="ps-1-9">
                  <div className="about-content">
                    <div className="section-title mb-1-9">
                      <span className="sm-title fs-6">About Us</span>
                      <h2 className="mb-0 h1 text-white">Welcome To Us</h2>
                    </div>

                    <p style={{ textAlign: "justify" }}>
                      Our software as a service (SAAS) solution provides a
                      seamless and integrated platform for customers to securely
                      access their applications, devices, and technology. With
                      our cutting-edge technology and commitment to safety, we
                      ensure that your digital experience is always secure and
                      reliable. Whether you are a business owner or an
                      individual, SSOBOX is here to simplify your digital access
                      journey.At SSOBOX, we understand the importance of safe
                      and responsible digital access. Our team of experts has
                      developed a state-of-the-art platform that prioritizes
                      security and user experience. With our innovative
                      solutions, you can rest assured that your data and
                      information are protected at all times. Join us on this
                      digital transformation journey and experience the
                      convenience and peace of mind that SSOBOX brings.Contact
                      us today to learn more about our services and how we can
                      assist you in achieving your digital goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-5" style={{ background: "#f3f3f3" }}>
        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-6">
              <div
                className="d-flex align-items-center"
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "40px 0px  40px 0px",
                  boxShadow: "0px 10px 40px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "65px",
                    height: "65px",
                    lineHeight: "65px",
                    aspectRatio: "1 / 1",
                    backgroundColor: "#FF0000",
                    color: "#fff",
                    display: "flex",
                    borderRadius: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "25px",
                  }}
                >
                  <i className="fa-solid fa-medal"></i>
                </div>

                <div>
                  <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                    Safe and Seamless Digital Access
                  </h4>

                  <p style={{ color: "#9aa0a6", marginBottom: "0" }}>
                    Our first primary service is all about enabling safe and
                    seamless digital access. We offer innovative solutions that
                    ensure your applications, devices, and technology are easily
                    accessible and secure.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-6">
              <div
                className="d-flex align-items-center"
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "40px 0px  40px 0px",
                  boxShadow: "0px 10px 40px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "65px",
                    height: "65px",
                    lineHeight: "65px",
                    aspectRatio: "1 / 1",
                    backgroundColor: "#FF0000",
                    color: "#fff",
                    display: "flex",
                    borderRadius: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "25px",
                  }}
                >
                  <i className="fa-solid fa-medal"></i>
                </div>

                <div>
                  <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                    Enhanced Digital Experience
                  </h4>

                  <p style={{ color: "#9aa0a6", marginBottom: "0" }}>
                    Our second primary service is dedicated to enhancing your
                    digital access experience. We provide advanced features and
                    functionalities.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-6">
              <div
                className="d-flex align-items-center"
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "40px 0px  40px 0px",
                  boxShadow: "0px 10px 40px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "65px",
                    height: "65px",
                    lineHeight: "65px",
                    aspectRatio: "1 / 1",
                    backgroundColor: "#FF0000",
                    color: "#fff",
                    display: "flex",
                    borderRadius: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "25px",
                  }}
                >
                  <i className="fa-solid fa-medal"></i>
                </div>

                <div>
                  <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                    Digital Access Management
                  </h4>

                  <p style={{ color: "#9aa0a6", marginBottom: "0" }}>
                    Our third primary service is designed to simplify and
                    streamline your digital access with modern technology and
                    secure systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-6">
              <div
                className="d-flex align-items-center"
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "40px 0px  40px 0px",
                  boxShadow: "0px 10px 40px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "65px",
                    height: "65px",
                    lineHeight: "65px",
                    aspectRatio: "1 / 1",
                    backgroundColor: "#FF0000",
                    color: "#fff",
                    display: "flex",
                    borderRadius: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "25px",
                  }}
                >
                  <i className="fa-solid fa-medal"></i>
                </div>

                <div>
                  <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                    Secure and Responsible Digital Access
                  </h4>

                  <p style={{ color: "#9aa0a6", marginBottom: "0" }}>
                    Our fourth primary service focuses on providing secure and
                    responsible digital access while protecting your data and
                    privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <TestimonialSlider />

      {/* WHY CHOOSE US */}

      <section style={{ background: "#000", padding: "100px 0" }}>
        <div className="container">
        <div class="section-title mb-1-9 mb-md-6 text-center">
                    <span class="sm-title">Why Choose Us</span>
                    <h2 class="mb-0 h1" style={{ color: "#fff"}}>We are the best in Industry</h2>
                </div>
          <div className="row g-4">
            {/* CARD 1 */}

            <div className="col-md-6 col-lg-4">
              <div
                style={{
                  background: "#e6e6e6",
                  padding: "50px 35px",
                  position: "relative",
                  minHeight: "360px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "0px",
                    background: "#1c2430",
                    color: "#fff",
                    padding: "8px 18px",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                  }}
                >
                  PROFESSIONAL
                </span>

                <p
                  style={{
                    marginTop: "50px",
                    color: "#111",
                    lineHeight: "1.9",
                    fontSize: "16px",
                  }}
                >
                  SSOBOX is known for its professional and reliable services.
                  Our team of experts is dedicated to delivering high-quality
                  solutions that meet the needs of our clients. With our
                  extensive experience and expertise, you can trust us to
                  provide you with the best software as a service (SAAS)
                  solution.
                </p>
              </div>
            </div>

            {/* CARD 2 */}

            <div className="col-md-6 col-lg-4">
              <div
                style={{
                  background: "#e6e6e6",
                  padding: "50px 35px",
                  position: "relative",
                  minHeight: "360px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    background: "#1c2430",
                    color: "#fff",
                    padding: "8px 18px",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                  }}
                >
                  TRUSTWORTHY
                </span>

                <p
                  style={{
                    marginTop: "50px",
                    color: "#111",
                    lineHeight: "1.9",
                    fontSize: "16px",
                  }}
                >
                  SSOBOX is known for its professional and reliable services.
                  Our team of experts is dedicated to delivering high-quality
                  solutions that meet the needs of our clients. With our
                  extensive experience and expertise, you can trust us to
                  provide you with the best software as a service (SAAS)
                  solution.
                </p>
              </div>
            </div>

            {/* CARD 3 */}

            <div className="col-md-6 col-lg-4">
              <div
                style={{
                  background: "#e6e6e6",
                  padding: "50px 35px",
                  position: "relative",
                  minHeight: "360px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "0px",
                    background: "#1c2430",
                    color: "#fff",
                    padding: "8px 18px",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                  }}
                >
                  RESPONSIBLE
                </span>

                <p
                  style={{
                    marginTop: "50px",

                    color: "#111",
                    lineHeight: "1.9",
                    fontSize: "16px",
                  }}
                >
                  SSOBOX is known for its professional and reliable services.
                  Our team of experts is dedicated to delivering high-quality
                  solutions that meet the needs of our clients. With our
                  extensive experience and expertise, you can trust us to
                  provide you with the best software as a service (SAAS)
                  solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
