import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function OTPVerifyPage() {
  const [otp, setOtp] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const phone = location.state?.phone || ''

  const handleOTPVerify = (e) => {
    e.preventDefault()
    if (otp.trim().length === 4) {
      navigate('/dashboard')
    } else {
      alert('Please enter a 4-digit OTP')
    }
  }

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="about-style-01 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xl-5 mt-1-9">
              <div className="login-card">
                <h4 className="mb-4 text-center">Verify OTP</h4>
                <p className="text-center text-white mb-3">
                  We've sent an OTP to {phone}
                </p>
                <form onSubmit={handleOTPVerify}>
                  <div className="mb-3">
                    <label className="form-label">Enter OTP</label>
                    <input
                      className="form-control"
                      placeholder="0000"
                      type="text"
                      maxLength="4"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                  </div>
                  <button className="btn btn-login mt-3 text-white" type="submit">
                    Verify OTP
                  </button>
                </form>
                <p className="text-center mt-4 text-white">
                  Didn't receive OTP? <span style={{color: '#ff2c2c', cursor: 'pointer'}}>Resend</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OTPVerifyPage
