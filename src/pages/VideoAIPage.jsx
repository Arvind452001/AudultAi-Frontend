import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function VideoAIPage() {
  const [prompt, setPrompt] = useState("");
  const [videoGenerated, setVideoGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setVideoGenerated(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="main-wrapper">
      <Header />

      {/* PAGE TITLE */}

      <section className="page-title-section top-position1 bg-img cover-background secondary-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <div className="position-relative">
                  <h4>User Dashboard</h4>
                </div>

                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#!">User Dashboard</a>
                  </li>
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

            <div className="col-lg-3 mb-4">
              <div className="dashboard-sidebar">

                <ul className="list-unstyled dashboard-menu">

                  <li>
                    <a href="user-dashboard.html">
                      <i className="fa fa-home"></i> Dashboard
                    </a>
                  </li>

                  <li>
                    <a href="textai.html">
                      <i className="fa fa-comment"></i> Text AI
                    </a>
                  </li>

                  <li>
                    <a href="imageai.html">
                      <i className="fa fa-image"></i> Image AI
                    </a>
                  </li>

                  <li className="active">
                    <a href="videoai.html">
                      <i className="fa fa-video"></i> Video AI
                    </a>
                  </li>

                  <li>
                    <a href="audioai.html">
                      <i className="fa fa-music"></i> Audio AI
                    </a>
                  </li>

                  <li>
                    <a href="spyai.html">
                      <i className="fa fa-user-secret"></i> Spy AI
                    </a>
                  </li>

                  <li>
                    <a href="creators-tools.html">
                      <i className="fa fa-tools"></i> Creators Tools
                    </a>
                  </li>

                  <li>
                    <a href="projects.html">
                      <i className="fa fa-folder"></i> Projects
                    </a>
                  </li>

                  <li>
                    <a href="marketplace.html">
                      <i className="fa fa-shopping-cart"></i> Marketplace
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-user"></i> Profile
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-cog"></i> Settings
                    </a>
                  </li>

                </ul>

              </div>
            </div>

            {/* MAIN CONTENT */}

            <div className="col-lg-9">

              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
                <h4 className="text-white mb-4">Video AI</h4>
              </div>

              <div className="row mb-4 g-3">

                {/* LEFT SETTINGS */}

                <div className="col-lg-5">

                  <div className="prompt-box">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Cyberpunk girl portrait with neon lights and cinematic lighting"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="setting-card">
                    <h6 className="mb-3">Duration</h6>

                    <div>
                      <button className="option-btn active">10 sec</button>
                      <button className="option-btn">30 sec</button>
                      <button className="option-btn">60 sec</button>
                    </div>

                  </div>

                  <div className="setting-card">

                    <h6 className="mb-3">Format</h6>

                    <div>
                      <button className="option-btn active">
                        Landscape
                      </button>
                      <button className="option-btn">Portrait</button>
                    </div>

                  </div>

                </div>

                {/* VIDEO PREVIEW */}

                <div className="col-lg-7">

                  <div className="preview-card">

                    <h6 className="mb-3">Preview</h6>

                    <video
                      className="preview-video"
                      controls
                      poster="https://picsum.photos/600/350"
                    >

                      <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                      />

                    </video>

                  </div>

                </div>

                {/* GENERATE BUTTON */}

                <div className="col-lg-5">

                  <button
                    onClick={handleGenerate}
                    className="btn btn-primary mb-3 mt-3"
                  >
                    {loading ? "Generating..." : "Generate Video"}
                  </button>

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

export default VideoAIPage;