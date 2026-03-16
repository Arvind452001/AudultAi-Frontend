import React, { useState, useEffect } from "react";
import bgImg from "../assets/img/bg/bg-07.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "SSOBOX has revolutionized the way we manage our digital access. Their platform is user-friendly and secure.",
      author: "Paul Smith",
      avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 2,
      text: "Amazing platform for managing applications securely. Highly recommended for businesses.",
      author: "Paul Smith",
      avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 3,
      text: "SSOBOX has revolutionized the way we manage our digital access. Their platform is user-friendly, secure, and has greatly improved our overall experience. We highly recommend SSOBOX to any business looking for a reliable and efficient solution.",
      author: "Paul Smith",
      avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        padding: "80px 0",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.8)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="text-center mb-5">
          <span className="sm-title text-white">Our Testimonials</span>
          <h2 className="text-white">What Our Client Says?</h2>
        </div>

        {/* Slider */}
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transform: `translateX(-${index * 100}%)`,
              transition: "transform 0.8s ease",
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                style={{
                  minWidth: "100%",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <p className="text-white mb-4">{item.text}</p>

                <img
                  src={item.avatar}
                  alt=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginBottom: "10px",
                  }}
                />

                <h5 className="text-white">{item.author}</h5>
                <div class="d-flex justify-content-center align-items-center gap-3 fs-4">
                  <i class="bi bi-arrow-left text-white"></i>
                  <i class="bi bi-dot text-danger"></i>
                  <i class="bi bi-arrow-right text-white"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
