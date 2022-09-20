import React from 'react'

import Header from '../components/Header'
import ContactUs from '../components/ContactUs'
import About from '../components/About'

import './Application.css'

function Application() {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: 'url("hero.png")' }}>
        <div className="hero-area">
          <div className="text-right text-area">
            <Header />
            <About />
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Application
