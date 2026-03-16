import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function OTPVerifyPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const navigate = useNavigate();
  const location = useLocation();

  const phone = location.state?.phone || "";

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // auto move next
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalOtp = otp.join("");

    if (finalOtp.length === 4) {
      navigate("/dashboard");
    } else {
      alert("Please enter 4 digit OTP");
    }
  };

  return (
    <div className="main-wrapper">
      <Header />

      <section className="about-style-01 py-5">
        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-6 col-xl-5 mt-1-9">

              <form className="login-card" onSubmit={handleSubmit}>

                <h4 className="text-center">Verify OTP</h4>

                <p className="text-center text-white">
                  Enter the 4 digit code sent to your phone {phone}
                </p>

                {/* OTP INPUTS */}
                <div className="otp-inputs">

                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      className="otp-input"
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) =>
                        handleChange(e.target.value, index)
                      }
                    />
                  ))}

                </div>

                <button className="btn btn-verify text-white">
                  Verify OTP
                </button>

                <div className="resend text-white">
                  Didn't receive code? <span>Resend</span>
                </div>

              </form>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OTPVerifyPage;