import React from 'react'
import Header from './header'
import Navigation from './navigation'
import AboutSection from './about'
import FeaturesSection from './features'
import Testimonials from './testimonials'
import FooterSection from './footer'

export default function app() {
  return (
    <div className='App'>

      <Navigation />

      <Header/>

      <AboutSection/>

      <FeaturesSection/>

      <Testimonials/>

      <FooterSection/>

    </div>
  )
}
