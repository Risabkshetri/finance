// src/components/About/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white text-black text-center lg:px-12 py-20 my-6 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to <span className='text-red-600'>KshetriAI</span></h1>
        <p className="text-xl text-center">
          Your go-to partner for innovative web solutions. Founded in 2024 by Rishab Kshetri, we're dedicated to helping small businesses, startups, and content creators thrive in the digital world.
        </p>
      </div>
    </div>
  );
};

export default Hero;