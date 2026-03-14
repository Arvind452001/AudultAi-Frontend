import React from 'react'
import aboutImg from '../assets/img/about.png'

const About = () => {
  return (
    <section className="about-style-01 bg-light-dark">
      <div className="container">
        <div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-5 mt-1-9">
              <div className="about-us-section position-relative">
                <div className="about-image one image-hover">
                  <img src={aboutImg} alt="About Us" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7 mt-1-9">
              <div className="ps-1-9">
                <div className="about-content">
                  <div className="section-title mb-1-9">
                    <span className="sm-title">About Us</span>
                    <h2 className="mb-0 h1">
                      Generate images, audio, profiles and powerful AI content.
                    </h2>
                  </div>
                  <p>
                    Our AI platform helps creators, marketers, and businesses generate powerful AI content effortlessly. Using advanced machine learning, we provide tools for generating images, audio, insights, and much more.
                  </p>
                  <p>
                    Join thousands of users who are already using our AI to create amazing content and grow their business faster.
                  </p>
                </div>
                <a href="#" className="border-0 btn-style1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
