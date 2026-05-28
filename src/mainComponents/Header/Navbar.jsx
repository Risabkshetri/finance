import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../index';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  // Close mobile menu automatically on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center group transition-transform duration-300 hover:scale-[1.02]"
          >
            <Logo width="120px" height="50px" className="object-contain drop-shadow-sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {Navlist.map((item) => {
              const isActive = location.pathname === item.Url;
              return (
                <Link
                  key={item.Title}
                  to={item.Url}
                  className={`group relative px-2 py-2 text-sm font-semibold tracking-wide transition-colors duration-300
                    ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}
                  `}
                >
                  {item.Title}
                  {/* Animated Underline */}
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ease-out
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}></span>
                </Link>
              );
            })}
            
            {/* Action Buttons */}
            {extraComponents && (
              <div className="lg:pl-6 lg:border-l lg:border-gray-200 ml-4 flex items-center">
                {extraComponents()}
              </div>
            )}
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="flex items-center justify-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-500 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-7 w-7 transform rotate-90 transition-transform duration-300" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-7 w-7 transition-transform duration-300" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden shadow-inner ${isMenuOpen ? 'max-h-[500px] opacity-100 border-b border-gray-100 bg-white/95 backdrop-blur-md' : 'max-h-0 opacity-0 bg-transparent'}`} 
        id="mobile-menu"
      >
        <div className="px-4 pt-3 pb-6 space-y-2">
          {Navlist.map((item) => {
            const isActive = location.pathname === item.Url;
            return (
              <Link
                key={item.Title}
                to={item.Url}
                className={`block px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-all duration-300
                  ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:pl-6'}
                `}
              >
                {item.Title}
              </Link>
            )
          })}
          
          {/* Mobile Action Buttons */}
          {extraComponents && (
            <div className="pt-6 pb-2 mt-4 border-t border-gray-100 flex justify-start pl-2 overflow-x-auto">
              {extraComponents()}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  Navlist: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Url: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
  extraComponents: PropTypes.func,
};

export default Navbar;