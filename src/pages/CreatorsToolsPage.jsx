import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function CreatorsToolsPage() {
  const tools = [
    { name: 'Video Editor', description: 'Edit and enhance your videos' },
    { name: 'Image Editor', description: 'Advanced image editing tools' },
    { name: 'Audio Editor', description: 'Edit and mix your audio tracks' },
    { name: 'Subtitle Generator', description: 'Automatically generate subtitles' },
    { name: 'Thumbnail Maker', description: 'Create eye-catching thumbnails' },
    { name: 'Color Grader', description: 'Professional color grading tools' }
  ]

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5">Creators Tools</h2>
          
          <div className="row">
            {tools.map((tool, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-tool fa-2x mb-3"></i>
                    <h5 className="card-title">{tool.name}</h5>
                    <p className="card-text">{tool.description}</p>
                    <button className="btn btn-primary btn-sm">Use Tool</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CreatorsToolsPage
