import React from 'react';
import Profile from '../../assets/Profile.png';

const Founder = () => {
  return (
    <section className="py-16 mb-16">
      <div className="container mx-auto px-4 lg:px-0 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          <div className="md:w-2/5 md:flex-shrink-0 bg-blue-50 p-8 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50 transform scale-110"></div>
              <img
                src={Profile}
                alt="Rishab Kshetri"
                className="relative rounded-full w-48 h-48 md:w-60 md:h-60 object-cover border-4 border-white shadow-lg mx-auto"
              />
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Meet Our Founder</h2>
            <h3 className="text-xl font-medium text-blue-600 mb-6">Rishab Kshetri</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi, I'm Rishab Kshetri, the founder of KshetriAI. My passion for technology and innovation drives me to create solutions that truly make a difference. I believe in the power of technology to solve problems and make the world a better place.
              </p>
              <p>
                We love sharing our knowledge and insights. Check out our blog for the latest updates on emerging technology and how it can benefit you. Our engaging content keeps you informed and inspired.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;