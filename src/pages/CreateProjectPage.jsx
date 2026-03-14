import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function CreateProjectPage() {
  const [projectName, setProjectName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Project "${projectName}" created successfully!`)
    navigate('/projects')
  }

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2 className="mb-4">Create New Project</h2>
              
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Project Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="Enter project name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Describe your project"
                      ></textarea>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Project Type</label>
                      <select className="form-control">
                        <option>Video Project</option>
                        <option>Image Project</option>
                        <option>Audio Project</option>
                        <option>Mixed Media</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Create Project</button>
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

export default CreateProjectPage
