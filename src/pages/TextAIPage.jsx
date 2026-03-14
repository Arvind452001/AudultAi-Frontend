import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function TextAIPage() {
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulated API call
    setTimeout(() => {
      setOutput(`Generated text based on: "${prompt}"\n\nThis is a sample output. Connect to your AI API to generate real content.`)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5">Text AI Generator</h2>
          
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Generate Text</h5>
                  <form onSubmit={handleGenerate}>
                    <div className="mb-3">
                      <label className="form-label">Enter your prompt</label>
                      <textarea
                        className="form-control"
                        rows="6"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Write your prompt here..."
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? 'Generating...' : 'Generate'}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Output</h5>
                  <div className="output-box" style={{ minHeight: '200px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px' }}>
                    {output ? <p>{output}</p> : <p className="text-muted">Generated text will appear here...</p>}
                  </div>
                  {output && (
                    <button className="btn btn-secondary mt-3">Copy</button>
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

export default TextAIPage
