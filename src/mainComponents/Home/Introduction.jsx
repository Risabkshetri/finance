import { Link } from "react-router-dom";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
export default function Introduction() {
  const navigate = useNavigate();
      const handStartClick =() => {
      navigate('/signup')
    }
      const handDiscoverClick =() => {
      navigate('/about')
    }
    return (
      <>
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Personal Guide by KshetriAI</h2>
        <p className="text-xl">We believe everyone deserves personalized guidance to achieve their dreams.</p>
        <p className="text-lg">
          Founded on the principles of innovation and support, KshetriAI leverages AI to provide customized solutions for personal growth and success.
        </p>
        <div className="space-x-4 mt-6">
          <Button onClick={handStartClick} className=" font-semibold text-white hover:text-black hover:bg-blue-100 transition duration-300">
            Start Now
          </Button>
          <Button onClick={handDiscoverClick} className="w-auto px-2 text-white hover:text-black border-2 font-semibold hover:bg-white  transition duration-300">
            Discover More
          </Button>
        </div>
      </div>
      </>
    )
  }