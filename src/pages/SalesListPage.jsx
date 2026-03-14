import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function SalesListPage() {
  const sales = [
    { id: 1, product: 'AI Pack 1', date: '2024-01-20', amount: '$50', status: 'Completed' },
    { id: 2, product: 'Video Bundle', date: '2024-01-19', amount: '$75', status: 'Completed' },
    { id: 3, product: 'Music Pack', date: '2024-01-18', amount: '$30', status: 'Pending' }
  ]

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5">My Sales</h2>

          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Total Sales</h5>
                  <h3>$3,500</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">This Month</h5>
                  <h3>$850</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Products Sold</h5>
                  <h3>42</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Earnings</h5>
                  <h3>$1,050</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((sale) => (
                  <tr key={sale.id}>
                    <td>{sale.product}</td>
                    <td>{sale.date}</td>
                    <td>{sale.amount}</td>
                    <td>
                      <span className={`badge ${sale.status === 'Completed' ? 'bg-success' : 'bg-warning'}`}>
                        {sale.status}
                      </span>
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

export default SalesListPage
