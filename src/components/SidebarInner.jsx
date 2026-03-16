import React from "react";
import { NavLink } from "react-router-dom";

const SidebarInner = () => {
  return (
    <div className="col-lg-3 mb-4">
      <div className="dashboard-sidebar">
        <ul className="list-unstyled dashboard-menu">
          <li>
            <NavLink to="/dashboard">
              <i className="fa fa-home"></i> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/text-ai">
              <i className="fa fa-comment"></i> Text AI
            </NavLink>
          </li>

          <li>
            <NavLink to="/image-ai">
              <i className="fa fa-image"></i> Image AI
            </NavLink>
          </li>

          <li>
            <NavLink to="/video-ai">
              <i className="fa fa-video"></i> Video AI
            </NavLink>
          </li>

          <li>
            <NavLink to="/audio-ai">
              <i className="fa fa-music"></i> Audio AI
            </NavLink>
          </li>

          <li>
            <NavLink to="/spy-ai">
              <i className="fa fa-user-secret"></i> Spy AI
            </NavLink>
          </li>

          <li>
            <NavLink to="/creators-tools">
              <i className="fa fa-tools"></i> Creators Tools
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects">
              <i className="fa fa-folder"></i> Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/marketplace">
              <i className="fa fa-shopping-cart"></i> Marketplace
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile">
              <i className="fa fa-user"></i> Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <i className="fa fa-cog"></i> Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarInner;
