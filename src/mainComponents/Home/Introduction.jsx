import { useNavigate } from "react-router-dom";
import Button from "../Button";

export default function Introduction() {
  const navigate = useNavigate();
  const handStartClick = () => {
    navigate('/signup');
  };
  const handDiscoverClick = () => {
    navigate('/about');
  };

  return (
    <div className="max-w-2xl w-full text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
        Your Personal Guide to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Success</span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed font-medium">
        We believe everyone deserves customized guidance to achieve their dreams.
      </p>
      
      <p className="text-base md:text-lg text-gray-500 mb-10 leading-relaxed">
        Founded on the principles of innovation and support, KshetriAI leverages powerful AI tools to provide tailored solutions for your personal growth.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
        <Button 
          onClick={handStartClick} 
          className="w-full sm:w-auto px-8 py-3.5 text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Start Now
        </Button>
        <Button 
          onClick={handDiscoverClick} 
          className="w-full sm:w-auto px-8 py-3 text-gray-700 bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
          Discover More
        </Button>
      </div>
    </div>
  );
}