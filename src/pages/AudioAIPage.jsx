import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AudioAIPage() {
  const [text, setText] = useState('')
  const [audioGenerated, setAudioGenerated] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleGenerate = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulated API call
    setTimeout(() => {
      setAudioGenerated(true)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5">Audio AI Generator</h2>
          
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Generate Audio</h5>
                  <form onSubmit={handleGenerate}>
                    <div className="mb-3">
                      <label className="form-label">Enter text to convert to audio</label>
                      <textarea
                        className="form-control"
                        rows="6"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type the text you want to convert to audio..."
                        required
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Voice</label>
                      <select className="form-control">
                        <option>Male - US</option>
                        <option>Female - US</option>
                        <option>Male - UK</option>
                        <option>Female - UK</option>
                      </select>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? 'Generating...' : 'Generate Audio'}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Preview</h5>
                  <div className="output-box" style={{ minHeight: '200px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {audioGenerated ? (
                      <div className="w-100">
                        <audio controls className="w-100" style={{ marginBottom: '15px' }}>
                          <source src="" type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                        <button className="btn btn-secondary w-100">Download Audio</button>
                      </div>
                    ) : (
                      <p className="text-muted">Generated audio will appear here...</p>
                    )}
                  </div>
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

export default AudioAIPage
