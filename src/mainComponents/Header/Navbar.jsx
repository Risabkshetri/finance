// import { useState } from 'react';
// import { Logo } from '../index';
// import { Link } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// function Navbar({ 
//   Navlist = [
//     {Title: 'Home', Url: '/'},
//     {Title: 'About', Url: '/'},
//     {Title: 'Blog', Url: '/'},
//     {Title: 'Contact', Url: '/'}
//   ], 
//   className = '', 
//   expraComponents,
// }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className={`bg-white shadow-lg ${className}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="flex-shrink-0 flex items-center">
//             <Logo />
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//             {Navlist.map((item) => (
//               <Link
//                 key={item.Title}
//                 to={item.Url}
//                 className="text-gray-900 hover:bg-gray-50  hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
//               >
//                 {item.Title}
//               </Link>
//             ))}
//             {expraComponents && expraComponents()}

//           </div>
          
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//               aria-controls="mobile-menu"
//               aria-expanded={isMenuOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu, show/hide based on menu state. */}
//       <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
//         <div className="pt-2 pb-3 space-y-1">
//           {Navlist.map((item) => (
//             <Link
//               key={item}
//               to="/"
//               className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               {item}
//             </Link>
//           ))}
//           {expraComponents && expraComponents()}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { useState } from 'react';
import { Logo } from '../index';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar({ 
  Navlist = [
    {Title: 'Home', Url: '/'},
    {Title: 'About', Url: '/about'},
    {Title: 'Blog', Url: '/blog'},
    {Title: 'Contact', Url: '/contact'}
  ],
  className = '',
  extraComponents
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                key={item.Title}
                to={item.Url}
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
              >
                {item.Title}
              </Link>
            ))}
            {extraComponents && extraComponents()}
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          {Navlist.map((item) => (
            <Link
              key={item.Title}
              to={item.Url}
              className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.Title}
            </Link>
          ))}
          {extraComponents && extraComponents()}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;