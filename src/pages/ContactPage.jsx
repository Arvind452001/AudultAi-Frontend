import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bgImg from "../assets/img/banner/page-title.jpg";
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="main-wrapper">
      <Header />

    
      {/* About */}
  <section
        style={{
          backgroundImage: `linear-gradient(rgba(42, 2, 2, 0.85), rgba(58, 2, 2, 0.85)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              color: "#fff",
              fontSize: "30px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "15px",
              textTransform: "uppercase",
            }}
          >
            Contact Us
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
              Contact Us
            </span>
          </div>
        </div>
      </section>
  <ContactSection/>

  <section style={{background: "#080000"}}>
  <div style={{ width: "100%", height: "300px" }}>
    <iframe
      title="map"
      src="https://maps.google.com/maps?q=London&z=14&output=embed"
      width="100%"
      height="100%"
      style={{ border: "0" }}
    />
  </div>
</section>

      <Footer />
    </div>
  )
}

export default ContactPage
