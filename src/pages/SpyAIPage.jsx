import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function SpyAIPage() {
  const [searchInput, setSearchInput] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    // Simulated search
    setResults([
      { id: 1, title: 'Result 1', description: 'Sample result description' },
      { id: 2, title: 'Result 2', description: 'Another sample result' }
    ])
  }

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5">Spy AI</h2>
          
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Search</h5>
              <form onSubmit={handleSearch}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter search query..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    required
                  />
                  <button className="btn btn-primary" type="submit">Search</button>
                </div>
              </form>
            </div>
          </div>

          {results.length > 0 && (
            <div className="row">
              {results.map((result) => (
                <div key={result.id} className="col-md-6 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{result.title}</h5>
                      <p className="card-text">{result.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SpyAIPage
