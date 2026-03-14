import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ProjectsPage() {
  const projects = [
    { id: 1, name: 'Marketing Campaign', created: '2024-01-15', status: 'Active' },
    { id: 2, name: 'Social Media Content', created: '2024-01-10', status: 'Draft' },
    { id: 3, name: 'YouTube Series', created: '2024-01-05', status: 'Active' }
  ]

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h2>My Projects</h2>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/create-project" className="btn btn-primary">Create New Project</Link>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Created</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{project.created}</td>
                    <td>
                      <span className={`badge ${project.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                        {project.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-info me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProjectsPage
