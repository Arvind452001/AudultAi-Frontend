import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import SidebarInner from "../components/SidebarInner";
import HeaderProfile from "../components/HeaderProfile";
   import bgImg from "../assets/img/banner/page-title.jpg";
function SellProductPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    tags: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Product listed successfully!");

    navigate("/sales-list");
  };

  return (
    <div className="main-wrapper">
      <div style={{ position: "relative", zIndex: 9999 }}>
         <HeaderProfile />
      </div>

      {/* PAGE TITLE */}
      <section className="page-title-section top-position1 bg-img cover-background secondary-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <div className="text-center">
                <h4>Sell AI Product</h4>

                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>Sell AI Product</li>
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

              <div className="border-bottom mb-3">
                <h4 className="text-white mb-4">Sell AI Product</h4>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="row">

                  {/* FORM */}
                  <div className="col-lg-8">

                    <div className="form-card">

                      {/* TITLE */}
                      <div className="mb-3">

                        <label className="form-label">
                          Product Title
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          name="productName"
                          value={formData.productName}
                          onChange={handleChange}
                          placeholder="Example: Anime Character Prompt Pack"
                        />

                      </div>

                      {/* DESCRIPTION */}
                      <div className="mb-3">

                        <label className="form-label">
                          Description
                        </label>

                        <textarea
                          className="form-control"
                          rows="4"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Describe your AI asset..."
                        ></textarea>

                      </div>

                      {/* CATEGORY + PRICE */}
                      <div className="row">

                        <div className="col-md-6 mb-3">

                          <label className="form-label">
                            Category
                          </label>

                          <select
                            className="form-control"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                          >

                            <option value="">
                              Select Category
                            </option>

                            <option>
                              AI Prompt
                            </option>

                            <option>
                              AI Image
                            </option>

                            <option>
                              AI Voice
                            </option>

                            <option>
                              Template
                            </option>

                            <option>
                              Script Pack
                            </option>

                          </select>

                        </div>

                        <div className="col-md-6 mb-3">

                          <label className="form-label">
                            Price ($)
                          </label>

                          <input
                            type="number"
                            className="form-control"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="10"
                          />

                        </div>

                      </div>

                      {/* TAGS */}
                      <div className="mb-3">

                        <label className="form-label">
                          Tags
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          name="tags"
                          value={formData.tags}
                          onChange={handleChange}
                          placeholder="anime, portrait, ai art"
                        />

                      </div>

                      {/* FILE */}
                      <div className="mb-3">

                        <label className="form-label">
                          Upload Product File
                        </label>

                        <input
                          type="file"
                          className="form-control"
                          onChange={handleFileChange}
                        />

                      </div>

                      <button className="btn btn-primary mt-3">
                        Publish Product
                      </button>

                    </div>

                  </div>

                  {/* PREVIEW */}
                  <div className="col-lg-4">

                    <div className="form-card">

                      <h6 className="mb-3">
                        Preview Image
                      </h6>

                      <p>

                        <label className="upload-box">

                          <i className="fa fa-cloud-upload fa-2x mb-2"></i>

                          <input hidden type="file" />

                          Upload preview image

                        </label>

                      </p>

                    </div>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SellProductPage;