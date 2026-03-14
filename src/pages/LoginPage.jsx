import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function LoginPage() {
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  const handlePhoneLogin = (e) => {
    e.preventDefault()
    if (phone.trim()) {
      navigate('/otp-verify', { state: { phone } })
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
                <h4 className="mb-4 text-center">Login to your account</h4>
                <form onSubmit={handlePhoneLogin}>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      className="form-control"
                      placeholder="+XX XXXXXXXXX"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <button className="btn btn-login mt-3 text-white" type="submit">
                    Login with Phone
                  </button>
                </form>
                <div className="divider">OR</div>
                <button className="btn btn-google d-flex align-items-center justify-content-center gap-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" width="18" alt="google" />
                  Continue with Google
                </button>
                <p className="text-center mt-4 text-white">
                  Don't have an account? <span style={{color: '#ff2c2c'}}>Sign up</span>
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

export default LoginPage
