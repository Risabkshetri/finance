import Introduction from "./Introduction";
import productivity from "../../assets/Productivity.png";
import { Footer, Navbar, Button } from "../index";
import { useNavigate } from "react-router-dom";

function HomePage() {
   const navigate  = useNavigate()
   const handleSignup = () => {
    navigate('/signup')
   }
   const handleLogin = () => {
    navigate('/login')
   }

  const extraComponents = () => {
    return (
      <div className="flex items-center gap-4 ml-4">
        <Button onClick={handleSignup} className="text-white font-medium bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out px-6 py-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Signup
        </Button>
        <Button onClick={handleLogin} className="text-blue-600 font-medium bg-transparent border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 ease-in-out px-6 py-2 rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
          Login
        </Button>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar className="sticky top-0 z-50 shadow-sm bg-white/90 backdrop-blur-md" extraComponents={extraComponents} />

      <main className="flex-grow flex items-center justify-center w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <Introduction />
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-lg xl:max-w-xl">
              {/* Decorative background blobs */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
              
              <img
                src={productivity}
                alt="Productivity illustration"
                className="relative w-full h-auto object-cover rounded-3xl shadow-2xl z-10 border border-white/40 transform transition duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer className="" />
    </div>
  );
}

export default HomePage;
