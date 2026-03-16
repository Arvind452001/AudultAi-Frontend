import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SidebarInner from "../components/SidebarInner";

function SalesListPage() {
  return (
    <div className="main-wrapper">
      <Header />

      {/* PAGE TITLE */}
      <section
        class="page-title-section top-position1 bg-img cover-background secondary-overlay"
        data-overlay-dark="7"
        data-background="img/banner/page-title.jpg"
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
           <SidebarInner/>

            {/* <!-- MAIN CONTENT --> */}
            <div class="col-lg-9">
              <div class="d-flex justify-content-between align-items-center mb-3 border-bottom">
                <h4 class="text-white mb-4">Sales Overview</h4>
                <Link to="/marketplace" class="btn btn-primary text-white mb-4">
                  {" "}
                  <i class="fa fa-arrow-left"></i> Back{" "}
                </Link>
              </div>

              <div class="row g-3 mb-4">
                <div class="col-lg-3 col-md-6">
                  <div class="stat-card">
                    <div class="stat-icon text-danger">
                      <i class="fa fa-dollar-sign"></i>
                    </div>
                    <div>
                      <div class="text-white small">Total Revenue</div>
                      <h5>$2,450</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="stat-card">
                    <div class="stat-icon text-warning">
                      <i class="fa fa-shopping-cart"></i>
                    </div>
                    <div>
                      <div class="text-white small">Total Orders</div>
                      <h5>142</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="stat-card">
                    <div class="stat-icon text-info">
                      <i class="fa fa-box"></i>
                    </div>
                    <div>
                      <div class="text-white small">Products Sold</div>
                      <h5>98</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="stat-card">
                    <div class="stat-icon text-success">
                      <i class="fa fa-clock"></i>
                    </div>
                    <div>
                      <div class="text-white small">Pending</div>
                      <h5>$230</h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- SALES TABLE --> */}
              <div class="card bg-light-dark sales border-0">
                <div class="card-body">
                  <h5 class="mb-3">Recent Sales</h5>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Buyer</th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Commission</th>
                          <th>Status</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center gap-2">
                              <img
                                class="avatar"
                                src="https://i.pravatar.cc/100?img=1"
                              />{" "}
                              Alex Carter
                            </div>
                          </td>
                          <td>Anime Girl Prompt</td>
                          <td>$5</td>
                          <td>$4.5</td>
                          <td>
                            <span class="badge badge-paid">Paid</span>
                          </td>
                          <td>2 May</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center gap-2">
                              <img
                                class="avatar"
                                src="https://i.pravatar.cc/100?img=2"
                              />{" "}
                              John Miller
                            </div>
                          </td>
                          <td>AI Voice Pack</td>
                          <td>$9</td>
                          <td>$8.1</td>
                          <td>
                            <span class="badge badge-paid">Paid</span>
                          </td>
                          <td>2 May</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center gap-2">
                              <img
                                class="avatar"
                                src="https://i.pravatar.cc/100?img=3"
                              />{" "}
                              Sophia Lee
                            </div>
                          </td>
                          <td>Fantasy Prompt Pack</td>
                          <td>$7</td>
                          <td>$6.3</td>
                          <td>
                            <span class="badge badge-pending">Pending</span>
                          </td>
                          <td>1 May</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center gap-2">
                              <img
                                class="avatar"
                                src="https://i.pravatar.cc/100?img=4"
                              />{" "}
                              Michael Ross
                            </div>
                          </td>
                          <td>AI Blog Template</td>
                          <td>$12</td>
                          <td>$10.8</td>
                          <td>
                            <span class="badge badge-paid">Paid</span>
                          </td>
                          <td>1 May</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center gap-2">
                              <img
                                class="avatar"
                                src="https://i.pravatar.cc/100?img=5"
                              />{" "}
                              Emma Wilson
                            </div>
                          </td>
                          <td>AI Story Generator</td>
                          <td>$6</td>
                          <td>$5.4</td>
                          <td>
                            <span class="badge badge-paid">Paid</span>
                          </td>
                          <td>30 Apr</td>
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

export default SalesListPage;
