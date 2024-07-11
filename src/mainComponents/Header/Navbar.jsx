// import { Logo } from './index'
// import { Link } from 'react-router-dom'

// function Navbar({Navlist = ['Home', 'About', 'Blog', 'Contact']}) {
//   return (
//     <div className='flex flex-row gap-10 items-center justify-between px-4  bg-white w-full h-12  shadow-lg'>
//         <div>
//             <Logo/>
//         </div>
//         <div className='flex gap-10'>
//         {Navlist.map((item) => (
//                 <Link key={item} to='/' className='rounded-xl py-1 px-4 hover:bg-slate-300'>{item}</Link>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Navbar

import { useState } from 'react'
import { Logo } from '../index'
import { Link } from 'react-router-dom'

function Navbar({ Navlist = ['Home', 'About', 'Blog', 'Contact'], className = '' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={`bg-white shadow-lg ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {Navlist.map((item) => (
              <Link
                key={item}
                to="/"
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          {Navlist.map((item) => (
            <Link
              key={item}
              to="/"
              className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar