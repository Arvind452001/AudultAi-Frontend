import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ProfilePage() {
  const navigate = useNavigate()
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    bio: 'AI Enthusiast and Content Creator'
  })

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="mb-5">My Profile</h2>
              
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <img 
                        src="https://i.pravatar.cc/150" 
                        alt="profile" 
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="col-md-9">
                      <h4>{profile.name}</h4>
                      <p>{profile.bio}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Profile Information</h5>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={profile.name}
                      readOnly 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      value={profile.email}
                      readOnly 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      value={profile.phone}
                      readOnly 
                    />
                  </div>
                  <button className="btn btn-warning me-2">Edit Profile</button>
                  <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
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

export default ProfilePage
