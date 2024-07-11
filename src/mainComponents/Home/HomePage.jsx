import { useState, useEffect } from 'react'
import Introduction from './Introduction'
import productivity from '../../assets/Productivity.png'

function HomePage() {
  const [isMobile, setIsMobile] = useState(false)

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
  )
}

export default HomePage