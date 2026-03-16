import React, { useState, useEffect } from "react";
import slide01 from "../assets/img/banner/slide-01.jpg";
import slide04 from "../assets/img/banner/slide-04.jpg";
import shape1 from "../assets/img/content/shape-1.png";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: slide04, title: "Create AI Content Faster Than Ever" },
    { image: slide01, title: "Create AI Content Faster Than Ever" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="py-0 top-position1 banner-style01 position-relative">

      <div className="w-100">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item bg-img cover-background full-screen secondary-overlay ${
              index === currentSlide ? "d-block" : "d-none"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container position-relative z-index-9">
              <div className="row align-items-center min-vh-100 text-center justify-content-center">
                <div className="col-lg-8">

                  <div className="mt-5 mt-sm-0">

                    <p className="mb-2 text-primary text-uppercase letter-spacing-4 d-block font-weight-700">
                      Strategic . Innovate . Excellence
                    </p>

                    <h1 className="mb-2-9 main-title text-white">
                      {slide.title}
                    </h1>

                    <p className="text-white mb-4">
                      Generate images, audio, profiles and powerful AI content
                      in seconds using our advanced AI platform.
                    </p>

                    <a href="#" className="btn-style1 white-hover">
                      <span>Get Started</span>
                    </a>

                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* decorative shapes */}

      <div className="bg-primary p-14 p-lg-20 p-xxl-24 d-inline-block rounded-circle position-absolute left-n10 left-lg-n15 left-xl-n10 bottom-n15 ani-top-bottom z-index-1 d-none d-md-block"></div>

      <img
        src={shape1}
        className="position-absolute right-5 top-10 z-index-3 ani-left-right d-none d-md-block"
        alt=""
      />

      <div className="d-inline-block p-3 border border-width-2 border-white-color top-20 left-10 ani-move position-absolute rounded-circle z-index-1"></div>

    </section>
  );
};

export default Banner;