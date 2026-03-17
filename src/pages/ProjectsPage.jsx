import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import bgImg from "../assets/img/banner/page-title.jpg";
import SidebarInner from "../components/SidebarInner";
import HeaderProfile from "../components/HeaderProfile";

function ProjectsPage() {
  return (
    <div className="main-wrapper">
      <div style={{ position: "relative", zIndex: 9999 }}>
         <HeaderProfile />
      </div>

      <section
        className="page-title-section top-position1 bg-img cover-background secondary-overlay"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImg})`,
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
                    <a href="index.html">Home</a>
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

      {/* <!-- DASHBOARD --> */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* <!-- SIDEBAR --> */}

            <SidebarInner />

            {/* <!-- MAIN CONTENT --> */}
            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
                <h4 className="text-white mb-4">Projects</h4>
                <Link
                  to="/create-project"
                  className="btn btn-primary text-white mb-4"
                >
                  <i className="fa fa-plus"></i> Create New
                </Link>
              </div>

              <div className="page-header mb-4">
                <input
                  className="form-control search-box mt-3"
                  placeholder="Search Project"
                />
              </div>
              {/* <!-- FILTERS --> */}
              <div className="mb-4">
                <button className="filter-btn active">All</button>{" "}
                <button className="filter-btn">Blogs</button>{" "}
                <button className="filter-btn">Images</button>{" "}
                <button className="filter-btn">Video</button>
              </div>
              <div className="row g-4">
                {/* <!-- PROJECT 1 --> */}
                <div className="col-lg-4 col-md-6">
                  <div className="project-card">
                    <img
                      className="project-img"
                      src="https://picsum.photos/400/300?1"
                    />
                    <div className="project-body">
                      <div className="project-title">Manga Style Portrait</div>
                      <div className="project-meta mt-2">
                        <span className="tag">Image</span> <span>Mar 05</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 2 VIDEO --> */}
                <div className="col-lg-4 col-md-6">
                  <div className="project-card">
                    <video
                      className="project-img"
                      controls=""
                      poster="https://picsum.photos/400/300?2"
                    >
                      <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                      />
                    </video>

                    <div className="project-body">
                      <div className="project-title">Animation Short Clip</div>
                      <div className="project-meta mt-2">
                        <span className="tag">Video</span> <span>Mar 04</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 3 --> */}
                <div className="col-lg-4 col-md-6">
                  <div className="project-card">
                    <img
                      className="project-img"
                      src="https://picsum.photos/400/300?3"
                    />
                    <div className="project-body">
                      <div className="project-title">Creative AI Artwork</div>
                      <div className="project-meta mt-2">
                        <span className="tag">Image</span> <span>Mar 02</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 4 VIDEO --> */}
                <div className="col-lg-4 col-md-6">
                  <div className="project-card">
                    <video
                      className="project-img"
                      controls=""
                      poster="https://picsum.photos/400/300?4"
                    >
                      <source
                        src="https://www.w3schools.com/html/movie.mp4"
                        type="video/mp4"
                      />
                    </video>

                    <div className="project-body">
                      <div className="project-title">Anime Music Scene</div>
                      <div className="project-meta mt-2">
                        <span className="tag">Video</span> <span>Mar 01</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 5 --> */}
                <div className="col-lg-4 col-md-6">
                  <div className="project-card">
                    <img
                      className="project-img"
                      src="https://picsum.photos/400/300?5"
                    />
                    <div className="project-body">
                      <div className="project-title">AI Fashion Model</div>
                      <div className="project-meta mt-2">
                        <span className="tag">Image</span> <span>Feb 28</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 6 --> */}
                <div className="col-lg-4 col-md-6">
                  <div className="project-card">
                    <img
                      className="project-img"
                      src="https://picsum.photos/400/300?6"
                    />
                    <div className="project-body">
                      <div className="project-title">Fantasy Landscape</div>
                      <div className="project-meta mt-2">
                        <span className="tag">Image</span> <span>Feb 25</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 7 --> */}
                <div className="col-lg-4 col-md-6">
                  <div className="project-card">
                    <img
                      className="project-img"
                      src="https://picsum.photos/400/300?7"
                    />
                    <div className="project-body">
                      <div className="project-title">Gaming Character Design</div>
                      <div className="project-meta mt-2">
                        <span className="tag">Image</span> <span>Feb 22</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 8 --> */}
                <div className="col-lg-4 col-md-6">
                  <div className="project-card">
                    <img
                      className="project-img"
                      src="https://picsum.photos/400/300?8"
                    />
                    <div className="project-body">
                      <div className="project-title">AI Blog Article</div>
                      <div className="project-meta mt-2">
                        <span className="tag">Blog</span> <span>Feb 20</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 9 --> */}
                <div className="col-lg-4 col-md-6">
                  <div className="project-card">
                    <img
                      className="project-img"
                      src="https://picsum.photos/400/300?9"
                    />
                    <div className="project-body">
                      <div className="project-title">YouTube Script Generator</div>
                      <div className="project-meta mt-2">
                        <span className="tag">Blog</span> <span>Feb 18</span>
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

export default ProjectsPage;
