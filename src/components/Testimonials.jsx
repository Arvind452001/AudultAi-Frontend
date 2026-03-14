import React, { useState, useEffect } from 'react'
import bgImg from '../assets/img/bg/bg-07.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "SSOBOX has revolutionized the way we manage our digital access. Their platform is user-friendly, secure, and has greatly improved our overall experience. We highly recommend SSOBOX to any business looking for a reliable and efficient solution.",
      author: "Paul Smith",
      avatar: "https://bootdey.com/img/Content/avatar/avatar2.png"
    },
    {
      id: 2,
      text: "SSOBOX has revolutionized the way we manage our digital access. Their platform is user-friendly, secure, and has greatly improved our overall experience. We highly recommend SSOBOX to any business looking for a reliable and efficient solution.",
      author: "Paul Smith",
      avatar: "https://bootdey.com/img/Content/avatar/avatar2.png"
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section 
      className="bg-img cover-background primary-overlay parallax"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <div className="row align-items-center mt-n1-9">
          <div className="col-lg-12 mt-1-9 text-center">
            <div className="pe-xl-1-9">
              <div className="section-title mb-1-9 mb-md-6 text-center">
                <span className="sm-title">Our Testimonials</span>
                <h2 className="mb-0 h1 text-white">What Our Client Says?</h2>
              </div>
              <div className="owl-carousel owl-theme testimonial-carousel2">
                <div key={currentTestimonial}>
                  <p className="text-white mb-1-9 display-27 display-xl-26 opacity9">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <div className="align-items-center justify-content-center d-flex">
                    <div className="flex-shrink-0 position-relative">
                      <img 
                        src={testimonials[currentTestimonial].avatar}
                        className="border-radius-50"
                        alt={testimonials[currentTestimonial].author}
                        style={{ width: '50px', borderRadius: '50%' }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="text-white">{testimonials[currentTestimonial].author}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
