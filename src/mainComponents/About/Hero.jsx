import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white rounded-3xl overflow-hidden mt-8 mb-16 shadow-2xl mx-4 lg:mx-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
      <div className="relative container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">KshetriAI</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Your go-to partner for innovative web solutions. Founded in 2024 by Rishab Kshetri, we're dedicated to helping small businesses, startups, and content creators thrive in the digital world.
        </p>
      </div>
    </section>
  );
};

export default Hero;