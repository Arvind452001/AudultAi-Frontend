import React from "react";

const ContactSection = () => {

  const labelStyle = {
    fontSize: "13px",
    color: "#666",
    marginBottom: "6px",
    display: "block",
  };

  const inputStyle = {
    width: "100%",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px",
    fontSize: "13px",
  };

  const socialIcon = {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "#3d4652",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "14px",
  };

  return (
    <div style={{ padding: "60px", background: "#000" }}>
      <section style={{ background: "#fff", padding: "50px 0" }}>
        <div className="container">
          <div className="row">

            {/* LEFT FORM */}

            <div className="col-lg-7">

              <h2
                style={{
                  fontSize: "26px",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "#222",
                }}
              >
                Write Us Something
              </h2>

              <form>
                <div className="row">

                  {/* NAME */}

                  <div className="col-md-6 mb-3">
                    <label style={labelStyle}>
                      Your Name <span style={{ color: "red" }}>*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Your name here"
                      style={inputStyle}
                    />
                  </div>

                  {/* EMAIL */}

                  <div className="col-md-6 mb-3">
                    <label style={labelStyle}>
                      Your Email <span style={{ color: "red" }}>*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Your email here"
                      style={inputStyle}
                    />
                  </div>

                  {/* SUBJECT */}

                  <div className="col-md-6 mb-3">
                    <label style={labelStyle}>
                      Your Subject <span style={{ color: "red" }}>*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Your subject here"
                      style={inputStyle}
                    />
                  </div>

                  {/* PHONE */}

                  <div className="col-md-6 mb-3">
                    <label style={labelStyle}>Contact Number</label>

                    <input
                      type="text"
                      placeholder="Your phone here"
                      style={inputStyle}
                    />
                  </div>

                  {/* MESSAGE */}

                  <div className="col-md-12 mb-3">
                    <label style={labelStyle}>
                      Message <span style={{ color: "red" }}>*</span>
                    </label>

                    <textarea
                      rows="3"
                      placeholder="Tell us a few words"
                      style={inputStyle}
                    />
                  </div>

                  {/* CAPTCHA */}

                  <div className="col-md-12 mb-3">

                    <input
                      type="text"
                      placeholder="Type the below word"
                      style={inputStyle}
                    />

                    <div
                      style={{
                        marginTop: "8px",
                        fontStyle: "italic",
                        color: "#777",
                        fontSize: "13px"
                      }}
                    >
                      catch
                    </div>

                  </div>

                  {/* BUTTON */}

                  <div className="col-md-12 mt-3">

                    <button
                      style={{
                        background: "#ff0000",
                        border: "none",
                        color: "#fff",
                        padding: "10px 24px",
                        fontWeight: "600",
                        cursor: "pointer",
                        fontSize: "13px"
                      }}
                    >
                      SEND MESSAGE
                    </button>

                  </div>

                </div>
              </form>

            </div>

            {/* RIGHT CONTACT CARD */}

            <div className="col-lg-5">

              <div
                style={{
                  background: "linear-gradient(135deg,#1e2733,#2c3440)",
                  borderRadius: "8px",
                  padding: "25px",
                  color: "#fff",
                }}
              >

                <span
                  style={{
                    color: "#ff0000",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  CONTACT
                </span>

                <div
                  style={{
                    width: "50px",
                    height: "2px",
                    background: "#ccc",
                    margin: "8px 0 16px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      background: "red",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "22px",
                      top: "-3px",
                    }}
                  ></span>
                </div>

                <h5 style={{ marginBottom: "25px" }}>
                  Our Contact Detail
                </h5>

                {/* EMAIL */}

                <div className="d-flex align-items-start mb-3">

                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "#bfc3c7",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "15px",
                    }}
                  >
                    <img src="/img/icons/04.png" style={{ width: "20px" }} />
                  </div>

                  <div>
                    <h6 style={{ marginBottom: "3px" }}>Send E-Mail</h6>
                    <p style={{ color: "#c2c7ce", margin: 0 }}>
                      info@example.com
                    </p>
                  </div>

                </div>

                <hr style={{ borderColor: "#3d4652" }} />

                {/* PHONE */}

                <div className="d-flex align-items-start mb-3">

                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "#bfc3c7",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "15px",
                    }}
                  >
                    <img src="/img/icons/05.png" style={{ width: "20px" }} />
                  </div>

                  <div>
                    <h6 style={{ marginBottom: "3px" }}>Call Anytime</h6>
                    <p style={{ color: "#c2c7ce", margin: 0 }}>
                      +44 205-658-1823
                    </p>
                  </div>

                </div>

                <hr style={{ borderColor: "#3d4652" }} />

                {/* LOCATION */}

                <div className="d-flex align-items-start mb-3">

                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "#bfc3c7",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "15px",
                    }}
                  >
                    <img src="/img/icons/03.png" style={{ width: "20px" }} />
                  </div>

                  <div>
                    <h6 style={{ marginBottom: "3px" }}>Locations</h6>
                    <p style={{ color: "#c2c7ce", margin: 0 }}>
                      66 Guild Street 512B, Great North Town.
                    </p>
                  </div>

                </div>

                {/* SOCIAL */}

                <div
                  style={{ marginTop: "20px", display: "flex", gap: "10px" }}
                >

                  <div style={socialIcon}>
                    <i className="fab fa-facebook-f"></i>
                  </div>

                  <div style={socialIcon}>
                    <i className="fab fa-twitter"></i>
                  </div>

                  <div style={socialIcon}>
                    <i className="fab fa-linkedin-in"></i>
                  </div>

                  <div style={socialIcon}>
                    <i className="fab fa-pinterest-p"></i>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;