import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import Hero from './Hero';
import Mission from './Mission';
import Services from './Services';
import Founder from './Founder';
import DirectContact from './DirectContact';

function AboutUs() {
  return (
    <>
    <Navbar 
     Navlist = {[
      {Title: 'Home', Url: '/'},
      {Title: 'About', Url: '/about'},
      {Title: 'Blog', Url: '/blog'},
      {Title: 'Contact', Url: '/contact'}
    ]}
    className='sticky top-0'
    />
    <div className="bg-gray-200 w-full lg:px-16">
      <Hero />
      <Mission />
      <Services />
      <Founder />
      <DirectContact />
    </div>
    <Footer />
    </>
  )
}

export default AboutUs