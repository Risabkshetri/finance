import { useState, useEffect } from 'react'
import Introduction from './Introduction'
import productivity from '../../assets/Productivity.png'
import { Footer,  Navbar, Button } from "../index";
import { Link} from 'react-router-dom'


function HomePage() {
  const [isMobile, setIsMobile] = useState(false)

  const  extraComponents = () => {
    return (
      <div className='flex gap-2'>
  <Button 
    className='text-white bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-in-out transform hover:scale-105'
  >
    <Link to = '/signup'>Signup</Link>
  </Button>
  <Button 
    className='text-white bg-yellow-600 hover:bg-yellow-700 transition-colors duration-300 ease-in-out transform hover:scale-105'
  >
    Login
  </Button>
</div>
  );
    
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
    <Navbar 
    className="sticky top-0"
    extraComponents={extraComponents}
    />
    
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Introduction />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img 
              src={productivity} 
              alt="Productivity illustration" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer className=""/>
    </>
  )
}

export default HomePage