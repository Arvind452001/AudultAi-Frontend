import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImg from "../assets/img/banner/page-title.jpg";
import { Link } from "react-router-dom";
import SidebarInner from "../components/SidebarInner";

function SpyAIPage() {

  return (
    <div className="main-wrapper">
      <Header />

      {/* PAGE TITLE */}

      <section
        className="page-title-section top-position1 cover-background secondary-overlay"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
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

          <SidebarInner />

            {/* MAIN CONTENT */}

            <div className="col-lg-9">

              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
                <h4 className="text-white mb-4">Spy AI Analyzer</h4>
              </div>

              <div className="row mb-4 g-3">

                <div className="col-lg-12">

                  {/* UPLOAD */}

                  <div className="card-ai mb-4">
                    <label className="mb-3">Upload Image / Video</label>

                    <input
                      className="form-control"
                      type="file"
                    />
                  </div>

                  {/* PREVIEW */}

                  <div className="preview-box mb-4">
                    Preview Area
                  </div>

                  {/* ANALYSIS TYPE */}

                  <div className="card-ai mb-4">

                    <h6 className="mb-3">Analysis Type</h6>

                    <button className="option-btn active">
                      Object Detection
                    </button>

                    <button className="option-btn">
                      Face Scan
                    </button>

                    <button className="option-btn">
                      Scene Analysis
                    </button>

                    <button className="option-btn">
                      Text Detection
                    </button>

                  </div>

                  {/* RESULTS */}

                  <div className="card-ai mb-4">

                    <h6 className="mb-3">AI Results</h6>

                    <div className="result-box">

                      Detected Objects:

                      <ul>
                        <li>Person (92%)</li>
                        <li>Laptop (88%)</li>
                        <li>Phone (81%)</li>
                      </ul>

                    </div>

                  </div>

                  {/* BUTTON */}

                  <button className="btn btn-primary">
                    Analyze with AI
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

export default SpyAIPage;