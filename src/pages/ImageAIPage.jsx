import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImg from "../assets/img/banner/page-title.jpg";
import SidebarInner from "../components/SidebarInner";

function ImageAIPage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setImageUrl(
        "https://via.placeholder.com/700x450?text=Generated+AI+Image"
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="main-wrapper">
      <Header />

      {/* PAGE TITLE */}
      <section
        className="page-title-section top-position1 bg-img cover-background secondary-overlay"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <div className="position-relative">
                  <h4>User Dashboard</h4>
                </div>

                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>User Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="py-5">
        <div className="container">
          <div className="row">

            {/* SIDEBAR */}
            <SidebarInner/>

            {/* MAIN CONTENT */}
            <div className="col-lg-9">

              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
                <h4 className="text-white mb-4">Create AI Image</h4>
              </div>

              <div className="row mb-4 g-3">

                {/* LEFT SIDE */}
                <div className="col-lg-5">

                  <div className="card-dark">
                    <h6>Prompt</h6>
                    <textarea
                      className="form-control bg-dark text-white border-0 mt-2"
                      placeholder="Describe the image you want..."
                      rows="4"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="card-dark mt-3">
                    <h6>Style</h6>

                    <select className="form-select bg-dark text-white border-0 mt-2">
                      <option>Realistic</option>
                      <option>Anime</option>
                      <option>Cinematic</option>
                      <option>Fantasy</option>
                    </select>
                  </div>

                  <div className="card-dark mt-3">
                    <h6>Aspect Ratio</h6>

                    <div className="mt-2">
                      <button className="ratio-btn">1:1</button>
                      <button className="ratio-btn">16:9</button>
                      <button className="ratio-btn">9:16</button>
                      <button className="ratio-btn">4:3</button>
                    </div>
                  </div>

                  <div className="card-dark mt-3">
                    <h6>Model</h6>

                    <select className="form-select bg-dark text-white border-0 mt-2">
                      <option>Xynthra Vision v1</option>
                      <option>Realistic Engine</option>
                      <option>Anime Generator</option>
                    </select>
                  </div>

                  <button
                    className="btn btn-red w-100 mt-3"
                    onClick={handleGenerate}
                    disabled={loading}
                  >
                    <i className="fa fa-bolt"></i>{" "}
                    {loading ? "Generating..." : "Generate Image"}
                  </button>

                </div>

                {/* RIGHT SIDE */}
                <div className="col-lg-7">

                  <div className="preview-box">

                    {imageUrl ? (
                      <img src={imageUrl} alt="Generated" />
                    ) : (
                      <img
                        src="https://picsum.photos/700/450"
                        alt="Preview"
                      />
                    )}

                    <div className="row mt-3">

                      <div className="col">
                        <button className="btn btn-red w-100">
                          <i className="fa fa-download"></i> Download
                        </button>
                      </div>

                      <div className="col">
                        <button className="btn btn-outline-light w-100">
                          <i className="fa fa-expand"></i> Upscale
                        </button>
                      </div>

                      <div className="col">
                        <button className="btn btn-outline-light w-100">
                          <i className="fa fa-rotate"></i> Regenerate
                        </button>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ImageAIPage;