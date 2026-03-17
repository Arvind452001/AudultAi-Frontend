import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SidebarInner from "../components/SidebarInner";
import HeaderProfile from "../components/HeaderProfile";
   import bgImg from "../assets/img/banner/page-title.jpg";
function SalesListPage() {
  return (
    <div className="main-wrapper">
       <div style={{ position: "relative", zIndex: 9999 }}>
         <HeaderProfile />
      </div>

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
           <SidebarInner/>

            {/* <!-- MAIN CONTENT --> */}
            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
                <h4 className="text-white mb-4">Sales Overview</h4>
                <Link to="/marketplace" className="btn btn-primary text-white mb-4">
                  {" "}
                  <i className="fa fa-arrow-left"></i> Back{" "}
                </Link>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-lg-3 col-md-6">
                  <div className="stat-card">
                    <div className="stat-icon text-danger">
                      <i className="fa fa-dollar-sign"></i>
                    </div>
                    <div>
                      <div className="text-white small">Total Revenue</div>
                      <h5>$2,450</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stat-card">
                    <div className="stat-icon text-warning">
                      <i className="fa fa-shopping-cart"></i>
                    </div>
                    <div>
                      <div className="text-white small">Total Orders</div>
                      <h5>142</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stat-card">
                    <div className="stat-icon text-info">
                      <i className="fa fa-box"></i>
                    </div>
                    <div>
                      <div className="text-white small">Products Sold</div>
                      <h5>98</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stat-card">
                    <div className="stat-icon text-success">
                      <i className="fa fa-clock"></i>
                    </div>
                    <div>
                      <div className="text-white small">Pending</div>
                      <h5>$230</h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- SALES TABLE --> */}
              <div className="card bg-light-dark sales border-0">
                <div className="card-body">
                  <h5 className="mb-3">Recent Sales</h5>
                  <div className="table-responsive">
                    <table className="table">
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
                            <div className="d-flex align-items-center gap-2">
                              <img
                                className="avatar"
                                src="https://i.pravatar.cc/100?img=1"
                              />{" "}
                              Alex Carter
                            </div>
                          </td>
                          <td>Anime Girl Prompt</td>
                          <td>$5</td>
                          <td>$4.5</td>
                          <td>
                            <span className="badge badge-paid">Paid</span>
                          </td>
                          <td>2 May</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <img
                                className="avatar"
                                src="https://i.pravatar.cc/100?img=2"
                              />{" "}
                              John Miller
                            </div>
                          </td>
                          <td>AI Voice Pack</td>
                          <td>$9</td>
                          <td>$8.1</td>
                          <td>
                            <span className="badge badge-paid">Paid</span>
                          </td>
                          <td>2 May</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <img
                                className="avatar"
                                src="https://i.pravatar.cc/100?img=3"
                              />{" "}
                              Sophia Lee
                            </div>
                          </td>
                          <td>Fantasy Prompt Pack</td>
                          <td>$7</td>
                          <td>$6.3</td>
                          <td>
                            <span className="badge badge-pending">Pending</span>
                          </td>
                          <td>1 May</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <img
                                className="avatar"
                                src="https://i.pravatar.cc/100?img=4"
                              />{" "}
                              Michael Ross
                            </div>
                          </td>
                          <td>AI Blog Template</td>
                          <td>$12</td>
                          <td>$10.8</td>
                          <td>
                            <span className="badge badge-paid">Paid</span>
                          </td>
                          <td>1 May</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <img
                                className="avatar"
                                src="https://i.pravatar.cc/100?img=5"
                              />{" "}
                              Emma Wilson
                            </div>
                          </td>
                          <td>AI Story Generator</td>
                          <td>$6</td>
                          <td>$5.4</td>
                          <td>
                            <span className="badge badge-paid">Paid</span>
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
