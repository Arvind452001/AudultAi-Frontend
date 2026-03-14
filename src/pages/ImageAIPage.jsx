import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ImageAIPage() {
  const [prompt, setPrompt] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulated API call
    setTimeout(() => {
      setImageUrl('https://via.placeholder.com/400x400?text=Generated+Image')
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5">Image AI Generator</h2>
          
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Generate Image</h5>
                  <form onSubmit={handleGenerate}>
                    <div className="mb-3">
                      <label className="form-label">Enter image description</label>
                      <textarea
                        className="form-control"
                        rows="6"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe the image you want to generate..."
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? 'Generating...' : 'Generate Image'}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Preview</h5>
                  <div className="output-box" style={{ minHeight: '400px', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}>
                    {imageUrl ? (
                      <img src={imageUrl} alt="Generated" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    ) : (
                      <p className="text-muted">Generated image will appear here...</p>
                    )}
                  </div>
                  {imageUrl && (
                    <div className="mt-3">
                      <button className="btn btn-secondary me-2">Download</button>
                      <button className="btn btn-secondary">Share</button>
                    </div>
                  )}
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

export default ImageAIPage
