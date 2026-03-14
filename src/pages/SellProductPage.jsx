import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function SellProductPage() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    category: '',
    file: null
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Product listed successfully!')
    navigate('/sales-list')
  }

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="mb-4">Sell Your Product</h2>
              
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Product Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="productName"
                          value={formData.productName}
                          onChange={handleChange}
                          placeholder="Product name"
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Price ($)</label>
                        <input
                          type="number"
                          className="form-control"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder="0.00"
                          step="0.01"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Describe your product"
                        required
                      ></textarea>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Category</label>
                      <select 
                        className="form-control" 
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select category</option>
                        <option>AI Packs</option>
                        <option>Templates</option>
                        <option>Music</option>
                        <option>Effects</option>
                        <option>Fonts</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Upload Product File</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleFileChange}
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">List Product</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SellProductPage
