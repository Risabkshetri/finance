// src/components/About/Services.jsx
import React from 'react';

const services = [
  {
    title: 'WordPress Development',
    description: 'Crafting stunning and functional websites that are easy to manage.',
  },
  {
    title: 'Web Development',
    description: 'Building robust and scalable web applications tailored to your needs.',
  },
];

const Services = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <strong>Innovative Solutions:</strong> We stay ahead of the curve with the latest technology and trends.
            </li>
            <li className="mb-2">
              <strong>Customer-Centric Approach:</strong> Your success is our priority. We listen, understand, and deliver.
            </li>
            <li className="mb-2">
              <strong>Affordable Quality:</strong> Get top-notch solutions without breaking the bank.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;