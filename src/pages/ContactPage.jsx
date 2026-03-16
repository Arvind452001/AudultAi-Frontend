import React, { useState } from "react";
// import Header from "../components/Header";
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
        className="page-title-section top-position1 cover-background secondary-overlay"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <div className="text-center">

                <div className="position-relative">
                  <h1>Contact Us</h1>
                </div>

                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <span>Contact Us</span>
                  </li>
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

              {/* FORM */}

              <div className="col-lg-7 mt-2-9">

                <h2 className="text-secondary mb-4 h1">
                  Write Us Something
                </h2>

                <form onSubmit={handleSubmit}>

                  <div className="row">

                    {/* NAME */}

                    <div className="col-md-6">
                      <div className="form-group">

                        <label htmlFor="name">
                          Your Name <span className="text-danger">*</span>
                        </label>

                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name here"
                          value={formData.name}
                          onChange={handleChange}
                        />

                      </div>
                    </div>

                    {/* EMAIL */}

                    <div className="col-md-6">
                      <div className="form-group">

                        <label htmlFor="email">
                          Your Email <span className="text-danger">*</span>
                        </label>

                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email here"
                          value={formData.email}
                          onChange={handleChange}
                        />

                      </div>
                    </div>

                    {/* SUBJECT */}

                    <div className="col-md-6">
                      <div className="form-group">

                        <label htmlFor="subject">
                          Your Subject <span className="text-danger">*</span>
                        </label>

                        <input
                          className="form-control"
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Your subject here"
                          value={formData.subject}
                          onChange={handleChange}
                        />

                      </div>
                    </div>

                    {/* PHONE */}

                    <div className="col-md-6">
                      <div className="form-group">

                        <label htmlFor="phone">
                          Contact Number
                        </label>

                        <input
                          className="form-control"
                          id="phone"
                          name="phone"
                          type="text"
                          placeholder="Your phone here"
                          value={formData.phone}
                          onChange={handleChange}
                        />

                      </div>
                    </div>

                    {/* MESSAGE */}

                    <div className="col-md-12">
                      <div className="form-group">

                        <label htmlFor="message">
                          Message <span className="text-danger">*</span>
                        </label>

                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="3"
                          placeholder="Tell us a few words"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>

                      </div>
                    </div>

                    {/* BUTTON */}

                    <div className="col-md-12">

                      <button
                        className="btn-style1 border-0"
                        type="submit"
                      >
                        <span>Send Message</span>
                      </button>

                    </div>

                  </div>

                </form>

              </div>

              {/* CONTACT DETAILS */}

              <div className="col-lg-5 mt-2-9">

                <div className="contact-details">

                  <div className="section-title mb-1-9">

                    <span className="sm-title">
                      Contact
                    </span>

                    <h2 className="h4 text-white">
                      Our Contact Detail
                    </h2>

                  </div>

                  <div className="contact-info">

                    <div className="contacts-icon">
                      <img src="/img/icons/04.png" alt="" />
                    </div>

                    <div className="contacts-title">
                      <h5 className="text-white">Send E-Mail</h5>
                      <h6 className="text-white">info@example.com</h6>
                    </div>

                  </div>

                  <div className="contact-info">

                    <div className="contacts-icon">
                      <img src="/img/icons/05.png" alt="" />
                    </div>

                    <div className="contacts-title">
                      <h5 className="text-white">Call Anytime</h5>
                      <h6 className="text-white">+44 205-658-1823</h6>
                    </div>

                  </div>

                  <div className="contact-info">

                    <div className="contacts-icon">
                      <img src="/img/icons/03.png" alt="" />
                    </div>

                    <div className="contacts-title">
                      <h5 className="text-white">Locations</h5>
                      <h6 className="text-white">
                        66 Guild Street 512B, Great North Town.
                      </h6>
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