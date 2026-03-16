import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImg from "../assets/img/banner/page-title.jpg";
import SidebarInner from "../components/SidebarInner";

function CreateProjectPage() {
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Project "${projectName}" created successfully!`);
    navigate("/projects");
  };

  return (
    <div className="main-wrapper">
      <Header />

      {/* PAGE TITLE */}

      <section
        className="page-title-section top-position1 cover-background secondary-overlay"
        style={{
          backgroundImage: `url(${bgImg})`,
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
                <h4 className="text-white mb-4">Create Project</h4>

                <Link
                  to="/projects"
                  className="btn btn-primary text-white mb-4"
                >
                  <i className="fa fa-arrow-left"></i> Back
                </Link>
              </div>

              <div className="row g-4">

                {/* LEFT FORM */}

                <div className="col-lg-7">

                  <form className="card-dark" onSubmit={handleSubmit}>

                    <div className="mb-3">
                      <label>Project Title</label>

                      <input
                        className="form-control"
                        placeholder="Enter project title"
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>Project Type</label>

                      <select className="form-control">
                        <option>Image</option>
                        <option>Video</option>
                        <option>Blog</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label>Upload Media</label>

                      <input
                        className="form-control"
                        type="file"
                      />
                    </div>

                    <div className="mb-3">
                      <label>Video Poster (Optional)</label>

                      <input
                        className="form-control"
                        type="file"
                      />
                    </div>

                    <div className="mb-3">
                      <label>Prompt / Description</label>

                      <textarea
                        className="form-control"
                        placeholder="Describe your AI project or prompt"
                        rows="12"
                        style={{ height: "150px" }}
                      ></textarea>
                    </div>

                    <div className="mb-3">
                      <label>Tags</label>

                      <div className="tag-input">
                        <span className="tag">AI</span>
                        <span className="tag">Image</span>
                        <span className="tag">Art</span>
                      </div>
                    </div>

                    <button className="btn btn-primary">
                      Generate Project
                    </button>

                  </form>

                </div>

                {/* RIGHT PREVIEW */}

                <div className="col-lg-5">

                  <div className="card-dark">

                    <h6 className="mb-3">Preview</h6>

                    <div className="preview-box">
                      Project Preview
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

export default CreateProjectPage;