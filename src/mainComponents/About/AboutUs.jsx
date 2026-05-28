import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import Hero from './Hero';
import Mission from './Mission';
import Services from './Services';
import Founder from './Founder';
import DirectContact from './DirectContact';

function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar 
       Navlist = {[
        {Title: 'Home', Url: '/'},
        {Title: 'About', Url: '/about'},
        {Title: 'Blog', Url: '/blog'},
        {Title: 'Contact', Url: '/contact'}
      ]}
      className='sticky top-0 z-50'
      />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />
        <Mission />
        <Services />
        <Founder />
        <DirectContact />
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs