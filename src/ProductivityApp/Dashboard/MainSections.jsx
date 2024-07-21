import { Container } from "../index";
import progress from "../../assets/progress.png";
import social from "../../assets/social-media.png";
import { useNavigate } from "react-router-dom";
const MainSections = () => {
const navigate = useNavigate();

const handleProgressClick = () => {
  navigate("/dashboard/progress");
};

const handleSocialClick = () => {
  navigate("/dashboard/social");
};

    return (
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Container>
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">
              Your Productivity Journey
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Keep pushing! You're making great progress.
            </p>
            <div className="mt-4 h-24 md:h-32 bg-gray-200 rounded">
              <img src={progress} alt="" />
            </div>
            <button onClick={handleProgressClick} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              View Detailed Progress
            </button>
          </div>
        </Container>
  
        <Container>
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">
              Social Media Snapshot
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Your recent post performance across platforms.
            </p>
            <div className="mt-4 h-24 md:h-32 bg-gray-200 rounded">
              <img  src={social} alt="" />
            </div>
            <button onClick={handleSocialClick} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Manage Accounts
            </button>
          </div>
        </Container>
      </div>
    );
  };
  
  export default MainSections;