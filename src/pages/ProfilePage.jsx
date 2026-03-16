import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImg from "../assets/img/banner/page-title.jpg";
import SidebarInner from "../components/SidebarInner";
function ProfilePage() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "+XX XXXXXXXXX",
    gender: "Male",
    bio: "AI Enthusiast and Content Creator",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Profile:", profile);

    alert("Profile Updated Successfully ✅");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="main-wrapper">
      <Header />

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
                <h4 className="text-white mb-4">Profile</h4>
              </div>

              <div className="card-dark mt-3 p-4">

                <form onSubmit={handleSubmit}>
                  <div className="row mb-4 g-3">

                    <div className="col-lg-6">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-lg-6">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-lg-12">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-lg-6">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-lg-6">
                      <label>Gender</label>
                      <select
                        className="form-control"
                        name="gender"
                        value={profile.gender}
                        onChange={handleChange}
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>

                    <div className="col-lg-12">
                      <label>About Me</label>
                      <textarea
                        className="form-control"
                        name="bio"
                        value={profile.bio}
                        onChange={handleChange}
                        style={{ height: "150px" }}
                      />
                    </div>

                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-primary">
                        Update Now
                      </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProfilePage;