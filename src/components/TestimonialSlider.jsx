import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section
      style={{
        background: "#000",
        padding: "120px 0",
        textAlign: "center",
      }}
    >
      <div className="container">
        <span class="sm-title">Our Testimonials</span>
        <h2
          style={{
            color: "#fff",
            fontWeight: "600",
            marginBottom: "50px",
          }}
        >
          What Our Client Says?
        </h2>

        <Slider {...settings}>
          {/* testimonial 1 */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
            }}
          >
            <p
              style={{
                color: "#d5d5d5",
                maxWidth: "850px",
                marginBottom: "40px",
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              SSOBOX helped streamline our company systems and improve digital
              security. Their services are reliable and extremely easy to
              integrate into existing workflows.
            </p>

            <img
              src="https://bootdey.com/img/Content/avatar/avatar2.png"
              alt="user"
              style={{
                width: "60px",
                borderRadius: "50%",
                margin: "0 auto 10px",
                display: "block",
              }}
            />

            <h5 style={{ color: "#fff" }}>Paul Smith</h5>
          </div>

          {/* testimonial 2 */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
            }}
          >
            <p
              style={{
                color: "#d5d5d5",
                maxWidth: "850px",
                marginBottom: "40px",
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              SSOBOX is known for its professional and reliable services. Our
              team of experts is dedicated to delivering high-quality solutions
              that meet the needs of our clients. With our extensive experience
              and expertise, you can trust us to provide you with the best
              software as a service (SAAS) solution..
            </p>

            <img
              src="https://bootdey.com/img/Content/avatar/avatar2.png"
              alt="user"
              style={{
                width: "60px",
                borderRadius: "50%",
                margin: "0 auto 10px",
                display: "block",
              }}
            />

            <h5 style={{ color: "#fff" }}>Paul Smith</h5>
          </div>
        </Slider>
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "25px",
            marginTop: "40px",
          }}
        >
          <button
            onClick={() => sliderRef.current.slickPrev()}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "60px",
              cursor: "pointer",
            }}
          >
          <i className="bi bi-arrow-left-short"></i>
          </button>

          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#ff0000",
              borderRadius: "50%",
            }}
          ></div>

          <button
            onClick={() => sliderRef.current.slickNext()}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "60px",
              cursor: "pointer",
            }}
          >
            <i class="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
