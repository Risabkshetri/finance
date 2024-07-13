import { Link } from "react-router-dom";
import Button from "../Button";

export default function Introduction() {
    return (
      <>
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Personal Guide by KshetriAI</h2>
        <p className="text-xl">We believe everyone deserves personalized guidance to achieve their dreams.</p>
        <p className="text-lg">
          Founded on the principles of innovation and support, KshetriAI leverages AI to provide customized solutions for personal growth and success.
        </p>
        <div className="space-x-4 mt-6">
          <Button className=" font-semibold text-white hover:text-black hover:bg-blue-100 transition duration-300">
            Start Now
          </Button>
          <Button className="w-auto px-2 text-white hover:text-black border-2 font-semibold hover:bg-white hover:bg-blue-100 transition duration-300">
            Discover More
          </Button>
        </div>
      </div>
      <Link to='/Dashboard' className="bg-red-600 py-2 px-4 rounded-lg">Dashboard</Link>
      <Link to='/Crypto' className="bg-red-600 py-2 px-4 rounded-lg">Crypto</Link>
      </>
    )
  }