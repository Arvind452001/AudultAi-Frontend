import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
 import {Link} from "react-router-dom";
import SidebarInner from "../components/SidebarInner";

function MarketplacePage() {
  return (
    <div className="main-wrapper">
      <Header />

      {/* PAGE TITLE */}
      <section
        className="page-title-section top-position1 bg-img cover-background secondary-overlay"
        data-overlay-dark="7"
        data-background="img/banner/page-title.jpg"
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
                  <li>
                    <Link to="/dashboard">User Dashboard</Link>
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
            <SidebarInner />

            {/* MAIN CONTENT */}
            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
                <h4 className="text-white mb-4">Marketplace</h4>

                <NavLink
                  to="/sell-product"
                  className="btn btn-primary text-white mb-4"
                >
                  Sell AI Product
                </NavLink>
              </div>

              {/* STATS */}
              <div className="row g-4 mb-4">
                <div className="col-lg-3">
                  <div className="ai-tool-card">
                    <small className="text-white">Total Revenue</small>
                    <h3>$2,480</h3>
                    <p className="text-success small">+12% this month</p>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="ai-tool-card">
                    <small className="text-white">Total Sales</small>
                    <h3>182</h3>
                    <p className="text-success small">+8% growth</p>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="ai-tool-card">
                    <small className="text-white">Products</small>
                    <h3>24</h3>
                    <p className="text-white small">Published</p>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="ai-tool-card">
                    <small className="text-white">Pending Payout</small>
                    <h3>$320</h3>
                    <p className="text-warning small">Awaiting withdraw</p>
                  </div>
                </div>
              </div>

              {/* CHART */}
              <div className="card-dark border-0 mb-4">
                <div className="card-body">
                  <h6 className="mb-3">Sales Analytics</h6>
                  <canvas height="100" id="salesChart"></canvas>
                </div>
              </div>

              {/* RECENT SALES */}
              <div className="card-dark border-0">
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between gap-3 mb-3">
                    <h6 className="mb-3">Recent Sales</h6>

                    <NavLink to="/sales-list" className="btn btn-primary">
                      All Sales
                    </NavLink>
                  </div>

                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product</th>
                          <th>Buyer</th>
                          <th>Price</th>
                          <th>Date</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="https://picsum.photos/400/250?6"
                              style={{ width: "50px", borderRadius: "10px" }}
                              alt="product"
                            />
                          </td>
                          <td>Anime Prompt Pack</td>
                          <td>john@email.com</td>
                          <td>$5</td>
                          <td>Mar 12</td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src="https://picsum.photos/400/250?7"
                              style={{ width: "50px", borderRadius: "10px" }}
                              alt="product"
                            />
                          </td>
                          <td>AI Voice Pack</td>
                          <td>alex@email.com</td>
                          <td>$9</td>
                          <td>Mar 11</td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src="https://picsum.photos/400/250?8"
                              style={{ width: "50px", borderRadius: "10px" }}
                              alt="product"
                            />
                          </td>
                          <td>Story Prompt Kit</td>
                          <td>emma@email.com</td>
                          <td>$6</td>
                          <td>Mar 10</td>
                        </tr>
                      </tbody>
                    </table>
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

export default MarketplacePage;
