import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MarketplacePage() {
  const [products] = useState([
    { id: 1, name: 'AI Portrait Pack', price: '$19.99', rating: 4.5 },
    { id: 2, name: 'Background Collection', price: '$14.99', rating: 4.2 },
    { id: 3, name: 'Music Pack', price: '$24.99', rating: 4.8 },
    { id: 4, name: 'Effects Bundle', price: '$29.99', rating: 4.6 },
    { id: 5, name: 'Font Pack', price: '$9.99', rating: 4.3 },
    { id: 6, name: 'Animation Pack', price: '$34.99', rating: 4.9 }
  ])

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5">Marketplace</h2>
          
          <div className="row mb-4">
            <div className="col-md-12">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search marketplace..." 
              />
            </div>
          </div>

          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="mb-2">
                      <span className="badge bg-warning">★ {product.rating}</span>
                    </div>
                    <p className="card-text">{product.price}</p>
                    <button className="btn btn-primary me-2">Preview</button>
                    <button className="btn btn-success">Buy Now</button>
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

export default MarketplacePage
