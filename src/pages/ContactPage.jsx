import React, { useState } from "react";
import Footer from "../components/Footer";
import bgImg from "../assets/img/banner/page-title.jpg";
import { Link } from "react-router-dom";
import Header from "../components/Header";


function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    alert("Thank you for contacting us! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="main-wrapper">
       <Header />

    {/* PAGE TITLE */}
                <section
                  className="page-title-section top-position1 bg-img cover-background secondary-overlay"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="text-center">
                          <div className="position-relative">
                            <h4>Contact Us</h4>
                          </div>
          
                          <ul>
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>Contact Us</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

      {/* CONTACT FORM */}

    <section>
  <div className="container">
    <div className="contact-us">
      <div className="row mt-n2-9">

        <div className="col-lg-7 mt-2-9">
          <h2 className="text-secondary mb-4 h1">Write Us Something</h2>

          <form
            className="contact quform"
            action="https://spiral.websitelayout.net/quform/contact.php"
            method="post"
            encType="multipart/form-data"
          >
            <div className="quform-elements">
              <div className="row">

                <div className="col-md-6">
                  <div className="quform-element form-group">
                    <label htmlFor="name">
                      Your Name <span className="quform-required">*</span>
                    </label>
                    <div className="quform-input">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name here"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="quform-element form-group">
                    <label htmlFor="email">
                      Your Email <span className="quform-required">*</span>
                    </label>
                    <div className="quform-input">
                      <input
                        className="form-control"
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Your email here"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="quform-element form-group">
                    <label htmlFor="subject">
                      Your Subject <span className="quform-required">*</span>
                    </label>
                    <div className="quform-input">
                      <input
                        className="form-control"
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Your subject here"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="quform-element form-group">
                    <label htmlFor="phone">Contact Number</label>
                    <div className="quform-input">
                      <input
                        className="form-control"
                        id="phone"
                        type="text"
                        name="phone"
                        placeholder="Your phone here"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="quform-element form-group">
                    <label htmlFor="message">
                      Message <span className="quform-required">*</span>
                    </label>
                    <div className="quform-input">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        placeholder="Tell us a few words"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="quform-element">
                    <div className="form-group">
                      <div className="quform-input">
                        <input
                          className="form-control"
                          id="type_the_word"
                          type="text"
                          name="type_the_word"
                          placeholder="Type the below word"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="quform-captcha">
                        <div className="quform-captcha-inner">
                          <img
                            src="quform/images/captcha/courier-new-light.png"
                            alt="captcha"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="quform-submit-inner">
                    <button className="btn-style1 border-0" type="submit">
                      <span>Send Message</span>
                    </button>
                  </div>
                  <div className="quform-loading-wrap text-start">
                    <span className="quform-loading"></span>
                  </div>
                </div>

              </div>
            </div>
          </form>
        </div>

        <div className="col-lg-5 mt-2-9">
          <div className="contact-details">
            <div className="row">
              <div className="section-title mb-1-9">
                <span className="sm-title">Contact</span>
                <h2 className="h4 text-white">Our Contact Detail</h2>
              </div>

              <div className="col-lg-12">
                <div className="contact-info">
                  <div className="contacts-icon">
                    <img src="img/icons/04.png" alt="icon" />
                  </div>
                  <div className="contacts-title">
                    <h5 className="text-white font-weight-600 display-28">
                      Send E-Mail
                    </h5>
                    <h6 className="text-white font-weight-400">
                      info@example.com
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="contact-info">
                  <div className="contacts-icon upper">
                    <img src="img/icons/05.png" alt="icon" />
                  </div>
                  <div className="contacts-title">
                    <h5 className="text-white font-weight-600 display-28">
                      Call Anytime
                    </h5>
                    <h6 className="text-white font-weight-400">
                      +44 205-658-1823
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="contact-info upper2">
                  <div className="contacts-icon">
                    <img src="img/icons/03.png" alt="icon" />
                  </div>
                  <div className="contacts-title">
                    <h5 className="text-white font-weight-600 display-28">
                      Locations
                    </h5>
                    <h6 className="text-white font-weight-400">
                      66 Guild Street 512B, Great North Town.
                    </h6>
                  </div>
                </div>
              </div>

              <div className="follow-company-icon2">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* MAP */}

      <section className="p-0">

        <iframe
          title="google-map"
          className="contact-map"
          src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
        ></iframe>

      </section>

      <Footer />

    </div>
  );
}

export default ContactPage;