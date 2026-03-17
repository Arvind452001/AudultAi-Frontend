import React from "react";
import { NavLink, Link } from "react-router-dom";
import Footer from "../components/Footer";
import bgImg from "../assets/img/banner/page-title.jpg";
import SidebarInner from "../components/SidebarInner";
import HeaderProfile from "../components/HeaderProfile";

function DashboardPage() {
  const stats = [
    { label: "Images", value: 120 },
    { label: "Videos", value: 34 },
    { label: "Audio", value: 58 },
    { label: "Credits", value: 450 },
  ];

  const aiTools = [
    { name: "Text AI", icon: "fa-comment", path: "/text-ai" },
    { name: "Image AI", icon: "fa-image", path: "/image-ai" },
    { name: "Video AI", icon: "fa-video", path: "/video-ai" },
    { name: "Audio AI", icon: "fa-music", path: "/audio-ai" },
    { name: "Spy AI", icon: "fa-user-secret", path: "/spy-ai" },
    { name: "Creator Tools", icon: "fa-tools", path: "/creator-tools" },
  ];

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
                <h4 className="text-white mb-4">User Dashboard</h4>

                <Link
                  to="/marketplace"
                  className="btn btn-primary text-white mb-4"
                >
                  Marketplace
                </Link>
              </div>

              {/* STATS */}
              <div className="row mb-4 g-3">
                {stats.map((stat, index) => (
                  <div className="col-md-3 col-6" key={index}>
                    <div className="dashboard-card text-center">
                      <h6>{stat.label}</h6>
                      <h3>{stat.value}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI TOOLS */}
              <h5 className="text-white mb-3">AI Tools</h5>

              <div className="row g-3 mb-5">
                {aiTools.map((tool, index) => (
                  <div className="col-md-4 col-6" key={index}>
                    <NavLink to={tool.path}>
                      <div className="ai-tool-card">
                        <i className={`fa ${tool.icon}`}></i> {tool.name}
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>

              {/* RECENT ACTIVITY */}
              <div>
                <h5 className="mb-3">Recent Activity</h5>

                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tool</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>#1021</td>
                      <td>Image AI</td>
                      <td>20 Mar 2026</td>
                      <td>
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>

                    <tr>
                      <td>#1022</td>
                      <td>Video AI</td>
                      <td>20 Mar 2026</td>
                      <td>
                        <span className="badge bg-warning">Processing</span>
                      </td>
                    </tr>

                    <tr>
                      <td>#1023</td>
                      <td>Audio AI</td>
                      <td>19 Mar 2026</td>
                      <td>
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DashboardPage;
