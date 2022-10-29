import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Statistics from './components/Statistics'
import Footer from './components/Footer'
import Contactme from './components/Contactme'
import ProjectGallery1 from './components/PRJ-1'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Intro/>
      <ProjectGallery1/>
      <Testimonials/>
      <Pricing/>
      <Statistics/>
      <Contactme/>
      <Footer/>
    </>
  )
}

export default Home