import React from 'react'
import Navbar from './components/Navbar'
import AboutUs from './About Us'
import Intro from './components/Intro'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Statistics from './components/Statistics'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Testimonials/>
      <Pricing/>
      <Statistics/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home