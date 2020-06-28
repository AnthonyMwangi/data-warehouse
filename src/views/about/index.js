import './_styles.scss'
import React from 'react'
import image from '../../images/about-image.svg'

export default function about() {
  return (
    <div id='about' className='app-section'>

      <div className="app-section-wrapper">

        <img src={image} alt="about" className="section-image" />

        <div className="section-content">

          <div className="section-title">
            We are a high-level data storage bank
          </div>

          <div className="section-caption">
            The place to store various data that you can access at any time through the internet and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.
          </div>

        </div>

      </div>

    </div>
  )
}
