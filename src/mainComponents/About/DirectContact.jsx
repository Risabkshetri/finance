import React from 'react';

const DirectContact = () => {
  return (
    <section className="py-20 mb-8 mx-4 lg:mx-0">
      <div className="container mx-auto px-6 max-w-4xl bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl shadow-2xl text-center text-white py-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
        <p className="mb-10 text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
          We'd love to hear from you. Whether you're interested in our services or just want to chat about the latest tech trends, feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <a 
            href="mailto:rishab@kshetriai.com"
            className="w-full sm:w-auto bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 hover:shadow-xl transition duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Email Us
          </a>
          <a
            href="tel:+918130243850"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            Call Us
          </a>
        </div>
        <p className="text-blue-100 max-w-xl mx-auto text-sm md:text-base">
          Join us on our journey to make the web a better place for everyone. Together, we can create something amazing!
        </p>
      </div>
    </section>
  );
};

export default DirectContact;