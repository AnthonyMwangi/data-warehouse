import './_styles.scss'
import React from 'react'

export default function header() {
  return (
    <header id='header' className='app-section'>
      <div className="app-section-wrapper">

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

      </div>
    </header>
  )
}
