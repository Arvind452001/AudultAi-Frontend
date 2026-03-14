import React from "react";

const Footer = () => {
  return (
    <footer style={{ background: "#000", color: "#fff", padding: "60px 0 25px" }}>
      <div className="container">
        <div className="row">

          {/* Left */}
          <div className="col-lg-5 mb-4">
            <h3 style={{ color: "#ff2b2b", fontWeight: "700", fontSize: "28px" }}>
              SSOBOX
            </h3>

            <p
              style={{
                marginTop: "12px",
                lineHeight: "1.8",
                fontSize: "18px",
                maxWidth: "450px",
              }}
            >
              Enjoy seamless and secure authentication across all your
              applications, devices, and technology. Say goodbye to multiple
              login hassles and embrace a simplified login experience with
              SSOBOX.
            </p>
          </div>

          {/* Contact */}
          <div className="col-lg-4 mb-4">
            <h4 style={{ marginBottom: "15px", fontWeight: "600", fontSize: "22px" }}>
              Contact
            </h4>

            <p style={{ marginBottom: "8px", fontSize: "18px" }}>
              <a
                href="mailto:info@test.com"
                style={{ color: "#9ecfff", textDecoration: "underline" }}
              >
                info@test.com
              </a>
            </p>

            <p style={{ marginBottom: "18px", fontWeight: "600", fontSize: "18px" }}>
              +XX XXX-XXX-XXXX
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <div style={iconBox}>
                <i className="fab fa-facebook-f"></i>
              </div>

              <div style={iconBox}>
                <i className="fab fa-twitter"></i>
              </div>

              <div style={iconBox}>
                <i className="fab fa-youtube"></i>
              </div>

              <div style={iconBox}>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="col-lg-3">
            <h4 style={{ marginBottom: "15px", fontWeight: "600", fontSize: "22px" }}>
              Address
            </h4>

            <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
              Lorem Ipsum — <br />
              18 N 3rd E Street Downey, <br />
              Lechase Park, Uijred Stahse.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #222",
            marginTop: "35px",
            paddingTop: "15px",
            textAlign: "center",
            fontSize: "17px",
          }}
        >
          © {new Date().getFullYear()} SSOBOX. All rights reserved.
        </div>
      </div>

      {/* Scroll Top */}
      <div
        style={{
          position: "fixed",
          right: "30px",
          bottom: "30px",
          width: "42px",
          height: "42px",
          background: "#ff0000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <i className="fa fa-angle-up"></i>
      </div>
    </footer>
  );
};

const iconBox = {
  width: "42px",
  height: "42px",
  background: "#111",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "18px",
};

export default Footer;