import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Features from '../components/Features'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div id="preloader">
        <style>{`
          #preloader {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background-color: #fff;
            z-index: 999999;
            transition: 0.3s ease opacity;
            text-align: center;
            width: 100%;
            height: 100%;
          }
          #preloader:before {
            content: "";
            width: 80px;
            height: 80px;
            border: 3px solid #FF0000;
            display: block;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            opacity: 0;
            transform: translate(-50%, -50%);
            animation-name: LoaderCicle;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
          #preloader:after {
            content: "";
            width: 80px;
            height: 80px;
            border: 3px solid #FF0000;
            display: block;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            opacity: 0;
            transform: translate(-50%, -50%);
            animation-name: LoaderCicle;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            animation-delay: 1s;
          }
          @keyframes LoaderCicle {
            0% {
              width: 0;
              height: 0;
              opacity: 0;
            }
            10% {
              width: 10px;
              height: 10px;
              opacity: 1;
            }
            80% {
              width: 60px;
              height: 60px;
              opacity: 0.1;
            }
            100% {
              width: 70px;
              height: 70px;
              opacity: 0;
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="main-wrapper">
       {/* HEADER */}
      <div style={{ position: "relative", zIndex: 9999 }}>
        <Header />
      </div>
      <Banner />
      <Features />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default HomePage
