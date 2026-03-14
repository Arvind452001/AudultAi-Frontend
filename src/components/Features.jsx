import React from 'react'

const Features = () => {
  const features = [
    { id: 1, icon: 'fa-solid fa-comment', title: 'Text AI' },
    { id: 2, icon: 'fa-solid fa-image', title: 'Image AI' },
    { id: 3, icon: 'fa-solid fa-video', title: 'Video AI' },
    { id: 4, icon: 'fa-solid fa-music', title: 'Audio AI' },
    { id: 5, icon: 'fa-solid fa-user-secret', title: 'Spy AI' },
    { id: 6, icon: 'fa-solid fa-robot', title: 'Adult AI' },
    { id: 7, icon: 'fa-solid fa-toolbox', title: 'Creator Tools' }
  ]

  return (
    <section>
      <div className="container position-relative z-index-9">
        <div className="section-title mb-1-9 mb-md-6 text-center">
          <span className="sm-title">Features</span>
          <h2 className="mb-0 h1">Features That Help You Grow.</h2>
        </div>

        <div className="row g-xl-5 mt-n1-9">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="col-lg-4 col-md-4 col-12 wow fadeInUp"
              style={{ visibility: 'visible', animationDelay: '200ms', animationName: 'fadeInUp' }}
            >
              <div className="ai-card">
                <div className="ai-icon">
                  <i className={feature.icon}></i>
                </div>
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
