// src/components/About/Mission.jsx
import React from 'react';

const Mission = () => {
  return (
    <div className="py-16 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p>
              At KshetriAI, our mission is simple: to provide modern, high-quality web solutions at a reasonable price. We believe in solving real-world problems with our tech expertise and creativity.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>
              Our vision is to become a trusted name in the industry by offering web solutions that are not only effective but also affordable. We aim to empower our clients with tools that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;