// src/components/About/Contact.jsx
import React from 'react';

const DirectContact = () => {
  return (
    <div className="py-16 bg-white shadow-md my-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <p className="mb-6 text-center text-lg">
          We'd love to hear from you. Whether you're interested in our services or just want to chat about the latest tech trends, feel free to reach out.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <a 
            href="mailto:rishab@kshetriai.com"
            className="bg-blue-600 text-white py-2 px-6 rounded-full mb-4 md:mb-0 md:mr-4 hover:bg-blue-700 transition duration-300"
          >
            Email Us
          </a>
          <a
            href="tel:+918130243850"
            className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300"
          >
            Call Us
          </a>
        </div>
        <p className="mt-8 text-center text-xl">
          Join us on our journey to make the web a better place for everyone. Together, we can create something amazing!
        </p>
      </div>
    </div>
  );
};

export default DirectContact;