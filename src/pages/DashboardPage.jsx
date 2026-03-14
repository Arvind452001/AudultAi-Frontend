import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function DashboardPage() {
  const stats = [
    { label: 'Projects', value: 12 },
    { label: 'AI Credits', value: 5000 },
    { label: 'Generated Items', value: 156 }
  ]

  const aiTools = [
    { name: 'Text AI', icon: 'fa-comment', path: '/text-ai' },
    { name: 'Image AI', icon: 'fa-image', path: '/image-ai' },
    { name: 'Audio AI', icon: 'fa-music', path: '/audio-ai' },
    { name: 'Video AI', icon: 'fa-video', path: '/video-ai' }
  ]

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5">Dashboard</h2>

          <div className="row mb-5">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">{stat.label}</h5>
                    <h3>{stat.value}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="mb-4">AI Tools</h4>
          <div className="row">
            {aiTools.map((tool, index) => (
              <div key={index} className="col-md-6 mb-4">
                <Link to={tool.path} className="text-decoration-none">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <i className={`fas ${tool.icon} fa-2x mb-3`}></i>
                      <h5 className="card-title">{tool.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <Link to="/projects" className="btn btn-primary me-2">My Projects</Link>
              <Link to="/marketplace" className="btn btn-secondary">Marketplace</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DashboardPage
