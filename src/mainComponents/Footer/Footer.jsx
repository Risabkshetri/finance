// import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer({className = ''}) {
  return (
    <footer className={`absolute w-full overflow-hidden py-10 bg-white  shadow-inner ${className}`}>
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex flex-col h-full justify-between">
              <div className="mb-4 inline-flex items-center transition-transform duration-300 hover:scale-105">
                <Logo width="100px" height='50px'/>
              </div>
              <p className="text-sm text-gray-600">
                &copy; Copyright 2023. All Rights Reserved by KshetriAI.
              </p>
            </div>
          </div>
          
          {[
            { title: 'Company', items: ['Features', 'Pricing', 'Affiliate Program'] },
            { title: 'Support', items: ['Account', 'Help', 'Contact Us'] },
            { title: 'Legals', items: ['Terms & Conditions', 'Privacy Policy', 'Licensing'] }
          ].map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to="/"
                      className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer