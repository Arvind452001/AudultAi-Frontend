import React from "react";
import { Link } from "react-router-dom";   // If you plan to use Link instead of <a>
import Footer from "../components/Footer";
import bgImg from "../assets/img/banner/page-title.jpg";
import TestimonialSlider from "../components/TestimonialSlider";
import HeaderSearch from "../components/HeaderSearch";

function AboutPage() {
  return (
    <div className="main-wrapper">
      {/* Header – ensure this component renders correctly */}
      
       {/* HEADER */}
      <div style={{ position: "relative", zIndex: 9999 }}>
        <HeaderSearch />
      </div>

      {/* Banner Section */}
      <section
        className="page-title-section top-position1 bg-img cover-background secondary-overlay"
        data-overlay-dark="7"
        data-background="img/banner/page-title.jpg"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <div className="position-relative">
                  <h1>About Us</h1>
                </div>
                <ul>
                  <li><Link to="/">Home</Link></li>   {/* Use Link for internal navigation */}
                  <li><Link to="/about">About Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT Section */}
      <section className="about-style-01">
        <div className="container">
          <div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-xl-5 mt-1-9">
                <div className="about-us-section position-relative">
                  <div className="about-image one image-hover">
                    <img
                      src="img/about.jpg"   // Make sure the image path is correct or import it
                      alt="about"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-7 mt-1-9">
                <div className="ps-1-9">
                  <div className="about-content">
                    <div className="section-title mb-1-9">
                      <span className="sm-title">About Us</span>
                      <h2 className="mb-0 h1">Welcome To Us</h2>
                    </div>

                    <p style={{ textAlign: "justify" }}>
                      Our software as a service (SAAS) solution provides a
                      seamless and integrated platform for customers to securely
                      access their applications, devices, and technology. With
                      our cutting-edge technology and commitment to safety, we
                      ensure that your digital experience is always secure and
                      reliable. Whether you are a business owner or an
                      individual, SSOBOX is here to simplify your digital access
                      journey. At SSOBOX, we understand the importance of safe
                      and responsible digital access. Our team of experts has
                      developed a state-of-the-art platform that prioritizes
                      security and user experience. With our innovative
                      solutions, you can rest assured that your data and
                      information are protected at all times. Join us on this
                      digital transformation journey and experience the
                      convenience and peace of mind that SSOBOX brings. Contact
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

      {/* WHY CHOOSE US (Cards) */}
      <section className="why-choose-style01 bg-light position-relative overflow-visible">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {/* Card 1 */}
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="200ms">
                  <div
                    className="d-flex mb-4"
                    style={{
                      boxShadow: "0px 10px 60px 0px rgba(0,0,0,0.07)",
                      background: "#fff",
                      padding: "15px",
                      borderRadius: "25px 0px 25px 0px",
                      minHeight: "220px",
                    }}
                  >
                    <div className="flex-shrink-0 me-3">
                      <div className="why-choose-icons">
                        <i className="fa-solid fa-medal"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="mb-sm-3 mb-2">
                        Safe and Seamless Digital Access
                      </h4>
                      <p className="mb-sm-1-9 mb-4">
                        Our first primary service is all about enabling safe and
                        seamless digital access. We offer innovative solutions
                        that ensure your applications, devices, and technology
                        are easily accessible and secure.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="200ms">
                  <div
                    className="d-flex mb-4"
                    style={{
                      boxShadow: "0px 10px 60px 0px rgba(0,0,0,0.07)",
                      background: "#fff",
                      padding: "15px",
                      borderRadius: "25px 0px 25px 0px",
                      minHeight: "220px",
                    }}
                  >
                    <div className="flex-shrink-0 me-3">
                      <div className="why-choose-icons">
                        <i className="fa-solid fa-medal"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="mb-sm-3 mb-2">
                        Enhanced Digital Experience
                      </h4>
                      <p>
                        Our second primary service is dedicated to enhancing
                        your digital access experience. We provide advanced
                        features and functionalities that optimize the
                        performance and usability of your applications, devices,
                        and technology.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="200ms">
                  <div
                    className="d-flex mb-4"
                    style={{
                      boxShadow: "0px 10px 60px 0px rgba(0,0,0,0.07)",
                      background: "#fff",
                      padding: "15px",
                      borderRadius: "25px 0px 25px 0px",
                      minHeight: "220px",
                    }}
                  >
                    <div className="flex-shrink-0 me-3">
                      <div className="why-choose-icons">
                        <i className="fa-solid fa-medal"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="mb-sm-3 mb-2">
                        Digital Access Management
                      </h4>
                      <p>
                        Our third primary service is designed to simplify and
                        streamline your digital access. With our cutting-edge
                        technology and user-friendly interface, you can easily
                        manage your applications, devices, and technology with
                        confidence and convenience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="200ms">
                  <div
                    className="d-flex mb-4"
                    style={{
                      boxShadow: "0px 10px 60px 0px rgba(0,0,0,0.07)",
                      background: "#fff",
                      padding: "15px",
                      borderRadius: "25px 0px 25px 0px",
                      minHeight: "220px",
                    }}
                  >
                    <div className="flex-shrink-0 me-3">
                      <div className="why-choose-icons">
                        <i className="fa-solid fa-medal"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="mb-sm-3 mb-2">
                        Secure and Responsible Digital Access
                      </h4>
                      <p>
                        Our fourth primary service focuses on providing secure
                        and responsible digital access. We prioritize the
                        protection of your data and ensure that your digital
                        interactions are safe and private.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <TestimonialSlider />

      {/* WHY CHOOSE US (Text Cards) */}
      <section>
        <div className="container">
          <div className="section-title mb-1-9 mb-md-6 text-center">
            <span className="sm-title">Why Choose Us</span>
            <h2 className="mb-0 h1">We are the best in Industry</h2>
          </div>

          <div className="row mt-n1-9 gx-xxl-5">
            <div className="col-md-6 col-lg-4 mt-1-9 wow fadeInUp" data-wow-delay="200ms">
              <div className="card card-style-01 p-2-9">
                <span className="pricing-top">Professional</span>
                <div className="card-body p-0 mt-5">
                  <p>
                    SSOBOX is known for its professional and reliable services. Our team of experts is dedicated to delivering high-quality solutions that meet the needs of our clients. With our extensive experience and expertise, you can trust us to provide you with the best software as a service (SAAS) solution.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mt-1-9 wow fadeInUp" data-wow-delay="200ms">
              <div className="card card-style-01 p-2-9">
                <span className="pricing-top">Trustworthy</span>
                <div className="card-body p-0 mt-5">
                  <p>
                    SSOBOX is known for its professional and reliable services. Our team of experts is dedicated to delivering high-quality solutions that meet the needs of our clients. With our extensive experience and expertise, you can trust us to provide you with the best software as a service (SAAS) solution.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mt-1-9 wow fadeInUp" data-wow-delay="200ms">
              <div className="card card-style-01 p-2-9">
                <span className="pricing-top">Responsible</span>
                <div className="card-body p-0 mt-5">
                  <p>
                    SSOBOX is known for its professional and reliable services. Our team of experts is dedicated to delivering high-quality solutions that meet the needs of our clients. With our extensive experience and expertise, you can trust us to provide you with the best software as a service (SAAS) solution.
                  </p>
                </div>
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