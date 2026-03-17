import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section
      className="bg-img cover-background secondary-overlay parallax"
      style={{
        backgroundImage: "url('/img/bg/bg-07.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "120px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center mt-n1-9">
          <div className="col-lg-12 mt-1-9 text-center">
            <div className="pe-xl-1-9">
              <div className="section-title mb-1-9 mb-md-6 text-center">
                <span className="sm-title">Our Testimonials</span>
                <h2 className="mb-0 h1 text-white">What Our Client Says?</h2>
              </div>

              {/* React Slick Slider */}
              <Slider {...settings}>
                {/* testimonial 1 */}
                <div>
                  <p className="text-white mb-4 opacity9">
                    SSOBOX has revolutionized the way we manage our digital
                    access. Their platform is user-friendly, secure, and has
                    greatly improved our overall experience.
                  </p>

                  <div className="d-flex flex-column align-items-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="user"
                      style={{
                        width: "60px",
                        borderRadius: "50%",
                        marginBottom: "10px",
                      }}
                    />

                    <h4 className="text-white">Paul Smith</h4>
                     <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <span>
                        <i
                          className="bi bi-arrow-left"
                          style={{ color: "white", fontSize: "40px" }}
                        ></i>
                      </span>

                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          background: "red",
                          borderRadius: "50%",
                          display: "inline-block",
                        }}
                      ></span>

                      <span>
                        <i
                          className="bi bi-arrow-right"
                          style={{ color: "white", fontSize: "40px" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>

                {/* testimonial 2 */}
                <div>
                  <p className="text-white mb-4 opacity9">
                    SSOBOX provides reliable and secure services that make
                    digital access simple and efficient for our organization.
                  </p>

                  <div className="d-flex flex-column align-items-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="user"
                      style={{
                        width: "60px",
                        borderRadius: "50%",
                        marginBottom: "10px",
                      }}
                    />

                    <h4 className="text-white">Paul Smith</h4>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <span>
                        <i
                          className="bi bi-arrow-left"
                          style={{ color: "white", fontSize: "40px" }}
                        ></i>
                      </span>

                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          background: "red",
                          borderRadius: "50%",
                          display: "inline-block",
                        }}
                      ></span>

                      <span>
                        <i
                          className="bi bi-arrow-right"
                          style={{ color: "white", fontSize: "40px" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
