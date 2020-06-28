import './_styles.scss'
import React from 'react'

import logo from '../../images/logo.svg'
import btn_icon from '../../images/demo-btn-icon.svg'

export default function header() {
  return (
    <header id='header' className='app-section'>
      <div className="app-section-wrapper">

        <Navigation />

        <HeaderContent />

      </div>
    </header>
  )
}

function Navigation() {
  return (
    <div className='app-navigation'>

      <img src={logo} alt="app-logo" className="logo" />

      <div className="nav">
        <a href='#about' className="nav-item active">About</a>
        <a href='#help' className="nav-item">Help</a>
        <a href='#features' className="nav-item">Features</a>
        <a href='#signup' className="nav-item">Signup</a>
      </div>

      <button className="btn demo-btn">
        <span className="btn-text">Request Demo</span>
        <img src={btn_icon} alt="icon" className="btn-icon" />
      </button>

    </div>
  )
}

function HeaderContent() {
  return (
    <div className='header-content'>

      <div className="header-title">
        Save your data storage here.
      </div>

      <div className="header-caption">
        Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
      </div>

      <button className="btn header-btn">
        Learn More
      </button>

    </div>
  )
}
