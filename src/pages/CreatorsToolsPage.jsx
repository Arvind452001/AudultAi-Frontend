import React from "react";
import { NavLink, Link } from "react-router-dom";
import Footer from "../components/Footer";
import bgImg from "../assets/img/banner/page-title.jpg";
import SidebarInner from "../components/SidebarInner";
import HeaderProfile from "../components/HeaderProfile";

function CreatorsToolsPage() {

  const tools = [
    {
      icon: "fa-image",
      title: "Creator Post Generator",
      desc: "Generate Posts And Captions For Creator Platforms.",
      button: "Create Post"
    },
    {
      icon: "fa-reddit",
      title: "Reddit Post AI",
      desc: "Create Engaging Reddit Posts For Communities.",
      button: "Generate Post"
    },
    {
      icon: "fa-film",
      title: "Adult Caption AI",
      desc: "Generate Teasing And Engaging Captions.",
      button: "Generate Caption"
    },
    {
      icon: "fa-lightbulb",
      title: "Daily Content Ideas",
      desc: "Fresh Ideas For Your Next Post.",
      button: "Get Ideas"
    },
    {
      icon: "fa-cube",
      title: "Post Pack Generator",
      desc: "Generate Captions + Image Ideas + Hashtags.",
      button: "Generate Pack"
    },
    {
      icon: "fa-microphone",
      title: "AI Voice",
      desc: "AI Voice Character That Talks Like A Hotline.",
      button: "Start Voice"
    },
    {
      icon: "fa-comment",
      title: "Roleplay Chat AI",
      desc: "Interactive AI Characters For Roleplay Chat.",
      button: "Start Chat"
    },
    {
      icon: "fa-chart-line",
      title: "Fan Growth AI",
      desc: "Generate Strategies To Grow Your Fan Base.",
      button: "Generate Strategy"
    }
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
                  <li>Creators Tools</li>
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
                <h4 className="text-white mb-4">Creators Tools</h4>
              </div>

              {/* FILTER TABS */}
              <div className="filter-tabs mb-4">
                <button className="active">OnlyFans</button>
                <button>LoyalFans</button>
                <button>Reddit</button>
                <button>Fansly</button>
              </div>

              {/* TOOL GRID */}
              <div className="row g-4">

                {tools.map((tool, index) => (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <div className="tool-card">

                      <div className="tool-icon">
                        <i className={`fa ${tool.icon}`}></i>
                      </div>

                      <div className="tool-title">
                        {tool.title}
                      </div>

                      <div className="tool-desc">
                        {tool.desc}
                      </div>

                      <button className="btn-ai">
                        {tool.button}
                      </button>

                    </div>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CreatorsToolsPage;