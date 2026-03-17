import React, { useState } from "react";
import Footer from "../components/Footer";
import SidebarInner from "../components/SidebarInner";
import HeaderProfile from "../components/HeaderProfile";
   import bgImg from "../assets/img/banner/page-title.jpg";
import { Link } from "react-router-dom";
function TextAIPage() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setOutput(
        `Generated text based on: "${prompt}"\n\nThis is a sample output. Connect to your AI API to generate real content.`
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="main-wrapper">
      <div style={{ position: "relative", zIndex: 9999 }}>
         <HeaderProfile />
      </div>

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
                        <h4>Create Text</h4>
                      </div>
      
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>Create Text / Blog</li>
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
                <h4 className="text-white mb-4">Create Text / Blog</h4>
              </div>

              <div className="row mb-4 g-3">
                <div className="col-lg-12">

                  {/* TEMPLATE */}
                  <div className="card-dark">
                    <h6>Select Template</h6>

                    <div className="mt-3 d-flex gap-3 flex-wrap">
                      <label className="template-radio">
                        <input type="radio" name="template" defaultChecked />
                        <span>Story</span>
                      </label>

                      <label className="template-radio">
                        <input type="radio" name="template" />
                        <span>Caption</span>
                      </label>

                      <label className="template-radio">
                        <input type="radio" name="template" />
                        <span>Prompt</span>
                      </label>

                      <label className="template-radio">
                        <input type="radio" name="template" />
                        <span>Article</span>
                      </label>

                      <label className="template-radio">
                        <input type="radio" name="template" />
                        <span>Idea</span>
                      </label>
                    </div>
                  </div>

                  {/* PROMPT */}
                  <div className="card-dark prompt mt-3">
                    <h6>Your Prompt</h6>

                    <textarea
                      className="form-control bg-light-dark text-white border-0 mt-2"
                      placeholder="Write what you want AI to generate..."
                      rows="4"
                      style={{ height: "150px" }}
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    ></textarea>
                  </div>

                  {/* TONE */}
                  <div className="card-dark mt-3">
                    <h6>Tone</h6>

                    <select className="form-select bg-light-dark text-white border mt-2">
                      <option>Professional</option>
                      <option>Creative</option>
                      <option>Funny</option>
                      <option>Friendly</option>
                      <option>Storytelling</option>
                    </select>
                  </div>

                  {/* GENERATE BUTTON */}
                  <button
                    className="btn btn-red w-100 mt-3"
                    onClick={handleGenerate}
                    disabled={loading}
                  >
                    <i className="fa fa-bolt"></i>{" "}
                    {loading ? "Generating..." : "Generate Text"}
                  </button>

                  {/* OUTPUT */}
                  {output && (
                    <div className="card-dark mt-3">
                      <h6>Generated Output</h6>
                      <p style={{ whiteSpace: "pre-line" }}>{output}</p>
                    </div>
                  )}

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

export default TextAIPage;