import React from 'react'
import Header from './header'
import AboutSection from './about'
import FeaturesSection from './features'
import Testimonials from './testimonials'
import FooterSection from './footer'

export default function app() {
  return (
    <div className='App'>

      <Header/>

      <AboutSection/>

      <FeaturesSection/>

      <Testimonials/>

      <FooterSection/>

    </div>
  )
}
