import React, { useState } from 'react'

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(0)

  const faqs = [
    {
      id: 1,
      question: "1. Faq Question?",
      answer: "Our software solution provides a seamless and user-friendly experience for customers to access their applications, devices, and technology with utmost security and responsibility."
    },
    {
      id: 2,
      question: "2. Faq Question?",
      answer: "Looking for a convenient and reliable way to manage your digital access? Look no further. SSOBOX offers a comprehensive solution that allows you to securely access your applications, devices, and technology."
    },
    {
      id: 3,
      question: "3. Faq Question?",
      answer: "At SSOBOX, we prioritize the safety and security of our customers' digital access. Our integrated platform ensures that all interactions are protected and monitored."
    },
    {
      id: 4,
      question: "4. Faq Question?",
      answer: "Our platform is designed to be intuitive and easy to use, requiring minimal training for your team. You can start using SSOBOX within minutes of signing up."
    }
  ]

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  return (
    <section className="faq-style-1 faq-style-2">
      <div className="container">
        <div className="section-title-02 text-center mb-2-9">
          <span className="sm-title">Our faq</span>
          <h2 className="mb-0 h1 text-center w-lg-60 mx-auto">Frequently Asked Questions</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="faq-content">
              <div id="accordion" className="accordion-style">
                {faqs.slice(0, 2).map((faq) => (
                  <div key={faq.id} className="card mb-3">
                    <div className="card-header" id={`heading${faq.id}`}>
                      <h5 className="mb-0">
                        <button
                          className={`btn btn-link ${activeAccordion === faq.id ? '' : 'collapsed'}`}
                          onClick={() => toggleAccordion(faq.id)}
                          type="button"
                          aria-expanded={activeAccordion === faq.id}
                          aria-controls={`collapse${faq.id}`}
                        >
                          {faq.question}
                        </button>
                      </h5>
                    </div>
                    {activeAccordion === faq.id && (
                      <div
                        id={`collapse${faq.id}`}
                        className="collapse show"
                        aria-labelledby={`heading${faq.id}`}
                      >
                        <div className="card-body">{faq.answer}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content">
              <div id="accordion2" className="accordion-style">
                {faqs.slice(2, 4).map((faq) => (
                  <div key={faq.id} className="card mb-3">
                    <div className="card-header" id={`heading${faq.id}`}>
                      <h5 className="mb-0">
                        <button
                          className={`btn btn-link ${activeAccordion === faq.id ? '' : 'collapsed'}`}
                          onClick={() => toggleAccordion(faq.id)}
                          type="button"
                          aria-expanded={activeAccordion === faq.id}
                          aria-controls={`collapse${faq.id}`}
                        >
                          {faq.question}
                        </button>
                      </h5>
                    </div>
                    {activeAccordion === faq.id && (
                      <div
                        id={`collapse${faq.id}`}
                        className="collapse show"
                        aria-labelledby={`heading${faq.id}`}
                      >
                        <div className="card-body">{faq.answer}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
