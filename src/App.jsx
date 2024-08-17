import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import PopularBranches from './components/PopularBranches'
import Slider from './components/Slider'
import ImageSection from './components/ImageSection'
import StatsSection from './components/StatsSection'
import TestimonialSlider from './components/TestimonialSlider'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <PopularBranches/>
      <Slider/>
      <ImageSection/>
      <StatsSection/>
      <TestimonialSlider/>
      <Footer/>
      
    </div>
  )
}

export default App