import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImg from "../assets/img/banner/page-title.jpg";
import SidebarInner from "../components/SidebarInner";

function ProjectsPage() {
  return (
    <div className="main-wrapper">
      <Header />

      <section
        class="page-title-section top-position1 bg-img cover-background secondary-overlay"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-center">
                <div class="position-relative">
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
      <section class="py-5">
        <div class="container">
          <div class="row">
            {/* <!-- SIDEBAR --> */}

            <SidebarInner />

            {/* <!-- MAIN CONTENT --> */}
            <div class="col-lg-9">
              <div class="d-flex justify-content-between align-items-center mb-3 border-bottom">
                <h4 class="text-white mb-4">Projects</h4>
                <Link
                  to="/create-project"
                  className="btn btn-primary text-white mb-4"
                >
                  <i className="fa fa-plus"></i> Create New
                </Link>
              </div>

              <div class="page-header mb-4">
                <input
                  class="form-control search-box mt-3"
                  placeholder="Search Project"
                />
              </div>
              {/* <!-- FILTERS --> */}
              <div class="mb-4">
                <button class="filter-btn active">All</button>{" "}
                <button class="filter-btn">Blogs</button>{" "}
                <button class="filter-btn">Images</button>{" "}
                <button class="filter-btn">Video</button>
              </div>
              <div class="row g-4">
                {/* <!-- PROJECT 1 --> */}
                <div class="col-lg-4 col-md-6">
                  <div class="project-card">
                    <img
                      class="project-img"
                      src="https://picsum.photos/400/300?1"
                    />
                    <div class="project-body">
                      <div class="project-title">Manga Style Portrait</div>
                      <div class="project-meta mt-2">
                        <span class="tag">Image</span> <span>Mar 05</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 2 VIDEO --> */}
                <div class="col-lg-4 col-md-6">
                  <div class="project-card">
                    <video
                      class="project-img"
                      controls=""
                      poster="https://picsum.photos/400/300?2"
                    >
                      <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                      />
                    </video>

                    <div class="project-body">
                      <div class="project-title">Animation Short Clip</div>
                      <div class="project-meta mt-2">
                        <span class="tag">Video</span> <span>Mar 04</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 3 --> */}
                <div class="col-lg-4 col-md-6">
                  <div class="project-card">
                    <img
                      class="project-img"
                      src="https://picsum.photos/400/300?3"
                    />
                    <div class="project-body">
                      <div class="project-title">Creative AI Artwork</div>
                      <div class="project-meta mt-2">
                        <span class="tag">Image</span> <span>Mar 02</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 4 VIDEO --> */}
                <div class="col-lg-4 col-md-6">
                  <div class="project-card">
                    <video
                      class="project-img"
                      controls=""
                      poster="https://picsum.photos/400/300?4"
                    >
                      <source
                        src="https://www.w3schools.com/html/movie.mp4"
                        type="video/mp4"
                      />
                    </video>

                    <div class="project-body">
                      <div class="project-title">Anime Music Scene</div>
                      <div class="project-meta mt-2">
                        <span class="tag">Video</span> <span>Mar 01</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 5 --> */}
                <div class="col-lg-4 col-md-6">
                  <div class="project-card">
                    <img
                      class="project-img"
                      src="https://picsum.photos/400/300?5"
                    />
                    <div class="project-body">
                      <div class="project-title">AI Fashion Model</div>
                      <div class="project-meta mt-2">
                        <span class="tag">Image</span> <span>Feb 28</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 6 --> */}
                <div class="col-lg-4 col-md-6">
                  <div class="project-card">
                    <img
                      class="project-img"
                      src="https://picsum.photos/400/300?6"
                    />
                    <div class="project-body">
                      <div class="project-title">Fantasy Landscape</div>
                      <div class="project-meta mt-2">
                        <span class="tag">Image</span> <span>Feb 25</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 7 --> */}
                <div class="col-lg-4 col-md-6">
                  <div class="project-card">
                    <img
                      class="project-img"
                      src="https://picsum.photos/400/300?7"
                    />
                    <div class="project-body">
                      <div class="project-title">Gaming Character Design</div>
                      <div class="project-meta mt-2">
                        <span class="tag">Image</span> <span>Feb 22</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 8 --> */}
                <div class="col-lg-4 col-md-6">
                  <div class="project-card">
                    <img
                      class="project-img"
                      src="https://picsum.photos/400/300?8"
                    />
                    <div class="project-body">
                      <div class="project-title">AI Blog Article</div>
                      <div class="project-meta mt-2">
                        <span class="tag">Blog</span> <span>Feb 20</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 9 --> */}
                <div class="col-lg-4 col-md-6">
                  <div class="project-card">
                    <img
                      class="project-img"
                      src="https://picsum.photos/400/300?9"
                    />
                    <div class="project-body">
                      <div class="project-title">YouTube Script Generator</div>
                      <div class="project-meta mt-2">
                        <span class="tag">Blog</span> <span>Feb 18</span>
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
