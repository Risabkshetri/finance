import React from 'react';

const services = [
  {
    title: 'WordPress Development',
    description: 'Crafting stunning and functional websites that are easy to manage and update.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    )
  },
  {
    title: 'Web Development',
    description: 'Building robust, scalable, and modern web applications tailored to your specific needs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    )
  },
];

const Services = () => {
  return (
    <section className="py-16 mb-16 bg-white rounded-3xl shadow-sm border border-gray-100 mx-4 lg:mx-0">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What We Do</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">1</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Innovative Solutions</h4>
              <p className="text-gray-300 text-sm">We stay ahead of the curve with the latest technology and trends.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">2</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Customer First</h4>
              <p className="text-gray-300 text-sm">Your success is our priority. We listen, understand, and deliver.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">3</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Affordable Quality</h4>
              <p className="text-gray-300 text-sm">Get top-notch solutions without breaking the bank.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;