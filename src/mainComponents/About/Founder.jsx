import React from 'react';
import Profile from '../../assets/Profile.png'

const Founder = () => {
  return (
    <div className="py-16 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Meet Our Founder</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src={Profile}
              alt="Rishab Kshetri"
              className="rounded-full w-48 h-48 object-cover mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">Rishab Kshetri</h3>
            <p className="mb-4">
              Hi, I'm Rishab Kshetri, the founder of KshetriAI. My passion for technology and innovation drives me to create solutions that truly make a difference. I believe in the power of technology to solve problems and make the world a better place.
            </p>
            <p>
              We love sharing our knowledge and insights. Check out our blog for the latest updates on emerging technology and how it can benefit you. Our engaging content keeps you informed and inspired.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;