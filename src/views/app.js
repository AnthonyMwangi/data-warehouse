import React from 'react'
import Header from './header'
import AboutSection from './about'
import FeaturesSection from './features'

export default function app() {
  return (
    <div className='App'>

      <Header/>

      <AboutSection/>

      <FeaturesSection/>

    </div>
  )
}
