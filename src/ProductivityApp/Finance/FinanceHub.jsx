import React from 'react';
import { Link } from 'react-router-dom';

const FinanceHub = () => {
  const sections = [
    {
      title: 'Cryptocurrency',
      description: 'Track and analyze your crypto investments',
      link: 'cryptocurrency',
      icon: 'fa-coins',
    },
    {
      title: 'Financial Calculations',
      description: 'Perform various financial calculations',
      link: 'financial-calculation',
      icon: 'fa-calculator',
    },
    {
      title: 'Net Worth Chart',
      description: 'Visualize your net worth over time',
      link: 'networth',
      icon: 'fa-chart-line',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Financial Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <Link
            key={index}
            to={section.link}
            className="bg-slate-300 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <i className={`fas ${section.icon} text-2xl text-blue-500 mr-4`}></i>
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FinanceHub;
